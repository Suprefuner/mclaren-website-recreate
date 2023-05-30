import { motion } from "framer-motion"

export default function AnimatedLetters({ title, media = "desktop" }) {
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
      y: media === "desktop" ? 400 : 150,
    },
    animate: {
      y: 0,
      transition: {
        ease: [0.6, 0.01, -0.05, 0.95],
        duration: 1,
      },
    },
  }

  return (
    <motion.div
      variants={containerVar}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      className="overflow-hidden"
    >
      {[...title].map((letter, i) => {
        if (letter === " ") {
          return (
            <span key={i}>
              <motion.span
                className="hidden xl:inline-block xl:min-w-[30px]"
                variants={letterVar}
              >
                {letter}
              </motion.span>
              <br className="block xl:hidden " />
            </span>
          )
        }

        return (
          <motion.span
            className="inline-block min-w-[30px]"
            variants={letterVar}
            key={i}
          >
            {letter}
          </motion.span>
        )
      })}
    </motion.div>
  )
}
