"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { MapPin, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { CountdownTimer } from "./ui/cta-countdown-timer"

export function CTACountdownSection() {
  // Calculate time until end of current day (midnight)
  const [targetTime] = useState(() => {
    const now = new Date()
    const endOfDay = new Date(now)
    endOfDay.setHours(23, 59, 59, 999)
    return endOfDay
  })

  return (
    <div className="relative min-h-screen w-full overflow-hidden flex items-center justify-center p-4">
      {/* Decorative elements */}
      <motion.div
        className="absolute left-10 top-1/4 w-24 h-24 opacity-20"
        initial={{ opacity: 0, x: -100 }}
        animate={{
          opacity: 0.2,
          x: 0,
          rotate: [0, 360],
          transition: { duration: 30, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
        }}
      >
        <div className="w-0 h-0 border-l-[50px] border-l-transparent border-b-[100px] border-b-violet-400 border-r-[50px] border-r-transparent" />
      </motion.div>

      <motion.div
        className="absolute right-10 bottom-1/4 w-16 h-16 opacity-20"
        initial={{ opacity: 0, x: 100 }}
        animate={{
          opacity: 0.2,
          x: 0,
          rotate: [360, 0],
          transition: { duration: 25, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
        }}
      >
        <div className="w-0 h-0 border-l-[30px] border-l-transparent border-b-[60px] border-b-yellow-400 border-r-[30px] border-r-transparent" />
      </motion.div>

      {/* Main content card */}
      <motion.div
        className="bg-gradient-to-br from-purple-800/10 to-purple-700/50  rounded-3xl p-8 max-w-xl w-full shadow-2xl border border-purple-600/20 backdrop-blur-3xl"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Location badge */}
        <motion.div
          className="flex items-center justify-center mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <div className="bg-purple-800/50 backdrop-blur-sm px-4 py-2 rounded-full inline-flex items-center gap-2 border border-purple-500/30">
            <MapPin className="h-4 w-4 text-yellow-300" />
            <span className="text-white font-medium tracking-wider text-sm">YEREVAN, ARMENIA</span>
          </div>
        </motion.div>

        {/* Main heading */}
        <motion.h1
          className="text-4xl md:text-6xl font-bold text-center text-white mb-6 tracking-wider"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          UNLOCK MAC 2025
        </motion.h1>

        {/* Subheading */}
        <motion.p
          className="text-center text-yellow-300 font-medium mb-8 tracking-wide"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.5 }}
        >
          TO INCREASING PRICES LEFT
        </motion.p>

        {/* Countdown timer */}
        <CountdownTimer targetTime={targetTime} />

        {/* CTA Button */}
        <motion.div
          className="flex justify-center mt-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.5 }}
        >
          <Button
            className="bg-yellow-400 hover:bg-yellow-300 text-purple-950 font-bold px-8 py-6 rounded-full text-lg"
            
          >
            BUY TICKET <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </motion.div>

        {/* Contact info */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.5 }}
        >
          <p className="text-white text-sm md:text-base mb-6">
            IF YOU HAVE ANY QUESTIONS REGARDING SPONSORSHIP,
            <br />
            VISAS, PRICES, ETC., YOU CAN CONTACT US HERE:
          </p>

          {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
            <motion.div
              className="bg-purple-950/10 backdrop-blur-sm p-4 rounded-xl flex items-center justify-stretch w-full"
        
            >
              <div className="text-left">
                <p className="text-white text-sm">E-mail</p>
                <p className="text-purple-300 text-sm  ">sales@affiliateconf.com</p>
              </div>
              <div className="text-white flex-shrink-0 ml-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
              </div>
            </motion.div>

            <motion.div
              className="bg-purple-950/50 backdrop-blur-sm p-4 rounded-xl flex items-center justify-between"
            
            >
              <div className="text-left overflow-hidden">
                <p className="text-white text-sm">Telegram</p>
                <p className="text-purple-300 text-sm truncate max-w-[150px]">@evgendja</p>
              </div>
              <div className="text-white flex-shrink-0 ml-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m22 8-9 4-9-4V6l9 4 9-4Z" />
                  <path d="M4 14v-4" />
                  <path d="M20 10v4" />
                  <path d="M4 18v-4" />
                  <path d="M20 14v4" />
                </svg>
              </div>
            </motion.div>

            <motion.div
              className="bg-purple-950/50 backdrop-blur-sm p-4 rounded-xl flex items-center justify-between"
             
            >
              <div className="text-left overflow-hidden">
                <p className="text-white text-sm">MAC Telegram Bot</p>
                <p className="text-purple-300 text-sm truncate max-w-[150px]">@MAC_Aff_conference_bot</p>
              </div>
              <div className="text-white flex-shrink-0 ml-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                  <polyline points="14 2 14 8 20 8" />
                  <circle cx="10" cy="13" r="2" />
                  <path d="m20 17-1.09-1.09a2 2 0 0 0-2.82 0L10 22" />
                </svg>
              </div>
            </motion.div>
          </div> */}
        </motion.div>
      </motion.div>
    </div>
  )
}

