import { useEffect, useRef, useState } from "react";
import { FaGithub } from "react-icons/fa";

import { projects } from "../data/projects";
import type { Project } from "../data/projects";
import { SpotlightCard } from "./SpotlightCard";

type Props = {
  limit?: number;         // se definido, corta a lista
  title?: string;         // opcional, para reutilizar no /projects
  showHeaderLink?: boolean; // mostra "Ver todos" só quando for um peek
};

type RepositoryButtonProps = Pick<Project, "title" | "type" | "repositories">;

function RepositoryButton({ title, type, repositories }: RepositoryButtonProps) {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    const closeMenu = (event: MouseEvent) => {
      if (!menuRef.current?.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    document.addEventListener("mousedown", closeMenu);
    document.addEventListener("keydown", closeOnEscape);

    return () => {
      document.removeEventListener("mousedown", closeMenu);
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, [isOpen]);

  const buttonClasses =
    "inline-flex w-full shrink-0 items-center justify-center rounded-xl border border-black/10 p-3 text-lg transition-colors hover:bg-indigo-600/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 dark:border-white/10 dark:hover:bg-white/5";

  if (type === "frontend" || !repositories.backend) {
    return (
      <a
        href={repositories.frontend}
        target="_blank"
        rel="noreferrer"
        className={buttonClasses}
        aria-label={`Ver repositório de ${title} no GitHub`}
        title="Ver repositório no GitHub"
      >
        <FaGithub aria-hidden="true" />
      </a>
    );
  }

  return (
    <div ref={menuRef} className="group/repository relative">
      <button
        type="button"
        className={buttonClasses}
        aria-label={`Ver repositórios de ${title} no GitHub`}
        aria-haspopup="menu"
        aria-expanded={isOpen}
        onClick={() => setIsOpen((open) => !open)}
        title="Ver repositórios no GitHub"
      >
        <FaGithub aria-hidden="true" />
      </button>

      <div
        role="menu"
        className={`absolute bottom-full right-0 z-20 min-w-40 origin-bottom-right pb-2 transition duration-150 ${
          isOpen
            ? "visible scale-100 opacity-100"
            : "invisible scale-95 opacity-0 group-hover/repository:visible group-hover/repository:scale-100 group-hover/repository:opacity-100"
        }`}
      >
        <div className="rounded-xl border border-black/10 bg-white p-1.5 shadow-xl dark:border-white/10 dark:bg-neutral-900">
          <a
            role="menuitem"
            href={repositories.frontend}
            target="_blank"
            rel="noreferrer"
            className="block rounded-lg px-3 py-2 text-sm hover:bg-indigo-600/5 focus:bg-indigo-600/5 focus:outline-none dark:hover:bg-white/10 dark:focus:bg-white/10"
          >
            Repositório frontend
          </a>
          <a
            role="menuitem"
            href={repositories.backend}
            target="_blank"
            rel="noreferrer"
            className="block rounded-lg px-3 py-2 text-sm hover:bg-indigo-600/5 focus:bg-indigo-600/5 focus:outline-none dark:hover:bg-white/10 dark:focus:bg-white/10"
          >
            Repositório backend
          </a>
        </div>
      </div>
    </div>
  );
}

function CardGrid({
  limit,
}: Props) {
  const list = typeof limit === "number" ? projects.slice(0, limit) : projects;

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {list.map((p) => (
        <SpotlightCard key={p.id} className="p-4 sm:p-5">
          <div className="flex h-full flex-col">
            <div className="mb-1 flex items-start justify-between gap-3">
              <h3 className="text-lg font-medium">{p.title}</h3>
              <span
                className={`shrink-0 rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide ${
                  p.type === "fullstack"
                    ? "bg-indigo-100 text-indigo-700 dark:bg-indigo-500/20 dark:text-indigo-300"
                    : "bg-lime-100 text-lime-700 dark:bg-lime-400/15 dark:text-lime-300"
                }`}
              >
                {p.type === "fullstack" ? "Fullstack" : "Frontend"}
              </span>
            </div>
            <p className="text-sm text-black/70 dark:text-white/70 mb-3">{p.description}</p>
            <div className="mt-auto flex flex-wrap gap-1.5">
              {p.highlights.map((highlight) => (
                <span key={highlight} className="text-[11px] px-2 py-0.5 rounded-full bg-indigo-600/5 dark:bg-white/10">
                  {highlight}
                </span>
              ))}
            </div>

            <div className="mt-6 grid grid-cols-6 items-center gap-2 sm:mt-8">
              {p.href && (
                <a
                  href={p.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex col-span-5 min-h-[42px] flex-1 items-center justify-center rounded-xl border border-indigo-500/10 px-5 py-2.5 text-sm hover:bg-indigo-600/5 dark:border-white/10 dark:hover:bg-white/5 sm:flex-none"
                >
                  Ver projeto
                </a>
              )}
              <RepositoryButton
                title={p.title}
                type={p.type}
                repositories={p.repositories}
              />
            </div>
          </div>
        </SpotlightCard>
      ))}
    </div>
  );
}

export default CardGrid;
