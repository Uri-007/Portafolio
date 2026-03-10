import { motion } from "framer-motion";
import { Code, Database, Wrench } from "lucide-react";
import { Container } from "../../components/ui/container";

const skills = [
  {
    title: "Frontend",
    icon: Code,
    items: ["React", "TypeScript", "TailwindCSS", "Next.js"],
  },
  {
    title: "Backend",
    icon: Database,
    items: ["Node.js", "Express", "MySQL", "REST APIs"],
  },
  {
    title: "Tools",
    icon: Wrench,
    items: ["Git", "Docker", "Linux", "Figma"],
  },
];

export function SkillsSection() {
  return (
    <section id="skills" className="py-28 bg-neutral-50 dark:bg-neutral-950">
      <Container>
        {/* TITLE */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-neutral-900 dark:text-white">
            Skills
          </h2>

          <p className="mt-4 text-neutral-600 dark:text-neutral-400">
            Tecnologías y herramientas con las que construyo aplicaciones
            modernas.
          </p>
        </div>

        {/* CARDS */}
        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((skill, index) => {
            const Icon = skill.icon;

            return (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15 }}
                viewport={{ once: true }}
                className="p-8 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 hover:border-neutral-300 dark:hover:border-neutral-700 transition"
              >
                <Icon className="mb-4 text-neutral-700 dark:text-neutral-300" />

                <h3 className="text-xl font-semibold mb-4">{skill.title}</h3>

                <ul className="space-y-2">
                  {skill.items.map((item) => (
                    <li
                      key={item}
                      className="text-neutral-600 dark:text-neutral-400"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
