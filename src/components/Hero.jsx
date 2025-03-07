"use client"

import { motion } from "framer-motion"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

export default function HeroSection() {
  // Animation variants
  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  }

  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  const staggerContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  }

  const avatarVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  }

  // Sample avatar data
  const avatars = [
    { src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", fallback: "S1" },
    { src: "https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", fallback: "S2" },
    { src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", fallback: "S3" },
    { src: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D ", fallback: "S4" },
   
  ]

  return (<>
    <div className="relative min-h-full overflow-hidden pt-24 ">
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="absolute -left-6 top-1/2 h-56 w-56 -translate-x-1/2 transform bg-yellow-300 b"
        style={{ clipPath: "polygon(0 0, 100% 50%, 0 100%)" }}
        />
      {/* Yellow accent triangle */}

      <div className="container relative mx-auto px-4 py-12  max-w-7xl ">
        {/* Date and venue */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="absolute right-4 top-4 text-right md:right-12 md:top-12"
          >
          <h2 className="text-xl font-bold text-yellow-300 md:text-3xl lg:text-7xl">20-21 MAY</h2>
          <h3 className="text-lg font-medium text-purple-300 md:text-2xl lg:text-4xl">MERIDIAN EXPO</h3>
        </motion.div>

        <div className="mt-24 grid gap-8 md:grid-cols-2 md:gap-12 lg:mt-32">
          <div className="space-y-8">
            {/* Avatars */}
            <motion.div
              variants={staggerContainerVariants}
              initial="hidden"
              animate="visible"
              className="flex -space-x-4"
              >
              {avatars.map((avatar, index) => (
                <motion.div key={index} variants={avatarVariants}>
                  <Avatar className="h-12 w-12 border-2 border-purple-800 md:h-16 md:w-16">
                    <AvatarImage src={avatar.src} alt={`Speaker ${index + 1}`} className={"object-contain bg-amber-50"} />
                    <AvatarFallback className="bg-yellow-300 text-purple-900">{avatar.fallback}</AvatarFallback>
                  </Avatar>
                </motion.div>
              ))}
              <motion.div variants={fadeInVariants} initial="hidden" animate="visible" className="space-y-4 ml-8">
              <h2 className="text-xl font-medium text-white md:text-2xl">Europe&apos;s Biggest Tech Conference</h2>
              <div className="flex flex-wrap gap-3">
                <Badge
                  variant="outline"
                  className="rounded-full border-yellow-300 bg-transparent px-4 py-1 text-yellow-300"
                  >
                  <span className="mr-2 h-2 w-2 rounded-full bg-yellow-300"></span>
                  TOP Speakers
                </Badge>
                <Badge
                  variant="outline"
                  className="rounded-full border-yellow-300 bg-transparent px-4 py-1 text-yellow-300"
                  >
                  <span className="mr-2 h-2 w-2 rounded-full bg-yellow-300"></span>
                  50+ Countries
                </Badge>
              </div>
            </motion.div>
            </motion.div>

            {/* Tagline and badges */}
            

            {/* Main title */}
            <motion.div variants={titleVariants} initial="hidden" animate="visible" className="pt-4">
              <h1 className="text-6xl font-bold leading-tight text-white md:text-7xl lg:text-8xl xl:text-9xl">
                ZEP
                <br />
                RESEARCH
              </h1>
            </motion.div>
          </div>

          {/* Conference image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="relative mt-8 h-64 overflow-hidden rounded-xl md:mt-0 md:h-80 lg:h-96"
            >
            <div className="absolute bottom-4 right-4 z-10 rounded border-2 border-yellow-300 bg-transparent p-1">
              <span className="block px-2 py-1 text-xs font-bold text-yellow-300">DATS TEAM</span>
            </div>
            <Image
              src="https://images.unsplash.com/photo-1560523159-6b681a1e1852?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Conference audience"
              fill
              className="object-cover"
              />
          </motion.div>
        </div>
      </div>
    </div>
              </>
  )
}

