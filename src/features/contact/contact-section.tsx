import { motion } from "framer-motion";
import { Mail, Github, Linkedin, ArrowUpRight, Send } from "lucide-react";
import { Container } from "../../components/ui/container";
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

          {/* ── RIGHT — Form ─────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            viewport={{ once: true }}
            className="contact-form-wrap"
          >
            <div className="contact-form-bar" />

            <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
              <div className="contact-field-row">
                <div className="contact-field">
                  <label className="contact-field-label">Nombre</label>
                  <input
                    type="text"
                    placeholder="Tu nombre"
                    className="contact-input"
                  />
                </div>
                <div className="contact-field">
                  <label className="contact-field-label">Email</label>
                  <input
                    type="email"
                    placeholder="tu@email.com"
                    className="contact-input"
                  />
                </div>
              </div>

              <div className="contact-field">
                <label className="contact-field-label">Asunto</label>
                <input
                  type="text"
                  placeholder="¿En qué puedo ayudarte?"
                  className="contact-input"
                />
              </div>

              <div className="contact-field">
                <label className="contact-field-label">Mensaje</label>
                <textarea
                  placeholder="Cuéntame sobre tu proyecto o idea..."
                  rows={5}
                  className="contact-input contact-textarea"
                />
              </div>

              <button type="submit" className="contact-submit">
                <span>Enviar mensaje</span>
                <Send size={14} strokeWidth={2} />
              </button>
            </form>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
