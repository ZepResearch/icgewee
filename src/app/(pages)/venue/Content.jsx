import { MapPin, Clock, Wifi, Car, Utensils, Camera, Building, ArrowRight, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"

export default function VenuePage() {
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
            

              {/* Main Heading */}
              <div>
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-11 mb-4">
                  EMPOWERING THE
                  <br />
                  <span className= "bg-gradient-to-tl from-sky-400 via-rose-400 to-lime-400 drop-shadow-2xl text-transparent bg-clip-text  ">FUTURE IN BALI</span>
                </h1>
              </div>

              {/* Venue Card */}
            

              {/* Venue Details */}
              <div className="max-w-sm">
                <h3 className="font-semibold text-gray-900 mb-2">WORLD-CLASS FACILITIES</h3>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center space-x-2">
                    <Building className="w-4 h-4" />
                    <span>Premium Conference Center</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Wifi className="w-4 h-4" />
                    <span>High-Speed Internet</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Car className="w-4 h-4" />
                    <span>Easy Transportation Access</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Center Image - Positioned to stick to bottom */}
            <div className="col-span-12 lg:col-span-4 flex justify-center items-end h-full">
              <div className="relative">
                <img
                  src="/assets/venue-page.png"
                  alt="Conference Technology"
                  className="w-full h-auto min-h-[200px] lg:max-h-[300px] object-contain object-bottom  select-none pointer-events-none " 
                  />
                {/* Decorative elements */}
                </div>
            </div>

            {/* Right Side Content */}
            <div className="col-span-12 lg:col-span-4 space-y-6">
              {/* Main Title */}
              <div className="text-right">
                <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-none">
                  Bali
                  <br />
                  <span className="text-3xl lg:text-4xl font-light  bg-gradient-to-tr from-sky-400 via-rose-400 to-lime-400 drop-shadow-2xl text-transparent bg-clip-text  ">Venue</span>
                </h1>
              </div>

              {/* Location Card */}
              <Card className="p-4 bg-white/80 backdrop-blur-sm border-0 shadow-lg ml-auto max-w-sm">
                <div className="flex items-start space-x-3">
                
                  <div className="text-right">
                    <p className="text-xs text-gray-600 leading-relaxed">
                      Located in the cultural heart of Bali, our venue offers unparalleled access to Indonesia's
                      innovation ecosystem and world-class amenities in a tropical paradise setting...
                    </p>
                  </div>
                </div>
              </Card>

              {/* Amenities Card */}
          
            </div>
          </div>
        </div>
      </section>

      {/* Conference Venue Section */}
      <section className="relative z-10 py-20 bg-white/50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 ">Conference Venue</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              The venue for the International Conference on Gender Equality, Women Empowerment & Entrepreneurship 2025 will be announced soon. We are carefully selecting a world-class location in Bali that will provide the perfect setting for this transformative event. Stay tuned for updates on our venue announcement.
            </p>
          </div>

          <div className="relative w-full h-[350px] mb-12 rounded-xl overflow-hidden shadow-2xl">
            <img 
              src="https://plus.unsplash.com/premium_photo-1677829177642-30def98b0963?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
              alt="Bali International Convention Centre"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0  to-transparent flex items-center">
              
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="p-8 bg-white/80 backdrop-blur-sm border-0 shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Venue Specifications</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Main Auditorium Capacity</span>
                  <span className="font-semibold text-gray-900">800 seats</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Exhibition Space</span>
                  <span className="font-semibold text-gray-900">3,500 sqm</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Breakout Rooms</span>
                  <span className="font-semibold text-gray-900">8 rooms</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Networking Areas</span>
                  <span className="font-semibold text-gray-900">2 levels</span>
                </div>
              </div>
            </Card>

            <Card className="p-8 bg-white/80 backdrop-blur-sm border-0 shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Accessibility Features</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-rose-500 rounded-full"></div>
                  <span className="text-gray-700">Wheelchair accessible entrances and facilities</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-rose-500 rounded-full"></div>
                  <span className="text-gray-700">Assistive listening systems available</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-rose-500 rounded-full"></div>
                  <span className="text-gray-700">Braille signage and tactile guidance</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-rose-500 rounded-full"></div>
                  <span className="text-gray-700">Dedicated accessibility support staff</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Location with Google Map Section */}
      <section className="relative z-10 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 text-center mb-16 ">Location</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <Card className="p-6 bg-white/80 backdrop-blur-sm border-0 shadow-lg">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Bali International Convention Centre</h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-rose-500 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-900">Address</p>
                      <p className="text-gray-600">Jl. Raya Nusa Dua Selatan, Benoa, Bali 80363, Indonesia</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Clock className="w-5 h-5 text-rose-500 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-900">Operating Hours</p>
                      <p className="text-gray-600">24/7 during conference days</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Car className="w-5 h-5 text-rose-500 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-900">Transportation</p>
                      <p className="text-gray-600">15 minutes from Ngurah Rai International Airport</p>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-white/80 backdrop-blur-sm border-0 shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Getting There</h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <p className="font-semibold text-gray-900">From Ngurah Rai Airport</p>
                    <p className="text-gray-600">15 minutes by taxi or airport shuttle service</p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">By Hotel Shuttle</p>
                    <p className="text-gray-600">Complimentary shuttle from major Nusa Dua hotels</p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">By Car</p>
                    <p className="text-gray-600">Ample parking available, valet service provided</p>
                  </div>
                </div>
              </Card>
            </div>

            <Card className="p-4 bg-white/80 backdrop-blur-sm border-0 shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Interactive Map</h3>
              <div className="w-full h-96 rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3943.2!2d115.2276!3d-8.8048!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd244c13e8d09c3%3A0x24910fb2c622c3ac!2sBali%20International%20Convention%20Centre!5e0!3m2!1sen!2sid!4v1635123456789!5m2!1sen!2sid"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Bali International Convention Centre Location"
                ></iframe>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Nearby Attractions Section */}
      <section className="relative z-10 py-20 bg-white/50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 text-center mb-16 ">Nearby Attractions</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-6 bg-white/80 backdrop-blur-sm border-0 shadow-lg">
              <img src="https://images.unsplash.com/photo-1610006132553-18f5c2f7b36a?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Nusa Dua Beach" className="h-[300px] object-cover rounded-lg mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Nusa Dua Beach</h3>
              <p className="text-gray-600 mb-3">
                Pristine white sand beach perfect for relaxation and water sports activities.
              </p>
              <div className="flex items-center space-x-2 text-sm text-gray-500">
                <MapPin className="w-4 h-4" />
                <span>3 minutes walk</span>
              </div>
            </Card>

            <Card className="p-6 bg-white/80 backdrop-blur-sm border-0 shadow-lg">
              <img src="https://images.unsplash.com/photo-1715704170964-fbd0a6ff3e2a?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D " alt="Pura Geger Temple" className="h-[300px] object-cover rounded-lg mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Pura Geger Temple</h3>
              <p className="text-gray-600 mb-3">
                Ancient Hindu temple offering stunning cliff-top views and cultural insights.
              </p>
              <div className="flex items-center space-x-2 text-sm text-gray-500">
                <MapPin className="w-4 h-4" />
                <span>10 minutes drive</span>
              </div>
            </Card>

            <Card className="p-6 bg-white/80 backdrop-blur-sm border-0 shadow-lg">
              <img src="https://plus.unsplash.com/premium_photo-1677534712600-798e360ce337?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Bali Collection Shopping Center" className="h-[300px] object-cover rounded-lg mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Bali Collection</h3>
              <p className="text-gray-600 mb-3">
                Premier shopping and dining destination with local crafts and international brands.
              </p>
              <div className="flex items-center space-x-2 text-sm text-gray-500">
                <MapPin className="w-4 h-4" />
                <span>5 minutes walk</span>
              </div>
            </Card>

            <Card className="p-6 bg-white/80 backdrop-blur-sm border-0 shadow-lg">
              <img src="https://plus.unsplash.com/premium_photo-1712226714269-4b4d55f040c0?q=80&w=705&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Water Blow Nusa Dua" className="h-[300px] object-cover rounded-lg mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Water Blow Nusa Dua</h3>
              <p className="text-gray-600 mb-3">
                Natural phenomenon where ocean waves crash against limestone cliffs creating spectacular water spouts.
              </p>
              <div className="flex items-center space-x-2 text-sm text-gray-500">
                <MapPin className="w-4 h-4" />
                <span>8 minutes walk</span>
              </div>
            </Card>

            <Card className="p-6 bg-white/80 backdrop-blur-sm border-0 shadow-lg">
              <img src="https://images.unsplash.com/photo-1641741296263-ddbc7d5f4137?q=80&w=736&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Garuda Wisnu Kencana" className="h-[300px] object-cover rounded-lg mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Garuda Wisnu Kencana</h3>
              <p className="text-gray-600 mb-3">
                Monumental statue and cultural park showcasing Balinese art, culture, and breathtaking views.
              </p>
              <div className="flex items-center space-x-2 text-sm text-gray-500">
                <MapPin className="w-4 h-4" />
                <span>20 minutes drive</span>
              </div>
            </Card>

            <Card className="p-6 bg-white/80 backdrop-blur-sm border-0 shadow-lg">
              <img src="https://plus.unsplash.com/premium_photo-1668723712092-c9a5bca04743?q=80&w=685&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Pandawa Beach" className="h-[300px] object-cover rounded-lg mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Pandawa Beach</h3>
              <p className="text-gray-600 mb-3">
                Hidden gem beach with crystal clear waters, perfect for swimming and traditional outrigger canoe rides.
              </p>
              <div className="flex items-center space-x-2 text-sm text-gray-500">
                <MapPin className="w-4 h-4" />
                <span>15 minutes drive</span>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Ready to Join Us CTA Section */}
      <section className="relative z-10 py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <Card className="p-12  bg-gradient-to-tr from-sky-400 via-rose-400 to-lime-400 drop-shadow-2xl text-white text-center border-0 shadow-2xl">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">Ready to Join Us?</h2>
              <p className="text-xl mb-8 opacity-90">
                Experience the power of gender equality and women empowerment in the tropical paradise of Bali. Our venue
                offers the perfect backdrop for meaningful discussions, networking, and transformative learning experiences.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 text-left">
                <div className="bg-white/30 backdrop-blur-sm rounded-lg p-4">
                  <MapPin className="w-8 h-8 mb-3" />
                  <h3 className="font-semibold mb-2">Tropical Paradise</h3>
                  <p className="text-sm opacity-90">Inspiring location in beautiful Bali, Indonesia</p>
                </div>
                <div className="bg-white/30 backdrop-blur-sm rounded-lg p-4">
                  <Building className="w-8 h-8 mb-3" />
                  <h3 className="font-semibold mb-2">Premium Facilities</h3>
                  <p className="text-sm opacity-90">World-class conference center with modern amenities</p>
                </div>
                <div className="bg-white/30 backdrop-blur-sm rounded-lg p-4">
                  <Star className="w-8 h-8 mb-3" />
                  <h3 className="font-semibold mb-2">Transformative Experience</h3>
                  <p className="text-sm opacity-90">Combine learning with Bali's rich culture and natural beauty</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/registration" >
                <Button size="lg" className="bg-white text-rose-600 hover:bg-gray-100 font-semibold px-8">
                  Register Now
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                </Link>
                <Link href="/schedule">
                <Button
                  size="lg"
                    className="bg-white text-rose-600 hover:bg-gray-100 font-semibold px-8"                >
                  View schedule
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