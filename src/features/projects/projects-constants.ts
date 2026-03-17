import type { Project } from "../../types/project";
import image1 from "../../assets/image1.png";
import image2 from "../../assets/image2.png";
import image3 from "../../assets/image3.png";
import image4 from "../../assets/image4.png";
import image5 from "../../assets/image5.png";
import image6 from "../../assets/image6.png";
import image7 from "../../assets/image7.png";
import image8 from "../../assets/image8.png";
import image9 from "../../assets/image9.png";

export const projects: Project[] = [
  {
    id: "1",
    title: "Talentos",
    description:
      "Plataforma web para gestión de talentos y perfiles profesionales. Desarrollada con React, Redux y consumo de APIs REST, implementando arquitectura modular y manejo global de estado.",
    image: image1,
    tech: [
      "React",
      "JavaScript",
      "CSS",
      "Bootstrap",
      "Framer Motion",
      "Redux",
      "Axios",
    ],
    github: "",
    demo: "https://sandbox-mis-talentos.amsmx.pro/#/sign-in",
    status: "completed",
  },

  {
    id: "2",
    title: "FixPen",
    description:
      "Landing page corporativa enfocada en conversión de usuarios con diseño responsive, optimización de rendimiento y buenas prácticas de UI.",
    image: image2,
    tech: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    github: "https://github.com/Uri-007/LandingPage-FixPen",
    demo: "https://fixpen.netlify.app/",
    status: "completed",
  },

  {
    id: "3",
    title: "Melp Restaurants",
    description:
      "Aplicación web para búsqueda de restaurantes con mapas interactivos usando Leaflet, filtrado dinámico y arquitectura con TypeScript.",
    image: image3,
    tech: ["React", "TypeScript", "Tailwind", "Leaflet"],
    github: "https://github.com/Uri-007/restaurants-web",
    demo: "https://uri-007.github.io/restaurants-web/",
    status: "completed",
  },

  {
    id: "4",
    title: "Demon Slayer App",
    description:
      "SPA desarrollada en Vue con Pinia y consumo de API externa. Incluye animaciones avanzadas con GSAP y UI moderna.",
    image: image4,
    tech: ["Vue", "JavaScript", "Tailwind", "Pinia", "Axios", "GSAP"],
    github: "https://github.com/Uri-007/demon-slayer-app",
    demo: "",
    status: "completed",
  },

  {
    id: "5",
    title: "Galería de plantas",
    description:
      "Aplicación en Next.js y TypeScript para visualización de especies con drag & drop y animaciones modernas.",
    image: image5,
    tech: ["Next.js", "TypeScript", "Tailwind", "Framer Motion", "Dnd Kit"],
    github: "https://github.com/Uri-007/plants-gallery",
    demo: "",
    status: "completed",
  },

  {
    id: "6",
    title: "Aplicación de clima",
    description:
      "Aplicación web que muestra clima en tiempo real consumiendo APIs externas con manejo de estados y UI con Material UI.",
    image: image6,
    tech: ["React", "JavaScript", "Fetch", "Material UI"],
    github: "https://github.com/Uri-007/app-clima",
    demo: "https://lighthearted-dodol-84d527.netlify.app/",
    status: "completed",
  },

  {
    id: "7",
    title: "Rick & Morty Explorer",
    description:
      "Aplicación React que consume la API de Rick & Morty con búsqueda dinámica y componentes reutilizables.",
    image: image7,
    tech: ["React", "JavaScript", "Fetch", "Material UI"],
    github: "https://github.com/Uri-007/App-rick-morty-uriel",
    demo: "https://monumental-vacherin-0e1176.netlify.app/",
    status: "completed",
  },

  {
    id: "8",
    title: "Service Desk System",
    description:
      "Sistema interno para gestión de tickets de soporte técnico desarrollado con React y Redux. Proyecto empresarial privado.",
    image: image8,
    tech: ["React", "JavaScript", "Axios", "Material UI", "Redux"],
    github: "",
    demo: "",
    status: "private",
  },

  {
    id: "9",
    title: "Calculadora de paneles solares",
    description:
      "Sistema web para cotización de paneles solares con cálculo dinámico de costos y consumo energético.",
    image: image9,
    tech: ["Bootstrap", "JavaScript", "Ajax", "Jquery"],
    github: "",
    demo: "https://cotizador.enpower.mx/public/index.php",
    status: "completed",
  },
];
