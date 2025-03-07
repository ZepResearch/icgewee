"use client"

import { motion } from "framer-motion"
import { ArrowRight, Briefcase, Globe2, Users2, Volume2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export default function StatsSection() {
  const stats = [
    {
      icon: <Users2 className="h-12 w-12" />,
      value: "3500+",
      label: "ATTENDEES",
      highlight: true,
    },
    {
      icon: <Volume2 className="h-12 w-12" />,
      value: "30",
      label: "REPORTS",
      highlight: false,
    },
    {
      icon: <Globe2 className="h-12 w-12" />,
      value: "PRE &",
      label: "AFTERPARTY",
      highlight: false,
    },
    {
      icon: <Briefcase className="h-12 w-12" />,
      value: "200",
      label: "COMPANIES",
      highlight: false,
    },
  ]

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
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  }

  return (
    <section className="w-full py-16 ">
      <div className="container px-4 mx-auto">
        <motion.div
          className="flex flex-col items-center gap-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-6xl">
            {stats.map((stat, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="relative overflow-hidden group bg-[#2D2665] border-none p-8 rounded-3xl">
                  <motion.div
                    className="absolute inset-0 bg-[#3c3380] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={false}
                    whileHover={{ scale: 1.05 }}
                  />
                  <div className="relative z-10 flex flex-col items-center text-center gap-4">
                    <div className="text-[#e6ff00]">{stat.icon}</div>
                    <div className="space-y-1">
                      <h3 className="text-3xl font-bold text-white tracking-wider">{stat.value}</h3>
                      <p className="text-xl text-white tracking-wider">{stat.label}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Buy Ticket Button */}
          <motion.div variants={itemVariants}>
            <Button
              size="lg"
              className=" bg-gradient-to-r from-yellow-400 to-lime-500 giver hover:from-yellow-500 hover:to-lime-600 text-[#ffffff] hover:bg-[#d1e900] text-lg font-semibold px-8 py-6 rounded-full"
            >
              BUY TICKET
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

