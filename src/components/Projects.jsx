import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Code2,
  FolderKanban,
} from "lucide-react";

import { projects } from "../data/portfolioData";

function Projects({ onOpenAllProjects, onSelectProject }) {
  const repeatedProjects = [...projects, ...projects];

  return (
    <section className="featured-projects-section" id="projects">
      <motion.header
        className="featured-projects-header"
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <div>
          <span className="section-eyebrow">
            <FolderKanban size={14} />
            Featured work
          </span>

          <h2>Projects shaped around real ideas.</h2>

          <p>
            Hover over the project track to accelerate the showcase.
          </p>
        </div>

        <button
          type="button"
          className="view-projects-button"
          onClick={onOpenAllProjects}
        >
          View all projects
          <ArrowUpRight size={17} />
        </button>
      </motion.header>

      <div className="projects-train-wrapper">
        <div className="projects-train">
          {repeatedProjects.map((project, index) => (
            <article
              key={`${project.id}-${index}`}
              className="train-project-card"
              aria-hidden={index >= projects.length}
            >
              <button
                type="button"
                onClick={() => onSelectProject(project)}
                tabIndex={index >= projects.length ? -1 : 0}
              >
                <div
                  className={`train-project-visual project-${project.color}`}
                >
                  <div className="project-placeholder-grid" />

                  <div className="train-project-icon">
                    <Code2 size={28} />
                  </div>

                  <span className="train-project-number">
                    {String(project.id).padStart(2, "0")}
                  </span>

                  {project.featured && (
                    <span className="train-featured-badge">
                      Featured
                    </span>
                  )}
                </div>

                <div className="train-project-content">
                  <div>
                    <span>{project.category}</span>
                    <h3>{project.title}</h3>
                  </div>

                  <div className="train-project-open">
                    <ArrowUpRight size={18} />
                  </div>

                  <p>{project.description}</p>

                  <div className="train-project-tech">
                    {project.technologies
                      .slice(0, 3)
                      .map((technology) => (
                        <span key={technology}>{technology}</span>
                      ))}
                  </div>
                </div>
              </button>
            </article>
          ))}
        </div>
      </div>

      <footer className="featured-projects-footer">
        <span>
          Click any project to explore its information and technology.
        </span>

        <span className="projects-moving-status">
          <i />
          More projects in development
        </span>
      </footer>
    </section>
  );
}

export default Projects;