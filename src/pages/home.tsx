import { Helmet } from "react-helmet-async";
import { HeroSection } from "../features/hero/hero-section";
import { ProjectsSection } from "../features/projects/projects-section";
import { About } from "../features/about/about-section";
import { SkillsSection } from "../features/skills/skills-section";
import { ExperienceSection } from "../features/experience/experience-section";
import { ContactSection } from "../features/contact/contact-section";

export function Home() {
  return (
    <>
      <Helmet>
        <title>Uriel Dev Portfolio</title>
      </Helmet>

      <HeroSection />
      <About />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <ContactSection />
    </>
  );
}
