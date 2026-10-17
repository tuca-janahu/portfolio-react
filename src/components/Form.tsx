import { useId, useState } from "react";

type SubmitStatus = "idle" | "submitting" | "success";

function Form() {
  const nameId = useId();
  const emailId = useId();
  const subjectId = useId();
  const messageId = useId();
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);

    const form = event.currentTarget;
    const formData = new FormData(form);
    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const subject = String(formData.get("subject") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();
    const website = String(formData.get("website") ?? "").trim();

    if (!name || !email || !message) {
      setError("Preencha nome, e-mail e mensagem.");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Digite um e-mail válido.");
      return;
    }

    setStatus("submitting");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, subject, message, website }),
      });

      const result = (await response.json().catch(() => null)) as
        | { error?: string }
        | null;

      if (!response.ok) {
        throw new Error(result?.error || "Não foi possível enviar a mensagem.");
      }

      form.reset();
      setStatus("success");
    } catch (submitError) {
      setStatus("idle");
      setError(
        submitError instanceof Error
          ? submitError.message
          : "Não foi possível enviar a mensagem. Tente novamente.",
      );
    }
  }

  if (status === "success") {
    return (
      <div className="h-100" role="status">
        <p className="text-sm text-emerald-500">
          Mensagem enviada! Obrigado pelo contato.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-4 text-sm font-medium text-indigo-600 underline underline-offset-4 dark:text-lime-400"
        >
          Enviar outra mensagem
        </button>
      </div>
    );
  }

  const isSubmitting = status === "submitting";

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div className="absolute -left-[9999px]" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input
          id="website"
          type="text"
          name="website"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div>
        <label htmlFor={nameId} className="block text-sm font-medium text-neutral-700 dark:text-neutral-200">
          Nome
        </label>
        <input
          id={nameId}
          name="name"
          type="text"
          required
          maxLength={100}
          autoComplete="name"
          disabled={isSubmitting}
          className="mt-1 w-full rounded-xl border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-lime-400 disabled:opacity-60"
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
          maxLength={254}
          autoComplete="email"
          disabled={isSubmitting}
          className="mt-1 w-full rounded-xl border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-lime-400 disabled:opacity-60"
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
          maxLength={150}
          disabled={isSubmitting}
          className="mt-1 w-full rounded-xl border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-lime-400 disabled:opacity-60"
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
          maxLength={5000}
          disabled={isSubmitting}
          className="mt-1 w-full resize-y rounded-xl border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-lime-400 disabled:opacity-60"
        />
      </div>

      {error && (
        <p className="text-sm text-rose-500" role="alert">
          {error}
        </p>
      )}

      <div className="pt-2">
        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex cursor-pointer items-center justify-center rounded-xl bg-indigo-600 dark:bg-lime-400 text-white dark:text-neutral-950 px-5 py-2.5 text-sm font-medium hover:bg-neutral-950 dark:hover:bg-neutral-100 transition-colors disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isSubmitting ? "Enviando…" : "Enviar"}
        </button>
      </div>
    </form>
  );
}

export default Form;
