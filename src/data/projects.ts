export type Project = {
  id: string;
  title: string;
  type: "fullstack" | "frontend";
  description: string;
  highlights: string[];
  href?: string;
  repositories: {
    frontend: string;
    backend?: string;
  };
};

export const projects: Project[] = [
  {
    id: "amigo-secreto",
    title: "Amigo Secreto",
    type: "fullstack",
    description: "Aplicação web para sorteio de amigo secreto, com envio de e-mails automáticos.",
    highlights: ["Sorteio automatizado", "Serviço de e-mails com Resend", "Níveis de acesso"],
    href: "https://amigosecreto.janahu.dev.br/",
    repositories: {
      frontend: "https://github.com/tuca-janahu/amigo-secreto-front",
      backend: "https://github.com/tuca-janahu/amigo-secreto-back",
    },
  },
  {
    id: "fit-track",
    title: "Fit Track",
    type: "fullstack",
    description: "Aplicação de um mini projeto fullstack para registro de treinos, com autenticação JWT.",
    highlights: ["Autenticação JWT", "Gerenciamento de treinos", "API REST"],
    href: "https://fit-track.janahu.dev.br/",
    repositories: {
      frontend: "https://github.com/tuca-janahu/mini-projeto-front",
      backend: "https://github.com/tuca-janahu/mini-projeto-back",
    },
  },
  {
    id: "calc-imc",
    title: "Calculadora de IMC",
    type: "frontend",
    description: "App com React + Typescript para calcular o Índice de Massa Corporal (IMC).",
    highlights: ["Cálculo de IMC", "Feedback visual", "Projeto básico", "Interface responsiva"],
    href: "https://imc.janahu.dev.br/",
    repositories: {
      frontend: "https://github.com/tuca-janahu/mp-calculadora-imc",
    },
  },
  // {
  //   id: "ticketgen",
  //   title: "Conference Ticket Generator",
  //   type: "frontend",
  //   description: "Página de treinamento simples em HTML e CSS para geração de tickets fictícios.",
  //   highlights: ["Formulário validado", "Upload de imagem", "Geração de ticket"],
  //   href: "https://ticket-generator.janahu.dev.br/",
  // },
  {
    id: "calc-idade",
    title: "Calculadora de Idade",
    type: "frontend",
    description: "Projeto Simples com React + TS para calcular a idade exata em anos, meses e dias.",
    highlights: ["Cálculo de datas", "Validação de formulário", "Resultado detalhado"],
    href: "https://age.janahu.dev.br/",
    repositories: {
      frontend: "https://github.com/tuca-janahu/frontend-mentor-3",
    },
  },

];
