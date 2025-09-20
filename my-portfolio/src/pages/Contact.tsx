import Form from "../components/Form";

function Contact() {
  return (
   <main className="min-h-dvh bg-white text-neutral-800 dark:bg-neutral-950 dark:text-slate-100">
      <section className="mx-auto max-w-6xl px-4 sm:px-6 py-12 sm:py-16">
        <div className="mb-8 text-center">
          <h1 className="text-2xl sm:text-3xl font-semibold">Vamos conversar</h1>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
            Preencha o formulário ou use seus canais preferidos.
          </p>
        </div>

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

export default Contact;