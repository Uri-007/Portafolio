import { motion } from "framer-motion";
import { Code2, Rocket, Brain } from "lucide-react";

export function About() {
  return (
    <section
      id="about"
      className="relative py-28 px-6 bg-white dark:bg-neutral-950"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-sm font-semibold text-neutral-500 mb-3">
            ABOUT ME
          </p>

          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            I build modern
            <span className="text-neutral-900 dark:text-white">
              {" "}
              web experiences
            </span>
          </h2>

          <p className="text-neutral-600 dark:text-neutral-400 text-lg leading-relaxed mb-6">
            I'm a passionate developer focused on building modern, scalable and
            beautiful web applications. I enjoy creating interfaces that feel
            fast, intuitive and visually engaging.
          </p>

          <p className="text-neutral-600 dark:text-neutral-400 text-lg leading-relaxed">
            My goal is to combine clean code, strong architecture and great user
            experience to deliver products that people genuinely enjoy using.
          </p>
        </motion.div>

        {/* RIGHT SIDE CARDS */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid gap-6"
        >
          {/* CARD 1 */}
          <div className="group p-6 rounded-2xl border border-neutral-200 dark:border-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-700 transition bg-neutral-50 dark:bg-neutral-900">
            <Code2 className="mb-4 text-neutral-700 dark:text-neutral-300" />

            <h3 className="font-semibold text-lg mb-2">Clean Code</h3>

            <p className="text-neutral-600 dark:text-neutral-400 text-sm">
              I focus on writing maintainable and scalable code using modern
              technologies like React, TypeScript and Node.
            </p>
          </div>

          {/* CARD 2 */}
          <div className="group p-6 rounded-2xl border border-neutral-200 dark:border-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-700 transition bg-neutral-50 dark:bg-neutral-900">
            <Rocket className="mb-4 text-neutral-700 dark:text-neutral-300" />

            <h3 className="font-semibold text-lg mb-2">Performance</h3>

            <p className="text-neutral-600 dark:text-neutral-400 text-sm">
              I love building fast interfaces with optimized rendering, modern
              tooling and smooth user experiences.
            </p>
          </div>

          {/* CARD 3 */}
          <div className="group p-6 rounded-2xl border border-neutral-200 dark:border-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-700 transition bg-neutral-50 dark:bg-neutral-900">
            <Brain className="mb-4 text-neutral-700 dark:text-neutral-300" />

            <h3 className="font-semibold text-lg mb-2">Problem Solving</h3>

            <p className="text-neutral-600 dark:text-neutral-400 text-sm">
              I enjoy solving complex problems and transforming ideas into
              reliable and elegant digital solutions.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
