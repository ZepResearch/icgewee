import { Award, Target, Users, Globe, Lightbulb, TrendingUp, ArrowRight, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"

export default function AboutOrganizerPage() {
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
              {/* Logo/Brand */}
              {/* <div className="flex items-center space-x-2 mb-8">
                <div className="w-8 h-8 rounded-full border-2 border-purple-400 flex items-center justify-center">
                  <div className="w-3 h-3 bg-purple-400 rounded-full"></div>
                </div>
                <span className="text-sm font-medium text-gray-600">ZEP RESEARCH</span>
              </div> */}

              {/* Main Heading */}
             
              <div className="text-left">
                <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-none">
                  ZEP
                  <br />
                  <span >RESEARCH</span>
                </h1>
              </div>
              {/* Innovation Card */}
             

              {/* Company Stats */}
              <div className="max-w-sm">
                <h3 className="font-semibold text-gray-900 mb-2">TRANSFORMING IDEAS INTO REALITY</h3>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center space-x-2">
                    <Globe className="w-4 h-4" />
                    <span>Global Research Network</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Award className="w-4 h-4" />
                    <span>Industry Recognition</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Center Image - Positioned to stick to bottom */}
            <div className="col-span-12 lg:col-span-4 flex justify-center items-end h-full">
              <div className="relative">
                <img
                  src="assets/oranginer.png"
                  alt="Research Technology"
                  className="w-full h-auto min-h-[200px] lg:max-h-[310px] object-contain object-bottom  select-none pointer-events-none drop-shadow-lg"
                />
                {/* Decorative elements */}
              
              </div>
            </div>

            {/* Right Side Content */}
            <div className="col-span-12 lg:col-span-4 space-y-6">
              {/* Main Title */}
              <div>
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-11 mb-4 text-right">
                  PIONEERING THE
                  <br />
                  <span className="bg-gradient-to-tl from-sky-400 via-rose-400 to-lime-400 drop-shadow-2xl text-transparent bg-clip-text">FUTURE OF RESEARCH</span>
                </h1>
              </div>

              {/* About Card */}
              <Card className="p-4 bg-white/80 backdrop-blur-sm border-0 shadow-lg ml-auto max-w-md ">
                <div className="flex items-start space-x-3">
                  
                  <div className="text-right">
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Founded with a vision to bridge the gap between cutting-edge research and practical applications,
                      Zep Research has become a catalyst for innovation across multiple industries.
                    </p>
                  </div>
                </div>
              </Card>

              {/* Excellence Card */}
         
            </div>
          </div>
        </div>
      </section>

      {/* About Zep Research Section */}
      <section className="relative z-10 py-20 bg-white/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 ">About Zep Research</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Zep Research is a premier research organization dedicated to advance scientific knowledge and
              technological innovation. Since our founding, we have been at the forefront of organizing world-class
              conferences, symposiums, and research initiatives that bring together the brightest minds from academia
              and industry.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-5 bg-white/80 backdrop-blur-sm border-0 shadow-lg text-center">
              <Globe className="w-10 h-10 text-rose-500 mx-auto " />
              <h3 className="text-xl font-semibold text-gray-900 ">Global Reach</h3>
              <p className="text-gray-600">Connecting researchers and innovators across 50+ countries worldwide</p>
            </Card>
            <Card className="p-6 bg-white/80 backdrop-blur-sm border-0 shadow-lg text-center">
              <Target className="w-10 h-10 text-rose-500 mx-auto " />
              <h3 className="text-xl font-semibold text-gray-900 ">Focused Excellence</h3>
              <p className="text-gray-600">Specialized expertise in AI, robotics, and emerging technologies</p>
            </Card>
            <Card className="p-6 bg-white/80 backdrop-blur-sm border-0 shadow-lg text-center">
              <Users className="w-10 h-10 text-rose-500 mx-auto " />
              <h3 className="text-xl font-semibold text-gray-900 ">Community Building</h3>
              <p className="text-gray-600">Fostering collaboration between academia, industry, and government</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="relative z-10 py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 ">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                To accelerate scientific progress and technological advancement by creating platforms for knowledge
                exchange, collaboration, and innovation. We believe that breakthrough discoveries happen when diverse
                minds come together to tackle humanity's greatest challenges.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-rose-500" />
                  <span className="text-gray-700">Facilitate groundbreaking research collaborations</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-rose-500" />
                  <span className="text-gray-700">Bridge the gap between research and application</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-rose-500" />
                  <span className="text-gray-700">Nurture the next generation of innovators</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-rose-500" />
                  <span className="text-gray-700">Promote ethical and responsible innovation</span>
                </div>
              </div>
            </div>
            <Card className="p-8 bg-white/80 backdrop-blur-sm border-0 shadow-lg">
              <div className="text-center">
                <img src="/gallery/2nd_ICEMSS_07.webp" alt="Our Mission" className=" object-contain mx-auto mb-6" />
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Driving Innovation</h3>
                <p className="text-gray-600 mb-6">
                  Through our carefully curated events and research initiatives, we create environments where
                  breakthrough ideas flourish and transformative partnerships are born.
                </p>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-rose-500">5+</div>
                    <div className="text-sm text-gray-600">Years Experience</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-rose-500">50+</div>
                    <div className="text-sm text-gray-600">Events Organized</div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Achievements Section */}
      <section className="relative z-10 py-20 bg-white/50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 text-center mb-16 ">Our Achievements</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <Card className="p-6 bg-white/80 backdrop-blur-sm border-0 shadow-lg text-center">
              <div className="text-4xl font-bold text-neutral-700 ">25+</div>
              <h3 className="font-semibold text-gray-900 ">Global Reach</h3>
              <p className="text-sm text-gray-600">Conferences and research initiatives spanning 25+ countries across 5 continents</p>
            </Card>
            <Card className="p-6 bg-white/80 backdrop-blur-sm border-0 shadow-lg text-center">
              <div className="text-4xl font-bold text-neutral-700 ">10,000+</div>
              <h3 className="font-semibold text-gray-900 ">Academic Network</h3>
              <p className="text-sm text-gray-600">Connected network of researchers, academics, and industry professionals</p>
            </Card>
            <Card className="p-6 bg-white/80 backdrop-blur-sm border-0 shadow-lg text-center">
              <div className="text-4xl font-bold text-neutral-700 ">5,000+</div>
              <h3 className="font-semibold text-gray-900 ">Research Excellence</h3>
              <p className="text-sm text-gray-600">Facilitated publication of peer-reviewed research papers in prestigious journals</p>
            </Card>
            <Card className="p-6 bg-white/80 backdrop-blur-sm border-0 shadow-lg text-center">
              <div className="text-4xl font-bold text-neutral-700 ">200+</div>
              <h3 className="font-semibold text-gray-900 ">Industry Impact</h3>
              <p className="text-sm text-gray-600">Partnerships with organizations driving real-world implementation of research findings</p>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="p-8 bg-white/80 backdrop-blur-sm border-0 shadow-lg">
              <Award className="w-12 h-12 text-neutral-700 " />
              <h3 className="text-2xl font-semibold text-gray-900 ">Recognition & Awards</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-ntext-neutral-700 rounded-full"></div>
                  <span className="text-gray-700">Best Conference Organizer 2023 - Tech Innovation Awards</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-ntext-neutral-700 rounded-full"></div>
                  <span className="text-gray-700">Excellence in Research Facilitation - Global Research Council</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-ntext-neutral-700 rounded-full"></div>
                  <span className="text-gray-700">Outstanding Contribution to AI Community - IEEE</span>
                </div>
              </div>
            </Card>

            <Card className="p-8 bg-white/80 backdrop-blur-sm border-0 shadow-lg">
              <TrendingUp className="w-12 h-12 text-neutral-700 " />
              <h3 className="text-2xl font-semibold text-gray-900 ">Impact & Growth</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Research Collaborations</span>
                    <span className="text-sm font-semibold text-gray-900">95%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-ntext-neutral-700/90 h-2 rounded-full" style={{ width: "95%" }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-gray-600">Attendee Satisfaction</span>
                    <span className="text-sm font-semibold text-gray-900">98%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-ntext-neutral-700/90 h-2 rounded-full" style={{ width: "98%" }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-gray-600">Industry Partnerships</span>
                    <span className="text-sm font-semibold text-gray-900">92%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-ntext-neutral-700/90 h-2 rounded-full" style={{ width: "92%" }}></div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Partner with Zep Research CTA Section */}
      <section className="relative z-10 py-20">
        <div className="container mx-auto px-4">
          <Card className="p-8 bg-gradient-to-tl from-sky-400 via-rose-400 to-lime-400 drop-shadow-2xl text-white text-center border-0 shadow-2xl">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white">Partner with Zep Research</h2>
              <p className="text-xl mb-8 opacity-90">
                Join forces with us to create impactful research initiatives, organize world-class conferences, and
                drive innovation in your field. Together, we can shape the future of scientific discovery and
                technological advancement.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 text-left">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <Globe className="w-8 h-8 mb-3" />
                  <h3 className="font-semibold mb-2">Global Platform</h3>
                  <p className="text-sm opacity-90">Access our worldwide network of researchers and institutions</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <Target className="w-8 h-8 mb-3" />
                  <h3 className="font-semibold mb-2">Targeted Reach</h3>
                  <p className="text-sm opacity-90">Connect with your specific audience and research community</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <Award className="w-8 h-8 mb-3" />
                  <h3 className="font-semibold mb-2">Proven Excellence</h3>
                  <p className="text-sm opacity-90">Leverage our 5+ years of successful event organization</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href={'/exhibit-and-sponsor'} >
                <Button size="lg" className="bg-white text-neutral-700 hover:bg-gray-100 font-semibold px-8">
                  Become a Partner
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                </Link>
                <Link href={'/contact'}>
                <Button
                  size="lg"
                  
                  className="border-white text-white  hover:text-neutral-700 font-semibold px-8"
                  >
                  Contact us
                </Button>
                  </Link>
              </div>

              
            </div>
          </Card>
        </div>
      </section>

      {/* Background decorative elements */}
      
    </div>
  )
}
