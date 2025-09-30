import { useRef, type ReactNode } from "react";

export function SpotlightCard({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--x", `${e.clientX - r.left}px`);
    el.style.setProperty("--y", `${e.clientY - r.top}px`);
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      className={`group relative rounded-2xl border border-black/10 dark:border-white/10 bg-neutral-100/50 dark:bg-neutral-900/50 overflow-hidden ${className}`}
    >
      {/* halo */}
     <div
  className="
    pointer-events-none absolute -inset-px hidden dark:block
    opacity-0 dark:group-hover:opacity-100 transition-opacity duration-300
  "
  style={{
    // pode manter indigo ou trocar por lime-400 se preferir
    background:
      "radial-gradient(160px circle at var(--x) var(--y), rgba(99,102,241,0.25), transparent 60%)",
  }}
/>

      {/* brilho da borda com variação por tema */}
      <div
        aria-hidden
        className="
    pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-transparent
    dark:group-hover:ring-indigo-400/40 group-hover:ring-neutral-800/40
    
  "
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
