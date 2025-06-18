import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'
import { ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'

function About() {
  return (
    <section className="py-12 bg-white">
      <div className="flex flex-col lg:flex-row">
        {/* Left Side - Image (Stick to left) */}
        <div className="lg:w-1/2 relative pr-6 lg:px-0">
          <div className="relative z-10 ml-0 bg-gradient-to-tl from-sky-400 via-rose-300 to-lime-300 rounded-r-4xl pt-1 pr-1">
            <div className='relative mt-12 mr-12 border-4 border-b-0 border-l-0 bg-white rounded-tr-4xl border-white border-b-black/50 drop-shadow-2xl  '>
              {/* Grid Background */}
      <div
          className={cn(
            "absolute inset-0",
            "[background-size:20px_20px]",
            "[background-image:radial-gradient(#d4d4d4_1px,transparent_1px)]"
          )} />
        
        {/* Radial gradient for faded look */}
         
            <Image
              src="/assets/about.png"
              alt="Women Empowerment and Leadership"
              width={700}
              height={400}
              className="w-full max-w-2xl mx-auto lg:mx-0 transform rotate-y-180 drop-shadow-2xl pointer-events-none select-none "
              />
              </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute -bottom-8 -left-8 lg:left-4 w-48 h-48 bg-white rounded-full opacity-80 z-0"></div>
          <div className="absolute top-1/3 -right-8 lg:right-8 w-24 h-24 bg-orange-100 rounded-full opacity-80 z-0"></div>
        </div>

        {/* Right Side - Content (Centered) */}
        <div className="lg:w-1/2 px-6 lg:px-12 mt-12 lg:mt-0 flex items-center">
          <div className="max-w-xl mx-auto lg:mx-0">
            <h1 className="text-4xl lg:text-5xl font-semibold mb-8 text-gray-900   ">
              Let's Get Closer<br />
              About <br />
              <span className="bg-gradient-to-tl from-sky-400 via-rose-400 to-lime-400 drop-shadow-2xl text-transparent bg-clip-text">Gender Equality</span> & Women Empowerment
            </h1>

            <div className="space-y-6 text-gray-700">
              <p className="text-lg leading-relaxed">
                At the International Conference on Gender Equality, Women Empowerment & Entrepreneurship, we unite 
                global leaders, advocates, entrepreneurs, and changemakers dedicated to advancing gender equality 
                and women's rights worldwide.
              </p>

              <p className="text-lg leading-relaxed">
                Our mission is to showcase transformative initiatives that promote women's economic empowerment, 
                leadership development, and entrepreneurial innovation. The conference explores how we can break 
                barriers, create inclusive opportunities, and build sustainable pathways for women's advancement 
                across all sectors.
              </p>

              <p className="text-lg leading-relaxed">
                Join us in Bali, Indonesia on October 10th-11th, 2025 for an inspiring two-day experience featuring 
                powerful keynote speeches, interactive panel discussions, skill-building workshops, and meaningful 
                networking with influential leaders championing gender equality.
              </p>

              <Button className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 rounded-lg text-lg mt-6">
                Learn More Here
                <ArrowRight className="ml-2 w-5 h-5 transition-colors duration-300" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Key Features Grid */}
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-12 mt-20 lg:mt-24">
        <h2 className="text-4xl lg:text-5xl font-semibold text-center mb-16 text-gray-900 ">
          Our Vision & <span className="bg-gradient-to-tl from-sky-400 via-rose-400 to-lime-400 drop-shadow-2xl text-transparent bg-clip-text">Objectives</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Feature 1 */}
          <div className="group bg-gray-50 p-8 rounded-2xl border border-gray-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="w-16 h-16 bg-neutral-800 rounded-full flex items-center justify-center mb-6 transition-all duration-300 group-hover:bg-gradient-to-tl group-hover:from-sky-400 group-hover:via-rose-400 group-hover:to-lime-400">
              <span className="text-2xl font-bold text-white transition-colors duration-300">01</span>
            </div>
            <h4 className="text-xl font-bold mb-4 text-gray-900">Empowerment Exchange</h4>
            <p className="text-gray-700 leading-relaxed">
              Facilitate the sharing of best practices, success stories, and innovative strategies for women's empowerment across diverse cultural and professional contexts.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="group bg-gray-50 p-8 rounded-2xl border border-gray-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="w-16 h-16 bg-neutral-800 rounded-full flex items-center justify-center mb-6 transition-all duration-300 group-hover:bg-gradient-to-tl group-hover:from-sky-400 group-hover:via-rose-400 group-hover:to-lime-400">
              <span className="text-2xl font-bold text-white transition-colors duration-300">02</span>
            </div>
            <h4 className="text-xl font-bold mb-4 text-gray-900">Economic Impact</h4>
            <p className="text-gray-700 leading-relaxed">
              Showcase women-led enterprises and entrepreneurial ventures that are driving economic growth and creating positive social change in their communities.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="group bg-gray-50 p-8 rounded-2xl border border-gray-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="w-16 h-16 bg-neutral-800 rounded-full flex items-center justify-center mb-6 transition-all duration-300 group-hover:bg-gradient-to-tl group-hover:from-sky-400 group-hover:via-rose-400 group-hover:to-lime-400">
              <span className="text-2xl font-bold text-white transition-colors duration-300">03</span>
            </div>
            <h4 className="text-xl font-bold mb-4 text-gray-900">Leadership Vision</h4>
            <p className="text-gray-700 leading-relaxed">
              Explore emerging leadership models and future opportunities for women in executive roles, politics, technology, and social entrepreneurship.
            </p>
          </div>

          {/* Feature 4 */}
          <div className="group bg-gray-50 p-8 rounded-2xl border border-gray-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="w-16 h-16 bg-neutral-800 rounded-full flex items-center justify-center mb-6 transition-all duration-300 group-hover:bg-gradient-to-tl group-hover:from-sky-400 group-hover:via-rose-400 group-hover:to-lime-400">
              <span className="text-2xl font-bold text-white transition-colors duration-300">04</span>
            </div>
            <h4 className="text-xl font-bold mb-4 text-gray-900">Policy Framework</h4>
            <p className="text-gray-700 leading-relaxed">
              Address systemic barriers and advocate for policy reforms that promote gender equality, equal pay, and inclusive workplace environments.
            </p>
          </div>

          {/* Feature 5 */}
          <div className="group bg-gray-50 p-8 rounded-2xl border border-gray-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="w-16 h-16 bg-neutral-800 rounded-full flex items-center justify-center mb-6 transition-all duration-300 group-hover:bg-gradient-to-tl group-hover:from-sky-400 group-hover:via-rose-400 group-hover:to-lime-400">
              <span className="text-2xl font-bold text-white transition-colors duration-300">05</span>
            </div>
            <h4 className="text-xl font-bold mb-4 text-gray-900">Global Networks</h4>
            <p className="text-gray-700 leading-relaxed">
              Foster international partnerships and mentorship networks that connect women entrepreneurs, leaders, and advocates across borders and industries.
            </p>
          </div>

          {/* Feature 6 */}
          <div className="group bg-gray-50 p-8 rounded-2xl border border-gray-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="w-16 h-16 bg-neutral-800 rounded-full flex items-center justify-center mb-6 transition-all duration-300 group-hover:bg-gradient-to-tl group-hover:from-sky-400 group-hover:via-rose-400 group-hover:to-lime-400">
              <span className="text-2xl font-bold text-white transition-colors duration-300">06</span>
            </div>
            <h4 className="text-xl font-bold mb-4 text-gray-900">Skill Building</h4>
            <p className="text-gray-700 leading-relaxed">
              Provide practical workshops on business development, financial literacy, digital marketing, and leadership skills to accelerate women's professional growth.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About