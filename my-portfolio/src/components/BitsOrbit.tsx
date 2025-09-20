import React from "react";

export default function BitsOrbit({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative">
      <div className="pointer-events-none absolute inset-y-0 left-0 w-[2px] bg-gradient-to-b from-lime-400/60 via-lime-400/10 to-transparent" />
      <div className="relative pl-4">{children}</div>
    </div>
  );
}