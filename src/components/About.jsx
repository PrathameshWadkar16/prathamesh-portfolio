import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Code2,
  FolderKanban,
  Lightbulb,
  UserRound,
} from "lucide-react";

const statistics = [
  {
    icon: Code2,
    value: "10+",
    label: "Technologies",
  },
  {
    icon: FolderKanban,
    value: "6+",
    label: "Projects",
  },
  {
    icon: Lightbulb,
    value: "100%",
    label: "Curiosity",
  },
];

function About({ onOpenAbout }) {
  return (
    <section className="about-section" id="about">
      <motion.div
        className="about-introduction"
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.6 }}
      >
        <div className="about-avatar">
          <UserRound size={31} />
        </div>

        <div className="about-copy">
          <span className="section-eyebrow">A little about me</span>

          <h2>Developer with an engineer’s mindset.</h2>

          <p>
            I’m a Frontend Developer with an engineering background who enjoys
            turning real ideas into responsive, useful and visually engaging
            digital products.
          </p>

          <button
            type="button"
            className="about-more-button"
            onClick={onOpenAbout}
          >
            Know more about me
            <ArrowUpRight size={17} />
          </button>
        </div>
      </motion.div>

      <div className="about-statistics">
        {statistics.map(({ icon: Icon, value, label }, index) => (
          <motion.div
            key={label}
            className="about-stat-card"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{
              duration: 0.5,
              delay: index * 0.1,
            }}
          >
            <div className="about-stat-icon">
              <Icon size={21} />
            </div>

            <div>
              <strong>{value}</strong>
              <span>{label}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default About;