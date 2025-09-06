'use client'
import { pb } from "@/lib/pocketbase"
import { cn } from "@/lib/utils"
import { Calendar, Clock, FileText, UserCheck } from "lucide-react"
import React, { useEffect, useState } from "react"

// Define the type for our timeline data

// Icon mapping based on title keywords
const getIconForTitle = (title) => {
  const lowerTitle = title.toLowerCase()
  if (lowerTitle.includes("registration")) return UserCheck
  if (lowerTitle.includes("abstract")) return FileText
  if (lowerTitle.includes("paper")) return Calendar
  return Clock
}

// Server Component to fetch data
 

export default  function ConferenceTimeline() {
  const [timelineItems, setTimeline] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function fetchDates() {
      try {
        setLoading(true)
        // Fetch all records from ICGEWEE_dates collection and sort by created date
        const records = await pb.collection("ICGEWEE_dates").getFullList({
          sort: "created",
           requestKey: null
        })
        setTimeline(records)
      } catch (err) {
        console.error("Error fetching dates:", err)
        setError("Failed to load timeline dates")
      } finally {
        setLoading(false)
      }
    }

    fetchDates()
  }, [])

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="text-center text-red-500 p-4">
        {error}
      </div>
    )
  }

  return (
    <div className="min-h-full relative bg-gradient-to-br from-slate-50 via-white to-gray-50 py-20 px-4">
      {/* Subtle grid background */}
      <div
        className={cn(
          "absolute inset-0 opacity-30",
          "[background-size:32px_32px]",
          "[background-image:linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)]",
        )}
      />
      
      {/* Radial fade overlay */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_70%)]"></div>
    
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-gray-200/50 mb-8">
            <div className="w-2 h-2 rounded-full bg-gradient-to-tl from-sky-400 via-rose-400 to-lime-400"></div>
            <span className="text-sm font-medium text-gray-600 tracking-wider uppercase">Conference Timeline</span>
          </div>

          <h1 className="text-4xl lg:text-6xl font-semibold text-gray-900 leading-tight mb-4">
            Important Dates for{" "}
            <span className="font-medium bg-clip-text text-transparent bg-gradient-to-tl from-sky-400 via-rose-400 to-lime-400">
              ICGEWEE
            </span>
          </h1>
          
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-light">
            Stay updated with all the key milestones and deadlines for the conference
          </p>
        </div>

        {/* Timeline Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {timelineItems.map((item, index) => {
            const IconComponent = getIconForTitle(item.title)
            const isExpired = index === 0 // First item is considered expired
            
            return (
              <div key={item.id} className="group">
                {/* Modern Card */}
                <div className={cn(
                  "relative bg-white/70 drop-shadow-xl backdrop-blur-sm border border-gray-200/50 rounded-2xl hover:bg-white hover:border-transparent hover:shadow-xl hover:shadow-gray-200/50 transition-all duration-500 overflow-hidden h-80",
                  isExpired && "opacity-75 saturate-50"
                )}>
                  {/* Gradient border on hover */}
                  <div className="absolute inset-0 bg-gradient-to-tl from-sky-400 via-rose-400 to-lime-400 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
                  <div className="absolute inset-[1px] bg-white rounded-[15px] group-hover:bg-white/95 transition-colors duration-500"></div>

                  {/* Card Content */}
                  <div className="relative p-8 h-full flex flex-col">
                    {/* Icon */}
                    <div className="mb-8">
                      <div className={cn(
                        "w-14 h-14 bg-gradient-to-tl from-sky-400 via-rose-400 to-lime-400 rounded-xl flex items-center justify-center shadow-lg shadow-gray-200/50 group-hover:shadow-xl group-hover:shadow-gray-300/30 transition-all duration-300",
                        isExpired && "grayscale opacity-60"
                      )}>
                        <IconComponent className="w-7 h-7 text-white" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-grow space-y-20">
                      {/* Title */}
                      <h3 className={cn(
                        "text-lg font-semibold text-gray-900 leading-snug tracking-tight",
                        isExpired && "line-through text-gray-500"
                      )}>
                        {item.title}
                      </h3>

                      {/* Date */}
                      <div className={cn(
                        "inline-flex items-center px-3 py-1.5 bg-neutral-900 rounded-lg",
                        isExpired && "bg-gradient-to-tl from-sky-400 via-rose-400 to-lime-400 "
                      )}>
                        <p className="text-white font-medium text-md">{item.date}</p>
                      </div>
                    </div>

                    {/* Expired badge */}
                    {isExpired && (
                      <div className="absolute top-4 right-4">
                        <div className="px-2 py-1 bg-gradient-to-tl from-sky-400 via-rose-400 to-lime-400  text-white text-xs font-medium rounded-full">
                          EXPIRED
                        </div>
                      </div>
                    )}

                    {/* Decorative element */}
                    <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-sky-400/5 via-rose-400/5 to-lime-400/5 rounded-full -translate-y-12 translate-x-12 group-hover:scale-150 transition-transform duration-700"></div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Loading state fallback */}
        {timelineItems.length === 0 && (
          <div className="text-center py-20">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/80 backdrop-blur-sm rounded-full border border-gray-200/50">
              <div className="w-4 h-4 bg-gradient-to-tl from-sky-400 via-rose-400 to-lime-400 rounded-full animate-pulse"></div>
              <p className="text-gray-600 font-medium">Loading timeline data...</p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}