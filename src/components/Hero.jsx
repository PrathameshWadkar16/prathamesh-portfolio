import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  Code2,
  Mail,
  Sparkles,
} from "lucide-react";

function Hero({ onOpenProjects, onOpenHire }) {
  return (
    <section className="hero-section" id="home">
      <div className="hero-grid-pattern" />

      <motion.div
        className="hero-content"
        initial={{ opacity: 0, x: -35 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
      >
        <div className="availability">
          <span className="availability-dot" />
          Available for opportunities
        </div>

        <p className="hero-introduction">
          Hi, I’m Prathamesh Wadkar
        </p>

        <h1>
          I craft digital
          <span>experiences that feel alive.</span>
        </h1>

        <h2>Frontend Developer</h2>

        <p className="hero-description">
          I build responsive, interactive and thoughtfully designed web
          experiences where clean engineering meets premium visual design.
        </p>

        <div className="hero-actions">
          <button
            type="button"
            className="primary-button"
            onClick={onOpenProjects}
          >
            View my work
            <ArrowRight size={18} />
          </button>

          <button
            type="button"
            className="secondary-button"
            onClick={onOpenHire}
          >
            Hire me
            <Mail size={18} />
          </button>
        </div>

        <a href="#about" className="scroll-indicator">
          <span>Explore portfolio</span>
          <ArrowDown size={17} />
        </a>
      </motion.div>

      <motion.div
        className="hero-visual"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.15 }}
      >
        <div className="visual-orbit orbit-one" />
        <div className="visual-orbit orbit-two" />

        <motion.div
          className="floating-card code-card"
          animate={{ y: [0, -10, 0] }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Code2 size={19} />
          <span>Clean Code</span>
        </motion.div>

        <motion.div
          className="floating-card ideas-card"
          animate={{ y: [0, 10, 0] }}
          transition={{
            duration: 4.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Sparkles size={19} />
          <span>Creative Ideas</span>
        </motion.div>

        <div className="tech-console">
          <div className="console-header">
            <div className="console-dots">
              <span />
              <span />
              <span />
            </div>

            <span>portfolio.jsx</span>
          </div>

          <div className="console-code">
            <p>
              <span className="code-purple">const</span>{" "}
              <span className="code-blue">developer</span> = {"{"}
            </p>

            <p className="code-indent">
              name: <span className="code-orange">"Prathamesh"</span>,
            </p>

            <p className="code-indent">
              role:{" "}
              <span className="code-orange">
                "Frontend Developer"
              </span>
              ,
            </p>

            <p className="code-indent">
              passion:{" "}
              <span className="code-orange">"Building ideas"</span>,
            </p>

            <p className="code-indent">
              status: <span className="code-green">"Available"</span>
            </p>

            <p>{"};"}</p>
          </div>

          <div className="console-status">
            <span />
            Designing the next experience
          </div>
        </div>

        <div className="visual-badge">
          <strong>01</strong>
          <span>Premium digital experiences</span>
        </div>
      </motion.div>
    </section>
  );
}

export default Hero;