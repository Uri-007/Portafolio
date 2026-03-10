import { motion } from "framer-motion";
import { Container } from "../../components/ui/container";

const experiences = [
  {
    role: "Frontend Developer",
    company: "Freelance",
    period: "2023 - Present",
    description:
      "Desarrollo de aplicaciones web modernas utilizando React, TypeScript y TailwindCSS, enfocadas en rendimiento y experiencia de usuario.",
  },
  {
    role: "Software Developer",
    company: "Personal Projects",
    period: "2022 - 2023",
    description:
      "Construcción de proyectos fullstack utilizando Node.js, APIs REST y bases de datos SQL para fortalecer arquitectura y escalabilidad.",
  },
  {
    role: "Computer Science Student",
    company: "Self Learning",
    period: "2021 - 2022",
    description:
      "Aprendizaje intensivo de desarrollo web moderno, estructuras de datos y buenas prácticas de ingeniería de software.",
  },
];

export function ExperienceSection() {
  return (
    <section id="experience" className="py-28 bg-white dark:bg-neutral-950">
      <Container>
        {/* TITLE */}
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold text-neutral-900 dark:text-white">
            Experience
          </h2>

          <p className="mt-4 text-neutral-600 dark:text-neutral-400">
            Mi camino en el desarrollo de software.
          </p>
        </div>

        {/* TIMELINE */}
        <div className="relative max-w-3xl mx-auto">
          {/* vertical line */}
          <div className="absolute left-4 top-0 bottom-0 w-[2px] bg-neutral-200 dark:bg-neutral-800" />

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.role}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative pl-12 mb-12"
            >
              {/* circle */}
              <div className="absolute left-2 top-2 w-4 h-4 rounded-full bg-neutral-900 dark:bg-white" />

              {/* card */}
              <div className="p-6 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900">
                <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">
                  {exp.role}
                </h3>

                <p className="text-sm text-neutral-500 mt-1">
                  {exp.company} • {exp.period}
                </p>

                <p className="mt-4 text-neutral-600 dark:text-neutral-400">
                  {exp.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
