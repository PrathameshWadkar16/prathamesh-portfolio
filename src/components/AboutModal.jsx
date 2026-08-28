import { motion } from "framer-motion";
import {
  BookOpen,
  Code2,
  GraduationCap,
  HeartHandshake,
  Lightbulb,
  MapPin,
  Rocket,
  Target,
  X,
} from "lucide-react";

const focusAreas = [
  {
    icon: Code2,
    title: "Frontend Development",
    description:
      "Creating responsive interfaces with clean component structures and thoughtful interactions.",
  },
  {
    icon: Rocket,
    title: "Full-stack Growth",
    description:
      "Strengthening backend development through Python, Django, APIs and relational databases.",
  },
  {
    icon: Lightbulb,
    title: "Product Thinking",
    description:
      "Understanding the real problem before selecting features, technology and visual direction.",
  },
];

const values = [
  "Simple solutions over unnecessary complexity",
  "Practical learning through real projects",
  "Responsive and accessible user experiences",
  "Continuous improvement and honest collaboration",
];

function AboutModal({ onClose }) {
  return (
    <motion.div
      className="about-modal-overlay"
      role="dialog"
      aria-modal="true"
      aria-label="About Prathamesh"
      onClick={onClose}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="about-modal"
        onClick={(event) => event.stopPropagation()}
        initial={{ opacity: 0, scale: 0.96, y: 35 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96, y: 35 }}
        transition={{ duration: 0.35 }}
      >
        <header className="about-modal-header">
          <div>
            <span className="modal-eyebrow">
              <BookOpen size={16} />
              My journey
            </span>

            <h2>
              Engineering knowledge.
              <span>Creative development.</span>
            </h2>

            <p>
              A closer look at my background, technical direction and the
              mindset I bring to every project.
            </p>
          </div>

          <button
            type="button"
            className="modal-close-button"
            onClick={onClose}
            aria-label="Close About Me popup"
          >
            <X size={22} />
          </button>
        </header>

        <div className="about-modal-layout">
          <motion.article
            className="about-story-card"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <div className="about-story-number">01</div>

            <span className="about-card-label">Who I am</span>

            <h3>I transform learning into working products.</h3>

            <p>
              I’m Prathamesh Wadkar, an engineering graduate focused on
              frontend and full-stack web development. My journey combines
              Electronics and Telecommunication Engineering with an earlier
              foundation in Computer Engineering.
            </p>

            <p>
              I enjoy projects that solve practical problems—from resume
              analysis and e-commerce to agritourism platforms and immersive
              music experiences.
            </p>

            <div className="about-location">
              <MapPin size={18} />

              <div>
                <span>Based in</span>
                <strong>Maharashtra, India</strong>
              </div>
            </div>
          </motion.article>

          <article className="about-education-card">
            <div className="about-story-number">02</div>

            <span className="about-card-label">Education</span>

            <div className="education-timeline">
              <div className="education-item">
                <div className="education-icon">
                  <GraduationCap size={21} />
                </div>

                <div>
                  <span>Bachelor of Engineering</span>

                  <h3>
                    Electronics and Telecommunication Engineering
                  </h3>

                  <p>Savitribai Phule Pune University</p>
                </div>
              </div>

              <div className="education-line" />

              <div className="education-item">
                <div className="education-icon">
                  <BookOpen size={21} />
                </div>

                <div>
                  <span>Diploma</span>

                  <h3>Computer Engineering</h3>

                  <p>Government Polytechnic, Pune · 67.40%</p>
                </div>
              </div>
            </div>
          </article>
        </div>

        <section className="about-focus-section">
          <div className="about-section-heading">
            <span className="modal-eyebrow">
              <Target size={16} />
              Current focus
            </span>

            <h2>What I’m building toward.</h2>
          </div>

          <div className="about-focus-grid">
            {focusAreas.map(({ icon: Icon, title, description }, index) => (
              <motion.article
                key={title}
                className="about-focus-card"
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 + index * 0.08 }}
              >
                <div className="about-focus-icon">
                  <Icon size={22} />
                </div>

                <span>0{index + 1}</span>
                <h3>{title}</h3>
                <p>{description}</p>
              </motion.article>
            ))}
          </div>
        </section>

        <section className="about-values-section">
          <div>
            <span className="modal-eyebrow">
              <HeartHandshake size={16} />
              How I work
            </span>

            <h2>Principles behind my work.</h2>
          </div>

          <div className="about-values-list">
            {values.map((value, index) => (
              <div key={value}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p>{value}</p>
              </div>
            ))}
          </div>
        </section>
      </motion.div>
    </motion.div>
  );
}

export default AboutModal;