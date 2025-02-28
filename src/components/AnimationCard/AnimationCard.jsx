"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function AnimationCard({ children, delay, className }) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeOut", delay }}
      className={`${className}`}
    >
      {children}
    </motion.div>
  );
}
