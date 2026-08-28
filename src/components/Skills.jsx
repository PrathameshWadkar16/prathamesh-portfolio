import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";

import { skills } from "../data/skillsData.js";

function Skills({ onOpenSkills }) {
  const repeatedSkills = [...skills, ...skills];

  return (
    <section className="skills-section" id="skills">
      <motion.header
        className="skills-section-header"
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <div>
          <span className="section-eyebrow">
            <Sparkles size={14} />
            Technical toolkit
          </span>

          <h2>Skills that keep ideas moving.</h2>

          <p>
            Hover over the track to accelerate the technology train.
          </p>
        </div>

        <button
          type="button"
          className="view-skills-button"
          onClick={onOpenSkills}
        >
          View all skills
          <ArrowUpRight size={17} />
        </button>
      </motion.header>

      <div className="skills-train-wrapper">
        <div className="skills-train">
          {repeatedSkills.map((skill, index) => {
            const Icon = skill.icon;

            return (
              <article
                key={`${skill.name}-${index}`}
                className="skill-train-card"
                aria-hidden={index >= skills.length}
              >
                <div
                  className="skill-train-icon"
                  style={{
                    color: skill.color,
                    backgroundColor: `${skill.color}15`,
                  }}
                >
                  <Icon size={31} />
                </div>

                <div>
                  <strong>{skill.name}</strong>
                  <span>{skill.category}</span>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      <footer className="skills-track-footer">
        <span>
          {skills.length} technologies and development concepts
        </span>

        <span className="skills-moving-status">
          <i />
          Continuously learning
        </span>
      </footer>
    </section>
  );
}

export default Skills;