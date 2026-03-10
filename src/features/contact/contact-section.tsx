import { motion } from "framer-motion";
import { Mail, Github, Linkedin } from "lucide-react";
import { Container } from "../../components/ui/container";

export function ContactSection() {
  return (
    <section id="contact" className="py-28 bg-neutral-50 dark:bg-neutral-950">
      <Container>
        {/* TITLE */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-neutral-900 dark:text-white">
            Contact
          </h2>

          <p className="mt-4 text-neutral-600 dark:text-neutral-400">
            ¿Tienes un proyecto o una idea? Me encantaría escucharla.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* INFO */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-neutral-900 dark:text-white">
              Hablemos
            </h3>

            <p className="mt-4 text-neutral-600 dark:text-neutral-400">
              Siempre estoy abierto a colaborar en proyectos interesantes,
              oportunidades laborales o simplemente para conversar sobre
              tecnología.
            </p>

            <div className="mt-8 flex gap-6">
              <a
                href="mailto:correo@email.com"
                className="flex items-center gap-2 text-neutral-700 dark:text-neutral-300 hover:text-black dark:hover:text-white transition"
              >
                <Mail size={20} />
                Email
              </a>

              <a
                href="https://github.com"
                target="_blank"
                className="flex items-center gap-2 text-neutral-700 dark:text-neutral-300 hover:text-black dark:hover:text-white transition"
              >
                <Github size={20} />
                Github
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                className="flex items-center gap-2 text-neutral-700 dark:text-neutral-300 hover:text-black dark:hover:text-white transition"
              >
                <Linkedin size={20} />
                LinkedIn
              </a>
            </div>
          </motion.div>

          {/* FORM */}
          <motion.form
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <input
              type="text"
              placeholder="Tu nombre"
              className="w-full px-4 py-3 rounded-xl border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 focus:outline-none focus:ring-2 focus:ring-neutral-900 dark:focus:ring-white"
            />

            <input
              type="email"
              placeholder="Tu email"
              className="w-full px-4 py-3 rounded-xl border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 focus:outline-none focus:ring-2 focus:ring-neutral-900 dark:focus:ring-white"
            />

            <textarea
              placeholder="Tu mensaje"
              rows={4}
              className="w-full px-4 py-3 rounded-xl border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 focus:outline-none focus:ring-2 focus:ring-neutral-900 dark:focus:ring-white"
            />

            <button className="px-6 py-3 rounded-xl bg-neutral-900 text-white dark:bg-white dark:text-black font-medium hover:opacity-90 transition">
              Enviar mensaje
            </button>
          </motion.form>
        </div>
      </Container>
    </section>
  );
}
