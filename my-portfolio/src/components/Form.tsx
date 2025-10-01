import { useId, useState } from "react";
import { useForm, ValidationError } from "@formspree/react";

function Form() {
  const nameId = useId();
  const emailId = useId();
  const subjectId = useId();
  const messageId = useId();

  // ID do form (do .env). O hook do Formspree faz o POST pra você.
  const formId = import.meta.env.VITE_FORMSPREE_FORM_ID as string;
  const [state, handleSubmit] = useForm(formId);

  // Erros/validações locais (antes de enviar)
  const [error, setError] = useState<string | null>(null);

  // Envelopa o handleSubmit para fazer suas validações de UX
  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);

    const fd = new FormData(e.currentTarget);
    const name = String(fd.get("name") || "").trim();
    const email = String(fd.get("email") || "").trim();
    const message = String(fd.get("message") || "").trim();

    if (!name || !email || !message) {
      setError("Preencha nome, e-mail e mensagem.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Digite um e-mail válido.");
      return;
    }

    // passa o evento original pro handler do Formspree
    // (ele vai fazer o POST e atualizar `state`)
    handleSubmit(e);
  }

  // Sucesso (o próprio hook dá o estado)
  if (state.succeeded) {
    return (
      <p className="text-sm text-emerald-500 h-100">
        Mensagem enviada! Obrigado pelo contato.
      </p>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      {/* Honeypot anti-spam (opcional) */}
      <input
        type="text"
        name="_gotcha"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
      />

      <div>
        <label htmlFor={nameId} className="block text-sm font-medium text-neutral-700 dark:text-neutral-200">
          Nome
        </label>
        <input
          id={nameId}
          name="name"
          type="text"
          required
          className="mt-1 w-full rounded-xl border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-lime-400"
        />
        {/* Exemplo: erro do servidor para 'name' (se quiser exibir) */}
        <ValidationError prefix="Nome" field="name" errors={state.errors} />
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
          className="mt-1 w-full rounded-xl border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-lime-400"
        />
        <ValidationError prefix="E-mail" field="email" errors={state.errors} />
      </div>

      <div>
        <label htmlFor={subjectId} className="block text-sm font-medium text-neutral-700 dark:text-neutral-200">
          Assunto (opcional)
        </label>
        <input
          id={subjectId}
          name="subject"
          type="text"
          className="mt-1 w-full rounded-xl border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-lime-400"
        />
        <ValidationError prefix="Assunto" field="subject" errors={state.errors} />
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
          className="mt-1 w-full resize-y rounded-xl border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-lime-400"
        />
        <ValidationError prefix="Mensagem" field="message" errors={state.errors} />
      </div>

      {/* Erro de UX (validação local) */}
      {error && <p className="text-sm text-rose-500">{error}</p>}

      {/* Erros de servidor não associados a um campo */}
      <ValidationError errors={state.errors} />

      <div className="pt-2">
        <button
          type="submit"
          disabled={state.submitting}
          className="inline-flex cursor-pointer items-center justify-center rounded-xl bg-indigo-600 dark:bg-lime-400 text-white dark:text-neutral-950 px-5 py-2.5 text-sm font-medium hover:bg-neutral-950 dark:hover:bg-neutral-100 transition-colors disabled:opacity-60"
        >
          {state.submitting ? "Enviando…" : "Enviar"}
        </button>
      </div>
    </form>
  );
}

export default Form;
