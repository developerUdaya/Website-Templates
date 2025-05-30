import { motion, Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ReactNode } from "react";

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const childVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

export default function FadeInSection({ children }: { children: ReactNode }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.95 });

  const wrappedChildren = Array.isArray(children)
    ? children
    : [children];

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      {wrappedChildren.map((child, index) => (
        <motion.div key={index} variants={childVariants}>
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
}
