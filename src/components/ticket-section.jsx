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
            title="Presenter - virtual"
            icon={<Plus className="h-5 w-5 text-yellow-400" />}
            price={99}
            originalPrice={219}
            features={['Full conference access',
             ' Networking sessions',
              'Workshop materials',
           '   Online Q&A sessions',
            '  Digital certificate of attendance']}
          />

          <TicketCard
            title="Presenter - physical"
            icon={<Star className="h-5 w-5 text-orange-400" />}
            price={279}
            originalPrice={319}
            features={['All Virtual Presenter benefits',
              'VIP networking dinner',
            '  Priority seating',
             ' Exclusive roundtable sessions',
              '1-year membership access']}
          />

          <TicketCard
            title="Listener - physical"
            icon={<Diamond className="h-5 w-5 text-blue-300" />}
            price={99}
            originalPrice={1599}
            features={['Full conference access',
              '  Online networking sessions',
               ' Digital workshop materials',
                'Access to recorded sessions',
               ' Digital certificate of attendance']
            }
            
          />

          <TicketCard
            title="Listener - physical"
            icon={<Crown className="h-5 w-5 text-yellow-500" />}
            price={199}
            originalPrice={649}
            features={[
            '  All Virtual Listener benefits',
'In-person networking opportunities',
'Physical workshop materials',
'Lunch and refreshments',
'Guided tour of conference venue'
            ]}
          />
        </div>
      </div>
    </div>
  )
}

