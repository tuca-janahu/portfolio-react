import { useId } from "react";

export function BitsOrbit() {
  useId(); // mantém estável se quiser ids no futuro
  return (
    <div className="relative mx-auto aspect-square w-full max-w-sm">
      {/* Núcleo */}
      <div className="absolute inset-0 m-auto h-28 w-28 rounded-full bg-lime-400/20 ring-1 ring-lime-400/40 flex items-center justify-center">
        <span className="text-sm font-semibold text-lime-500">Contato</span>
      </div>

      {/* Órbita 1 */}
      <div className="absolute inset-0 animate-[orbit_12s_linear_infinite]">
        <Badge text="Email" className="left-1/2 -translate-x-1/2 -top-2" />
        <Badge text="GitHub" className="right-0 top-1/2 -translate-y-1/2" />
        <Badge text="LinkedIn" className="left-0 top-1/2 -translate-y-1/2" />
        <Badge text="WhatsApp" className="left-1/2 -translate-x-1/2 -bottom-2" />
      </div>

      {/* Órbita 2 (contra-giro) */}
      <div className="absolute inset-6 animate-[orbit-rev_16s_linear_infinite]">
        <Dot className="left-1/2 -translate-x-1/2 -top-2 bg-lime-400" />
        <Dot className="right-0 top-1/2 -translate-y-1/2 bg-cyan-500" />
        <Dot className="left-0 top-1/2 -translate-y-1/2 bg-violet-600" />
        <Dot className="left-1/2 -translate-x-1/2 -bottom-2 bg-emerald-500" />
      </div>

      {/* Keyframes locais */}
      <style>{`
        @keyframes orbit{ from{ transform: rotate(0deg);} to{ transform: rotate(360deg);} }
        @keyframes orbit-rev{ from{ transform: rotate(360deg);} to{ transform: rotate(0deg);} }
      `}</style>
    </div>
  );
}

function Badge({ text, className = "" }: { text: string; className?: string }) {
  return (
    <div
      className={`absolute select-none rounded-full border border-slate-200/60 dark:border-slate-700/60
                  bg-white/60 dark:bg-slate-900/60 px-2.5 py-1 text-[11px] font-medium
                  text-slate-700 dark:text-slate-200 shadow ${className}`}
    >
      {text}
    </div>
  );
}

function Dot({ className = "" }: { className?: string }) {
  return <div className={`absolute h-2 w-2 rounded-full shadow ${className}`} />;
}
