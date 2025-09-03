import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, ArrowUpRight, Calendar1, ChevronDown, MapPin } from "lucide-react"
import { ReserveForm } from "./reserve-form"
import { ReserveButton } from "./reserve-button"
// import { ReserveButton } from "./reserve-button"

export default function Hero() {
  return (
    <div className="flex flex-col min-h-full bg-gradient-to-b from-gray-50 to-white ">
  
      <main className="flex-1">
        <section className="w-full pt-8 md:pt-12  max-w-screen-2xl mx-auto" >
          <div className="container px-4 md:px-6 grid lg:grid-cols-2 gap-1 items-center mx-auto">
            <div className="space-y-6">
              <h1 className="text-4xl font-semibold text-pretty tracking-tight sm:text-5xl md:text-6xl  leading-15">
              {/* International Conference on  */}

                International Conference on <span className=" bg-gradient-to-tr from-sky-400 via-rose-400 to-lime-400 drop-shadow-2xl text-transparent bg-clip-text  ">Gender Equality, Women Empowerment </span>& Entrepreneurship
              </h1>
              <p className="max-w-[600px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Join us to explore the cutting-edge advancements and interdisciplinary connections shaping the future of
                research across diverse fields.
              </p>
              
            <div className="flex lg:flex-row flex-col-reverse items-start sm:items-center justify-start gap-3 px-4 max-w-4xl backdrop-blur-sm bg-gray-50/30 py-4 rounded-3xl ">
              <img
                src="/assets/scopus.png"
                alt=""
                className="h-16 drop-shadow-lg"
              />
              <img
                src="/assets/clarivate.png"
                alt=""
                className="h-16 drop-shadow-lg"
              />
              <img
                src="assets/cpd.png"
                alt=""
                className="h-32 drop-shadow-lg"
              /> 
              <img
                src="assets/zepresearch.png"
                alt=""
                className="h-16 drop-shadow-lg"
              />
            </div>
              <div className="gap-3 flex  sm:flex-row flex-col mb-0 ">
            <Link href={'/registration'}>
              <Button  className="bg-neutral-900 hover:bg-neutral-800 text-white px-8 py-4 rounded-lg text-lg ">
                Register Now
              </Button>
            </Link>
             {/* <Link href={'/committee'}>
              <Button  className="bg-neutral-900 hover:bg-neutral-800 text-white px-8 py-4 rounded-lg text-lg ">
               Committee
              </Button>
            </Link> */}
            <Link href={'/about-conference'}>
            <Button className="bg-neutral-900 hover:bg-neutral-800 text-white px-8 py-4 rounded-lg text-lg ">
               Submit Paper
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <ReserveButton/>
          
             {/* <ReserveButton/> */}
            </div>
           
            </div>
            <div className="relative flex justify-center items-center lg:justify-end">
              <Image
                src="/assets/hero2.png"
                width={500}
                height={500}
                alt="Brain network representing multidisciplinary research"
                className="mx-auto  overflow-hidden rounded-xl object-cover object-bottom  lg:order-last select-none pointer-events-none  drop-shadow-2xl"
              />
              {/* <Button
                variant="outline"
                size="icon"
                className="absolute bottom-4 right-4 w-12 h-12 rounded-full shadow-lg bg-white/80 backdrop-blur-sm"
              >
                <ChevronDown className="w-6 h-6" />
                <span className="sr-only">Scroll down</span>
              </Button> */}
            </div>
          </div>
        </section>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 pt- max-w-screen-2xl mx-auto relative z-10">
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                  <h3 className="text-lg font-semibold mb-2">October | 10<sup>th</sup> - 11<sup>th</sup> 2025</h3>
                  <p className="text-sm text-gray-500">
                    Explore cutting-edge topics across various disciplines, fostering interdisciplinary collaboration.
                  </p>
                  <Link
                    href="/schedule"
                    className="mt-4 inline-flex items-center text-sm font-medium text-gray-900 hover:underline"
                    prefetch={false}
                  >
                    <Calendar1 className="w-4 h-4 mr-1" />
                    view full schedule
                  </Link>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                  <h3 className="text-lg font-semibold mb-2">Bali, Indonesia </h3>
                  <p className="text-sm text-gray-500">
                    Gain insights from leading researchers and innovators in their respective fields.
                  </p>
                  <Link
                    href="#"
                    className="mt-4 inline-flex items-center text-sm font-medium text-gray-900 hover:underline"
                    prefetch={false}
                  >
                    <MapPin className="w-4 h-4 mr-1" />
                    Detail Venue
                  </Link>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                  <h3 className="text-lg font-semibold mb-2">Networking Opportunities</h3>
                  <p className="text-sm text-gray-500">
                    Connect with peers, mentors, and potential collaborators from around the globe.
                  </p>
                  <Link
                    href="/registration"
                    className="mt-4 inline-flex items-center text-sm font-medium text-gray-900 hover:underline"
                    prefetch={false}
                  >
                    Register now
                    <ArrowUpRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </div>
      </main>
    </div>
  )
}
