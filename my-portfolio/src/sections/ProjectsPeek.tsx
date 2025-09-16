import { Link } from "react-router";
import { SpotlightCard } from "../components/SpotlightCard";
import { projects } from "../data/projects";

export default function ProjectsPeek() {
  return (
    <section className="mx-auto max-w-6xl px-4 sm:px-6 py-12 sm:py-16" id="projects">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl sm:text-2xl font-semibold">Projetos em destaque</h2>
        <Link to="/projects" className="text-sm text-indigo-600 hover:underline">Ver todos</Link>
      </div>
      <div className="grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.slice(0, 3).map((p) => (
          <SpotlightCard key={p.id} className="p-5">
            <div className="flex h-full flex-col">
              <h3 className="text-base sm:text-lg font-medium mb-1">{p.title}</h3>
              <p className="text-sm text-black/70 dark:text-white/70 line-clamp-3 mb-3">{p.description}</p>
              <div className="mt-auto flex flex-wrap gap-1.5">
                {p.tags.map((t) => (
                  <span key={t} className="text-[11px] px-2 py-0.5 rounded-full bg-black/5 dark:bg-white/10">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </SpotlightCard>
        ))}
      </div>
    </section>
  );
}
