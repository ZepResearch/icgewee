"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function TestimonialKeypoints() {
  const keypoints = [
    { name: "Women Leadership", color: "text-white" },
    { name: "Gender Equality", color: "text-[#c5ff00]" },
    { name: "Women in Business", color: "text-white" },
    { name: "Social Impact", color: "text-white" },
    { name: "Inclusive Innovation", color: "text-white" },
    { name: "Founders", color: "text-white" },
    { name: "Economic Empowerment", color: "text-white" },
    { name: " Policy & Advocacy", color: "text-[#c5ff00]", hasIcon: true },
    { name: "Financial Independence", color: "text-[#c5ff00]" },
    { name: "Entrepreneurship", color: "text-white" },
    { name: "P2P", color: "text-white" },
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } },
  }

  return (
    <div className="w-full  text-white py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          {/* Left side - Testimonial */}
          <motion.div
            className="lg:w-5/12 flex flex-col space-y-6"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative">
              <div className="absolute -left-8 top-0 w-16 h-16 bg-[#2d1b4d] rounded-full flex items-center justify-center">
                <span className="text-[#a095ff] text-4xl font-bold">"</span>
              </div>
              <div className="ml-12">
                <Image
                  src="https://plus.unsplash.com/premium_photo-1722945641420-86765656a2af?q=80&w=2020&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Testimonial"
                  width={100}
                  height={100}
                  className="rounded-full border-4 border-[#2d1b4d]"
                />
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold leading-tight">
            THIS CONFERENCE IS FOR THOSE WHO WANT <span className="text-[#c5ff00]"> TO DRIVE CHANGE IN GENDER EQUALITY</span>{" "}
              <span className="text-[#a095ff]">AND WOMEN’S EMPOWERMENT THROUGH ENTREPRENEURSHIP.
              </span>
            </h2>
          </motion.div>

          {/* Right side - Key Points */}
          <motion.div className="lg:w-7/12 mt-24" variants={container} initial="hidden" animate="show">
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              {keypoints.map((point, index) => (
                <motion.div key={index} variants={item} className="relative">
                  {/* {point.hasIcon && (
                    <div className="absolute -left-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-[#a095ff] rounded-full flex items-center justify-center z-10">
                      <div className="w-10 h-10 relative">
                        {[...Array(7)].map((_, i) => (
                          <div
                            key={i}
                            className="absolute w-5 h-0.5 bg-[#c5ff00] left-1/2 top-1/2"
                            style={{
                              transform: `translate(-50%, -50%) rotate(${i * 45}deg)`,
                              transformOrigin: "center",
                            }}
                          />
                        ))}
                      </div>
                    </div>
                  )} */}
                  <button
                    className={`${point.color} border border-gray-600 rounded-full py-3 px-6 hover:bg-[#2d1b4d] transition-all whitespace-nowrap text-2xl`}
                  >
                    {point.name}
                  </button>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

