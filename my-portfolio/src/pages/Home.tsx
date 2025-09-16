import Hero from "../sections/Hero";
import ProjectsPeek from "../sections/ProjectsPeek";

export default function Home() {
  return (
    <main className="min-h-dvh bg-white text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100">
      <Hero />
      <ProjectsPeek />
      {/* âncora de contato */}
      <section
        id="contact-section"
        className="mx-auto max-w-6xl px-4 sm:px-6 py-16"
      >
        <h2 className="text-xl sm:text-2xl font-semibold mb-3">Contato</h2>
        <p className="text-sm text-black/70 dark:text-white/70 max-w-2xl">
          Para convites e colaborações:{" "}
          <a className="underline" href="mailto:arturjanahu@gmail.com">
            arturjanahu@gmail.com
          </a>
        </p>
      </section>
    </main>
  );
}
