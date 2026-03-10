import type { Project } from "../../types/project";
import { ProjectCard } from "./project-card";
import { Container } from "../../components/ui/container";
import image1 from "../../assets/image1.png";
import image2 from "../../assets/image2.png";
import image3 from "../../assets/image3.png";

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
      "Portafolio moderno construido con React, TypeScript y animaciones con Framer Motion.",
    image: image2,
    tech: ["React", "TypeScript", "Tailwind", "Framer Motion"],
    github: "https://github.com/Uri-007/LandingPage-FixPen",
    demo: "https://fixpen.netlify.app/",
  },
  {
    id: "3",
    title: "Melp Restaurants",
    description:
      "Portafolio moderno construido con React, TypeScript y animaciones con Framer Motion.",
    image: image3,
    tech: ["React", "TypeScript", "Tailwind", "Framer Motion"],
    github: "https://github.com/Uri-007/restaurants-web",
    demo: "https://uri-007.github.io/restaurants-web/",
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="py-28 bg-white dark:bg-neutral-950">
      <Container>
        {/* TITLE */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-neutral-900 dark:text-white">
            Projects
          </h2>

          <p className="mt-4 text-neutral-600 dark:text-neutral-400">
            Algunos de los proyectos en los que he trabajado.
          </p>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </Container>
    </section>
  );
}
