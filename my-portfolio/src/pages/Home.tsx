import TechList from "@/components/TechList";
import FormSection from "../sections/FormSection";
import Hero from "../sections/Hero";
import ProjectsPeek from "../sections/ProjectsPeek";

export default function Home() {
  return (
    <main className="min-h-dvh bg-white text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100">
      <Hero />
      <ProjectsPeek />
      {/* âncora de contato */}

          <TechList />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 pb-2 sm:pb-4 ">
        <h2 className="text-xl sm:text-2xl font-semibold mb-3">Contato</h2>
      </div>

      <FormSection />
    </main>
  );
}
