import { motion } from "framer-motion";
import {
  ArrowLeft,
  ExternalLink,
  GitBranch,
  Layers3,
  Radio,
  X,
} from "lucide-react";

function ProjectDetailsModal({ project, onClose }) {
  if (!project) {
    return null;
  }

  return (
    <motion.div
      className="project-details-overlay"
      role="dialog"
      aria-modal="true"
      aria-label={`${project.title} project details`}
      onClick={onClose}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="project-details-modal"
        onClick={(event) => event.stopPropagation()}
        initial={{ opacity: 0, scale: 0.9, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 30 }}
        transition={{ duration: 0.3 }}
      >
        <div
          className={`project-details-visual project-${project.color}`}
        >
          <div className="project-placeholder-grid" />

          <span className="project-details-number">
            {String(project.id).padStart(2, "0")}
          </span>

          <div className="project-details-visual-content">
            <span>{project.category}</span>
            <h2>{project.title}</h2>
          </div>
        </div>

        <div className="project-details-content">
          <div className="project-details-actions-top">
            <button
              type="button"
              className="details-back-button"
              onClick={onClose}
            >
              <ArrowLeft size={17} />
              Back to projects
            </button>

            <button
              type="button"
              className="details-close-button"
              onClick={onClose}
              aria-label="Close project details"
            >
              <X size={20} />
            </button>
          </div>

          <span className="details-eyebrow">
            <Layers3 size={15} />
            Project overview
          </span>

          <h2>{project.title}</h2>

          <p>{project.fullDescription}</p>

          <div className="project-status-box">
            <Radio size={18} />
            <div>
              <span>Current status</span>
              <strong>{project.status}</strong>
            </div>
          </div>

          <div className="details-tech-section">
            <span>Technologies used</span>

            <div className="details-tech-list">
              {project.technologies.map((technology) => (
                <span key={technology}>{technology}</span>
              ))}
            </div>
          </div>

          <div className="details-link-actions">
            {project.liveUrl ? (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="details-primary-link"
              >
                Live project
                <ExternalLink size={17} />
              </a>
            ) : (
              <button
                type="button"
                className="details-primary-link disabled-link"
                disabled
              >
                Live link coming soon
                <ExternalLink size={17} />
              </button>
            )}

            {project.githubUrl ? (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="details-secondary-link"
              >
                Source code
                <GitBranch size={17} />
              </a>
            ) : (
              <button
                type="button"
                className="details-secondary-link disabled-link"
                disabled
              >
                Repository coming soon
                <GitBranch size={17} />
              </button>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default ProjectDetailsModal;