import { projects } from "../data/projects";
import { SpotlightCard } from "../components/SpotlightCard";

function Projects() {
  return (
    <main className="mx-auto max-w-6xl px-4 sm:px-6 py-16">
      <h1 className="text-2xl sm:text-3xl font-semibold mb-8">Projetos</h1>
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
            </div>
          </SpotlightCard>
        ))}
      </div>
    </main>
  );
}


export default Projects;