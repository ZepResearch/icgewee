"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Users, GlassWater, BeefIcon as Burger, LightbulbIcon } from "lucide-react"
import Image from "next/image"

export default function AfterpartySection() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  const features = [
    {
      highlight: "2000+",
      text: "ATTENDEES",
      icon: <Users className="w-12 h-12 text-purple-300 fill-purple-300 stroke-[1.5]" />,
      color: "bg-purple-900",
    },
    {
      highlight: "BRIGHT SHOW",
      text: "TILL THE MORNING",
      icon: <LightbulbIcon  className="w-12 h-12 text-purple-300 stroke-[1.5]" />,
       
      color: "bg-purple-900",
    },
    {
      highlight: "UNLIMITED",
      text: "BAR AND HOOKAHS",
      icon: <GlassWater className="w-12 h-12 text-purple-300 stroke-[1.5]" />,
      color: "bg-purple-900",
    },
    {
      highlight: "TASTY",
      text: "APPETIZERS",
      icon: <Burger className="w-12 h-12 text-purple-300 stroke-[1.5]" />,
      color: "bg-purple-900",
    },
  ]

  return (
    <section className="w-full py-16 md:py-24  overflow-hidden">
      <div className="container max-w-7xl px-4 md:px-6 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <motion.h3
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-[#e6ff00] text-2xl md:text-3xl font-bold tracking-tighter"
            >
              21 MAY 21:00
            </motion.h3>
            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-white text-4xl md:text-6xl font-extrabold tracking-tighter"
            >
              AFTER PARTY
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <Button
                className="bg-[#e6ff00] hover:bg-[#c8df00] text-[#1a0b38] font-bold text-lg px-8 py-6 rounded-full"
                size="lg"
              >
                BUY TICKET <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
          </motion.div>

          <motion.div variants={container} initial="hidden" animate="show" className="grid gap-4">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={item}
                className={`${feature.color} rounded-2xl p-6 flex items-center justify-between shadow-lg bg-gradient-to-r from-pruple-600/50 to-purple-500/10`}
              >
                <div className="space-y-2">
                  <h3 className="text-[#e6ff00] text-xl md:text-xl font-bold">{feature.highlight}</h3>
                  <p className="text-white text-lg md:text-3xl font-semibold">{feature.text}</p>
                </div>
                <motion.div whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                  {feature.icon}
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

