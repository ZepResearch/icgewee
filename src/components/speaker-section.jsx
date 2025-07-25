"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { X, MapPin, Briefcase, GraduationCap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { pb } from "@/lib/pocketbase"

// Speaker categories
const speakerCategories = [
  // { id: "Guest Speaker", title: "Guest Speaker" },
  { id: "Organizing Secretary", title: "Organizing Secretary" },

  { id: "Conference Chair", title: "Conference Chair" },
  { id: "Conference Co-Chair", title: "Conference Co-Chair" },
  { id: "Keynote Speaker", title: "Keynote Speaker" },
  { id: "Session Chair", title: "Session Chair" },
];

// Speaker card component
const SpeakerCard = ({ speaker, onMoreInfo }) => {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      className="group relative bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-200/50 hover:border-transparent hover:shadow-2xl hover:shadow-gray-200/20 transition-all duration-500"
    >
      {/* Gradient border on hover */}
      <div className="absolute inset-0 bg-gradient-to-tl from-sky-400 via-rose-400 to-lime-400 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
      <div className="absolute inset-[1px] bg-white rounded-[15px] group-hover:bg-white/95 transition-colors duration-500"></div>

      <div className="relative p-6">
        {/* Speaker image */}
        <div className="relative h-[280px] w-full rounded-xl overflow-hidden mb-6 bg-gradient-to-br from-gray-100 to-gray-200">
          <Image 
            src={`https://icetmr-icgewee.pockethost.io/api/files/${speaker.collectionId}/${speaker.id}/${speaker.image}`} 
            alt={speaker.name} 
            fill 
            className="object-contain transition-transform duration-500 group-hover:scale-105" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>

        {/* Speaker info */}
        <div className="space-y-3">
          <h3 className="text-xl font-semibold text-gray-900 leading-tight">{speaker.name}</h3>
          <p className="text-gray-700 font-medium text-sm">{speaker.role}</p>
           <div className="flex items-center gap-3 text-gray-500 text-sm bg-gray-50/80 rounded-lg p-3">
                <GraduationCap className="h-4 w-4" />
                <span>{speaker.college}</span>
              </div>
          <div className="flex items-center gap-2 text-gray-500 text-sm">
            <MapPin className="h-4 w-4" />
            <span>{speaker.country}</span>
          </div>

          <Button
            onClick={() => onMoreInfo(speaker)}
            className="w-full mt-4 bg-neutral-950 text-white font-medium border-0 rounded-xl py-3 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            View Profile
          </Button>
        </div>
      </div>
    </motion.div>
  )
}

// Speaker detail drawer component
const SpeakerDrawer = ({ isOpen, onClose, speaker }) => (
  <AnimatePresence>
    {isOpen && speaker && (
      <>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 bg-black/60 backdrop-blur-md z-50"
          onClick={onClose}
        />
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ type: "spring", damping: 25, stiffness: 120 }}
          className="fixed right-0 top-0 h-full w-full sm:w-[480px] bg-white/95 backdrop-blur-xl shadow-2xl z-[100] overflow-y-auto border-l border-gray-200/50"
        >
          <div className="p-8 flex flex-col h-full relative">
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 h-10 w-10 rounded-full bg-gray-100/80 backdrop-blur-sm flex items-center justify-center text-gray-700 hover:bg-gradient-to-tl hover:from-sky-400 hover:via-rose-400 hover:to-lime-400 hover:text-white transition-all duration-300"
              aria-label="Close drawer"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Speaker image */}
            <div className="relative h-[320px] w-full rounded-2xl overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 mt-8 mb-8 shadow-lg">
              <Image 
                src={`https://icetmr-icgewee.pockethost.io/api/files/${speaker.collectionId}/${speaker.id}/${speaker.image}`} 
                alt={speaker.name} 
                fill 
                className="object-contain" 
              />
            </div>

            {/* Speaker info */}
            <div className="space-y-4">
              <h2 className="text-3xl font-light text-gray-900">{speaker.name}</h2>
              <h3 className="text-lg text-gray-600 font-medium">{speaker.role}</h3>

              <div className="flex items-center gap-3 text-gray-500 text-sm bg-gray-50/80 rounded-lg p-3">
                <GraduationCap className="h-4 w-4" />
                <span>{speaker.college}</span>
              </div>

              <div className="flex items-center gap-3 text-gray-500 text-sm bg-gray-50/80 rounded-lg p-3">
                <MapPin className="h-4 w-4" />
                <span>{speaker.country}</span>
              </div>

              <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-200 to-transparent my-8"></div>

              <h4 className="text-xl font-medium text-gray-900 mb-4">Biography</h4>
              <div className="bg-gray-50/50 rounded-xl p-6">
                <p className="text-gray-600 leading-relaxed">{speaker.bio}</p>
              </div>
            </div>

            <div className="mt-8">
              <Button
                onClick={onClose}
                className="w-full bg-neutral-950 text-white font-medium border-0 rounded-xl py-4 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Close
              </Button>
            </div>
          </div>
        </motion.div>
      </>
    )}
  </AnimatePresence>
)

