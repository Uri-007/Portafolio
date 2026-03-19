import { motion } from "framer-motion";
import {
  Mail,
  Github,
  Linkedin,
  ArrowUpRight,
  MapPin,
  Clock,
} from "lucide-react";
import { Container } from "../../components/ui/container";
import { useEffect, useState } from "react";
import "./contact.css";

const SOCIAL_LINKS = [
  {
    icon: Mail,
    label: "Email",
    href: "mailto:urielcesarsandoval10@gmail.com",
    sublabel: "urielcesarsandoval10@gmail.com",
  },
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/Uri-007",
    sublabel: "Uri-007",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/uriel-cesar-sandoval-766972314/",
    sublabel: "Uriel",
  },
];

const STACK_ITEMS = [
  "React",
  "JavaScript",
  "TypeScript",
  "Node.js",
  "Next.js",
  "Material UI",
  "Bootstrap",
  "Tailwind CSS",
  "PostgreSQL",
  "MongoDB",
  "MySQL",
];

function LiveClock() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const update = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("es-MX", {
          timeZone: "America/Mexico_City",
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        }),
      );
    };
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, []);

  return <span>{time}</span>;
}

export function ContactSection() {
  return (
    <section
      id="contact"
      className="relative py-28 bg-[#f5f4f0] dark:bg-[#111110] overflow-hidden"
    >
      <div className="absolute inset-0 contact-grid -z-10 pointer-events-none" />

      <Container>
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-20 items-start">
          {/* ── LEFT ─────────────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <span className="contact-label">Contacto</span>

            <h2 className="contact-heading mt-4">
              Hablemos de tu{" "}
              <p className="contact-heading-accent">próximo proyecto</p>
            </h2>

            <p className="contact-body mt-6">
              Siempre estoy abierto a colaborar en proyectos interesantes,
              oportunidades laborales o simplemente para conversar sobre
              tecnología.
            </p>

            {/* Social cards */}
            <div className="contact-socials mt-10">
              {SOCIAL_LINKS.map((link, i) => {
                const Icon = link.icon;
                return (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    target={
                      link.href.startsWith("mailto") ? undefined : "_blank"
                    }
                    rel="noopener noreferrer"
                    className="contact-social-item group"
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 + i * 0.08 }}
                    viewport={{ once: true }}
                  >
                    <div className="contact-social-icon">
                      <Icon size={16} strokeWidth={1.8} />
                    </div>
                    <div className="contact-social-text">
                      <span className="contact-social-label">{link.label}</span>
                      <span className="contact-social-sublabel">
                        {link.sublabel}
                      </span>
                    </div>
                    <ArrowUpRight
                      size={14}
                      className="contact-social-arrow"
                      strokeWidth={2}
                    />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* ── RIGHT — Info Card ────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            viewport={{ once: true }}
            className="contact-info-wrap"
          >
            <div className="contact-form-bar" />

            {/* Availability badge */}
            <div className="contact-availability">
              <span className="contact-availability-dot" />
              <span className="contact-availability-text">Disponible</span>
            </div>

            {/* Quote */}
            <blockquote className="contact-quote">
              "Construyo interfaces que no solo se ven bien — las diseño para
              que la gente las disfrute usar."
            </blockquote>

            <div className="contact-divider" />

            {/* Location & time */}
            <div className="contact-meta-row">
              <div className="contact-meta-item">
                <MapPin
                  size={13}
                  strokeWidth={1.8}
                  className="contact-meta-icon"
                />
                <span>Puebla, México</span>
              </div>
              <div className="contact-meta-item">
                <Clock
                  size={13}
                  strokeWidth={1.8}
                  className="contact-meta-icon"
                />
                <span>
                  <LiveClock /> — CDT (UTC−6)
                </span>
              </div>
            </div>

            <div className="contact-divider" />

            {/* Stack */}
            <div className="contact-stack-section">
              <p className="contact-stack-label">Stack actual</p>
              <div className="contact-stack-tags">
                {STACK_ITEMS.map((item) => (
                  <span key={item} className="contact-stack-tag">
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="contact-divider" />

            {/* CTA */}
            <a
              href="mailto:urielcesarsandoval10@gmail.com"
              className="contact-cta"
            >
              <span>Enviar un mensaje</span>
              <ArrowUpRight size={15} strokeWidth={2} />
            </a>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
