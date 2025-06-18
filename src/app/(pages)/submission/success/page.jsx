import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle, ArrowRight, ArrowLeft, Calendar } from "lucide-react"
import { submissionSuccessMetadata } from "@/components/metadata"


export const metadata = submissionSuccessMetadata;
export default function SubmissionSuccess() {
  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          {/* Large blob in top right */}
          <div
            className="absolute -right-40 -top-40 w-[30rem] h-[30rem] opacity-10"
            style={{
              borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%",
              background: "linear-gradient(45deg, #fce7f3, #fed7aa)",
            }}
          ></div>

          {/* Small circle in bottom left */}
          <div className="absolute left-20 bottom-20 w-16 h-16 rounded-full bg-gradient-to-bl from-pink-500/20 via-red-500/20 to-yellow-500/20"></div>

          {/* Medium circle in top left */}
          <div className="absolute -left-10 top-40 w-32 h-32 rounded-full bg-gradient-to-br from-pink-300/30 via-red-300/30 to-yellow-300/30"></div>
        </div>

        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 font-serif">
              Submission Successful
           
            </h1>
            <p className="text-xl text-gray-700 mb-8">
              Thank you for contributing to the International Conference on Emerging Trends in Multidisciplinary Research
            </p>
          </div>
        </div>
      </section>

      {/* Success Message */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="relative bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-pink-500/10 via-red-500/10 to-yellow-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-pink-400/10 via-red-400/10 to-yellow-400/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

              <div className="relative p-8 md:p-12 text-center">
                <div className="inline-flex h-20 w-20 items-center justify-center rounded-full bg-orange-400 p-0.5 mb-6">
                  <div className="flex h-full w-full items-center justify-center rounded-full bg-white">
                    <CheckCircle className="h-10 w-10 text-green-600" />
                  </div>
                </div>

                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900">Your Paper Has Been Submitted</h2>

                <div className="space-y-6 text-gray-700 max-w-2xl mx-auto">
                  <p>
                    Thank you for submitting your paper to the International conference on
                    AI & Robotics Innovation. Your contribution is an important part of advancing research
                    and collaboration across diverse academic disciplines.
                  </p>

                  <div className="bg-gray-50 rounded-xl border border-gray-200 p-6 text-left">
                    <h3 className="text-xl font-medium text-gray-900 mb-4">What Happens Next?</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <div className="h-6 w-6 rounded-full bg-orange-400 flex items-center justify-center shrink-0 mt-0.5">
                          <span className="text-xs font-bold text-white">1</span>
                        </div>
                        <span>
                          Our scientific committee will review your submission and evaluate it based on relevance,
                          originality, and quality across multidisciplinary research areas.
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="h-6 w-6 rounded-full bg-orange-400 flex items-center justify-center shrink-0 mt-0.5">
                          <span className="text-xs font-bold text-white">2</span>
                        </div>
                        <span>
                          You will receive a notification regarding the status of your submission within 4-6 weeks.
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="h-6 w-6 rounded-full bg-orange-400 flex items-center justify-center shrink-0 mt-0.5">
                          <span className="text-xs font-bold text-white">3</span>
                        </div>
                        <span>
                          If accepted, you will receive further instructions on preparing your final paper and
                          presentation for the conference in Bali, Indonesia.
                        </span>
                      </li>
                    </ul>
                  </div>

                  <div className="flex items-center justify-center gap-4 mt-8">
                    <Calendar className="h-5 w-5 text-neutral-800" />
                    <span>Mark your calendar: Conference takes place on November 14th - 15th| 2025 in Singapore</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
                  <Button asChild className="bg-orange-400  text-white rounded-full">
                    <Link href="/">
                      <ArrowLeft className="mr-2 h-5 w-5" />
                      Return to Home
                    </Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="border-orange-300 text-gray-900 hover:bg-gradient-to-bl rounded-full"
                  >
                    <Link href="/schedule">
                      View Conference Schedule
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}