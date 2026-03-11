import { motion } from "framer-motion";
import { Container } from "../../components/ui/container";
import "./experience.css";
import { EXPERIENCES } from "./experience-constants";

export function ExperienceSection() {
  return (
    <section
      id="experience"
      className="relative py-28 bg-[#f5f4f0] dark:bg-[#111110] overflow-hidden"
    >
      <div className="absolute inset-0 exp-grid -z-10 pointer-events-none" />

      <Container>
        <div className="grid lg:grid-cols-[1fr_2fr] gap-20 items-start">
          {/* ── LEFT — sticky header ───────────────────────────── */}
          <motion.div
            className="lg:sticky lg:top-28"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <span className="exp-label">Experiencia</span>
            <h2 className="exp-heading mt-4">
              Mi camino en el mundo del desarrollo de <p className="exp-heading-accent">software</p>
            </h2>
            <p className="exp-subtitle mt-5">
              Desde el aprendizaje autodidacta hasta proyectos reales — cada
              etapa sumó perspectiva y criterio técnico.
            </p>

            {/* small stat */}
            <div className="exp-years-badge mt-10">
              <span className="exp-years-value">3+</span>
              <span className="exp-years-label">años construyendo</span>
            </div>
          </motion.div>

          {/* ── RIGHT — timeline ──────────────────────────────── */}
          <div className="relative">
            {/* vertical line */}
            <div className="exp-line" />

            {EXPERIENCES.map((exp, i) => (
              <motion.div
                key={exp.tag}
                className="exp-item"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                {/* node */}
                <div
                  className={`exp-node ${exp.status === "active" ? "exp-node-active" : ""}`}
                >
                  {exp.status === "active" && (
                    <div className="exp-node-pulse" />
                  )}
                </div>

                {/* card */}
                <div className="exp-card group">
                  <div className="exp-card-bar" />

                  <div className="exp-card-top">
                    <span className="exp-card-tag">{exp.tag}</span>
                    {exp.status === "active" && (
                      <span className="exp-active-badge">Actual</span>
                    )}
                  </div>

                  <h3 className="exp-card-role mt-3">{exp.role}</h3>

                  <p className="exp-card-meta mt-1">
                    {exp.company}
                    <span className="exp-meta-sep">·</span>
                    {exp.period}
                  </p>

                  <p className="exp-card-desc mt-4">{exp.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
