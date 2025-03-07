"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Plus } from "lucide-react" 

const highlights = [
  {
    title: "UP-TO-DATE KNOWLEDGES",
    description:
      "Extraordinary set of reports presented by key market players, fresh faces on stage, and, of course, new approaches to affiliate marketing – this is why you've been attending MAC for years.",
    imageSrc: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "EXHIBITION MARKET",
    description:
      "Connect with industry leaders and innovative companies showcasing the latest products and services. Network with professionals and discover new opportunities for collaboration.",
    imageSrc: "https://images.unsplash.com/photo-1582192730841-2a682d7375f9?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "PARTIES AND MEETUPS",
    description:
      "Experience unforgettable networking events, exclusive parties, and casual meetups that foster meaningful connections in a relaxed atmosphere.",
    imageSrc: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
]

export default function ConferenceHighlights() {
  const [activeIndex, setActiveIndex] = useState(null)

  return (
    <div className="w-full min-h-full  text-white py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-20 tracking-wider">
          CONFERENCE
          <br />
          HIGHLIGHTS
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {highlights.map((highlight, index) => (
            <div key={index} className="flex flex-col space-y-4">
              <div className="flex items-center space-x-3">
                <Plus className="w-6 h-6 text-white" />
                <h2 className={`text-xl md:text-2xl font-bold ${index === 0 ? "text-yellow-300" : "text-white"}`}>
                  {highlight.title}
                </h2>
              </div>

              <motion.div
                className="relative overflow-hidden rounded-xl h-64 md:h-72"
                onHoverStart={() => setActiveIndex(index)}
                onHoverEnd={() => setActiveIndex(null)}
                initial={{ opacity: 1 }}
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src={highlight.imageSrc || "/placeholder.svg"}
                  alt={highlight.title}
                  fill
                  className="object-cover"
                />

                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-purple-900/90 to-transparent p-6 flex items-end"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{
                    opacity: activeIndex === index ? 1 : 0,
                    y: activeIndex === index ? 0 : 20,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="text-white text-sm md:text-base">{highlight.description}</p>
                </motion.div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

