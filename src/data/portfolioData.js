import {
  BriefcaseBusiness,
  Code2,
  FolderKanban,
  Home,
  Mail,
  UserRound,
} from "lucide-react";

import {
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa";

export const navigation = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Certifications", href: "#certifications" },
  { name: "Contact", href: "#contact" },
];

export const sidebarItems = [
  { name: "Home", icon: Home },
  { name: "About", icon: UserRound },
  { name: "Skills", icon: Code2 },
  { name: "Projects", icon: FolderKanban },
  { name: "Work", icon: BriefcaseBusiness },
];
export const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/PrathameshWadkar16",
    icon: FaGithub,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/prathamesh-wadkar-a91001229",
    icon: FaLinkedinIn,
  },
  {
    name: "Email",
    href: "mailto:prathmeshwadkar03@gmail.com",
    icon: Mail,
  },
];

export const projects = [
  {
    id: 1,
    title: "AI Resume Analyzer",
    category: "Django Web Application",
    description:
      "A resume analysis platform that extracts resume information, calculates ATS compatibility and compares skills with job descriptions.",
    fullDescription:
      "AI Resume Analyzer helps job seekers understand how effectively their resume matches modern recruitment systems. Users can upload resumes, extract structured information, calculate an ATS score and receive actionable suggestions.",
    technologies: ["Python", "Django", "PostgreSQL", "HTML", "CSS"],
    status: "In Development",
    color: "purple",
    image: "",
    liveUrl: "",
    githubUrl: "",
    featured: true,
  },
  {
    id: 2,
    title: "Bloodline",
    category: "Fashion Brand Website",
    description:
      "A premium clothing-brand interface focused on bold visual storytelling, product discovery and responsive shopping experiences.",
    fullDescription:
      "Bloodline is a modern fashion experience created around strong branding, editorial-style product presentation and engaging interactions across desktop and mobile devices.",
    technologies: ["React", "JavaScript", "CSS", "Vite"],
    status: "Frontend Project",
    color: "red",
    image: "",
    liveUrl: "https://bloodline-livid.vercel.app/",
    githubUrl: "https://github.com/PrathameshWadkar16/bloodline",
    featured: true,
  },
  {
    id: 3,
    title: "Sonai Agro Farm",
    category: "Agritourism Platform",
    description:
      "A responsive farm-tourism platform showcasing stays, experiences, products, events and future online bookings.",
    fullDescription:
      "Sonai Agro Farm presents an integrated agritourism concept through immersive visuals, accommodation discovery, farm experiences, events and product sections.",
    technologies: ["React", "Vite", "CSS", "React Router"],
    status: "In Development",
    color: "green",
    image: "",
    liveUrl: "https://sonai-agro-farm.vercel.app/",
    githubUrl: "https://github.com/PrathameshWadkar16/sonai-agro-farm",
    featured: true,
  },
  {
    id: 4,
    title: "Anvaya",
    category: "Ethnic Fashion E-commerce",
    description:
      "An Indian ethnic-wear shopping platform designed around heritage, modern usability and complete e-commerce functionality.",
    fullDescription:
      "Anvaya combines Indian cultural identity with a contemporary shopping interface. The planned platform includes product discovery, filters, wishlist, cart, secure checkout and customer accounts.",
    technologies: ["React", "Node.js", "MongoDB", "Express"],
    status: "Planned Full Stack",
    color: "orange",
    image: "",
    liveUrl: "",
    githubUrl: "",
    featured: false,
  },
  {
    id: 5,
    title: "Mehfil",
    category: "Classical Music Experience",
    description:
      "An atmospheric Indian classical music player with interactive rooms, themes and an immersive listening experience.",
    fullDescription:
      "Mehfil transforms a standard music player into a culturally inspired digital environment featuring indoor and outdoor themes, music categories and immersive playback interactions.",
    technologies: ["React", "JavaScript", "CSS", "Web Audio"],
    status: "Concept Development",
    color: "blue",
    image: "",
    liveUrl: "",
    githubUrl: "",
    featured: false,
  },
  {
    id: 6,
    title: "Coastal Stay",
    category: "Homestay Booking Platform",
    description:
      "A trusted local booking platform connecting travellers with verified homestays around Diveagar and its surrounding region.",
    fullDescription:
      "Coastal Stay is designed to help travellers discover and book verified local homestays while giving property owners simple registration, availability and booking-management tools.",
    technologies: ["React", "Django", "PostgreSQL", "REST API"],
    status: "Future Project",
    color: "cyan",
    image: "",
    liveUrl: "",
    githubUrl: "",
    featured: false,
  },
];