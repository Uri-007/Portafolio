import { ChevronsUp, Github, Linkedin, Mail } from "lucide-react";
import "./footer.css";

const LINKS = [
  { label: "Inicio", href: "#home" },
  { label: "Sobre mí", href: "#about" },
  { label: "Habilidades", href: "#skills" },
  { label: "Experiencia", href: "#experience" },
  { label: "Proyectos", href: "#projects" },
  { label: "Contacto", href: "#contact" },
];

const SOCIALS = [
  { icon: Github, href: "https://github.com/Uri-007", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/uriel-cesar-sandoval-766972314/", label: "LinkedIn" },
  { icon: Mail, href: "mailto:urielcesarsandoval10@gmail.com", label: "Email" },
];

export function Footer() {
  return (
    <footer className="relative footer-root overflow-hidden">
      <div className="absolute inset-0 footer-grid -z-10 pointer-events-none" />

      <div className="footer-inner">
        {/* Top row */}
        <div className="footer-top">
          {/* Brand */}
          <div className="footer-brand">
            <span className="footer-name">Uriel</span>
            <span className="footer-role">Software Engineer</span>
          </div>

          {/* Nav */}
          <nav className="footer-nav">
            {LINKS.map((l) => (
              <a key={l.label} href={l.href} className="footer-nav-link">
                {l.label}
              </a>
            ))}
          </nav>

          {/* Socials */}
          <div className="footer-socials">
            {SOCIALS.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                aria-label={label}
                className="footer-social-btn"
              >
                <Icon size={15} strokeWidth={1.8} />
              </a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="footer-divider" />

        {/* Bottom row */}
        <div className="footer-bottom">
          <span className="footer-copy">
            © {new Date().getFullYear()} Uriel Dev — Hecho con cuidado.
          </span>
          <span className="footer-back-top">
            <a href="#home" className="footer-back-link">
              Volver arriba <ChevronsUp width={18} />
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
