import {
  Braces,
  Code2,
  Database,
  Workflow,
} from "lucide-react";

import {
  FaBootstrap,
  FaCss3Alt,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaPython,
  FaReact,
} from "react-icons/fa";

import {
  SiDjango,
  SiExpress,
  SiFigma,
  SiFlask,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiNodedotjs,
  SiPostgresql,
  SiPostman,
  SiVite,
} from "react-icons/si";

export const skills = [
  {
    name: "HTML5",
    category: "Frontend",
    icon: FaHtml5,
    color: "#e44d26",
  },
  {
    name: "CSS3",
    category: "Frontend",
    icon: FaCss3Alt,
    color: "#1572b6",
  },
  {
    name: "JavaScript",
    category: "Frontend",
    icon: SiJavascript,
    color: "#e0b900",
  },
  {
    name: "React",
    category: "Frontend",
    icon: FaReact,
    color: "#00a9d6",
  },
  {
    name: "Bootstrap",
    category: "Frontend",
    icon: FaBootstrap,
    color: "#7952b3",
  },
  {
    name: "Vite",
    category: "Frontend",
    icon: SiVite,
    color: "#646cff",
  },
  {
    name: "Python",
    category: "Backend",
    icon: FaPython,
    color: "#3776ab",
  },
  {
    name: "Django",
    category: "Backend",
    icon: SiDjango,
    color: "#0c6b4f",
  },
  {
    name: "Flask",
    category: "Backend",
    icon: SiFlask,
    color: "#303744",
  },
  {
    name: "Node.js",
    category: "Backend",
    icon: SiNodedotjs,
    color: "#5fa04e",
  },
  {
    name: "Express",
    category: "Backend",
    icon: SiExpress,
    color: "#303744",
  },
  {
    name: "REST APIs",
    category: "Backend",
    icon: Code2,
    color: "#6c63ff",
  },
  {
    name: "PostgreSQL",
    category: "Database",
    icon: SiPostgresql,
    color: "#336791",
  },
  {
    name: "MySQL",
    category: "Database",
    icon: SiMysql,
    color: "#00758f",
  },
  {
    name: "MongoDB",
    category: "Database",
    icon: SiMongodb,
    color: "#47a248",
  },
  {
    name: "DBMS",
    category: "Database",
    icon: Database,
    color: "#7c4dff",
  },
  {
    name: "Git",
    category: "Tools",
    icon: FaGitAlt,
    color: "#f05032",
  },
  {
    name: "GitHub",
    category: "Tools",
    icon: FaGithub,
    color: "#252a34",
  },
  {
    name: "Postman",
    category: "Tools",
    icon: SiPostman,
    color: "#ff6c37",
  },
  {
    name: "Figma",
    category: "Tools",
    icon: SiFigma,
    color: "#a259ff",
  },
  {
    name: "OOP",
    category: "Fundamentals",
    icon: Braces,
    color: "#db5a42",
  },
  {
    name: "SDLC",
    category: "Fundamentals",
    icon: Workflow,
    color: "#168aad",
  },
];

export const skillCategories = [
  {
    name: "Frontend",
    description: "Interfaces, responsive design and user interactions",
  },
  {
    name: "Backend",
    description: "Application logic, APIs and server-side development",
  },
  {
    name: "Database",
    description: "Relational and document-based data management",
  },
  {
    name: "Tools",
    description: "Development workflow, testing and collaboration",
  },
  {
    name: "Fundamentals",
    description: "Core software engineering concepts and practices",
  },
];