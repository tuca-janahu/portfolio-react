import { Link } from "react-router";

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden">
      {/* Fundo com grid + spotlight central */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(50%_60%_at_50%_0%,rgba(99,102,241,0.15),transparent_60%)] dark:bg-[radial-gradient(50%_60%_at_50%_0%,rgba(129,140,248,0.2),transparent_60%)]" />
        <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent)] opacity-50">
          <svg
            className="h-full w-full text-black/5 dark:text-white/5"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <pattern
                id="grid"
                width="40"
                height="40"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 40 0 L 0 0 0 40"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16 sm:py-24 text-center">
        <p className="inline-flex items-center gap-2 rounded-full border border-black/10 dark:border-white/10 px-3 py-1 text-xs sm:text-sm mb-6">
          <span className="inline-block h-2 w-2 rounded-full bg-green-500" />{" "}
          Disponível para colaborações
        </p>
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-semibold tracking-tight">
          Construindo soluções em{" "}
          <span className="text-cyan-500">tecnologia</span> &{" "}
          <span className="text-lime-400">desenvolvimento</span>
        </h1>
        <p className="mt-4 text-base sm:text-lg text-black/70 dark:text-white/70 max-w-2xl mx-auto">
          Desenvolvedor fullstack. Integro engenharia, análise de dados e automação de processos
          para entregar sistemas e produtos digitais de alto
          impacto.
        </p>
        <div className="mt-8 flex items-center justify-center gap-3">
          <Link
            to="/projects"
            className="inline-flex items-center justify-center rounded-xl bg-black text-white dark:bg-white dark:text-black px-5 py-2.5 text-sm font-medium shadow hover:opacity-90"
          >
            Ver projetos
          </Link>
          <a
            href="/about"
            className="inline-flex items-center justify-center rounded-xl border border-black/10 dark:border-white/10 px-5 py-2.5 text-sm hover:bg-black/5 dark:hover:bg-white/5"
          >
            Saber mais
          </a>
        </div>
      </div>
    </section>
  );
}
