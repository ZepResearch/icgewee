"use client"

import { useState, useEffect } from "react"

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    // Set the countdown for 24 hours from now
    const targetTime = new Date()
    targetTime.setHours(targetTime.getHours() + 24)

    const calculateTimeLeft = () => {
      const now = new Date()
      const difference = targetTime.getTime() - now.getTime()

      if (difference <= 0) {
        // Timer expired
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
        return
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24))
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((difference % (1000 * 60)) / 1000)

      setTimeLeft({ days, hours, minutes, seconds })
    }

    // Calculate immediately
    calculateTimeLeft()

    // Update every second
    const timer = setInterval(calculateTimeLeft, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="flex space-x-4 text-center">
      <div className="flex flex-col">
        <span className="text-4xl font-bold">{timeLeft.days}</span>
        <span className="text-sm opacity-70">days</span>
      </div>
      <div className="flex flex-col">
        <span className="text-4xl font-bold">{timeLeft.hours}</span>
        <span className="text-sm opacity-70">hours</span>
      </div>
      <div className="flex flex-col">
        <span className="text-4xl font-bold">{timeLeft.minutes}</span>
        <span className="text-sm opacity-70">minutes</span>
      </div>
      <div className="flex flex-col">
        <span className="text-4xl font-bold">{timeLeft.seconds}</span>
        <span className="text-sm opacity-70">seconds</span>
      </div>
    </div>
  )
}

