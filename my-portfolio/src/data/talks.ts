// src/data/talks.ts
export type Talk = {
  id: string;
  title: string;
  venue: string;      // ex.: SBGames 2024 – Trilha X
  year: number;
  authors?: string;   // opcional
  abstract?: string;  // opcional, 1–2 linhas
  links?: {
    pdf?: string;
    site?: string;
    slides?: string;
    repo?: string;
    prototype?: string;
  };
  tags?: string[];
};

export const talks: Talk[] = [
  {
    id: "brainspark-2025",
    title: "BrainSpark: Um Jogo Personalizado para Estímulo Cognitivo em Pessoas com Alzheimer",
    venue: "SBGames 2025 - (Saúde)",
    year: 2025,
    authors: "Artur Janahú, Andrei Rehem, Cássio Guimarães, Lucas Braga",
    abstract:
      "Protótipo de jogo de estimulação cognitiva para pessoas com Alzheimer, utilizando técnicas de personalização de dados para melhorar a experiência do usuário.",
    links: {
      pdf: "https://drive.google.com/file/d/1wKMD3xOOOArwwDUX0HvlTdkPJo0RVOTc/view",
      slides: "https://www.canva.com/design/DAGzto6JgSs/4ZNeS-nFotOOrKcY5f8ZTw/view?utm_content=DAGzto6JgSs&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h56d1968374",
      prototype: "https://www.figma.com/proto/iLvq6x3wJ1FcNBoA8KFS01/BrainSpark---Prot%C3%B3tipo?node-id=1-3&p=f&t=yQX7Ev3PmXGvBb79-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A3"
    },
    tags: ["Pesquisa", "SBGames", "BrainSpark"],
  },
];
