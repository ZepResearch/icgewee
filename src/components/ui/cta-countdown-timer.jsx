"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"



export function CountdownTimer({ targetTime }) {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = targetTime.getTime() - new Date().getTime()

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24))
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24)
        const minutes = Math.floor((difference / 1000 / 60) % 60)
        const seconds = Math.floor((difference / 1000) % 60)

        setTimeLeft({ days, hours, minutes, seconds })
      } else {
        // Timer expired
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
      }
    }

    // Calculate immediately
    calculateTimeLeft()

    // Update every second
    const timer = setInterval(calculateTimeLeft, 1000)

    // Cleanup
    return () => clearInterval(timer)
  }, [targetTime])

  const timeUnits = [
    { label: "days", value: timeLeft.days },
    { label: "hours", value: timeLeft.hours },
    { label: "minutes", value: timeLeft.minutes },
    { label: "seconds", value: timeLeft.seconds },
  ]

  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-4 gap-4 md:gap-6">
        {timeUnits.map((unit) => (
          <div key={unit.label} className="flex flex-col items-center">
            <div className="relative h-16 w-16 md:h-24 md:w-24">
              <div className="absolute inset-0 flex items-center justify-center bg-purple-900/50 backdrop-blur-sm rounded-lg border border-purple-500/30 shadow-lg overflow-hidden">
                <motion.span
                  key={unit.value}
                  className="text-3xl md:text-5xl font-bold text-white tabular-nums"
                  animate={{
                    opacity: [0.5, 1],
                    scale: [0.98, 1],
                  }}
                  transition={{
                    duration: 0.3,
                    ease: "easeOut",
                  }}
                >
                  {unit.value.toString().padStart(2, "0")}
                </motion.span>
              </div>
            </div>
            <span className="text-xs md:text-sm text-purple-200 mt-2">{unit.label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

