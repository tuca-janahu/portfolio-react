function About() {
  return (
    <main className="mx-auto max-w-3xl px-4 sm:px-6 py-16">
      <h1 className="text-2xl sm:text-3xl font-semibold mb-8">Sobre</h1>
      <p className="text-base text-black/70 dark:text-white/70">
        Sou estudante de Engenharia da Computação no SENAI CIMATEC, apaixonado por tecnologia, desenvolvimento de software e otimização de processos.
        Tenho experiência em projetos de software, automação e liderança de equipes multidisciplinares.
      </p>
      <img className="mt-8 rounded-lg" src="https://midias.correio24horas.com.br/2023/05/18/-1614531.jpg" alt="Senai Cimatec"/>
      <a href="https://www.cimatec.com.br/" target="_blank" className="mt-4 inline-block text-sm text-blue-500 hover:underline">
        Saiba mais sobre o SENAI CIMATEC
      </a>
    </main>
  );
}

export default About;