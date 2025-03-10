"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Globe } from "@/components/globe"

export default function GlobeSection() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <section className="relative flex min-h-[500px] w-full items-center justify-center overflow-hidden pb-24  ">
      {/* Purple triangle accent in top right */}
      <div
        className="absolute right-0 top-0 h-24 w-24 md:h-32 md:w-32 lg:h-40 lg:w-40"
        style={{
          clipPath: "polygon(100% 0, 0 0, 100% 100%)",
          background: "rgba(167, 139, 250, 0.3)",
        }}
      />

      <div className="container grid grid-cols-1 gap-8 px-4 md:grid-cols-2 md:gap-12 lg:gap-16">
        {/* Globe */}
        <div
          className="relative flex h-[300px] items-center justify-center md:h-[400px] lg:h-[500px]"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <Globe className={`transition-transform duration-300 ${isHovered ? "scale-110" : "scale-100"}`} />
        </div>

        {/* Text content */}
        <div className="flex flex-col items-start justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >    
            <h2 className="text-3xl font-bold leading-tight text-purple-300 md:text-4xl lg:text-5xl">
            ATTENDING THIS CONFERENCE OFFERS INSIGHTS <span className="text-purple-300">INTO LEADING ORGANIZATIONS</span>{" "}
              <span className="text-gray-400">
              {" "}
                <span role="img" aria-label="microphone">
                  🎤
                </span>
                , EMERGING TRENDS{" "}
                <span role="img" aria-label="sparkles">
                  ✨
                </span>{" "}
                AND IMPACTFUL STRATEGIES IN GENDER EQUALITY , WOMEN EMPOWERMENT & ENTREPRENEURSHIP.
              </span>
            </h2>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

