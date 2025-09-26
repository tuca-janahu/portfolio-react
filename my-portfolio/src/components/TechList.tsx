import { techs } from "../data/tech";

export default function TechList() {
  const list = techs; // sem limite: mostra todas

  return (
    <section
      className="mx-auto max-w-6xl px-4 sm:px-6 py-12 sm:py-16 text-center"
      id="techs"
    >
      <h2 className="text-xl sm:text-3xl font-semibold mb-3">Tecnologias</h2>
      <p className="text-sm sm:text-base text-lime-400 mb-8 sm:mb-12">
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
                       border border-black/10 dark:border-white/10
                       bg-black/5 dark:bg-white/10
                       hover:bg-black/10 dark:hover:bg-white/15"
            aria-label={t.url ? `Abrir docs de ${t.name}` : t.name}
          >
            <t.icon className="mb-4 mx-auto" size={40} />
            <span className="font-medium">{t.name}</span>
          </a>
        ))}
      </div>
    </section>
  );
}
