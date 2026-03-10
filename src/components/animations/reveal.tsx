import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { useInView } from "react-intersection-observer";

interface Props {
  children: ReactNode;
}

export function Reveal({ children }: Props) {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
    >
      {children}
    </motion.div>
  );
}
