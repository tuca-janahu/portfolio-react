import { useEffect, useId, useRef, useState } from "react";

function Form() {
  const nameId = useId();
  const emailId = useId();
  const subjectId = useId();
  const messageId = useId();

  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const iframeRef = useRef<HTMLIFrameElement | null>(null);
  const formRef = useRef<HTMLFormElement | null>(null);
  const timeoutRef = useRef<number | null>(null);

const successHash = "#staticforms-ok";
const successURL =
  typeof window !== "undefined"
    ? new URL(successHash, window.location.href).toString()
    : "";

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setSent(false);

    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
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

    // timeout de segurança (20s)
    if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
    timeoutRef.current = window.setTimeout(() => {
      setLoading(false);
      setError("Falha ao enviar. Tente novamente.");
    }, 20000);

    // envia nativamente pro endpoint dentro do IFRAME
    form.submit();
  }

  function handleIframeLoad() {
  // depois do submit, qualquer load no iframe = considerar sucesso
  if (!loading) return;          // só depois que você deu submit
  if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
  setLoading(false);
  setSent(true);
  setError(null);
  formRef.current?.reset();
}

 useEffect(() => {
  function onMessage(e: MessageEvent) {
    if (e.origin !== window.location.origin) return; // segurança
    if (e.data?.type === 'staticforms:success') {
      if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
      setLoading(false);
      setSent(true);
      setError(null);
      formRef.current?.reset();
    }
  }
  window.addEventListener('message', onMessage);
  return () => window.removeEventListener('message', onMessage);
}, []);


  return (
    <>
      <iframe
        onLoad={handleIframeLoad}
        name="staticforms-target"
        ref={iframeRef}
        style={{ display: "none" }}
        title="staticforms-transport"
      />
      <form
        ref={formRef}
        onSubmit={onSubmit}
        action="https://api.staticforms.xyz/submit"
        target="staticforms-target"
        method="POST"
        className="space-y-4"
      >
        <input
          type="hidden"
          name="apiKey"
          value={import.meta.env.VITE_STATICFORMS_API}
        />

        <input type="hidden" name="redirectTo" value={successURL} />

        <div>
          <label
            htmlFor={nameId}
            className="block text-sm font-medium text-neutral-700 dark:text-neutral-200"
          >
            Nome
          </label>
          <input
            id={nameId}
            name="name"
            type="text"
            required
            className="mt-1 w-full rounded-xl border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-lime-400"
          />
        </div>

        <div>
          <label
            htmlFor={emailId}
            className="block text-sm font-medium text-neutral-700 dark:text-neutral-200"
          >
            E-mail
          </label>
          <input
            id={emailId}
            name="email"
            type="email"
            required
            className="mt-1 w-full rounded-xl border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-lime-400"
          />
        </div>

        <div>
          <label
            htmlFor={subjectId}
            className="block text-sm font-medium text-neutral-700 dark:text-neutral-200"
          >
            Assunto (opcional)
          </label>
          <input
            id={subjectId}
            name="subject"
            type="text"
            className="mt-1 w-full rounded-xl border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-lime-400"
          />
        </div>

        <div>
          <label
            htmlFor={messageId}
            className="block text-sm font-medium text-neutral-700 dark:text-neutral-200"
          >
            Mensagem
          </label>
          <textarea
            id={messageId}
            name="message"
            rows={5}
            required
            className="mt-1 w-full resize-y rounded-xl border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-lime-400"
          />
        </div>

        {error && <p className="text-sm text-rose-500">{error}</p>}
        {sent && (
          <p className="text-sm text-emerald-500">
            Mensagem enviada! Obrigado pelo contato.
          </p>
        )}

        <div className="pt-2">
          <button
            type="submit"
            disabled={loading}
            className="inline-flex items-center justify-center rounded-xl dark:bg-lime-400 bg-indigo-600 text-white dark:text-neutral-950 px-5 py-2.5 text-sm font-medium  hover:bg-neutral-950 dark:hover:bg-neutral-100 cursor-pointer transition-colors disabled:opacity-60"
          >
            {loading ? "Enviando…" : "Enviar"}
          </button>
        </div>
      </form>
    </>
  );
}

export default Form;
