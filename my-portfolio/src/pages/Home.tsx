  import Form from "../components/Form";
  import Hero from "../sections/Hero";
  import ProjectsPeek from "../sections/ProjectsPeek";
  import Cubes from "../components/Cubes"; 


  export default function Home() {
    return (
      <main className="min-h-dvh bg-white text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100">
        <Hero />
        <ProjectsPeek />
        {/* âncora de contato */}
        <section
          id="contact-section"
          className="mx-auto max-w-6xl px-4 sm:px-6 py-12 sm:py-16"
        >
          <h2 className="text-xl sm:text-2xl font-semibold mb-3">Contato</h2>
          <div className="grid gap-8 lg:grid-cols-2 items-start">
            <div>
              <Form />
            </div>

   
                <div className="aspect-square w-fit h-fit">           {/* centraliza o Cubes */}
                  <Cubes
                    gridSize={8}          // mais células
                    cellGap={20}            // espaçamento entre cubos
                    maxAngle={60}
                    cubeSize={30}          // tamanho do cubo
                    radius={4}
                    borderStyle="2px dashed #a3e635" // lime-400
                    faceColor="#1a1a1a"
                    rippleColor="#a3e635"
                    rippleSpeed={3.0}
                    autoAnimate
                    rippleOnClick
                  />
                </div>
         
          </div>
          
        </section>
      </main>
    );
  }
