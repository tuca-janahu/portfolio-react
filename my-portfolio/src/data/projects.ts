export type Project = {
  id: string;
  title: string;
  description: string;
  tags: string[];
  href?: string;
};

export const projects: Project[] = [
  {
    id: "traqueoplastias",
    title: "Traqueoplastias Portal",
    description: "App com React + Node + Oracle para gestão cirúrgica e acompanhamento de pacientes.",
    tags: ["React", "Node", "Oracle", "Saúde"],
    href: "#",
  },
  {
    id: "ticketgen",
    title: "Conference Ticket Generator",
    description: "SaaS simples para emissão de tickets com QR code e integração com Vercel.",
    tags: ["SaaS", "Vite", "Tailwind"],
    href: "#",
  },
  {
    id: "sani",
    title: "Calculadora de Idade",
    description: "Projeto com react para calcular a idade exata em anos, meses e dias.",
    tags: ["React", "Typescript"],
    href: "#",
  },
];
