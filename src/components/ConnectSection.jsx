import { motion } from "framer-motion";
import {
  ArrowRight,
  Award,
  ExternalLink,
  Mail,
  Send,
} from "lucide-react";

import {
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa";

const certifications = [
  {
    id: 1,
    provider: "I.T. Vedant",
    title: "AI Developer Internship",
    year: "2024",
    color: "certificate-blue",
    image: "",
    url: "",
  },
  {
    id: 2,
    provider: "HackerRank",
    title: "Python (Basic)",
    year: "2024",
    color: "certificate-green",
    image: "",
    url: "",
  },
  {
    id: 3,
    provider: "Great Learning",
    title: "AI For Everyone",
    year: "2024",
    color: "certificate-purple",
    image: "",
    url: "",
  },
];

const contactLinks = [
  {
    name: "Email",
    label: "Send an email",
    href: "mailto:prathmeshwadkar03@gmail.com",
    icon: Mail,
  },
  {
    name: "LinkedIn",
    label: "Connect professionally",
    href: "https://www.linkedin.com/in/prathamesh-wadkar-a91001229",
    icon: FaLinkedinIn,
  },
  {
    name: "GitHub",
    label: "Explore source code",
    href: "https://github.com/PrathameshWadkar16",
    icon: FaGithub,
  },
];

function ConnectSection({ onOpenHire }) {
  return (
    <section className="connect-section">
      <motion.article
        className="certifications-panel"
        id="certifications"
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <header className="panel-heading">
          <div>
            <span className="section-eyebrow">
              <Award size={14} />
              Certifications
            </span>

            <h2>Learning beyond the classroom.</h2>

            <p>
              Certifications supporting my technical and professional growth.
            </p>
          </div>

          <button type="button" className="panel-view-button">
            View all
            <ArrowRight size={16} />
          </button>
        </header>

        <div className="certifications-grid">
          {certifications.map((certificate) => (
            <article
              key={certificate.id}
              className="certificate-card"
            >
              <div
                className={`certificate-preview ${certificate.color}`}
              >
                <div className="certificate-lines">
                  <span />
                  <span />
                  <span />
                </div>

                <Award size={31} />

                <span className="certificate-year">
                  {certificate.year}
                </span>
              </div>

              <div className="certificate-information">
                <span>{certificate.provider}</span>
                <h3>{certificate.title}</h3>

                {certificate.url ? (
                  <a
                    href={certificate.url}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`View ${certificate.title}`}
                  >
                    <ExternalLink size={15} />
                  </a>
                ) : (
                  <button
                    type="button"
                    disabled
                    aria-label="Certificate link coming soon"
                  >
                    <ExternalLink size={15} />
                  </button>
                )}
              </div>
            </article>
          ))}
        </div>

        <div className="certificates-coming-soon">
          <strong>+2</strong>

          <div>
            <span>More certificates</span>
            <small>Images and credentials will be added later.</small>
          </div>
        </div>
      </motion.article>

      <motion.article
        className="contact-panel"
        id="contact"
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ delay: 0.1 }}
      >
        <div className="contact-panel-pattern" />

        <div className="contact-panel-content">
          <span className="section-eyebrow">
            <Send size={14} />
            Let’s connect
          </span>

          <h2>Have an idea worth building?</h2>

          <p>
            I’m open to frontend opportunities, freelance websites,
            collaborative projects and meaningful product ideas.
          </p>

          <button
            type="button"
            className="contact-hire-button"
            onClick={onOpenHire}
          >
            Start a conversation
            <ArrowRight size={18} />
          </button>

          <div className="contact-divider">
            <span>or connect directly</span>
          </div>

          <div className="contact-link-grid">
            {contactLinks.map(({ name, label, href, icon: Icon }) => (
              <a
                key={name}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noreferrer" : undefined}
              >
                <div>
                  <Icon size={18} />
                </div>

                <span>
                  <strong>{name}</strong>
                  <small>{label}</small>
                </span>

                <ArrowRight size={15} />
              </a>
            ))}
          </div>
        </div>
      </motion.article>
    </section>
  );
}

export default ConnectSection;