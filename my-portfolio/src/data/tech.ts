import { FaHtml5, FaCss3Alt, FaReact, FaJs, FaPython, FaNodeJs, FaGitAlt, FaMicrosoft} from 'react-icons/fa';
import { BiLogoTailwindCss, BiLogoTypescript } from 'react-icons/bi';
import { AiOutlineConsoleSql } from 'react-icons/ai';
import type { IconType } from 'react-icons/lib';

export type Tech = {
  id: string;
  name: string;
  icon: IconType;
  level?: 1 | 2 | 3; // domínio
  since?: number; // ano
  url?: string; // docs
};

export const techs: Tech[] = [
  {
    id: "html",
    name: "HTML",
    icon: FaHtml5,
    level: 3,
    url: "https://developer.mozilla.org/en-US/docs/Web/HTML",
  },

  {
    id: "css",
    name: "CSS",
    icon: FaCss3Alt,
    level: 3,
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  },
   {
    id: "react",
    name: "React",
    icon: FaReact,
    level: 3,
    url: "https://developer.mozilla.org/en-US/docs/Web/React",
  },
  {
    id: "tailwind",
    name: "Tailwind",
    icon: BiLogoTailwindCss,
    level: 2,
    url: "https://tailwindcss.com/docs",
  },
  {
    id: "js",
    name: "JavaScript",
    icon: FaJs,
    level: 3,
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    id: "ts",
    name: "TypeScript",
    icon: BiLogoTypescript,
    level: 2,
    url: "https://www.typescriptlang.org/",
  },
  {
    id: "python",
    name: "Python",
    icon: FaPython,
    level: 2,
    url: "https://www.python.org/"
  },
  {
    id: "sql",
    name: "SQL",
    icon: AiOutlineConsoleSql,
    level: 2,
    url: "https://www.postgresql.org/docs/"
  },
  {
    id: "nodejs",
    name: "Node.js",
    icon: FaNodeJs,
    level: 2,
    url: "https://nodejs.org/en/docs/"
  },
  {
    id: "git",
    name: "Git",
    icon: FaGitAlt,
    level: 2,
    url: "https://git-scm.com/doc"
  },
  {
    id: "vba",
    name: "VBA",
    icon: FaMicrosoft,
    level: 3,
    url: "https://learn.microsoft.com/en-us/office/vba/api/overview/excel"
  }
]