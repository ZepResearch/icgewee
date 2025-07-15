"use client"

import { useState } from "react"
import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { cn } from "@/lib/utils"
import { addDays } from "date-fns"
import Link from "next/link"

const scheduleData = [
  {
    date: "October 10 | Day 1",
    items: [
      { time: "8:00AM - 9:15AM", title: "Registration & Welcome Coffee" },
      { time: "9:15AM - 9:30AM", title: "Opening Ceremony" },
      { time: "9:30AM - 10:00AM", title: "Keynote: Breaking Barriers in Leadership" },
      { time: "10:00AM - 10:15AM", title: "Coffee Break" },
      { time: "10:15AM - 10:30AM", title: "Introduction to Session Chairs" },
      { time: "10:30AM - 01:00PM", title: "Session 1: Women in Entrepreneurship" },
      { time: "01:00PM - 02:00PM", title: "Networking Lunch" },
      { time: "02:00PM - 02:30PM", title: "Keynote: Economic Empowerment Strategies" },
      { time: "2:30PM - 5:00PM", title: "Session 2: Gender Equality in the Workplace" },
      { time: "5:00PM - 6:30PM", title: "Welcome Reception & Networking" },
    ],
  },
  {
    date: "October 11 | Day 2",
    items: [
      { time: "8:30AM - 9:00AM", title: "Registration" },
      { time: "9:00AM - 9:30AM", title: "Day 2 Opening Remarks" },
      { time: "9:30AM - 10:00AM", title: "Keynote: Digital Innovation for Women" },
      { time: "10:00AM - 10:15AM", title: "Coffee Break" },
      { time: "10:15AM - 10:30AM", title: "Introduction to Session Chairs" },
      { time: "10:30AM - 01:00PM", title: "Session 3: Sustainable Business Models" },
      { time: "01:00PM - 02:00PM", title: "Lunch Break" },
      { time: "02:00PM - 03:30PM", title: "Panel: Future of Women Entrepreneurship" },
      { time: "3:30PM - 4:00PM", title: "Coffee Break" },
      { time: "4:00PM - 5:00PM", title: "Awards Ceremony & Closing Remarks" },
      { time: "5:00PM - 6:30PM", title: "Farewell Reception" },
    ],
  },
]

export default function ConferenceSchedule() {
  const startDate = new Date(2025, 9, 10) // October 10, 2025
  const [selectedDates, setSelectedDates] = useState([startDate, addDays(startDate, 1)])

  return (
    <div className="bg-white min-h-screen py-16">
      <div className="container mx-auto px-4">
        <div className="space-y-8">
          <div className="text-center space-y-4 mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
             
              <span className="relative inline-block mx-2">
                <span className="relative z-10 bg-gradient-to-tr from-sky-400 via-rose-400 to-lime-400 bg-clip-text text-transparent">
                  International Conference on Gender Equality, Women Empowerment & Entrepreneurship
                </span>
              </span>
            </h1>
            <div className="space-y-2">
              <p className="text-xl font-medium bg-gradient-to-tr from-sky-400 via-rose-400 to-lime-400 bg-clip-text text-transparent">
                October 10th - 11th 2025
              </p>
              <p className="text-lg text-gray-600">Bali, Indonesia</p>
            </div>
            <p className="text-gray-700 text-lg max-w-3xl mx-auto mt-6">
              Join us for two transformative days of inspiring insights, innovative solutions, and meaningful
              connections in advancing gender equality and women's entrepreneurship.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-[300px_1fr]">
            <Card className="border-gray-200 rounded-3xl shadow-lg overflow-hidden bg-white">
              <CardHeader className="bg-gradient-to-tr from-sky-400 via-rose-400 to-lime-400 text-white">
                <CardTitle className="text-white">October 2025</CardTitle>
              </CardHeader>
              <CardContent className="p-4">
                <Calendar
                  mode="multiple"
                  selected={selectedDates}
                  onSelect={setSelectedDates}
                  month={startDate}
                  className="w-full"
                  classNames={{
                    day_selected:
                      "bg-gradient-to-tr from-sky-400 via-rose-400 to-lime-400 text-white hover:opacity-90 focus:opacity-90",
                    day_today: "bg-gray-100 text-gray-900",
                  }}
                />
              </CardContent>
            </Card>

            <ScrollArea className="h-[600px]">
              <div className="space-y-8">
                {scheduleData.map((day, index) => (
                  <Card key={index} className="border-gray-200 rounded-3xl shadow-lg overflow-hidden bg-white">
                    <CardHeader className="bg-gradient-to-tr from-sky-400 via-rose-400 to-lime-400">
                      <CardTitle className="text-white">{day.date}</CardTitle>
                    </CardHeader>
                    <CardContent className="p-4">
                      <div className="space-y-2">
                        {day.items.map((item, itemIndex) => (
                          <div
                            key={itemIndex}
                            className={cn(
                              "grid grid-cols-[140px_1fr] gap-4 p-3 rounded-lg",
                              "bg-gray-50 hover:bg-gradient-to-tr hover:from-sky-50 hover:via-rose-50 hover:to-lime-50 transition-all duration-200",
                            )}
                          >
                            <div className="text-sm font-medium bg-gradient-to-tr from-sky-400 via-rose-400 to-lime-400 bg-clip-text text-transparent">
                              {item.time}
                            </div>
                            <div className="text-sm text-gray-900 font-medium">{item.title}</div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </ScrollArea>
          </div>

          {/* Additional Information */}
          <div className="mt-12 bg-gray-50 rounded-3xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Conference Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Venue</h3>
                <p className="text-gray-700 mb-2 font-medium">Bali, Indonesia</p>
                <p className="text-gray-600">Detailed venue information will be announced soon</p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Registration</h3>
                <p className="text-gray-700 mb-2">Registration opens at 8:00 AM on Day 1 and 8:30 AM on Day 2.</p>
                <p className="text-gray-600">
                  Please bring your confirmation email and ID for a smooth check-in process.
                </p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="flex justify-center mt-8">
            <Link href={'/registration'}>
            <button className="bg-gradient-to-tr from-sky-400 via-rose-400 to-lime-400 hover:opacity-90 text-white px-8 py-4 rounded-full font-medium transition-all duration-300 flex items-center shadow-lg text-lg">
              Register Now
            </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
