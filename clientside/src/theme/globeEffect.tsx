import { motion, useScroll, useTransform } from "framer-motion";

export const GlobeEffect = ({ children }: { children: React.ReactNode }) => {
  const { scrollYProgress } = useScroll();

  const scale = useTransform(scrollYProgress, [0.1, 0.8], [1, 2]);

  const x = 0.2;
  const y = 0.2;

  return (
    <motion.div
      style={{ scale, x, y, originX: 0.5, originY: 0.5 }}
      transition={{ duration: 2, ease: "easeInOut" }} // smooth & slower
    >
      {children}
    </motion.div>
  );
};
