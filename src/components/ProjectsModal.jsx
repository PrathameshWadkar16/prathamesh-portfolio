import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Code2,
  FolderKanban,
  X,
} from "lucide-react";

import { projects } from "../data/portfolioData";

function ProjectsModal({ onClose, onSelectProject }) {
  return (
    <motion.div
      className="projects-modal-overlay"
      role="dialog"
      aria-modal="true"
      aria-label="All projects"
      onClick={onClose}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="projects-modal"
        onClick={(event) => event.stopPropagation()}
        initial={{ opacity: 0, scale: 0.96, y: 40 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96, y: 40 }}
        transition={{ duration: 0.35 }}
      >
        <header className="projects-modal-header">
          <div>
            <span className="modal-eyebrow">
              <FolderKanban size={16} />
              Selected portfolio
            </span>

            <h2>Projects built with purpose.</h2>

            <p>
              Explore my featured work, ongoing applications and future
              product concepts.
            </p>
          </div>

          <button
            type="button"
            className="modal-close-button"
            onClick={onClose}
            aria-label="Close projects"
          >
            <X size={22} />
          </button>
        </header>

        <div className="projects-modal-grid">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              className="project-popup-card"
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.35,
                delay: index * 0.06,
              }}
            >
              <button
                type="button"
                className="project-card-button"
                onClick={() => onSelectProject(project)}
              >
                <div
                  className={`project-image-placeholder project-${project.color}`}
                >
                  <div className="project-placeholder-grid" />

                  <div className="project-placeholder-icon">
                    <Code2 size={32} />
                  </div>

                  <span>{String(index + 1).padStart(2, "0")}</span>

                  {project.featured && (
                    <strong className="featured-project-label">
                      Featured
                    </strong>
                  )}
                </div>

                <div className="project-popup-content">
                  <div className="project-popup-heading">
                    <div>
                      <span>{project.category}</span>
                      <h3>{project.title}</h3>
                    </div>

                    <div className="project-open-icon">
                      <ArrowUpRight size={18} />
                    </div>
                  </div>

                  <p>{project.description}</p>

                  <div className="project-technologies">
                    {project.technologies.slice(0, 4).map((technology) => (
                      <span key={technology}>{technology}</span>
                    ))}
                  </div>
                </div>
              </button>
            </motion.article>
          ))}
        </div>

        <footer className="projects-modal-footer">
          <span>
            {projects.length} projects · More work is currently being developed
          </span>

          <span className="projects-status">
            <i />
            Available for collaboration
          </span>
        </footer>
      </motion.div>
    </motion.div>
  );
}

export default ProjectsModal;