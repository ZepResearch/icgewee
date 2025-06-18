"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ReserveForm } from "./reserve-form"

export const ReserveButton = ({ className }) => {
const [isOpen, setIsOpen] = useState(false)
  const [showThankYou, setShowThankYou] = useState(false)

  // Auto-open form after 4 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true)
    }, 4000)

    return () => clearTimeout(timer)
  }, [])

  const handleFormSubmitSuccess = () => {
    setIsOpen(false)
    setShowThankYou(true)
  }

  return (
    <>
      <Button  onClick={() => setIsOpen(true)} variant={'outline'} className="border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white px-8 py-3 rounded-lg text-lg font-semibold"
>
        Reserve Seat
      </Button>

      <ReserveForm
  isOpen={isOpen} 
        onClose={() => setIsOpen(false)} 
        onSubmitSuccess={handleFormSubmitSuccess}
      />    </>
  )
}
