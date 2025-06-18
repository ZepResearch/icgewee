import { Award, Trophy, Star, Medal, Users, ArrowRight, CheckCircle, Calendar } from "lucide-react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
export default function AwardsPage() {
  const awards = [
    {
      title: "BEST PAPER PRESENTATION AWARD",
      description: "Recognizing outstanding research presentation and communication skills",
      icon: <Trophy className="h-8 w-8 text-rose-500/90" />,
    },
    {
      title: "BEST PAPER AWARD",
      description: "Honoring the most impactful presentation in each conference session",
      icon: <Star className="h-8 w-8 text-rose-500/90" />,
    },
    {
      title: "Best International student presentation Award",
      description: "Celebrating exceptional presentations by student researchers",
      icon: <Users className="h-8 w-8 text-rose-500/90" />,
    },
    ]
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
          CELEBRATING
          <br />
          <span className="bg-gradient-to-tl from-sky-400 via-rose-400 to-lime-400 drop-shadow-2xl text-transparent bg-clip-text ">EXCELLENCE & INNOVATION</span>
        </h1>
        </div>

        {/* Award Card */}
      

        {/* Award Details */}
        <div className="max-w-sm mb-4">
        <h3 className="font-semibold text-gray-900 mb-2">PRESTIGIOUS RECOGNITION</h3>
        <div className="space-y-2 text-sm text-gray-600">
          <div className="flex items-center space-x-2">
          <Trophy className="w-4 h-4" />
          <span>Career-Enhancing Accolades</span>
          </div>
          <div className="flex items-center space-x-2">
          <Star className="w-4 h-4" />
          <span>International Recognition</span>
          </div>
          <div className="flex items-center space-x-2">
          <Medal className="w-4 h-4" />
          <span>Publication Opportunities</span>
          </div>
        </div>
        </div>
      </div>

      {/* Center Image - Positioned to stick to bottom */}
      <div className="col-span-12 lg:col-span-4 flex justify-center items-end h-full">
        <div className="relative">
        <img
          src="assets/award.png"
          alt="Innovation Technology"
          className=" w-full h-auto min-h-[200px] lg:max-h-[350px] object-contain object-bottom  select-none pointer-events-none"                />
        {/* Decorative elements */}
       
        </div>
      </div>

      {/* Right Side Content */}
      <div className="col-span-12 lg:col-span-4 space-y-6">
        {/* Main Title */}
        <div className="text-right">
        <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-none">
          Awards
          <br />
          <span className="text-3xl lg:text-4xl font-light bg-gradient-to-tl from-sky-400 via-rose-400 to-lime-400 drop-shadow-2xl text-transparent bg-clip-text ">2025</span>
        </h1>
        </div>

        {/* Awards Info Card */}
        <Card className="p-4 bg-white/80 backdrop-blur-sm border-0 shadow-lg ml-auto max-w-sm">
        <div className="flex items-start space-x-3">
        
          <div className="text-right">
          <p className="text-xs text-gray-600 leading-relaxed">
            International Conference on Gender Equality, Women Empowerment & Entrepreneurship.<br />
            
            Celebrate outstanding contributions and impactful communication in these vital fields.
          </p>
          </div>
        </div>
        </Card>

        {/* Award Mascot Card */}
      
      </div>
      </div>
    </div>
    </section>

    {/* Best Paper Presentation Award Section */}
    <div className="min-h-full   py-16 px-4 sm:px-6 lg:px-8 bg-white relative z-10">
    <div className="max-w-7xl mx-auto">
    <div className="text-center mb-16">
      <h1 className="text-4xl lg:text-5xl font-semibold   mb-4 ">Conference Awards</h1>
      <p className="text-xl  max-w-3xl mx-auto">
      Recognizing excellence at the ICGEWEE.<br />
      Join us October 10th - 11th, 2025 in Bali, Indonesia.
      </p>
    </div>

    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-16">
      {awards.map((award, index) => (
      <Card key={index} className="bg-white  shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
        <CardHeader className="flex flex-col items-center pb-2">
        <div className="rounded-full p-3 mb-4">
          {award.icon}
        </div>
        <CardTitle className="text-xl font-bold  text-center drop-shadow-sm uppercase">{award.title}</CardTitle>
        </CardHeader>
        <CardContent>
        <CardDescription className=" text-center">{award.description}</CardDescription>
        </CardContent>
        <div className="px-6 pb-4 flex justify-center">
        <Badge className="bg-gray-100 text-black hover:bg-orange-200">Prestigious Award</Badge>
        </div>
      </Card>
      ))}
    </div>

  
    </div>
  </div>

   
    <section className="relative z-10 py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4">
      <Card className="p-12  bg-gradient-to-tl from-sky-400 via-rose-400 to-lime-400 text-white text-center border-0 shadow-2xl">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl lg:text-5xl font-bold mb-6">Don't Miss Your Chance to Win!</h2>
        <p className="text-md mb-8 opacity-90">
        Submit your impactful research and join the ranks of distinguished award winners at the International Conference on Gender Equality, Women Empowerment & Entrepreneurship.<br />
        Recognition at our conference can be a career-defining moment and open doors to new opportunities.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card className="p-6 bg-white/10 backdrop-blur-sm border-0">
          <div className="text-center text-white">
          <Trophy className="w-12 h-12 mx-auto mb-4" />
          <h3 className="text-lg font-semibold mb-2">Prestigious Recognition</h3>
          <p className="text-sm opacity-90">Join an elite group of researchers recognized for excellence</p>
          </div>
        </Card>
        <Card className="p-6 bg-white/10 backdrop-blur-sm border-0">
          <div className="text-center text-white">
          <Award className="w-12 h-12 mx-auto mb-4" />
          <h3 className="text-lg font-semibold mb-2">Career Advancement</h3>
          <p className="text-sm opacity-90">Enhance your CV with internationally recognized awards</p>
          </div>
        </Card>
        <Card className="p-6 bg-white/10 backdrop-blur-sm border-0">
          <div className="text-center text-white">
          <Star className="w-12 h-12 mx-auto mb-4" />
          <h3 className="text-lg font-semibold mb-2">Publication Opportunities</h3>
          <p className="text-sm opacity-90">Publication support for your research journey</p>
          </div>
        </Card>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link href={'/submission'}>
        <Button size="lg" className="bg-white text-rose-600 hover:bg-gray-100 font-semibold px-8">
          Submit Your Paper
          <ArrowRight className="w-5 h-5 ml-2" />
        </Button>
        </Link>
        <Link href={'/papers-format'}>
        <Button
          size="lg"
          className="border-white text-white   font-semibold px-8"
          >
          View Submission Guidelines
        </Button>
        </Link>
        </div>

        {/* <div className="mt-8 text-center">
        <div className="flex items-center justify-center space-x-2 text-sm opacity-90">
          <Calendar className="w-4 h-4" />
          <span>Submission Deadline: August 31, 2025</span>
        </div>
        </div> */}
      </div>
      </Card>
    </div>
    </section>

  
  </div>
  )
}
