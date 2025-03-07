"use client"

import { motion } from "framer-motion"
import { ArrowRight, Check } from "lucide-react"
import { Card, CardContent, CardFooter } from "@/components/ui/card"



export default function TicketCard({ title, icon, price, originalPrice, features, featured = false }) {
  const getTitleColor = (title) => {
    switch (title) {
      case "GOLD":
        return "text-[#FFD700]"
      case "VIP":
        return "text-gray-100"
      case "DIAMOND":
        return "text-blue-50"
      default:
        return "text-white"
    }
  }

  return (
    <Card className="bg-purple-900/20 backdrop-blur-sm border-0 overflow-hidden flex flex-col h-full">
      <CardContent className="p-6 flex-grow">
        <div className="flex justify-between items-center mb-6">
          <h3 className={`text-xl font-bold ${getTitleColor(title)}`}>{title}</h3>
          {icon}
        </div>

        <div className="flex items-baseline mb-6">
          <span className="text-3xl font-bold text-white mr-2">${price}</span>
          <span className="text-gray-400 line-through">${originalPrice}</span>
        </div>

        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <Check className="h-5 w-5 text-[#c4ff00] mr-2 mt-0.5 flex-shrink-0" />
              <span className="text-gray-300 text-sm">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>

      <CardFooter className="p-6 pt-0 mt-auto">
        <motion.div className="relative w-full" whileHover="hover">
          <motion.button
            className={`flex items-center justify-center rounded-full ${
              featured ? "bg-[#c4ff00] text-black w-full px-4 py-2" : "bg-[#c4ff00] text-black w-12 h-12"
            }`}
            variants={{
              hover: featured ? {} : { width: 140 },
            }}
            transition={{
              type: "spring",
              stiffness: 500,
              damping: 30,
            }}
          >
            {featured ? (
              <div className="flex items-center justify-between w-full">
                <span className="font-medium">BUY TICKET</span>
                <ArrowRight className="h-5 w-5 ml-2" />
              </div>
            ) : (
              <motion.div
                className="flex items-center justify-center w-full"
                variants={{
                  hover: {
                    justifyContent: "space-between",
                    width: "100%",
                    padding: "0 16px",
                  },
                }}
              >
                <motion.span
                  className="font-medium whitespace-nowrap"
                  initial={{ opacity: 0, width: 0 }}
                  variants={{
                    hover: { opacity: 1, width: "auto" },
                  }}
                >
                  BUY TICKET
                </motion.span>
                <ArrowRight className="h-5 w-5 ml-2 flex-shrink-0" />
              </motion.div>
            )}
          </motion.button>
        </motion.div>
      </CardFooter>
    </Card>
  )
}

