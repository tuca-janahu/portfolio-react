import Form from "../components/Form";
import Hero from "../sections/Hero";
import ProjectsPeek from "../sections/ProjectsPeek";
import { BitsOrbit } from "../components/BitsOrbit";

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
        <div className="grid gap-8 lg:grid-cols-2 items-center">
          <div className="order-2 lg:order-1">
            <Form />
          </div>
          <div className="order-1 lg:order-2">
            <BitsOrbit />
          </div>
        </div>
        
      </section>
    </main>
  );
}
