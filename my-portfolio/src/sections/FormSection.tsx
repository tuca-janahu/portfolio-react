import Form from "../components/Form";
import Cubes from "../components/Cubes";

export default function FormSection() {
    return(
        <section
          id="contact-section"
          className="mx-auto max-w-6xl px-4 sm:px-6 pb-12 sm:pb-16"
        >
         
          <div className="grid gap-8 lg:grid-cols-2 items-start">
            <div>
              <Form />
            </div>

   
                <div className="aspect-square w-fit h-fit hidden sm:flex not-dark:hidden" >           {/* centraliza o Cubes */}
                  <Cubes
                    gridSize={8}          // mais células
                    cellGap={20}            // espaçamento entre cubos
                    maxAngle={60}
                    cubeSize={30}          // tamanho do cubo
                    radius={4}
                    borderStyle="2px dashed #a3e635" // lime-400
                    faceColor="#1f1f1f"
                    rippleColor="#a3e635"
                    rippleSpeed={3.0}
                    autoAnimate
                    rippleOnClick
                  />
                </div>

                <div className="aspect-square w-fit h-fit hidden sm:flex dark:hidden" >           {/* centraliza o Cubes */}
                  <Cubes
                    gridSize={8}          // mais células
                    cellGap={20}            // espaçamento entre cubos
                    maxAngle={60}
                    cubeSize={30}          // tamanho do cubo
                    radius={4}
                    borderStyle="2px dashed #4423b0" // lime-400
                    faceColor="#c4b3ff"
                    rippleColor="#312c96"
                    rippleSpeed={3.0}
                    autoAnimate
                    rippleOnClick
                  />
                </div>
         
          </div>
          
        </section>
    )
}