"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Download, FileText, Check, ArrowRight } from "lucide-react"

export default function PapersFormatPage() {
  const generalRequirements = [
    "Use IEEE conference paper format without modifying margins, font sizes, or styles",
    "Abstract submissions should not exceed 300 words",
    "Full papers should be between 6-10 pages, including figures, tables, and references",
    "Poster presentations should follow the A0 format (841 × 1189 mm) in portrait orientation",
    "All submissions must be in PDF format with embedded fonts",
  ]

  const templates = [
    {
      title: "Abstract Template",
      description: "IEEE format template for 300-word abstract submissions",
      file: "/templates/Abstract_Template.docx",
      icon: <FileText className="h-6 w-6 text-transparent bg-gradient-to-tr from-sky-400 via-rose-400 to-lime-400 bg-clip-text" />,
    },
    {
      title: "Full Paper Template",
      description: "IEEE format template for 6-10 page full paper submissions",
      file: "/templates/Fullpaper_Template.doc",
      icon: <FileText className="h-6 w-6 text-transparent bg-gradient-to-tr from-sky-400 via-rose-400 to-lime-400 bg-clip-text" />,
    },
    {
      title: "Poster Template",
      description: "A0 format template for poster presentations",
      file: "/templates/poster.jpg",
      icon: <FileText className="h-6 w-6 text-transparent bg-gradient-to-tr from-sky-400 via-rose-400 to-lime-400 bg-clip-text" />,
    },
  ]

  return (
    <main className="bg-white min-h-screen">
      {/* Hero Section */}
  

      {/* Paper Format Guidelines Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative rounded-2xl overflow-hidden h-[500px]">
              <Image
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Research and Documentation"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-8 left-8 right-8">
                <div className="bg-white/95 backdrop-blur-sm rounded-2xl py-4 px-6">
                  <span className="text-gray-900 font-medium">Empowering voices through quality research</span>
                </div>
              </div>
            </div>
            
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl font-medium text-gray-900 mb-6">Format Guidelines</h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  All submissions must follow IEEE conference paper formatting guidelines to ensure consistency and professional presentation across all research contributions.
                </p>
                <p className="text-gray-600 text-lg leading-relaxed">
                  We provide comprehensive templates for different submission types to streamline your preparation process and maintain publication standards.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <h3 className="text-2xl font-light text-gray-900 mb-6">General Requirements</h3>
                <ul className="space-y-4">
                  {generalRequirements.map((requirement, index) => (
                    <li key={index} className="flex items-start group">
                      <div className="h-6 w-6 rounded-full bg-gradient-to-tr from-sky-400 via-rose-400 to-lime-400 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                        <Check className="h-3 w-3 text-white" />
                      </div>
                      <span className="text-gray-600 leading-relaxed">{requirement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Citation Style Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="space-y-6">
              <h2 className="text-4xl font-medium text-gray-900">Citation Style</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                All submissions must follow IEEE citation style, the standard format for academic conferences in our field. This ensures consistency and professional presentation across all publications.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                Our templates include comprehensive examples of reference formatting for journal articles, conference papers, books, and online sources.
              </p>
              <div className="bg-gray-50 rounded-2xl p-6 border-l-4 border-transparent bg-gradient-to-r from-sky-400/20 via-rose-400/20 to-lime-400/20">
                <p className="text-sm text-gray-700 leading-relaxed">
                  <strong>Example:</strong> A. Johnson, B. Smith, and C. Davis, "Breaking barriers: Women in STEM leadership roles," in Proc. Int. Conf. Gender Equality, 2024, pp. 45-52.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="text-4xl font-medium text-gray-900">Language & Quality</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                All submissions must be in English with clear, professional academic writing. We recommend peer review and professional editing services before submission.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                Pay special attention to inclusive language, terminology related to gender studies, and clear methodology descriptions that ensure reproducibility.
              </p>
              <div className="bg-gray-50 rounded-2xl p-6 border-l-4 border-transparent bg-gradient-to-r from-sky-400/20 via-rose-400/20 to-lime-400/20">
                <p className="text-sm text-gray-700 leading-relaxed">
                  <strong>Tip:</strong> Use inclusive language and consider intersectionality when discussing gender equality and empowerment topics.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Download Templates Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-medium text-gray-900 mb-6">Download Templates</h2>
            <div className="h-1 w-24 bg-gradient-to-tr from-sky-400 via-rose-400 to-lime-400 mx-auto mb-6 rounded-full"></div>
            <p className="text-xl text-gray-600">Official IEEE-compliant templates for your submissions</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {templates.map((template, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-sky-400 via-rose-400 to-lime-400 flex items-center justify-center mx-auto mb-6">
                  <FileText className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-light text-gray-900 mb-4">{template.title}</h3>
                <p className="text-gray-600 mb-8 leading-relaxed">{template.description}</p>
                <Link href={template.file}>
                  <Button
                    variant="outline"
                    className="border-2 border-gray-200 text-gray-700 hover:bg-gradient-to-tr hover:from-sky-400 hover:via-rose-400 hover:to-lime-400 hover:text-white hover:border-transparent rounded-full px-6 py-2 transition-all duration-300"
                  >
                    <Download className="mr-2 h-4 w-4" /> Download Template
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Requirements Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-medium text-gray-900 mb-6">Technical Requirements</h2>
              <div className="h-1 w-24 bg-gradient-to-tr from-sky-400 via-rose-400 to-lime-400 mx-auto rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
                <h3 className="text-2xl font-light text-gray-900 mb-6">Figures and Tables</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-gradient-to-tr from-sky-400 via-rose-400 to-lime-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    All figures must be high resolution (minimum 300 DPI)
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-gradient-to-tr from-sky-400 via-rose-400 to-lime-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Use vector graphics when possible
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-gradient-to-tr from-sky-400 via-rose-400 to-lime-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Include captions below figures and above tables
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-gradient-to-tr from-sky-400 via-rose-400 to-lime-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Reference all figures and tables in the text
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-gradient-to-tr from-sky-400 via-rose-400 to-lime-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Use consistent formatting and fonts
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
                <h3 className="text-2xl font-light text-gray-900 mb-6">Data Presentation</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-gradient-to-tr from-sky-400 via-rose-400 to-lime-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Include error bars and statistical significance
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-gradient-to-tr from-sky-400 via-rose-400 to-lime-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Provide dataset descriptions and sources
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-gradient-to-tr from-sky-400 via-rose-400 to-lime-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Use inclusive demographic categories
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-gradient-to-tr from-sky-400 via-rose-400 to-lime-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Ensure reproducibility of results
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-gradient-to-tr from-sky-400 via-rose-400 to-lime-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Consider intersectional analysis approaches
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
                <h3 className="text-2xl font-light text-gray-900 mb-6">Research Methodology</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-gradient-to-tr from-sky-400 via-rose-400 to-lime-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Clearly define research questions and hypotheses
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-gradient-to-tr from-sky-400 via-rose-400 to-lime-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Describe participant recruitment and selection
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-gradient-to-tr from-sky-400 via-rose-400 to-lime-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Address ethical considerations and consent
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-gradient-to-tr from-sky-400 via-rose-400 to-lime-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Include limitations and future work sections
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-gradient-to-tr from-sky-400 via-rose-400 to-lime-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Use gender-inclusive research frameworks
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
                <h3 className="text-2xl font-light text-gray-900 mb-6">Writing Standards</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-gradient-to-tr from-sky-400 via-rose-400 to-lime-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Use person-first and inclusive language
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-gradient-to-tr from-sky-400 via-rose-400 to-lime-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Avoid assumptions about gender roles
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-gradient-to-tr from-sky-400 via-rose-400 to-lime-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Include diverse perspectives and citations
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-gradient-to-tr from-sky-400 via-rose-400 to-lime-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Maintain academic objectivity and rigor
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-gradient-to-tr from-sky-400 via-rose-400 to-lime-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Acknowledge positionality where relevant
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Submission Tips Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-medium text-gray-900 mb-6">Submission Tips</h2>
              <div className="h-1 w-24 bg-gradient-to-tr from-sky-400 via-rose-400 to-lime-400 mx-auto rounded-full"></div>
            </div>

            <div className="bg-white rounded-2xl p-12 shadow-sm border border-gray-100">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="flex items-start space-x-6">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-sky-400 via-rose-400 to-lime-400 flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-light text-lg">1</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium text-gray-900 mb-3">Start Early</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Begin preparing your submission well in advance to allow adequate time for research, writing, revisions, and formatting compliance.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-6">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-sky-400 via-rose-400 to-lime-400 flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-light text-lg">2</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium text-gray-900 mb-3">Follow IEEE Standards</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Strictly adhere to IEEE formatting requirements, including page limits, citation style, and template usage for professional presentation.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-6">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-sky-400 via-rose-400 to-lime-400 flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-light text-lg">3</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium text-gray-900 mb-3">Clear Contribution</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Clearly articulate your research contribution, novelty, and significance to gender equality, women empowerment, and entrepreneurship.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-6">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-sky-400 via-rose-400 to-lime-400 flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-light text-lg">4</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium text-gray-900 mb-3">Peer Review</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Have colleagues review your paper for technical accuracy, inclusive language, clarity, and formatting before final submission.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-tr from-sky-400 via-rose-400 to-lime-300 rounded-3xl p-12 text-white shadow-lg">
            <div className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto">
              <div className="mb-8 md:mb-0 md:mr-8 text-center md:text-left">
                <h3 className="text-3xl font-light mb-4">Ready to submit your research?</h3>
                <p className="text-lg opacity-95 leading-relaxed max-w-2xl">
                  Download the appropriate template and prepare your submission for the International Conference on Gender Equality, Women Empowerment & Entrepreneurship 2025.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/submission">
                  <Button className="bg-white text-gray-900 hover:bg-gray-100 rounded-full px-8 py-3 font-medium transition-all duration-300">
                    Submit Paper
                  </Button>
                </Link>
                <Link href="/theme-and-topics">
                  <Button
                    variant="outline"
                    className="border-0 bg-neutral-900 hover:bg-neutral-800 text-white hover:text-neutral-50  rounded-full px-8 py-3 font-medium transition-all duration-300"
                  >
                    View Research Topics <ArrowRight className="ml-2 h-4 w-4" />
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