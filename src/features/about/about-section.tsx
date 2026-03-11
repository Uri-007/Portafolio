import { motion } from "framer-motion";
import { Code2, Rocket, Brain } from "lucide-react";
import "./about.css";

const CARDS = [
  {
    icon: Code2,
    title: "Código limpio",
    desc: "Escribo código mantenible y escalable con React, TypeScript y Node — arquitectura que dura.",
    tag: "01",
  },
  {
    icon: Rocket,
    title: "Performance",
    desc: "Interfaces rápidas con rendering optimizado, tooling moderno y experiencias de usuario fluidas.",
    tag: "02",
  },
  {
    icon: Brain,
    title: "Resolución de problemas",
    desc: "Transformo ideas complejas en soluciones digitales elegantes y confiables.",
    tag: "03",
  },
];

export function About() {
  return (
    <section
      id="about"
      className="relative py-28 px-6 bg-[#f5f4f0] dark:bg-[#111110] overflow-hidden"
    >
      {/* Subtle grid — same as hero */}
      <div className="absolute inset-0 about-grid -z-10 pointer-events-none" />

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20 items-start">
        {/* ── LEFT ─────────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          viewport={{ once: true }}
        >
          {/* Label */}
          <span className="about-label">Sobre mí</span>

          {/* Heading */}
          <h2 className="about-heading mt-4">
            Construyo experiencias{" "}
            <p className="about-heading-accent">web modernas</p>
          </h2>

          {/* Body */}
          <p className="about-body mt-7">
            Soy un desarrollador apasionado por construir aplicaciones web
            modernas, escalables y con gran atención al detalle. Disfruto crear
            interfaces que se sienten rápidas, intuitivas y visualmente
            cuidadas.
          </p>

          <p className="about-body mt-4">
            Mi objetivo es combinar código limpio, arquitectura sólida y
            excelente experiencia de usuario para entregar productos que la
            gente genuinamente disfrute usar.
          </p>

          {/* Signature / accent line */}
          <div className="about-accent-line mt-10" />

          <p className="about-signature mt-5">
            Uriel — Ingeniero en desarrollo y gestión de software
          </p>
        </motion.div>

        {/* ── RIGHT — Cards ────────────────────────────────────── */}
        <div className="grid gap-4">
          {CARDS.map((card, i) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.tag}
                className="about-card group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="about-card-header">
                  <div className="about-card-icon-wrap">
                    <Icon size={18} strokeWidth={1.5} />
                  </div>
                  <span className="about-card-tag">{card.tag}</span>
                </div>

                <h3 className="about-card-title mt-4">{card.title}</h3>
                <p className="about-card-desc mt-2">{card.desc}</p>

                {/* hover accent bar */}
                <div className="about-card-bar" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
