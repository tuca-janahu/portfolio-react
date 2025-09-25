
import FormSection from "../sections/FormSection";

function Contact() {
  return (
  <main className="min-h-dvh bg-white text-neutral-800 dark:bg-neutral-950 dark:text-slate-100">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 pb-2 sm:pb-4 text-center pt-12">
        <h2 className="text-xl sm:text-3xl font-semibold mb-3">Entre em contato!</h2>
        <p className="text-sm sm:text-base text-lime-400" >Preencha o formulário com suas informações</p>
      </div>
      <FormSection />
    </main>
  );
}

export default Contact;