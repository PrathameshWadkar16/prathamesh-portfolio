import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Menu, X } from "lucide-react";

import { navigation } from "../data/portfolioData";

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="top-navbar">
      <a
        href="#home"
        className="brand"
        aria-label="Prathamesh portfolio home"
      >
        <span className="brand-symbol">PW</span>

        <span className="brand-copy">
          <strong>Prathamesh</strong>
          <small>Frontend Developer</small>
        </span>
      </a>

      <nav className="desktop-navigation" aria-label="Main navigation">
        {navigation.map((item) => (
          <a key={item.name} href={item.href}>
            {item.name}
          </a>
        ))}
      </nav>

      <div className="navbar-actions">
        <a className="resume-button" href="/resume.pdf" download>
          Resume
          <ArrowDown size={17} />
        </a>

        <button
          type="button"
          className="mobile-menu-button"
          onClick={() => setMobileMenuOpen((current) => !current)}
          aria-label="Toggle navigation"
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {mobileMenuOpen && (
        <motion.nav
          className="mobile-navigation"
          aria-label="Mobile navigation"
          initial={{ opacity: 0, y: -14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25 }}
        >
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={closeMobileMenu}
            >
              {item.name}
            </a>
          ))}
        </motion.nav>
      )}
    </header>
  );
}

export default Navbar;