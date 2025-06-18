"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Presentation, ImageIcon, Monitor, Check, Users } from "lucide-react"

export default function ModeOfPresentationPage() {
  const presentationGuidelines = [
    "Be concise and impactful. Clearly communicate your research question, methodology, findings, and real-world implications for gender equality and women empowerment within the allotted time.",
    "Use compelling visuals effectively. Incorporate clear infographics, case studies, statistical data, and success stories that enhance understanding of your research impact.",
    "Practice your presentation thoroughly. Rehearse to ensure smooth delivery, especially when presenting sensitive topics and personal narratives.",
    "Prepare for diverse perspectives. Anticipate questions about implementation challenges, cultural considerations, and scalability of your solutions.",
    "Engage with the global community. Encourage discussions about practical applications, policy implications, and collaborative opportunities for advancing gender equality.",
  ]

  return (
    <main className="bg-white">
      {/* Hero Section */}
     

      {/* Oral Presentation Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative rounded-2xl overflow-hidden h-[400px]">
              <Image
                src="https://plus.unsplash.com/premium_photo-1705267935935-53ee91453a52?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Women speaking at conference"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/95 backdrop-blur-sm rounded-xl py-3 px-6">
                  <span className="text-gray-900 font-medium">Share your breakthrough research</span>
                </div>
              </div>
            </div>
            <div>
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-tr from-sky-400 via-rose-400 to-lime-400 rounded-xl p-3 mr-4">
                  <Presentation className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Oral Presentation</h2>
              </div>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Present your research on gender equality, women empowerment, or entrepreneurship in a 20-minute 
                oral presentation followed by a 10-minute Q&A session. Perfect for sharing detailed findings 
                and engaging with the global research community.
              </p>

              <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">What to Prepare:</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="h-5 w-5 rounded-full bg-neutral-700 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                      <Check className="h-3 w-3 text-white" />
                    </div>
                    <span className="text-gray-600">PowerPoint or PDF presentation (16:9 format, max 25 slides)</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-5 w-5 rounded-full bg-neutral-700 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                      <Check className="h-3 w-3 text-white" />
                    </div>
                    <span className="text-gray-600">Research methodology, data analysis, and impact assessment</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-5 w-5 rounded-full bg-neutral-700 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                      <Check className="h-3 w-3 text-white" />
                    </div>
                    <span className="text-gray-600">Case studies, success stories, or program demonstrations (optional)</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-5 w-5 rounded-full bg-neutral-700 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                      <Check className="h-3 w-3 text-white" />
                    </div>
                    <span className="text-gray-600">Brief bio highlighting your work in gender equality or women empowerment</span>
                  </li>
                </ul>
              </div>
              <Link href={"/submission"}>
                <Button className="bg-gradient-to-tr from-sky-400 via-rose-400 to-lime-400 hover:shadow-lg transition-all text-white rounded-xl px-6 py-3">
                  Submit for Oral Presentation
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Poster Presentation Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-tr from-sky-400 via-rose-400 to-lime-400 rounded-xl p-3 mr-4">
                  <ImageIcon className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Poster Presentation</h2>
              </div>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Present your research in a visual format during dedicated poster sessions. This interactive 
                format allows for meaningful discussions and networking with researchers, practitioners, 
                and advocates in gender equality and women empowerment.
              </p>

              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">What to Prepare:</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="h-5 w-5 rounded-full bg-neutral-700 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                      <Check className="h-3 w-3 text-white" />
                    </div>
                    <span className="text-gray-600">A0 size poster (841 × 1189 mm) in portrait orientation</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-5 w-5 rounded-full bg-neutral-700 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                      <Check className="h-3 w-3 text-white" />
                    </div>
                    <span className="text-gray-600">Clear visual storytelling with infographics, data, and outcomes</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-5 w-5 rounded-full bg-neutral-700 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                      <Check className="h-3 w-3 text-white" />
                    </div>
                    <span className="text-gray-600">QR code linking to resources, programs, or impact videos</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-5 w-5 rounded-full bg-neutral-700 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                      <Check className="h-3 w-3 text-white" />
                    </div>
                    <span className="text-gray-600">Handouts with actionable insights or contact information</span>
                  </li>
                </ul>
              </div>
              <Link href={"/submission"}>
                <Button className="bg-gradient-to-tr from-sky-400 via-rose-400 to-lime-400 hover:shadow-lg transition-all text-white rounded-xl px-6 py-3">
                  Submit for Poster Presentation
                </Button>
              </Link>
            </div>
            <div className="relative rounded-2xl overflow-hidden h-[400px] order-1 lg:order-2">
              <Image
                src="https://plus.unsplash.com/premium_photo-1661587798846-2b2bdbe5abc0?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Conference poster session"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/95 backdrop-blur-sm rounded-xl py-3 px-6">
                  <span className="text-gray-900 font-medium">Engage in meaningful discussions</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Virtual Presentation Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative rounded-2xl overflow-hidden h-[400px]">
              <Image
                src="https://plus.unsplash.com/premium_photo-1661483130874-527d2f9e5746?q=80&w=2135&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Virtual conference presentation"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/95 backdrop-blur-sm rounded-xl py-3 px-6">
                  <span className="text-gray-900 font-medium">Connect globally from anywhere</span>
                </div>
              </div>
            </div>
            <div>
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-tr from-sky-400 via-rose-400 to-lime-400 rounded-xl p-3 mr-4">
                  <Monitor className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Virtual Presentation</h2>
              </div>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Can't attend in person? Present your research on gender equality and women empowerment 
                virtually through our dedicated online platform. This option provides global accessibility 
                while maintaining engagement and impact.
              </p>

              <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">What to Prepare:</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="h-5 w-5 rounded-full bg-neutral-700 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                      <Check className="h-3 w-3 text-white" />
                    </div>
                    <span className="text-gray-600">PowerPoint or PDF presentation (16:9 format)</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-5 w-5 rounded-full bg-neutral-700 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                      <Check className="h-3 w-3 text-white" />
                    </div>
                    <span className="text-gray-600">Stable internet connection (minimum 10 Mbps upload)</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-5 w-5 rounded-full bg-neutral-700 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                      <Check className="h-3 w-3 text-white" />
                    </div>
                    <span className="text-gray-600">HD webcam and professional microphone/headset</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-5 w-5 rounded-full bg-neutral-700 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                      <Check className="h-3 w-3 text-white" />
                    </div>
                    <span className="text-gray-600">Pre-recorded backup and demo videos (optional)</span>
                  </li>
                </ul>
              </div>
              <Link href={"/submission"}>
                <Button className="bg-gradient-to-tr from-sky-400 via-rose-400 to-lime-400 hover:shadow-lg transition-all text-white rounded-xl px-6 py-3">
                  Submit for Virtual Presentation
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Panel Discussion Section */}
      {/* <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-tr from-sky-400 via-rose-400 to-lime-400 rounded-xl p-3 mr-4">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Panel Discussion</h2>
              </div>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Join fellow experts, advocates, and practitioners in moderated panel discussions on key topics 
                in gender equality and women empowerment. Share diverse perspectives and engage in collaborative 
                problem-solving sessions.
              </p>

              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">What to Prepare:</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="h-5 w-5 rounded-full bg-neutral-700 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                      <Check className="h-3 w-3 text-white" />
                    </div>
                    <span className="text-gray-600">Key talking points and personal experiences to share</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-5 w-5 rounded-full bg-neutral-700 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                      <Check className="h-3 w-3 text-white" />
                    </div>
                    <span className="text-gray-600">Supporting data, case studies, or success stories</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-5 w-5 rounded-full bg-neutral-700 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                      <Check className="h-3 w-3 text-white" />
                    </div>
                    <span className="text-gray-600">Questions for fellow panelists and audience engagement</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-5 w-5 rounded-full bg-neutral-700 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                      <Check className="h-3 w-3 text-white" />
                    </div>
                    <span className="text-gray-600">Professional headshot and detailed bio</span>
                  </li>
                </ul>
              </div>
              <Link href={"/submission"}>
                <Button className="bg-gradient-to-tr from-sky-400 via-rose-400 to-lime-400 hover:shadow-lg transition-all text-white rounded-xl px-6 py-3">
                  Apply for Panel Discussion
                </Button>
              </Link>
            </div>
            <div className="relative rounded-2xl overflow-hidden h-[400px] order-1 lg:order-2">
              <Image
                src="https://images.unsplash.com/photo-1599584933236-b93d637a8630?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D "
                alt="Panel discussion"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/95 backdrop-blur-sm rounded-xl py-3 px-6">
                  <span className="text-gray-900 font-medium">Share diverse perspectives</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Presentation Guidelines Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">Presentation Guidelines</h2>
            <p className="text-gray-600 text-center mb-12 text-lg">
              Regardless of your presentation format, please follow these guidelines to ensure an impactful 
              and engaging experience for all participants at our International Conference on Gender Equality, 
              Women Empowerment & Entrepreneurship 2025.
            </p>

            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
              <div className="grid grid-cols-1 gap-8">
                {presentationGuidelines.map((guideline, index) => (
                  <div key={index} className="flex items-start">
                    <div className="bg-gradient-to-tr from-sky-400 via-rose-400 to-lime-400 rounded-xl w-12 h-12 flex items-center justify-center mr-6 flex-shrink-0">
                      <span className="text-white font-bold text-lg">{index + 1}</span>
                    </div>
                    <div className="pt-2">
                      <p className="text-gray-600 leading-relaxed">{guideline}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-tr from-sky-400 via-rose-400 to-lime-400 rounded-2xl p-8 shadow-lg text-white">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="mb-6 md:mb-0 md:mr-8">
                <h3 className="text-2xl md:text-3xl font-bold mb-3">Ready to make an impact?</h3>
                <p className="max-w-xl opacity-95 text-lg">
                  Choose your preferred presentation format and submit your proposal. Join us in Bali 
                  to advance gender equality and women empowerment globally.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href={"/submission"}>
                  <Button className="bg-white text-gray-900 hover:bg-gray-100 rounded-xl px-6 py-3 font-medium whitespace-nowrap">
                    Submit Your Presentation
                  </Button>
                </Link>
                <Link href="/papers-format">
                  <Button
                    variant="outline"
                    className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900 rounded-xl px-6 py-3 font-medium whitespace-nowrap"
                  >
                    View Guidelines <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}