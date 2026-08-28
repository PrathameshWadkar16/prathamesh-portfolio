import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Hero from "./components/Hero";
import About from "./components/About";
import AboutModal from "./components/AboutModal";
import Skills from "./components/Skills";
import SkillsModal from "./components/SkillsModal";
import Projects from "./components/Projects";
import ProjectsModal from "./components/ProjectsModal";
import ProjectDetailsModal from "./components/ProjectDetailsModal";
import ConnectSection from "./components/ConnectSection";
import Footer from "./components/Footer";
import HireModal from "./components/HireModal";

import "./App.css";

function App() {
  const [aboutOpen, setAboutOpen] = useState(false);
  const [skillsOpen, setSkillsOpen] = useState(false);
  const [projectsOpen, setProjectsOpen] = useState(false);
  const [hireOpen, setHireOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const closeProjects = () => {
    setSelectedProject(null);
    setProjectsOpen(false);
  };

  useEffect(() => {
    const popupOpen =
      aboutOpen ||
      skillsOpen ||
      projectsOpen ||
      hireOpen ||
      Boolean(selectedProject);

    document.body.style.overflow = popupOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [
    aboutOpen,
    skillsOpen,
    projectsOpen,
    hireOpen,
    selectedProject,
  ]);

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key !== "Escape") {
        return;
      }

      if (selectedProject) {
        setSelectedProject(null);
      } else if (projectsOpen) {
        closeProjects();
      } else if (skillsOpen) {
        setSkillsOpen(false);
      } else if (aboutOpen) {
        setAboutOpen(false);
      } else if (hireOpen) {
        setHireOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, [
    selectedProject,
    projectsOpen,
    skillsOpen,
    aboutOpen,
    hireOpen,
  ]);

  return (
    <div className="portfolio-app">
      <Navbar />
      <Sidebar />

      <main className="main-content">
        <Hero
          onOpenProjects={() => setProjectsOpen(true)}
          onOpenHire={() => setHireOpen(true)}
        />

        <About onOpenAbout={() => setAboutOpen(true)} />

        <Skills onOpenSkills={() => setSkillsOpen(true)} />

        <Projects
          onOpenAllProjects={() => setProjectsOpen(true)}
          onSelectProject={setSelectedProject}
        />

        <ConnectSection
          onOpenHire={() => setHireOpen(true)}
        />

        <Footer />
      </main>

      <AnimatePresence>
        {aboutOpen && (
          <AboutModal onClose={() => setAboutOpen(false)} />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {skillsOpen && (
          <SkillsModal onClose={() => setSkillsOpen(false)} />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {projectsOpen && (
          <ProjectsModal
            onClose={closeProjects}
            onSelectProject={setSelectedProject}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {selectedProject && (
          <ProjectDetailsModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {hireOpen && (
          <HireModal onClose={() => setHireOpen(false)} />
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;