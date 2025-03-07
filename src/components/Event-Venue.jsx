"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { MapPin, Play } from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"

export default function EventSection() {
  return (
    <section className="relative min-h-full w-full overflow-hidden  px-4 py-20">
      {/* Background gradient effects */}
      <div className=" " />

      <div className="container mx-auto max-w-7xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <h1 className="text-4xl font-bold tracking-tight text-white md:text-6xl lg:text-7xl text-left">
            GRAND <span className="text-[#c5ff00]">PRE</span> <span className="text-[#a78bfa]">& AFTERPARTY</span>
            <br />
            <span className="mt-2 block">WITH EXCLUSIVE SHOW</span>
          </h1>
        </motion.div>

        {/* Content Grid */}
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2">
          {/* Left Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="relative overflow-hidden bg-gradient-to-br from-[#6d28d9] to-[#4c1d95] p-8">
              <div className="relative z-10">
                <div className="mb-6 flex items-center gap-2">
                  <MapPin className="h-6 w-6 text-[#c5ff00]" />
                  <span className="text-xl font-semibold text-white">LOCATION SOON</span>
                </div>

                <h2 className="mb-4 text-5xl font-bold text-white md:text-6xl">19 MAY 18:00</h2>

                <h3 className="mb-6 text-5xl font-bold text-[#c5ff00] md:text-6xl">PREPARTY</h3>

                <p className="text-lg text-gray-200">
                  Biggest networking event on the day before the conference. Tasty atmosphere before the main course.
                </p>
              </div>

              {/* Card background gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </Card>
          </motion.div>

          {/* Right Video Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative aspect-video overflow-hidden rounded-3xl"
          >
            <Image
              src="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Event teaser thumbnail"
              width={1280}
              height={720}
              className="h-full w-full object-cover"
            />

            {/* Play button overlay */}
            <div className="absolute inset-0 flex items-center justify-center bg-black/30">
              <Button
                variant="ghost"
                size="lg"
                className="group relative flex h-20 w-20 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm transition-all hover:bg-white/20"
                onClick={() => {
                  // Add your video play logic here
                  console.log("Play video")
                }}
              >
                <Play className="h-8 w-8 text-white transition-transform group-hover:scale-110" />
              </Button>

              {/* Video duration */}
              <div className="absolute bottom-4 right-4 rounded-full bg-black/60 px-3 py-1 text-sm text-white backdrop-blur-sm">
                TEASER 1:24
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

