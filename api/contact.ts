type ContactRequest = {
  method?: string;
  body?: unknown;
};

type ContactResponse = {
  status: (statusCode: number) => ContactResponse;
  json: (body: Record<string, unknown>) => void;
  setHeader: (name: string, value: string) => void;
};

type ContactPayload = {
  name: string;
  email: string;
  subject: string;
  message: string;
  website: string;
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function readText(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

function escapeHtml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function parsePayload(body: unknown): ContactPayload | null {
  if (!body || typeof body !== "object" || Array.isArray(body)) return null;

  const input = body as Record<string, unknown>;
  return {
    name: readText(input.name),
    email: readText(input.email),
    subject: readText(input.subject),
    message: readText(input.message),
    website: readText(input.website),
  };
}

export default async function handler(
  request: ContactRequest,
  response: ContactResponse,
) {
  response.setHeader("Allow", "POST");

  if (request.method !== "POST") {
    return response.status(405).json({ error: "Método não permitido." });
  }

  const payload = parsePayload(request.body);

  if (!payload) {
    return response.status(400).json({ error: "Dados inválidos." });
  }

  // Bots costumam preencher este campo invisível. Respondemos com sucesso para
  // não indicar que o bloqueio foi detectado.
  if (payload.website) {
    return response.status(200).json({ ok: true });
  }

  if (!payload.name || !payload.email || !payload.message) {
    return response
      .status(400)
      .json({ error: "Preencha nome, e-mail e mensagem." });
  }

  if (!EMAIL_PATTERN.test(payload.email)) {
    return response.status(400).json({ error: "Digite um e-mail válido." });
  }

  if (
    payload.name.length > 100 ||
    payload.email.length > 254 ||
    payload.subject.length > 150 ||
    payload.message.length > 5000
  ) {
    return response.status(400).json({ error: "Um ou mais campos excedem o limite permitido." });
  }

  const apiKey = process.env.VITE_RESEND_API_KEY;
  const to = process.env.VITE_RESEND_TO_EMAIL || "arturjanahu@gmail.com";
  const from =
    process.env.VITE_RESEND_FROM_EMAIL || "Portfolio <onboarding@resend.dev>";

  if (!apiKey) {
    console.error("VITE_RESEND_API_KEY não foi configurada.");
    return response
      .status(500)
      .json({ error: "O serviço de contato não está configurado." });
  }

  const safeName = escapeHtml(payload.name);
  const safeEmail = escapeHtml(payload.email);
  const safeSubject = escapeHtml(payload.subject || "Contato pelo portfólio");
  const safeMessage = escapeHtml(payload.message).replaceAll("\n", "<br />");

  try {
    const resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: payload.email,
        subject: `[Portfólio] ${payload.subject || "Nova mensagem"}`,
        html: `
          <h2>Nova mensagem pelo portfólio</h2>
          <p><strong>Nome:</strong> ${safeName}</p>
          <p><strong>E-mail:</strong> ${safeEmail}</p>
          <p><strong>Assunto:</strong> ${safeSubject}</p>
          <p><strong>Mensagem:</strong></p>
          <p>${safeMessage}</p>
        `,
        text: [
          "Nova mensagem pelo portfólio",
          `Nome: ${payload.name}`,
          `E-mail: ${payload.email}`,
          `Assunto: ${payload.subject || "Contato pelo portfólio"}`,
          "",
          payload.message,
        ].join("\n"),
      }),
    });

    if (!resendResponse.ok) {
      const resendError = await resendResponse.text();
      console.error("Erro retornado pelo Resend:", resendResponse.status, resendError);
      return response
        .status(502)
        .json({ error: "Não foi possível enviar a mensagem. Tente novamente." });
    }

    return response.status(200).json({ ok: true });
  } catch (error) {
    console.error("Falha ao chamar o Resend:", error);
    return response
      .status(502)
      .json({ error: "Não foi possível enviar a mensagem. Tente novamente." });
  }
}
