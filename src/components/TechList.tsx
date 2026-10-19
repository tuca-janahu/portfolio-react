import { techs } from "../data/tech";

export default function TechList() {
  const list = techs; // sem limite: mostra todas

  return (
    <section
      className="mx-auto max-w-6xl px-4 sm:px-6 py-12 sm:py-16 text-center"
      id="techs"
    >
      <h2 className="text-xl sm:text-3xl font-semibold mb-3">Tecnologias</h2>
      <p className="text-sm sm:text-base text-indigo-600 dark:text-lime-400 mb-8 sm:mb-12">
        Aqui estão algumas das tecnologias que eu uso:
      </p>
      <div className="justify-center flex flex-wrap  gap-6">
        {list.map((t) => (
          <a
            key={t.id}
            href={t.url || "#"}
            target={t.url ? "_blank" : undefined}
            rel={t.url ? "noopener noreferrer" : undefined}
            className="block items-center rounded-lg py-4 px-8 w-34 text-center
                       border border-indigo-500/10 dark:border-white/10
                       bg-indigo-600/5 dark:bg-white/10
                       hover:bg-indigo-600/10 dark:hover:bg-white/15 transition-colors duration-300
                       focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-lime-400 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-black"
            aria-label={t.url ? `Abrir docs de ${t.name}` : t.name}
          >
            <t.icon className="mx-auto mb-4 text-indigo-700 dark:text-white" size={40} />
            <span className="font-medium text-indigo-900 dark:text-white">{t.name}</span>
          </a>
        ))}
      </div>
    </section>
  );
}
