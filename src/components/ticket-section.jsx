"use client"
import { Crown, Diamond, Plus, Star } from "lucide-react"
import TicketCard from "./ui/ticket-card"
import { CountdownTimer } from "./ui/cta-countdown-timer"
import { useState } from "react"

export default function TicketSection() {
  const [targetTime] = useState(() => {
      const now = new Date()
      const endOfDay = new Date(now)
      endOfDay.setHours(23, 59, 59, 999)
      return endOfDay
    })
  return (
    <div className="w-full min-h-full  text-white py-12 relative overflow-hidden">
      {/* Background spotlight effects */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-purple-600 opacity-10 blur-[100px]" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-blue-600 opacity-10 blur-[100px]" />
      <div className="absolute top-3/4 left-1/2 w-[300px] h-[300px] rounded-full bg-indigo-600 opacity-10 blur-[100px]" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center mb-16">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white">BUY A TICKET</h1>
          <div className="mt-6 md:mt-0  ml-6 md:ml-0">
            <div className="text-[#c4ff00] font-semibold mb-1">TO INCREASING PRICES LEFT</div>
            <div className="sm:scale-75 ">
            <CountdownTimer  targetTime={targetTime}/>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-2">
          <TicketCard
            title="GOLD"
            icon={<Plus className="h-5 w-5 text-yellow-400" />}
            price={99}
            originalPrice={249}
            features={["2 days access", "Exhibition", "All speeches", "Access to video materials"]}
          />

          <TicketCard
            title="VIP"
            icon={<Star className="h-5 w-5 text-orange-400" />}
            price={279}
            originalPrice={599}
            features={["All from Gold", "Afterparty attendance", "Free appetizers, drinks, hookah at the Party"]}
          />

          <TicketCard
            title="DIAMOND"
            icon={<Diamond className="h-5 w-5 text-blue-300" />}
            price={699}
            originalPrice={1599}
            features={[
              "All from VIP",
              "Private Conference zone with all day food & drinks",
              "Afterparty attendance",
              "Private Afterparty zone with appetizers, drinks, hookah at the Party",
            ]}
            
          />

          <TicketCard
            title="COMPANY PASS"
            icon={<Crown className="h-5 w-5 text-yellow-500" />}
            price={359}
            originalPrice={649}
            features={[
              "2 days access",
              "Exhibition",
              "Afterparty attendance",
              "Free appetizers, drinks, hookah at the Party",
              "Company's logo at the conference website",
              "Company's logo at the conference press wall",
              "Access to video materials",
            ]}
          />
        </div>
      </div>
    </div>
  )
}

