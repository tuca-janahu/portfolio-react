function About() {
  function currentAge() {
    const birthdate = new Date("2005-04-12");
    const today = new Date();
    const age = today.getFullYear() - birthdate.getFullYear();
    const monthDiff = today.getMonth() - birthdate.getMonth();
    if (
      monthDiff < 0 ||
      (monthDiff === 0 && today.getDate() < birthdate.getDate())
    ) {
      return age - 1;
    }
    return age;
  }

  return (
    <main className="mx-auto max-w-4xl px-4 sm:px-6 py-12 sm:py-16">
      <h1 className="text-2xl sm:text-3xl font-semibold mb-6">Sobre</h1>
      <div className="gap-6 flex flex-col text-base text-black/70 dark:text-white/70">
        <p>
          Me chamo Artur Janahú, tenho {currentAge()} anos e sou apaixonado por
          tecnologia.
        </p>
        <p>
          Sou estudante de Engenharia da Computação no SENAI CIMATEC, onde adquiri conhecimentos em
          desenvolvimento de software e otimização de processos.
          Tenho experiência em projetos de software, automação e liderança de
          equipes multidisciplinares.
        </p>
      </div>
      <div className="my-6">
        <img
        className="mt-6 rounded-lg w-full max-w-md"
        src="https://midias.correio24horas.com.br/2023/05/18/-1614531.jpg"
        alt="Senai Cimatec"
      />
      <a
        href="https://www.cimatec.com.br/"
        target="_blank"
        className="mt-4 inline-block text-sm text-blue-700 dark:text-blue-500 hover:underline"
      >
        Saiba mais sobre o SENAI CIMATEC
      </a>
      </div>

      <h2 className="text-xl sm:text-2xl font-semibold mt-10 mb-4">Experiências</h2>
      
        <h3 className="font-semibold text-indigo-600 dark:text-lime-400">Estágio em Desenvolvimento de Software</h3>
        <div className="gap-4 flex flex-col text-base text-black/70 dark:text-white/70 mb-10">
        <p>
          Empresa: Urca Global Fund | Período: Abr 2024 - Atual
        </p>
        <ul className="list-disc list-outside ml-6">
          <li>Prototipação de Sistemas de Gerenciamento com <span className="font-bold">Figma</span>.</li>
          <li>Programação e automação de processos com <span className="font-bold">Python</span> e <span className="font-bold">VBA</span>.</li>
          <li>Participação em revisões de código e testes automatizados para garantir a qualidade do software.</li>
        </ul>
      </div>
      <h3 className="font-semibold text-indigo-600 dark:text-lime-400 ">Projetista do Núcleo de Computação</h3>
        <div className="gap-4 flex flex-col text-base text-black/70 dark:text-white/70 mb-10">
        <p>
          Empresa: Cimatec Jr, a Empresa Júnior do SENAI CIMATEC | Período: Abr 2024 - Set 2025
        </p>
        <ul className="list-disc list-outside ml-6">
          <li>Desenvolvimento de funcionalidades para aplicações web usando <span className="font-bold">React</span> e <span className="font-bold">Node.js</span>.</li>
          <li>Implementação e prática em Metodologia <span className="font-bold">Scrum</span>.</li>
          <li>Criação de websites e aplicações web responsivas.</li>
        </ul>
      </div>
    </main>
  );
}

export default About;
