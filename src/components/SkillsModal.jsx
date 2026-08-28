import { motion } from "framer-motion";
import {
  Code2,
  Layers3,
  Sparkles,
  X,
} from "lucide-react";

import {
  skillCategories,
  skills,
} from "../data/skillsData.js";

function SkillsModal({ onClose }) {
  return (
    <motion.div
      className="skills-modal-overlay"
      role="dialog"
      aria-modal="true"
      aria-label="All technical skills"
      onClick={onClose}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="skills-modal"
        onClick={(event) => event.stopPropagation()}
        initial={{ opacity: 0, scale: 0.96, y: 35 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96, y: 35 }}
        transition={{ duration: 0.35 }}
      >
        <header className="skills-modal-header">
          <div>
            <span className="modal-eyebrow">
              <Layers3 size={16} />
              Complete toolkit
            </span>

            <h2>
              Technologies, tools
              <span>and fundamentals.</span>
            </h2>

            <p>
              A categorized view of the technologies I use and the areas
              I’m actively strengthening.
            </p>
          </div>

          <button
            type="button"
            className="modal-close-button"
            onClick={onClose}
            aria-label="Close skills popup"
          >
            <X size={22} />
          </button>
        </header>

        <div className="skills-category-layout">
          {skillCategories.map((category, categoryIndex) => {
            const categorySkills = skills.filter(
              (skill) => skill.category === category.name
            );

            return (
              <motion.section
                key={category.name}
                className="skill-category-card"
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.4,
                  delay: categoryIndex * 0.08,
                }}
              >
                <header className="skill-category-header">
                  <div className="skill-category-number">
                    {String(categoryIndex + 1).padStart(2, "0")}
                  </div>

                  <div>
                    <h3>{category.name}</h3>
                    <p>{category.description}</p>
                  </div>

                  <span>{categorySkills.length} skills</span>
                </header>

                <div className="skill-category-grid">
                  {categorySkills.map((skill) => {
                    const Icon = skill.icon;

                    return (
                      <article
                        key={skill.name}
                        className="categorized-skill"
                      >
                        <div
                          className="categorized-skill-icon"
                          style={{
                            color: skill.color,
                            backgroundColor: `${skill.color}14`,
                          }}
                        >
                          <Icon size={26} />
                        </div>

                        <div>
                          <strong>{skill.name}</strong>
                          <span>Working knowledge</span>
                        </div>
                      </article>
                    );
                  })}
                </div>
              </motion.section>
            );
          })}
        </div>

        <footer className="skills-modal-footer">
          <div>
            <Sparkles size={18} />

            <span>
              My toolkit grows continuously through practical projects.
            </span>
          </div>

          <div>
            <Code2 size={18} />
            <span>Learning by building</span>
          </div>
        </footer>
      </motion.div>
    </motion.div>
  );
}

export default SkillsModal;