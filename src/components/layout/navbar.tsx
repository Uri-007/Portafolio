import { Github, Linkedin, Moon, Sun, Menu, X } from "lucide-react";
import { useTheme } from "../../hooks/use-theme";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import logoDark from "../../assets/logo4.png";
import logoLight from "../../assets/logo2.png";

const links = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const { toggleTheme, theme } = useTheme();
  const [open, setOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      className="fixed top-0 w-full z-50 backdrop-blur-xl bg-white/70 dark:bg-neutral-950/70 border-b border-neutral-200 dark:border-neutral-800"
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
        {/* LOGO */}
        <a
          href="#home"
          className="font-bold text-lg tracking-tight hover:opacity-80 transition"
        >
          <img
            src={theme === "dark" ? logoDark : logoLight}
            alt="UCS Logo"
            className="h-9 object-contain"
          />
        </a>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex gap-8 text-sm font-medium">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="relative text-neutral-600 dark:text-neutral-300 hover:text-black dark:hover:text-white transition"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-4">
          {/* SOCIAL */}
          <a
            href="https://github.com"
            target="_blank"
            className="text-neutral-600 dark:text-neutral-300 hover:text-black dark:hover:text-white transition"
          >
            <Github size={20} />
          </a>

          <a
            href="https://linkedin.com"
            target="_blank"
            className="text-neutral-600 dark:text-neutral-300 hover:text-black dark:hover:text-white transition"
          >
            <Linkedin size={20} />
          </a>

          {/* THEME */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg hover:bg-neutral-200 dark:hover:bg-neutral-800 transition"
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          {/* MOBILE BUTTON */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 rounded-lg hover:bg-neutral-200 dark:hover:bg-neutral-800 transition"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden border-t border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950"
          >
            <div className="flex flex-col p-6 gap-6 text-lg">
              {links.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-neutral-700 dark:text-neutral-300 hover:text-black dark:hover:text-white transition"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
