import { motion } from "framer-motion"
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
}

const Reveal = ({ children }: RevealProps) => {
  return (
    <motion.div
      initial="initial"
      whileInView="hovered"
      className="relative block overflow-hidden max-w-full uppercase sm:text-4xl lg:text-7xl md:text-5xl font-mono text-white font-bold leading-tight"
      style={{
        lineHeight: 0.95
      }}
    >
      <motion.div
        variants={{
          initial: { y: 0 },
          hovered: { y: "-100%" }
        }}
        transition={{
          delay:0.25
        }}
      >
        {children}
      </motion.div>
      <motion.div
        variants={{
          initial: { y: "100%" },
          hovered: { y: 0 }
        }}
        transition={{
          delay:0.5
        }}
        className="absolute inset-0">
        {children}
      </motion.div>
    </motion.div>
  )
}

export default Reveal
