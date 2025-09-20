import { useId, useState } from "react";


function Form () {
  const nameId = useId();
  const emailId = useId();
  const subjectId = useId();
  const messageId = useId();

  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);

    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    // const subject = String(data.get("subject") || "").trim();
    const message = String(data.get("message") || "").trim();

    if (!name || !email || !message) {
      setError("Preencha nome, e-mail e mensagem.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Digite um e-mail válido.");
      return;
    }

    setLoading(true);
    try {
      // Stub: simula envio. Troque por POST p/ sua API/serviço (Formspree, Resend, etc).
      await new Promise((r) => setTimeout(r, 800));
      setSent(true);
      form.reset();
    } catch {
      setError("Falha ao enviar. Tente novamente.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div>
        <label htmlFor={nameId} className="block text-sm font-medium text-neutral-700 dark:text-neutral-200">
          Nome
        </label>
        <input
          id={nameId}
          name="name"
          type="text"
          required
          className="mt-1 w-full rounded-xl border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-lime-400"
        />
      </div>

      <div>
        <label htmlFor={emailId} className="block text-sm font-medium text-neutral-700 dark:text-neutral-200">
          E-mail
        </label>
        <input
          id={emailId}
          name="email"
          type="email"
          required
          className="mt-1 w-full rounded-xl border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-lime-400"
        />
      </div>

      <div>
        <label htmlFor={subjectId} className="block text-sm font-medium text-neutral-700 dark:text-neutral-200">
          Assunto (opcional)
        </label>
        <input
          id={subjectId}
          name="subject"
          type="text"
          className="mt-1 w-full rounded-xl border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-lime-400"
        />
      </div>

      <div>
        <label htmlFor={messageId} className="block text-sm font-medium text-neutral-700 dark:text-neutral-200">
          Mensagem
        </label>
        <textarea
          id={messageId}
          name="message"
          rows={5}
          required
          className="mt-1 w-full resize-y rounded-xl border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-lime-400"
        />
      </div>

      {error && <p className="text-sm text-rose-500">{error}</p>}
      {sent && <p className="text-sm text-emerald-500">Mensagem enviada! Obrigado pelo contato.</p>}

      <div className="pt-2">
        <button
          type="submit"
          disabled={loading}
          className="inline-flex items-center justify-center rounded-xl bg-lime-400 text-neutral-950 px-5 py-2.5 text-sm font-medium shadow hover:bg-neutral-100 cursor-pointer transition-colors disabled:opacity-60"
        >
          {loading ? "Enviando…" : "Enviar"}
        </button>
      </div>
    </form>
  );
}

export default Form;