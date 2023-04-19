import { motion } from "framer-motion"

const containerVar = {
  animate: {
    transition: {
      delayChildren: 0,
      staggerChildren: 0.1,
    },
  },
}

const letterVar = {
  initial: {
    y: 400,
  },
  animate: {
    y: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1,
    },
  },
}

export default function AnimatedLetters({ title, inView }) {
  return (
    <motion.div
      variants={containerVar}
      initial="initial"
      animate={inView ? "" : "animate"}
      whileInView={inView ? "animate" : ""}
      viewport={inView ? { once: true } : null}
      className="overflow-hidden"
    >
      {[...title].map((letter, i) => (
        <motion.span
          className="inline-block min-w-[30px]"
          variants={letterVar}
          key={i}
        >
          {letter}
        </motion.span>
      ))}
    </motion.div>
  )
}
