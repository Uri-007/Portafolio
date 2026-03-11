import { motion } from "framer-motion";
import { HERO, TECH_ITEMS } from "./hero.constants";
import { Container } from "../../components/ui/container";
import profile from "../../assets/avatar.png";
import ligthProfile from "../../assets/lightAvatar.png";
import "./hero.css";
import { useTheme } from "../../hooks/use-theme";

export function HeroSection() {
  const { theme } = useTheme();
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-[#f5f4f0] dark:bg-[#111110]"
    >
      <div className="absolute inset-0 hero-grid -z-10" />

      <div className="hero-glow-warm absolute top-[-100px] right-[10%] -z-10" />
      <div
        className="hero-glow-warm absolute bottom-[-100px] left-[5%] -z-10"
        style={{ opacity: 0.5 }}
      />

      <Container>
        <div className="grid lg:grid-cols-2 gap-20 items-center min-h-screen py-28 lg:py-0">
          {/* ── LEFT ─────────────────────────────────────────── */}
          <div className="max-w-xl">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="hero-badge">
                <span className="hero-badge-indicator">
                  <span className="hero-badge-dot" />
                  Disponible
                </span>
                Para nuevos proyectos
              </span>
            </motion.div>

            <motion.h1
              className="hero-title mt-7 text-5xl md:text-6xl xl:text-[72px]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.1 }}
            >
              {HERO.title}{" "}
              <p className="hero-title-accent">{HERO.titleAccent}</p>
            </motion.h1>

            <motion.p
              className="hero-subtitle mt-6 text-base md:text-lg max-w-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.2 }}
            >
              {HERO.subtitle}
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-3 mt-9"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.3 }}
            >
              <a href="#contact" className="hero-btn-primary">
                Contáctame
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path
                    d="M2 7h10M8 3l4 4-4 4"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
              <a href="#projects" className="hero-btn-secondary">
                Ver proyectos
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.4 }}
            >
              <div className="hero-divider" />
              <div className="flex gap-10">
                {HERO.stats.map((s) => (
                  <div key={s.label}>
                    <div className="hero-stat-value">{s.value}</div>
                    <div className="hero-stat-label">{s.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* ── RIGHT ────────────────────────────────────────── */}
          <motion.div
            className="relative hidden lg:flex justify-center items-center min-h-[500px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.25 }}
          >
            <motion.div
              className="hero-avatar-frame"
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.35 }}
            >
              <img
                src={theme === "dark" ? profile : ligthProfile}
                alt="Uriel — Software Engineer"
                draggable={false}
              />
            </motion.div>

            {TECH_ITEMS.map((tech, i) => (
              <motion.div
                key={tech.id}
                className={`hero-tech ${tech.className}`}
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.45, delay: 0.55 + i * 0.09 }}
              >
                <img
                  src={tech.logo}
                  alt={tech.label}
                  className="tech-logo"
                  draggable={false}
                />
                {tech.label}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Container>

      {/* Scroll indicator */}
      <div className="hero-scroll">
        <div className="hero-scroll-mouse">
          <div className="hero-scroll-wheel" />
        </div>
        <span className="hero-scroll-label">Scroll</span>
      </div>
    </section>
  );
}
