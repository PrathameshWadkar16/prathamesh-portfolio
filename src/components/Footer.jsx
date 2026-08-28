import { Code2, Heart } from "lucide-react";

import {
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const footerLinks = [
  {
    name: "GitHub",
    href: "https://github.com/",
    icon: FaGithub,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/",
    icon: FaLinkedinIn,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/",
    icon: FaInstagram,
  },
];

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="portfolio-footer">
      <div className="footer-brand">
        <span>PW</span>

        <div>
          <strong>Prathamesh Wadkar</strong>
          <small>Frontend Developer</small>
        </div>
      </div>

      <p className="footer-copyright">
        © {currentYear} Prathamesh Wadkar. All rights reserved.
      </p>

      <div className="footer-right">
        <span className="footer-built-with">
          Built with
          <Heart size={13} fill="currentColor" />
          and
          <Code2 size={14} />
        </span>

        <div className="footer-socials">
          {footerLinks.map(({ name, href, icon: Icon }) => (
            <a
              key={name}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={name}
            >
              <Icon size={15} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;