export function SpeakerSection() {
  const [activeCategory, setActiveCategory] = useState("Organizing Secretary")
  const [selectedSpeaker, setSelectedSpeaker] = useState(null)
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  const [speakers, setSpeakers] = useState()
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchSpeakers = async () => {
      try {
        // Fetch speakers
        const records = await pb.collection("ICGEWEE_speakers").getFullList({
          sort: "name",
          requestKey: null,
        })

        if (records && records.length > 0) {
          // Group speakers by category
          const groupedSpeakers = records.reduce((acc, speaker) => {
            const category = speaker.category;
            if (!acc[category]) {
              acc[category] = []
            }

            acc[category].push({
              name: speaker.name,
              role: speaker.role,
              image: speaker.image,
              bio: speaker.bio,
              id: speaker.id,
              collectionId: speaker.collectionId,
              college: speaker.college,
              country: speaker.country,
            })

            return acc
          }, {})

          // Ensure all categories exist in the grouped speakers object
          speakerCategories.forEach(({ id }) => {
            if (!groupedSpeakers[id]) {
              groupedSpeakers[id] = []
            }
          })

          setSpeakers(groupedSpeakers)
        }

        setLoading(false)
      } catch (err) {
        console.error("Failed to fetch speakers:", err)
        setLoading(false)
      }
    }

    fetchSpeakers()
  }, [])

  const handleMoreInfo = (speaker) => {
    setSelectedSpeaker(speaker)
    setIsDrawerOpen(true)
  }

  const closeDrawer = () => {
    setIsDrawerOpen(false)
  }

  return (
    <section className="py-24 relative bg-white">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-20 [background-size:32px_32px] [background-image:linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)]"></div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Section header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 px-6 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-gray-200/50 mb-8">
            <div className="w-2 h-2 rounded-full bg-gradient-to-tl from-sky-400 via-rose-400 to-lime-400"></div>
            <span className="text-sm font-medium text-gray-600 tracking-wider uppercase">Featured Speakers</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-medium text-gray-900 mb-6 leading-tight">
            Distinguished{" "}
            <span className="font-medium bg-clip-text text-transparent bg-gradient-to-tl from-sky-400 via-rose-400 to-lime-400">
              Speakers
            </span>
          </h2>

          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-light">
            Join us to learn from distinguished experts and thought leaders in gender equality, women's empowerment, and entrepreneurship
          </p>
        </div>

        {/* Category tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {speakerCategories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              className={`relative px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? "text-white shadow-lg"
                  : "bg-white/80 backdrop-blur-sm text-gray-700 border border-gray-200/50 hover:bg-white hover:shadow-md"
              }`}
            >
              {activeCategory === category.id && (
                <div className="absolute inset-0 bg-gradient-to-tl from-sky-400 via-rose-400 to-lime-400 rounded-full"></div>
              )}
              <span className="relative z-10">{category.title}</span>
            </motion.button>
          ))}
        </div>

        {/* Loading state */}
        {loading && (
          <div className="flex justify-center items-center min-h-[400px]">
            <div className="relative">
              <div className="w-16 h-16 rounded-full bg-gradient-to-tl from-sky-400 via-rose-400 to-lime-400 animate-pulse"></div>
              <div className="absolute inset-2 rounded-full bg-white animate-pulse" style={{ animationDelay: "0.5s" }}></div>
              <div className="absolute inset-4 rounded-full bg-gradient-to-tl from-sky-400 via-rose-400 to-lime-400 animate-pulse" style={{ animationDelay: "1s" }}></div>
            </div>
          </div>
        )}

        {/* Error state */}
        {error && (
          <div className="relative bg-red-50/80 backdrop-blur-sm rounded-2xl border border-red-200/50 p-8 max-w-md mx-auto">
            <p className="text-red-600 text-center font-medium">{error}</p>
          </div>
        )}

        {/* Speakers grid */}
        {!loading && !error && (
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {speakers && speakers[activeCategory]?.length > 0 ? (
                speakers[activeCategory].map((speaker, index) => (
                  <motion.div
                    key={speaker.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <SpeakerCard speaker={speaker} onMoreInfo={handleMoreInfo} />
                  </motion.div>
                ))
              ) : (
                <div className="col-span-3 py-16 text-center">
                  <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-200/50 p-8 max-w-md mx-auto">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-tl from-sky-400 via-rose-400 to-lime-400 mx-auto mb-4 flex items-center justify-center">
                      <span className="text-white text-sm">📋</span>
                    </div>
                    <p className="text-gray-600 font-medium">No speakers Declared in this category</p>
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        )}

        {/* Speaker detail drawer */}
        <SpeakerDrawer isOpen={isDrawerOpen} onClose={closeDrawer} speaker={selectedSpeaker} />
      </div>
    </section>
  )
}