import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import { Badge } from "../../components/ui/badge";
import type { Project } from "../../types/project";

interface Props {
  project: Project;
}

export function ProjectCard({ project }: Props) {
  return (
    <motion.article
      whileHover={{ y: -8 }}
      className="group rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 overflow-hidden transition"
    >
      {/* IMAGE */}
      <div className="relative overflow-hidden">
        <img
          src={project.image}
          className="w-full h-48 object-cover transition duration-500 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100">
          <a
            href={project.github}
            target="_blank"
            className="p-3 rounded-full bg-white text-black hover:scale-110 transition"
          >
            <Github size={18} />
          </a>

          <a
            href={project.demo}
            target="_blank"
            className="p-3 rounded-full bg-white text-black hover:scale-110 transition"
          >
            <ExternalLink size={18} />
          </a>
        </div>
      </div>

      {/* CONTENT */}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-neutral-900 dark:text-white">
          {project.title}
        </h3>

        <p className="text-neutral-600 dark:text-neutral-400 mt-2">
          {project.description}
        </p>

        {/* TECH */}
        <div className="flex flex-wrap gap-2 mt-4">
          {project.tech.map((tech) => (
            <Badge key={tech}>{tech}</Badge>
          ))}
        </div>
      </div>
    </motion.article>
  );
}
