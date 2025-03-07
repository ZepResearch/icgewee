import AfterpartySection from "@/components/After-party";
import ConferenceHighlights from "@/components/Conferece-HIghtlight";
import { CTACountdownSection } from "@/components/CTA-Countdown";
import EventSection from "@/components/Event-Venue";
import FeatureSection from "@/components/Feature-point";
import GlobeSection from "@/components/globe-section";
import HeroSection from "@/components/Hero";
import StatsSection from "@/components/stats";
import TestimonialKeypoints from "@/components/Testimonial-Keypoint";
import TicketSection from "@/components/ticket-section";
import VideoSection from "@/components/Video-section";
import Image from "next/image";

export default function Home() {
  return (
   <main  className="relative min-h-screen w-full overflow-hidden"
   >
    <HeroSection/>
    <GlobeSection/>
    <FeatureSection/>
    <StatsSection/>
    <ConferenceHighlights/>
    <TestimonialKeypoints/>
    <VideoSection/>
    <EventSection/>
    <TicketSection/>
    <AfterpartySection/>
    <CTACountdownSection/>
    
   </main>
  );
}
