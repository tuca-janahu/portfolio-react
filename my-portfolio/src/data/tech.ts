import { FaReact, FaJs, FaPython, FaNodeJs, FaGitAlt, FaMicrosoft} from 'react-icons/fa';
import { BiLogoTailwindCss, BiLogoTypescript } from 'react-icons/bi';
import { AiOutlineConsoleSql } from 'react-icons/ai';
import type { IconType } from 'react-icons/lib';

export type Tech = {
  id: string;
  name: string;
  icon: IconType;
  url?: string; // docs
};

export const techs: Tech[] = [
  
   {
    id: "react",
    name: "React",
    icon: FaReact,
    url: "https://developer.mozilla.org/en-US/docs/Web/React",
  },
  {
    id: "tailwind",
    name: "Tailwind",
    icon: BiLogoTailwindCss,
    url: "https://tailwindcss.com/docs",
  },
  {
    id: "js",
    name: "JavaScript",
    icon: FaJs,
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    id: "ts",
    name: "TypeScript",
    icon: BiLogoTypescript,
    url: "https://www.typescriptlang.org/",
  },
  {
    id: "python",
    name: "Python",
    icon: FaPython,
    url: "https://www.python.org/"
  },
  {
    id: "sql",
    name: "SQL",
    icon: AiOutlineConsoleSql,
    url: "https://www.postgresql.org/docs/"
  },
  {
    id: "nodejs",
    name: "Node.js",
    icon: FaNodeJs,
    url: "https://nodejs.org/en/docs/"
  },
  {
    id: "git",
    name: "Git",
    icon: FaGitAlt,
    url: "https://git-scm.com/doc"
  },
  {
    id: "vba",
    name: "VBA",
    icon: FaMicrosoft,
    url: "https://learn.microsoft.com/en-us/office/vba/api/overview/excel"
  }
]