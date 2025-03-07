"use client"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Volume2, VolumeX, Pause, Play } from 'lucide-react'
import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"

export default function VideoSection() {
  const [isMuted, setIsMuted] = useState(true)
  const [isPlaying, setIsPlaying] = useState(true)
  const videoRef = useRef(null)

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted
      setIsMuted(!isMuted)
    }
  }

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  return (
    <section className="relative flex min-h-full max-w-7xl mx-auto items-center justify-center overflow-hidden py-8">
      <div className="container relative z-20 mx-auto flex flex-col items-center px-4 md:flex-row md:items-center md:justify-between md:gap-4 lg:gap-0">
        {/* Left Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="z-30 mb-12 w-full max-w-xl md:mb-0 md:w-1/2 md:pr-8 lg:pr-0"
        >
          <motion.h1 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-4xl font-bold tracking-tighter text-white md:text-5xl lg:text-6xl"
          >
            ONE MAC
          </motion.h1>
          <motion.h2 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-5xl font-extrabold tracking-tighter text-[#c5ff00] md:text-6xl lg:text-7xl"
          >
            ENDLESS<br />OPPORTUNITIES
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="mt-8"
          >
            <Link href="/tickets">
              <Button 
                className="group rounded-full bg-gradient-to-r from-yellow-400 to-lime-500 giver hover:from-yellow-500 hover:to-lime-600 px-8 py-6 text-base font-bold text-white drop-shadow-lg"
              >
                BUY TICKET
                <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </Link>
          </motion.div>
        </motion.div>
        
        {/* Right Video with text overlap */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="relative w-full md:w-[60%] md:-ml-20 lg:-ml-32 xl:-ml-40"
        >
          <div className="relative aspect-video overflow-hidden rounded-2xl shadow-[0_0_40px_rgba(197,255,0,0.2)]">
            {/* Video */}
            <video 
              ref={videoRef}
              className="h-full w-full object-cover"
              autoPlay 
              muted 
              loop 
              playsInline
            >
              <source src="/xxx.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            
            {/* Video overlay for better text contrast */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent"></div>
            
            {/* Video controls on bottom left */}
            <div className="absolute bottom-4 left-4 z-20 flex space-x-2">
              <button 
                onClick={togglePlayPause}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-black/40 backdrop-blur-sm hover:bg-black/60 transition-all"
              >
                {isPlaying ? (
                  <Pause className="h-5 w-5 text-white" />
                ) : (
                  <Play className="h-5 w-5 text-white" />
                )}
              </button>
              <button 
                onClick={toggleMute}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-black/40 backdrop-blur-sm hover:bg-black/60 transition-all"
              >
                {isMuted ? (
                  <VolumeX className="h-5 w-5 text-white" />
                ) : (
                  <Volume2 className="h-5 w-5 text-white" />
                )}
              </button>
            </div>
            
            {/* Logo overlay on bottom right */}
            <div className="absolute bottom-4 right-4 z-20 h-12 w-12 md:h-18 md:w-18 drop-shadow-2xl">
              <Image 
                src="https://res.cloudinary.com/dwlhesiyi/image/upload/v1726731577/il2wr5yxd2w1sarnj3it.svg" 
                alt="Logo" 
                width={50} 
                height={50}
                className="h-full w-full object-contain"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}