import { Link } from "react-router";

import CardGrid from "../components/CardGrid";

export default function ProjectsPeek() {
  return (
    <section className="mx-auto max-w-6xl px-4 sm:px-6 py-12 sm:py-16" id="projects">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 gap-3">
        <h2 className="text-xl sm:text-2xl font-semibold">Projetos em destaque</h2>
        <Link to="/projects" className="text-sm text-indigo-600 hover:underline">Ver todos</Link>
      </div>
      <CardGrid limit={3}/>
    </section>
  );
}
