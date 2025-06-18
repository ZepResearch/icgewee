"use client"

import { useEffect, useState } from "react"
import { Users, Globe, Award, Loader2, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import { pb } from "@/lib/pocketbase"

// Committee member type based on the Pocketbase response

export default function CommitteePage() {
  const [committeeMembers, setCommitteeMembers] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchCommitteeMembers = async () => {
      try {
      
        const records = await pb.collection("ICGEWEE_committee").getFullList({
          sort: "name",
        })
        setCommitteeMembers(records)
        setLoading(false)
      } catch (err) {
        console.error("Error fetching committee members:", err)
        setError("Failed to load committee members. Please try again later.")
        setLoading(false)
      }
    }

    fetchCommitteeMembers()
  }, [])

  return (
    <div className="min-h-screen bg-gray-100 relative overflow-hidden">
      {/* Background grid pattern */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
            linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)
          `,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* Hero Section */}
      <section className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-12 gap-8 w-full items-center">
            {/* Left Side Content */}
            <div className="col-span-12 lg:col-span-4 space-y-6">
          
             

              {/* Main Heading */}
              <div>
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-11 mb-4">
                  MEET OUR
                  <br />
                  <span className=" bg-gradient-to-tl from-sky-400 via-rose-400 to-lime-400 drop-shadow-2xl text-transparent bg-clip-text  ">EXPERT COMMITTEE</span>
                </h1>
              </div>

          

              {/* Committee Details */}
              <div className="max-w-sm">
                <h3 className="font-semibold text-gray-900 mb-2">DRIVING INNOVATION FORWARD</h3>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center space-x-2">
                    <Users className="w-4 h-4" />
                    <span>Distinguished Experts</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Globe className="w-4 h-4" />
                    <span>International Representation</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Award className="w-4 h-4" />
                    <span>Industry & Academic Leaders</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Center Image - Positioned to stick to bottom */}
            <div className="col-span-12 lg:col-span-4 flex justify-center items-end h-full">
              <div className="relative">
                <img
                  src="/assets/committee.png"
                  alt="Committee Technology"
                  className="w-full h-auto min-h-[200px] lg:max-h-[280px] object-contain object-bottom  select-none pointer-events-none"
                />
                {/* Decorative elements */}
               </div>
            </div>

            {/* Right Side Content */}
            <div className="col-span-12 lg:col-span-4 space-y-6">
              {/* Main Title */}
              <div className="text-right">
                <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-none">
                  Committee
                  <br />
                  <span className="text-3xl lg:text-4xl font-light  bg-gradient-to-tl from-sky-400 via-rose-400 to-lime-400 drop-shadow-2xl text-transparent bg-clip-text">2025</span>
                </h1>
              </div>

              {/* Committee Info Card */}
              <Card className="p-4 bg-white/80 backdrop-blur-sm border-0 shadow-lg ml-auto max-w-sm">
                <div className="flex items-start space-x-3">
                
                  <div className="text-right">
                    <p className="text-xs text-gray-600 leading-relaxed">
            Our committee unites global leaders and advocates in gender equality, women empowerment, and entrepreneurship to ensure the ICGEWEE delivers impactful discussions, innovative ideas, and meaningful progress for all participants.

                    </p>
                  </div>
                </div>
              </Card>

            </div>
          </div>
        </div>
      </section>

      {/* Committee Members Section */}
      <section className="relative z-10 py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 font-serif">Our Committee Members</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
                          Our committee members are distinguished experts who bring together their knowledge, experience, and vision to make the (ICGEWEE) an exceptional event. They represent leading institutions and organizations worldwide, dedicated to advancing gender equality, empowering women, and fostering entrepreneurship.
            </p>
          </div>

          {loading ? (
            <div className="flex justify-center items-center py-20">
              <Loader2 className="w-12 h-12 text-purple-500 animate-spin" />
              <span className="ml-3 text-lg text-gray-600">Loading committee members...</span>
            </div>
          ) : error ? (
            <div className="text-center py-12">
              <Card className="p-8 bg-gray-50 backdrop-blur-sm border-0 shadow-lg max-w-lg mx-auto">
                <div className="text-red-500 mb-4 text-4xl">⚠️</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Error Loading Committee</h3>
                <p className="text-gray-600 mb-6">{error}</p>
                <Button
                  onClick={() => window.location.reload()}
                  className="bg-purple-500 hover:bg-purple-600 text-white"
                >
                  Try Again
                </Button>
              </Card>
            </div>
          ) : committeeMembers.length === 0 ? (
            <div className="text-center py-12">
              <Card className="p-8 bg-gray-50 backdrop-blur-sm border-0 shadow-lg max-w-lg mx-auto">
                <div className="text-gray-400 mb-4 text-4xl">👥</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">No Committee Members Found</h3>
                <p className="text-gray-600">Committee information will be available soon.</p>
              </Card>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {committeeMembers.map((member) => (
                  <CommitteeMemberCard key={member.id} member={member} />
                ))}
              </div>

              {/* Committee Stats */}
              <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
                <Card className="p-6 bg-gray-50 backdrop-blur-sm border-0 shadow-lg text-center">
                  <div className="text-3xl font-bold text-rose-500 ">{committeeMembers.length}</div>
                  <h3 className="font-semibold text-gray-900">Expert Members</h3>
                  <p className="text-gray-600 text-sm">Distinguished professionals from around the world</p>
                </Card>
                <Card className="p-6 bg-gray-50 backdrop-blur-sm border-0 shadow-lg text-center">
                  <div className="text-3xl font-bold text-rose-500 ">
                    {new Set(committeeMembers.map((m) => m.country)).size}
                  </div>
                  <h3 className="font-semibold text-gray-900 ">Countries</h3>
                  <p className="text-gray-600 text-sm">Global representation and diverse perspectives</p>
                </Card>
                <Card className="p-6 bg-gray-50 backdrop-blur-sm border-0 shadow-lg text-center">
                  <div className="text-3xl font-bold text-rose-500 ">100%</div>
                  <h3 className="font-semibold text-gray-900">Excellence</h3>
                  <p className="text-gray-600 text-sm">Committed to delivering outstanding conference experience</p>
                </Card>
              </div>
            </>
          )}
        </div>
      </section>

      {/* Join Committee CTA Section */}
      <section className="relative z-10 py-20 bg-white">
        <div className="container mx-auto px-4">
          <Card className="p-12  bg-gradient-to-tl from-sky-400 via-rose-400 to-lime-400 drop-shadow-2xl text-white text-center border-0 shadow-2xl">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">Interested in Joining Our Committee?</h2>
              <p className="text-xl mb-8 opacity-90">
               We're always looking for distinguished experts to contribute to the success of the International Conference on Gender Equality, Women Empowerment & Entrepreneurship. If you're passionate about gender equality, women empowerment, and entrepreneurship and want to help shape the future of these fields, we'd love to hear from you.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <Card className="p-6 bg-white/10 backdrop-blur-sm border-0">
                  <div className="text-center text-white">
                    <Users className="w-12 h-12 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">Networking</h3>
                    <p className="text-sm opacity-90">Connect with leading experts in AI and robotics</p>
                  </div>
                </Card>
                <Card className="p-6 bg-white/10 backdrop-blur-sm border-0">
                  <div className="text-center text-white">
                    <Award className="w-12 h-12 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">Recognition</h3>
                    <p className="text-sm opacity-90">Gain visibility as a thought leader in your field</p>
                  </div>
                </Card>
                <Card className="p-6 bg-white/10 backdrop-blur-sm border-0">
                  <div className="text-center text-white">
                    <Globe className="w-12 h-12 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">Impact</h3>
                    <p className="text-sm opacity-90">Shape the direction of research and innovation</p>
                  </div>
                </Card>
              </div>
 <Link href={'/registration'}>
              <Button size="lg" className="bg-white text-rose-600 hover:bg-gray-100 font-semibold px-8">
                Apply to Join Committee
              </Button>

              </Link>
            </div>
          </Card>
        </div>
      </section>


    </div>
  )
}



function CommitteeMemberCard({ member }) {
  // Default image if member.img is not available
  const imageUrl = member.img
    ? `${process.env.NEXT_PUBLIC_POCKETBASE_URL}/api/files/${member.collectionName}/${member.id}/${member.img}`
    : "/placeholder.svg?height=300&width=300"

  return (
    <Card className="p-6 bg-gray-50 backdrop-blur-sm border-0 shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="flex flex-col items-center text-center">
        <div className="w-56 h-56 rounded-full overflow-hidden mb-4 border-4 border-gray-200 shadow-lg">
          <img src={imageUrl || "/placeholder.svg"} alt={member.name} className="w-full h-full object-contain" />
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
        <p className="text-sm font-medium px-4 py-2 rounded-lg mb-3 bg-gray-50 border text-rose-500">
          {member.designation}
        </p>
        <div className="flex items-center space-x-1 mb-3 text-gray-800 text-sm">
          <MapPin className="w-4 h-4" />
          <span>{member.country}</span>
        </div>
        <p className="text-gray-800 text-sm leading-relaxed">{member.details}</p>
      </div>
    </Card>
  )
}
