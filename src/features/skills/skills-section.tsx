import { motion } from "framer-motion";
import { Container } from "../../components/ui/container";
import "./skills.css";
import { SKILLS } from "./skills-contants";

export function SkillsSection() {
  return (
    <section
      id="skills"
      className="relative py-28 bg-[#f5f4f0] dark:bg-[#111110] overflow-hidden"
    >
      <div className="absolute inset-0 skills-grid -z-10 pointer-events-none" />

      <Container>
        {/* Header */}
        <motion.div
          className="mb-16 max-w-xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <span className="skills-label">Skills</span>
          <h2 className="skills-heading mt-4">
            Tecnologías con las que{" "}
            <p className="skills-heading-accent">construyo</p>
          </h2>
          <p className="skills-subtitle mt-4">
            Herramientas y lenguajes que uso día a día para llevar ideas del
            diseño al despliegue.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-5">
          {SKILLS.map((skill, i) => (
            <motion.div
              key={skill.tag}
              className="skills-card group"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Card top bar */}
              <div className="skills-card-bar" />

              {/* Header row */}
              <div className="flex items-start justify-between mb-5">
                <div>
                  <p className="skills-card-tag">{skill.tag}</p>
                  <h3 className="skills-card-title mt-1">{skill.title}</h3>
                  <p className="skills-card-desc mt-1">{skill.desc}</p>
                </div>
              </div>

              {/* Tech items */}
              <div className="skills-items">
                {skill.items.map((item) => (
                  <div key={item.name} className="skills-item">
                    <div className="skills-item-logo-wrap">
                      <img
                        src={item.logo}
                        alt={item.name}
                        className="skills-item-logo"
                        draggable={false}
                        onError={(e) => {
                          (e.target as HTMLImageElement).style.display = "none";
                        }}
                      />
                    </div>
                    <span className="skills-item-name">{item.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
