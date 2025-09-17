import { projects } from "../data/projects";
import { SpotlightCard } from "./SpotlightCard";

function CardGrid() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {projects.map((p) => (
        <SpotlightCard key={p.id} className="p-5">
            <div className="flex h-full flex-col">
              <h3 className="text-lg font-medium mb-1">{p.title}</h3>
              <p className="text-sm text-black/70 dark:text-white/70 mb-3">{p.description}</p>
              <div className="mt-auto flex flex-wrap gap-1.5">
                {p.tags.map((t) => (
                  <span key={t} className="text-[11px] px-2 py-0.5 rounded-full bg-black/5 dark:bg-white/10">
                    {t}
                  </span>
                ))}
               
              </div>
               {p.href && (
                  <a
                    href={p.href}
                    target="_blank"
                    className="inline-flex mt-8 items-center justify-center rounded-xl border border-black/10 dark:border-white/10 px-5 py-2.5 text-sm hover:bg-black/5 dark:hover:bg-white/5"
                  >
                    Ver projeto
                  </a>
                )}
            </div>
          </SpotlightCard>
        ))}
      </div>
  );
}

export default CardGrid;