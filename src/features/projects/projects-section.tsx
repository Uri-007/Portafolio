import { motion } from "framer-motion";
import type { Project } from "../../types/project";
import { ProjectCard } from "./project-card";
import { Container } from "../../components/ui/container";
import image1 from "../../assets/image1.png";
import image2 from "../../assets/image2.png";
import image3 from "../../assets/image3.png";
import "./projects.css";

const projects: Project[] = [
  {
    id: "1",
    title: "Developer Portfolio",
    description:
      "Portafolio moderno construido con React, TypeScript y animaciones con Framer Motion.",
    image: image1,
    tech: ["React", "TypeScript", "Tailwind", "Framer Motion"],
    github: "#",
    demo: "#",
  },
  {
    id: "2",
    title: "FixPen",
    description:
      "Landing page moderna con diseño responsive, animaciones fluidas y formulario de contacto integrado.",
    image: image2,
    tech: ["React", "TypeScript", "Tailwind", "Framer Motion"],
    github: "https://github.com/Uri-007/LandingPage-FixPen",
    demo: "https://fixpen.netlify.app/",
  },
  {
    id: "3",
    title: "Melp Restaurants",
    description:
      "Aplicación web para explorar y filtrar restaurantes con interfaz de búsqueda dinámica.",
    image: image3,
    tech: ["React", "TypeScript", "Tailwind", "Framer Motion"],
    github: "https://github.com/Uri-007/restaurants-web",
    demo: "https://uri-007.github.io/restaurants-web/",
  },
];

export function ProjectsSection() {
  return (
    <section
      id="projects"
      className="relative py-28 bg-[#f5f4f0] dark:bg-[#111110] overflow-hidden"
    >
      {/* darker section — inverted from rest for contrast */}
      <div className="absolute inset-0 projects-grid -z-10 pointer-events-none" />

      <Container>
        {/* Header */}
        <motion.div
          className="mb-16 max-w-xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <span className="projects-label">Proyectos</span>
          <h2 className="projects-heading mt-4">
            Trabajo <p className="projects-heading-accent">seleccionado</p>
          </h2>
          <p className="projects-subtitle mt-4">
            Algunos de los proyectos en los que he puesto esfuerzo real — desde
            la idea hasta el despliegue.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <ProjectCard project={project} index={i} />
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
