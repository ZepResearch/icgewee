"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

export default function FeatureSection() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 },
    },
  }

  const titleVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 100,
      },
    },
  }

  // Categories with their highlight status
  const topRow = [
    { name: "Women Entrepreneurs", highlighted: true },
    { name: "Gender Equality Advocates", highlighted: false },
    { name: "Corporate Leaders", highlighted: false },
    { name: "Investors & Mentors", highlighted: false },
  ]

  const bottomRow = [
    { name: "Policymakers ", highlighted: false },
    { name: "Academicians & Researchers", highlighted: false },
    { name: "Social Impact Leaders", highlighted: true },
  ]

  return (
    <section className="w-full max-w-7xl mx-auto py-16 pt-12 text-white">
      <div className="container px-4 mx-auto">
        <motion.div
          className="flex flex-col items-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          {/* Title */}
          <motion.h1 className="text-6xl md:text-8xl font-bold mb-16 tracking-wider" variants={titleVariants}>
           ICGEWEE 2025
          </motion.h1>

          <div className="w-full   flex flex-col justify-start items-start">
            {/* Top row */}
            <div className="flex flex-wrap justify-center gap-4 mb-4">
              {topRow.map((category, index) => (
                <motion.div key={index} className="flex-none" variants={itemVariants}>
                  <div
                    className={cn(
                      "rounded-full border border-white/20 py-3 px-6 whitespace-nowrap",
                      "transition-all duration-300 hover:bg-white/10 cursor-pointer",
                      category.highlighted ? "text-[#e6ff00] font-bold" : "text-white",
                    )}
                  >
                    <span className="text-sm md:text-base lg:text-2xl font-medium">{category.name}</span>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Center logo */}
            {/* <motion.div
              className="flex justify-center ite "
              variants={itemVariants}
              animate={{
                rotate: 360,
                transition: {
                  duration: 20,
                  ease: "linear",
                  repeat: Number.POSITIVE_INFINITY,
                },
              }}
            >
              <div className="w-20 h-20 rounded-full bg-[#6c63ff]/20 flex items-center justify-center">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L14.5 9.5H22L16 14.5L18.5 22L12 17L5.5 22L8 14.5L2 9.5H9.5L12 2Z" fill="#6c63ff" />
                </svg>
              </div>
            </motion.div> */}

            {/* Bottom row */}
            <div className="flex flex-wrap justify-center gap-4 mt-1">
              {bottomRow.map((category, index) => (
                <motion.div key={index} className="flex-none" variants={itemVariants}>
                  <div
                    className={cn(
                      "rounded-full border border-white/20 py-3 px-6 whitespace-nowrap",
                      "transition-all duration-300 hover:bg-white/10 cursor-pointer",
                      category.highlighted ? "text-[#e6ff00] font-bold" : "text-white",
                    )}
                  >
                    <span className="text-sm md:text-base lg:text-3xl font-medium">{category.name}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

