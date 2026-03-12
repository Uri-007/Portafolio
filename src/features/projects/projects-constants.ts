import type { Project } from "../../types/project";
import image1 from "../../assets/image1.png";
import image2 from "../../assets/image2.png";
import image3 from "../../assets/image3.png";
import image4 from "../../assets/image4.png";
import image5 from "../../assets/image5.png";
import image6 from "../../assets/image6.png";
import image7 from "../../assets/image7.png";
import image8 from "../../assets/image8.png";

export const projects: Project[] = [
  {
    id: "1",
    title: "Talentos",
    description:
      "Portafolio moderno construido con React, TypeScript y animaciones con Framer Motion.",
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
    github: "#",
    demo: "#",
  },
  {
    id: "2",
    title: "FixPen",
    description:
      "Landing page moderna con diseño responsive, animaciones fluidas",
    image: image2,
    tech: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    github: "https://github.com/Uri-007/LandingPage-FixPen",
    demo: "https://fixpen.netlify.app/",
  },
  {
    id: "3",
    title: "Melp Restaurants",
    description:
      "Aplicación web para explorar y filtrar restaurantes con interfaz de búsqueda dinámica.",
    image: image3,
    tech: ["React", "TypeScript", "Tailwind", "Leaflet"],
    github: "https://github.com/Uri-007/restaurants-web",
    demo: "https://uri-007.github.io/restaurants-web/",
  },
  {
    id: "4",
    title: "Demon Slayer App",
    description: "Aplicación para ver personajes de  demon slayer",
    image: image4,
    tech: ["Vue", "JavaScript", "Tailwind", "Pinia", "Axios", "Gsap"],
    github: "https://github.com/Uri-007/demon-slayer-app",
    demo: "#",
  },
  {
    id: "5",
    title: "Galería de plantas",
    description: "Aplicación para ver diferentes tipos de plantas",
    image: image5,
    tech: ["Next.js", "TypeScript", "Tailwind", "Framer Motion", "Dnd Kit"],
    github: "https://github.com/Uri-007/plants-gallery",
    demo: "#",
  },
  {
    id: "6",
    title: "Aplicación de clima",
    description: "Aplicación para ver clima en diferentes ciudades",
    image: image6,
    tech: ["React", "JavaScript", "Fetch", "Material UI"],
    github: "https://github.com/Uri-007/app-clima",
    demo: "https://lighthearted-dodol-84d527.netlify.app/",
  },
  {
    id: "7",
    title: "Aplicación de Rick & Morty",
    description: "Aplicación para ver personajes de Rick & Morty",
    image: image7,
    tech: ["React", "JavaScript", "Fetch", "Material UI"],
    github: "https://github.com/Uri-007/App-rick-morty-uriel",
    demo: "https://monumental-vacherin-0e1176.netlify.app/",
  },
  {
    id: "8",
    title: "Service Desk",
    description: "Aplicación web de uso interno de Expide tu Factua",
    image: image8,
    tech: ["React", "JavaScript", "Axios", "Material UI", "Redux"],
    github: "https://github.com/Uri-007/App-rick-morty-uriel",
    demo: "https://monumental-vacherin-0e1176.netlify.app/",
  },
];
