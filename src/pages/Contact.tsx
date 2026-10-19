
import FormSection from "../sections/FormSection";

function Contact() {
  return (
  <main className="min-h-dvh bg-slate-100 text-neutral-800 dark:bg-neutral-950 dark:text-neutral-100">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 pb-2 sm:pb-4 text-center pt-12">
        <h2 className="text-xl sm:text-3xl font-semibold mb-3">Entre em contato!</h2>
        <div className="md:flex md:justify-between items-center mt-6 gap-4 md:w-lg mx-auto">
          <p className="text-sm sm:text-thin p-1 px-3 rounded-full bg-indigo-200 text-indigo-600 dark:text-lime-300 dark:bg-lime-900/80 dark:text-gray-300">Email: arturjanahu@gmail.com</p>
          <p className="mt-2 md:mt-0 text-sm sm:text-thin p-1 px-3 rounded-full bg-indigo-200 text-indigo-600 dark:text-lime-300 dark:bg-lime-900/80 dark:text-gray-300">Telefone: +55 (71) 9 9395-5005</p>  
        </div>      
                <p className="text-sm sm:text-base text-indigo-600 dark:text-lime-400 mt-8" >Ou preencha o formulário com suas informações para um atendimento mais imediato:</p>

      </div>
      <FormSection />
    </main>
  );
}

export default Contact;