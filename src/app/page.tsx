import CallToActionSection from "@/components/CallToAction";
import FeaturesShowcase from "@/components/Features";
import Hero from "@/components/Hero";
import TrustSection from "@/components/Trust";

export default function Home() {
  return (
    <div className="bg-[#F7F7F7] min-h-screen">
      <Hero />
      <FeaturesShowcase />
      <TrustSection />
      <CallToActionSection />
    </div>
  );
}