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
];
