// src/sections/TalksList.tsx
import { talks } from "../data/talks";
import { SpotlightCard } from "../components/SpotlightCard";

export default function TalksList() {
  return (
    <section className="mx-auto max-w-6xl px-4 sm:px-6 py-12 sm:py-16">
      <h2 className="text-xl sm:text-2xl font-semibold mb-6">Publicações</h2>

      <div className="grid gap-4 sm:gap-6">
        {talks.map((t) => (
          <SpotlightCard key={t.id} className="p-5">
            <div className="flex flex-col gap-2">
              <div className="flex items-start justify-between gap-6">
                <div>
                  <h3 className="text-base sm:text-lg font-medium">{t.title}</h3>
                  <p className="text-sm text-black/70 dark:text-white/70">
                    {t.venue} · {t.year}
                  </p>
                  {t.authors && (
                    <p className="text-xs text-black/60 dark:text-white/60 mt-1">
                      {t.authors}
                    </p>
                  )}
                </div>
                {/* chips de tags */}
                {t.tags && (
                  <div className="hidden sm:flex flex-wrap gap-1.5">
                    {t.tags.map((tag) => (
                      <span key={tag} className="text-[11px] px-2 py-0.5 rounded-full bg-black/5 dark:bg-white/10">
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {t.abstract && (
                <p className="text-sm sm:w-2xl py-4 text-black/70 dark:text-white/70">
                  {t.abstract}
                </p>
              )}

              {/* links de ação */}
              {t.links && (
                <div className="mt-2 flex flex-wrap gap-2">
                  {t.links.pdf && <LinkChip href={t.links.pdf} label="PDF" />}
                  {t.links.slides && <LinkChip href={t.links.slides} label="Slides" />}
                  {t.links.prototype && <LinkChip href={t.links.prototype} label="Protótipo" />}
                </div>
              )}
            </div>
          </SpotlightCard>
        ))}
      </div>
    </section>
  );
}

function LinkChip({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center justify-center rounded-lg
                 border border-black/10 dark:border-white/10
                 px-3 py-1.5 text-xs hover:bg-black/5 dark:hover:bg-white/5"
    >
      {label}
    </a>
  );
}
