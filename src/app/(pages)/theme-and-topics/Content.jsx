"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Users, Heart, Briefcase, Globe, Shield, BookOpen } from "lucide-react"

export default function ThemeAndTopicsPage() {
  const researchAreas = [
    {
      icon: <Users className="h-8 w-8 text-white" />,
      title: "Gender Equality & Social Justice",
      topics: [
        "Gender Pay Gap and Economic Inequality",
        "Political Participation and Leadership",
        "Gender-Based Violence Prevention",
        "Legal Frameworks and Policy Reform",
        "Intersectionality and Inclusive Practices",
      ],
    },
    {
      icon: <Heart className="h-8 w-8 text-white" />,
      title: "Women's Health & Wellbeing",
      topics: [
        "Reproductive Rights and Healthcare Access",
        "Mental Health and Gender-Specific Issues",
        "Maternal Health and Family Planning",
        "Work-Life Balance and Wellness",
        "Healthcare Equity and Innovation",
      ],
    },
    {
      icon: <Briefcase className="h-8 w-8 text-white" />,
      title: "Women in Business & Leadership",
      topics: [
        "Female Entrepreneurship Ecosystem",
        "Corporate Leadership and Board Diversity",
        "Access to Capital and Investment",
        "Mentorship and Networking Programs",
        "Breaking Glass Ceilings",
      ],
    },
    {
      icon: <BookOpen className="h-8 w-8 text-white" />,
      title: "Education & Skill Development",
      topics: [
        "STEM Education for Girls and Women",
        "Digital Literacy and Technology Access",
        "Vocational Training and Capacity Building",
        "Educational Policy and Gender Bias",
        "Lifelong Learning Opportunities",
      ],
    },
    {
      icon: <Globe className="h-8 w-8 text-white" />,
      title: "Global Perspectives & Culture",
      topics: [
        "Cultural Barriers and Social Norms",
        "International Women's Rights",
        "Rural Women Empowerment",
        "Migration and Gender Issues",
        "Indigenous Women's Rights",
      ],
    },
    {
      icon: <Shield className="h-8 w-8 text-white" />,
      title: "Technology & Innovation",
      topics: [
        "Women in Technology and Innovation",
        "Digital Platforms for Empowerment",
        "Fintech and Financial Inclusion",
        "AI Ethics and Gender Bias",
        "Social Impact Technologies",
      ],
    },
  ]

  const submissionSteps = [
    {
      number: "1",
      title: "Prepare Your Abstract",
      description:
        "Submit a 300-word abstract outlining your research question, methodology, findings, and relevance to gender equality and women empowerment.",
    },
    {
      number: "2",
      title: "Abstract Review",
      description:
        "Abstracts will be reviewed by our expert committee of gender studies researchers and practitioners. If accepted, you'll be invited to submit a full paper.",
    },
    {
      number: "3",
      title: "Full Paper Submission",
      description:
        "Submit your full paper (6-10 pages) following conference formatting guidelines. All papers undergo double-blind peer review by domain experts.",
    },
    {
      number: "4",
      title: "Presentation",
      description:
        "Accepted papers will be presented as oral presentations, poster sessions, or panel discussions, based on your preference and committee recommendations.",
    },
  ]

  return (
    <main className="bg-white">
      {/* Conference Theme Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block border border-gray-200 rounded-full px-4 py-2 text-sm mb-8 bg-gray-50">
                Conference Theme
              </div>
              <h2 className="text-4xl md:text-5xl font-medium text-gray-900 mb-8 leading-">
                "Empowering Futures: Building Inclusive Societies Through Gender Equality & Women's Leadership"
              </h2>
              <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                The International Conference on Gender Equality, Women Empowerment & Entrepreneurship 2025 addresses 
                the critical need for inclusive development and equal opportunities. As we advance toward a more 
                equitable world, this conference explores innovative approaches to dismantling barriers and creating 
                sustainable pathways for women's advancement.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                Join us in Bali, Indonesia, as we bring together researchers, policymakers, entrepreneurs, and advocates 
                to examine transformative solutions that promote gender equality and foster women's empowerment across 
                all sectors of society.
              </p>
            </div>
            <div className="relative rounded-2xl overflow-hidden h-[500px] shadow-sm">
              <Image
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2088&auto=format&fit=crop"
                alt="Women Empowerment and Leadership"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="bg-white/95 backdrop-blur-sm rounded-xl py-4 px-6 inline-flex items-center">
                  <span className="text-gray-900 font-medium">October 10-11, 2025 • Bali, Indonesia</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Research Areas Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-medium text-gray-900 mb-8">Research Focus Areas</h2>
            <p className="text-gray-600 text-lg">Explore the diverse topics and themes that will shape our discussions</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {researchAreas.map((area, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
                <div className="bg-gradient-to-tr from-sky-400 via-rose-400 to-lime-400 rounded-xl p-3 inline-block mb-6">
                  {area.icon}
                </div>
                <h3 className="text-xl font-medium text-gray-900 mb-6">{area.title}</h3>
                <ul className="space-y-3">
                  {area.topics.map((topic, topicIndex) => (
                    <li key={topicIndex} className="flex items-start">
                      <div className="h-2 w-2 rounded-full bg-gradient-to-tr from-sky-400 via-rose-400 to-lime-400 mr-3 mt-2 flex-shrink-0"></div>
                      <span className="text-gray-600 leading-relaxed">{topic}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Submit Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-medium text-gray-900 mb-8">Submission Process</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              We welcome submissions from researchers, practitioners, policymakers, and advocates across all disciplines 
              related to gender equality and women empowerment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {submissionSteps.map((step, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-8 relative overflow-hidden border border-gray-100">
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-tr from-sky-400/20 via-rose-400/20 to-lime-400/20 rounded-full"></div>
                <div className="relative z-10">
                  <div className="bg-gradient-to-tr from-sky-400 via-rose-400 to-lime-400 text-white w-12 h-12 rounded-xl flex items-center justify-center font-medium mb-6 text-lg">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-medium text-gray-900 mb-4">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <Link href={"/registration"}>
              <Button className="bg-gradient-to-br from-sky-400 via-rose-400 to-lime-400 hover:opacity-90 text-white rounded-full px-10 py-3 text-base font-medium transition-all duration-300">
                Register Now
              </Button>
            </Link>
            <Link href={"/submission"}>
              <Button
                variant="outline"
                className="border-2 border-gray-200 text-gray-700 hover:bg-gray-50 rounded-full px-10 py-3 text-base font-medium transition-all duration-300"
              >
                Submit Paper <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-br from-sky-400 via-rose-400 to-lime-400 rounded-3xl p-12 shadow-lg text-white">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="mb-8 md:mb-0 md:mr-8">
                <h3 className="text-3xl font-light mb-4">Become Our Partner</h3>
                <p className="max-w-2xl opacity-95 text-lg leading-relaxed">
                  Join us as a sponsor to showcase your commitment to gender equality and women empowerment. 
                  Connect with global leaders, researchers, and changemakers while demonstrating your dedication 
                  to building inclusive societies at this transformative conference in Bali.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <Link href={"/exhibit-and-sponsor"}>
                  <Button
                    className="bg-white text-gray-700 hover:bg-gray-50 rounded-full px-10 py-3 text-base font-medium transition-all duration-300"
                  >
                    View Partnership Options
                    <ArrowRight className="ml-2 h-4 w-4" />
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