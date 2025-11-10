export type Project = {
  id: string;
  title: string;
  description: string;
  tags: string[];
  href?: string;
};

export const projects: Project[] = [
  {
    id: "calc-imc",
    title: "Calculadora de IMC",
    description: "App com React + Typescript para calcular o Índice de Massa Corporal (IMC).",
    tags: ["React", "Typescript", "Tailwind"],
    href: "https://calculadora-imc.tucajanahu.app/",
  },
  {
    id: "ticketgen",
    title: "Conference Ticket Generator",
    description: "Página de treinamento simples em HTML e CSS para geração de tickets fictícios.",
    tags: ["HTML", "CSS", "JavaScript"],
    href: "https://ticket-generator.tucajanahu.app/",
  },
  {
    id: "calc-idade",
    title: "Calculadora de Idade",
    description: "Projeto com React + TS para calcular a idade exata em anos, meses e dias.",
    tags: ["React", "Typescript", "Tailwind"],
    href: "https://calculadora.tucajanahu.app/",
  },
  {
    id: "express",
    title: "Projeto com Express + TS",
    description: "Projeto simples com Node e Express para aprofundamento das suas funcionalidades",
    tags: ["Node.js", "Typescript", "Express"],
    href: "https://back.list.tucajanahu.app/",
  },
  {
    id: "fit-track",
    title: "Fit Track",
    description: "Aplicação de um mini projeto fullstack para registro de treinos, com autenticação JWT.",
    tags: ["React", "TypeScript", "MongoDB", "Node.js"],
    href: "https://fit-track.tucajanahu.app/",
  }
];
