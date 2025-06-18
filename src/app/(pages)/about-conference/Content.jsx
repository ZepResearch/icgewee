import { Play, Calendar, MapPin, Users, Zap, Brain, Rocket, ArrowRight, RocketIcon, Award, Lightbulb, Globe, Building, GraduationCap, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"

export default function ICGEWEEPage() {
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
      
        <div>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-10 mb-4">
            EMPOWERING
            <br />
            <span className="bg-gradient-to-tl from-sky-400 via-rose-400 to-lime-400 drop-shadow-2xl text-transparent bg-clip-text">GENDER EQUALITY</span>
          </h1>
        </div>


        {/* Conference Details */}
        <div className="max-w-sm">
          <h3 className="font-semibold text-gray-900 mb-2">International Conference on
          Gender Equality, Women Empowerment & Entrepreneurship</h3>
          <div className="space-y-2 text-sm text-gray-600">
            <div className="flex items-center space-x-2">
              <Calendar className="w-4 h-4" />
              <span>October 10<sup>th</sup> - 11<sup>th</sup>, 2025</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="w-4 h-4" />
              <span>Bali, Indonesia</span>
            </div>
          </div>
        </div>
      </div>

      {/* Center Image - Fixed for mobile visibility */}
      <div className="col-span-12 lg:col-span-4 flex justify-center items-end h-full order-last lg:order-none">
        <div className="relative w-full max-w-xs lg:max-w-none">
          <img 
            src="/assets/abut-page.png" 
            alt="Empowerment Symbol" 
            className="w-full h-auto min-h-[200px] lg:max-h-[280px] object-contain object-bottom select-none pointer-events-none" 
          />
          {/* Decorative elements */}
        </div>
      </div>

      {/* Right Side Content */}
      <div className="col-span-12 lg:col-span-4 space-y-6">
        {/* Main Title */}
        <div className="text-right">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-none">
            <span className="bg-gradient-to-tr from-sky-400 via-rose-400 to-lime-400 drop-shadow-2xl text-transparent bg-clip-text">ICEGEWEE</span>
            <br />
            <span className="text-3xl lg:text-4xl font-light text-rose-400">2025</span>
          </h1>
        </div>

        {/* Conference Info Card */}
        <Card className="p-4 bg-white/80 backdrop-blur-sm border-0 shadow-lg ml-auto max-w-sm">
          <div className="flex items-start space-x-3">
            
            <div className="text-right">
              <p className="text-xs text-gray-600 leading-relaxed">
                Join global leaders, advocates, and entrepreneurs as they explore innovative strategies for gender equality, women’s empowerment, and entrepreneurial growth.
              </p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  </div>
</section>

      {/* About the Conference Section */}
      <section className="relative z-10 py-12 bg-white/50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6  max-w-3xl mx-auto">
              <span className="bg-gradient-to-br from-sky-400 via-rose-400 to-lime-400 drop-shadow-2xl text-transparent bg-clip-text">ICGEWEE</span> 2025 – <br />The Pinnacle of Empowerment</h2>
            <p className="text-lg text-gray-600 leading-relaxed text-center">
            ICGEWEE 2025 is the world’s leading conference uniting advocates, entrepreneurs, and thought leaders to advance gender equality and women’s empowerment. Over two transformative days, we’ll explore innovative solutions, share inspiring stories, and foster collaboration to drive entrepreneurial success and societal change.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-6 bg-white/80 backdrop-blur-sm border-0 shadow-lg text-center">
              <Heart className="w-8 h-8 text-rose-500 mx-auto " />
              <h3 className="text-xl font-semibold text-gray-900 ">Empowerment</h3>
              <p className="text-gray-600">Inspiring stories and strategies for women’s empowerment</p>
            </Card>
            <Card className="p-6 bg-white/80 backdrop-blur-sm border-0 shadow-lg text-center">
              <Zap className="w-8 h-8 text-rose-500 mx-auto " />
              <h3 className="text-xl font-semibold text-gray-900 ">Innovation</h3>
              <p className="text-gray-600">Cutting-edge approaches to entrepreneurship</p>
            </Card>
            <Card className="p-6 bg-white/80 backdrop-blur-sm border-0 shadow-lg text-center">
              <Users className="w-8 h-8 text-rose-500 mx-auto " />
              <h3 className="text-xl font-semibold text-gray-900 ">Networking</h3>
              <p className="text-gray-600">Connect with global advocates and leaders</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="relative z-10 py-0">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ">
            <div className="">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 ">Our Mission</h2>
              <p className="text-md text-gray-600 mb-6 leading-relaxed">
                To promote gender equality and empower women through entrepreneurship, education, and collaboration. We believe in fostering inclusive opportunities and driving impactful change for women worldwide.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                  <span className="text-gray-700 font-semibold">Advance gender equality</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                  <span className="text-gray-700 font-semibold">Empower women entrepreneurs</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                  <span className="text-gray-700 font-semibold">Foster inclusive collaboration</span>
                </div>
              </div>
            </div>
            
              <div className="text-center">
                <img src="/assets/mission.png" alt="Mission" className="w-full h-auto min-h-[450px] lg:max-h-[280px] object-contain object-bottom select-none pointer-events-none drop-shadow-2xl" />
              </div>
            
          </div>
        </div>
      </section>

      {/* Conference Highlights Section */}
      <section className="relative z-10 py-20 bg-white/50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 text-center mb-16 ">Conference Highlights</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="p-6 bg-white/80 backdrop-blur-sm border-0 shadow-lg">
              <div className="text-center">
                <div className="text-3xl font-bold text-rose-400 mb-2">30+</div>
                <h3 className="font-semibold text-gray-900 mb-2">Expert Speakers</h3>
                <p className="text-sm text-gray-600">Global advocates and leaders</p>
              </div>
            </Card>
            <Card className="p-6 bg-white/80 backdrop-blur-sm border-0 shadow-lg">
              <div className="text-center">
                <div className="text-3xl font-bold text-rose-400 mb-2">15+</div>
                <h3 className="font-semibold text-gray-900 mb-2">Workshops</h3>
                <p className="text-sm text-gray-600">Interactive empowerment sessions</p>
              </div>
            </Card>
            <Card className="p-6 bg-white/80 backdrop-blur-sm border-0 shadow-lg">
              <div className="text-center">
                <div className="text-3xl font-bold text-rose-400 mb-2">500+</div>
                <h3 className="font-semibold text-gray-900 mb-2">Attendees</h3>
                <p className="text-sm text-gray-600">Global participants</p>
              </div>
            </Card>
            <Card className="p-6 bg-white/80 backdrop-blur-sm border-0 shadow-lg">
              <div className="text-center">
                <div className="text-3xl font-bold text-rose-400 mb-2">2</div>
                <h3 className="font-semibold text-gray-900 mb-2">Days</h3>
                <p className="text-sm text-gray-600">Transformative experience</p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Attend Section */}
      <section className="relative z-10 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 text-center mb-16 ">Why <span className="bg-gradient-to-tl from-sky-400 via-rose-400 to-lime-400 drop-shadow-2xl text-transparent bg-clip-text">ICGEWEE</span> 2025</h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <Card className="p-8 bg-white/80 backdrop-blur-sm border-0 shadow-lg">
              <div className="flex items-center gap-4 ">
                <RocketIcon className="w-12 h-12 text-rose-400" />
                <h3 className="text-xl font-semibold text-gray-900">Explore Innovative Strategies</h3>
              </div>
              <p className="text-gray-600 text-sm ">
                Gain insights into groundbreaking approaches and initiatives driving gender equality and women’s empowerment worldwide.
              </p>
              <ul className="space-y-2 text-xs text-gray-600">
                <li>• Access to innovative empowerment strategies</li>
                <li>• Early insights into entrepreneurial trends</li>
                <li>• Real-world case studies on gender equality</li>
              </ul>
            </Card>

            <Card className="p-8 bg-white/80 backdrop-blur-sm border-0 shadow-lg">
              <div className="flex items-center gap-4 ">
                <Users className="w-12 h-12 text-rose-400" />
                <h3 className="text-xl font-semibold text-gray-900">Engage with Global Leaders</h3>
              </div>
              <p className="text-gray-600 text-sm ">
                Network with advocates, entrepreneurs, and leaders from over 15 countries dedicated to advancing gender equality and empowerment.
              </p>
              <ul className="space-y-2 text-xs text-gray-600">
                <li>• Exclusive networking with global advocates</li>
                <li>• Mentorship opportunities with leaders</li>
                <li>• Cross-sector collaboration opportunities</li>
              </ul>
            </Card>

            <Card className="p-8 bg-white/80 backdrop-blur-sm border-0 shadow-lg">
            <div className="flex items-center gap-4 ">
                <Heart className="w-12 h-12 text-rose-400" />
                <h3 className="text-xl font-semibold text-gray-900">Practical and Actionable Insights</h3>                </div>
                <p className="text-gray-600 text-sm ">
                  Connect with like-minded advocates and leaders to spark new ideas, collaborations, and opportunities for empowerment and entrepreneurship.
                </p>
                <ul className="space-y-2 text-xs text-gray-600">
                  <li>• Strategic partnership opportunities</li>
                  <li>• Empowerment initiative collaborations</li>
                  <li>• Startup pitch and funding sessions</li>
                </ul>
            </Card>

            <Card className="p-8 bg-white/80 backdrop-blur-sm border-0 shadow-lg">
              <div className="flex items-center gap-4 ">
                <Award className="w-12 h-12 text-rose-400" />
                <h3 className="text-xl font-semibold text-gray-900">Recognition and Awards</h3>
              </div>
              <p className="text-gray-600">
                Stand a chance to receive prestigious awards recognizing outstanding contributions to gender equality and women’s empowerment.
              </p>
              <ul className="space-y-2 text-xs text-gray-600">
                <li>• Gender Equality Champion Award</li>
                <li>• Women Empowerment Recognition</li>
                <li>• Entrepreneurial Impact Award</li>
              </ul>
            </Card>

            <Card className="p-8 bg-white/80 backdrop-blur-sm border-0 shadow-lg">
              <div className="flex items-center gap-4 ">
                <Lightbulb className="w-12 h-12 text-rose-400" />
                <h3 className="text-xl font-semibold text-gray-900">Actionable Insights</h3>
              </div>
              <p className="text-gray-600 text-sm ">
                Participate in dynamic sessions and workshops focused on practical strategies for advancing gender equality and entrepreneurship.
              </p>
              <ul className="space-y-2 text-xs text-gray-600">
                <li>• Empowerment workshops</li>
                <li>• Entrepreneurship case studies</li>
                <li>• Leadership development sessions</li>
              </ul>
            </Card>

            <Card className="p-8 bg-white/80 backdrop-blur-sm border-0 shadow-lg">
              <div className="flex items-center gap-4 4">
                <Globe className="w-12 h-12 text-rose-400" />
                <h3 className="text-xl font-semibold text-gray-900">Global Impact</h3>
              </div>
              <p className="text-gray-600 text-sm ">
                Showcase your initiatives, share ideas, and contribute to shaping global solutions for gender equality and empowerment.
              </p>
              <ul className="space-y-2 text-xs text-gray-600">
                <li>• International presentations</li>
                <li>• Global empowerment showcase</li>
                <li>• Cross-cultural collaboration</li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Who Can Attend Section */}
      <section className="relative z-10 py-20 bg-white/50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 text-center mb-16 ">Who Can Attend</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <Card className="p-6 bg-white/80 backdrop-blur-sm border-0 shadow-lg">
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Advocates & Activists</h3>
              <p className="text-gray-600">Share your passion, exchange strategies, and collaborate to advance gender equality and empowerment.</p>
            </Card>

            <Card className="p-6 bg-white/80 backdrop-blur-sm border-0 shadow-lg">
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Entrepreneurs & Business Leaders</h3>
              <p className="text-gray-600">Explore innovative solutions and opportunities to drive entrepreneurial growth and empowerment.</p>
            </Card>

            <Card className="p-6 bg-white/80 backdrop-blur-sm border-0 shadow-lg">
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Policymakers & Officials</h3>
              <p className="text-gray-600">Gain insights to develop policies supporting gender equality and women’s empowerment.</p>
            </Card>

            <Card className="p-6 bg-white/80 backdrop-blur-sm border-0 shadow-lg">
             
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Social Entrepreneurs & Startups</h3>
              <p className="text-gray-600">Discover trends and collaboration opportunities to fuel empowerment-focused businesses.</p>
            </Card>

            <Card className="p-6 bg-white/80 backdrop-blur-sm border-0 shadow-lg">

              <h3 className="text-xl font-semibold text-gray-900 mb-3">Students & Emerging Leaders</h3>
              <p className="text-gray-600">Learn from experts, showcase your ideas, and build networks to kickstart your journey in empowerment.</p>
            </Card>

            <Card className="p-6 bg-white/80 backdrop-blur-sm border-0 shadow-lg">
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Community Leaders & NGOs</h3>
              <p className="text-gray-600">Connect with innovators to drive impactful change in gender equality and empowerment.</p>
            </Card>
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="relative z-10 bg-white py-20">
        <div className="container mx-auto px-4">
          <Card className="p-12 bg-gradient-to-tl from-sky-500 via-rose-500 to-lime-500 drop-shadow-2xl  text-white text-center border-0 shadow-2xl rounded-4xl">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">Ready to Make an Impact?</h2>
              <p className="text-xl mb-8 opacity-90">
                Don't miss this opportunity to be part of the most influential gender equality and empowerment conference in Asia. Register now to join the movement.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href={'/registration'}>
                <Button size="lg" className="bg-white text-rose-400 hover:bg-gray-100 font-semibold px-8">
                  Register Now
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                </Link>
                <Link href={'/schedule'}>
                <Button
                  size="lg"
                  className="bg-white text-rose-400 hover:bg-gray-100 font-semibold px-8">
                  View Schedule
                </Button>
                </Link>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </div>
  )
}