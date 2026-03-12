import { Github, Linkedin, Moon, Sun, Menu, X } from "lucide-react";
import { useTheme } from "../../hooks/use-theme";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import logoDark from "../../assets/logo4.png";
import logoLight from "../../assets/logo2.png";
import "./navbar.css";

const LINKS = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const { toggleTheme, theme } = useTheme();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  // Scroll elevation
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Active section via IntersectionObserver
  useEffect(() => {
    const sectionIds = LINKS.map((l) => l.href.replace("#", ""));
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { rootMargin: "-40% 0px -55% 0px", threshold: 0 },
      );

      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((obs) => obs.disconnect());
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`navbar-root ${scrolled ? "navbar-scrolled" : ""}`}
    >
      <div className="navbar-inner">
        {/* LOGO */}
        <a href="#home" className="navbar-logo">
          <img
            src={theme === "dark" ? logoDark : logoLight}
            alt="UCS Logo"
            className="h-8 object-contain"
          />
        </a>

        {/* DESKTOP NAV */}
        <nav className="navbar-links">
          {LINKS.map((link) => {
            const id = link.href.replace("#", "");
            const isActive = activeSection === id;
            return (
              <a
                key={link.name}
                href={link.href}
                className={`navbar-link ${isActive ? "navbar-link-active" : ""}`}
              >
                {link.name}
                {isActive && (
                  <motion.span
                    className="navbar-link-dot"
                    layoutId="nav-dot"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* RIGHT */}
        <div className="navbar-right">
          <a
            href="https://github.com/Uri-007"
            target="_blank"
            rel="noopener noreferrer"
            className="navbar-icon-btn"
            aria-label="GitHub"
          >
            <Github size={16} strokeWidth={1.8} />
          </a>

          <a
            href="https://www.linkedin.com/in/uriel-cesar-sandoval-766972314/"
            target="_blank"
            rel="noopener noreferrer"
            className="navbar-icon-btn"
            aria-label="LinkedIn"
          >
            <Linkedin size={16} strokeWidth={1.8} />
          </a>

          <div className="navbar-divider" />

          <button
            onClick={toggleTheme}
            className="navbar-icon-btn"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <Sun size={16} strokeWidth={1.8} />
            ) : (
              <Moon size={16} strokeWidth={1.8} />
            )}
          </button>

          {/* MOBILE TOGGLE */}
          <button
            onClick={() => setOpen((v) => !v)}
            className="navbar-icon-btn navbar-mobile-toggle"
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={open ? "x" : "menu"}
                initial={{ opacity: 0, rotate: -90, scale: 0.7 }}
                animate={{ opacity: 1, rotate: 0, scale: 1 }}
                exit={{ opacity: 0, rotate: 90, scale: 0.7 }}
                transition={{ duration: 0.18 }}
                style={{ display: "flex" }}
              >
                {open ? (
                  <X size={17} strokeWidth={1.8} />
                ) : (
                  <Menu size={17} strokeWidth={1.8} />
                )}
              </motion.span>
            </AnimatePresence>
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <motion.nav
            key="mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="navbar-mobile-menu"
          >
            <div className="navbar-mobile-inner">
              {LINKS.map((link, i) => {
                const id = link.href.replace("#", "");
                const isActive = activeSection === id;
                return (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={`navbar-mobile-link ${isActive ? "navbar-mobile-link-active" : ""}`}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.2, delay: i * 0.04 }}
                  >
                    <span className="navbar-mobile-link-tag">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {link.name}
                    {isActive && <span className="navbar-mobile-active-dot" />}
                  </motion.a>
                );
              })}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
