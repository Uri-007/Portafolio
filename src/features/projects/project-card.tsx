import { Github, ExternalLink, ArrowUpRight } from "lucide-react";
import type { Project } from "../../types/project";


interface Props {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: Props) {
  return (
    <article className="project-card group">
      {/* top accent bar */}
      <div className="project-card-bar" />

      {/* IMAGE */}
      <div className="project-image-wrap">
        <img
          src={project.image}
          alt={project.title}
          className="project-image"
          draggable={false}
        />
        <div className="project-image-overlay" />

        {/* hover links */}
        <div className="project-links">
          {project.github && project.github !== "#" && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
              aria-label="GitHub"
            >
              <Github size={15} strokeWidth={1.8} />
            </a>
          )}
          {project.demo && project.demo !== "#" && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
              aria-label="Demo"
            >
              <ExternalLink size={15} strokeWidth={1.8} />
            </a>
          )}
        </div>

        {/* index tag */}
        <span className="project-index">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      {/* CONTENT */}
      <div className="project-content">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-desc mt-2">{project.description}</p>

        {/* tech */}
        <div className="project-tech mt-4">
          {project.tech.map((t) => (
            <span key={t} className="project-badge">
              {t}
            </span>
          ))}
        </div>

        {/* bottom CTA row */}
        <div className="project-cta mt-5">
          {project.demo && project.demo !== "#" ? (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="project-cta-link"
            >
              Ver proyecto
              <ArrowUpRight size={13} strokeWidth={2} />
            </a>
          ) : (
            <span className="project-cta-muted">En desarrollo</span>
          )}
        </div>
      </div>
    </article>
  );
}
