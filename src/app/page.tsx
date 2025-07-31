import AnimatedHero from '@/components/AnimatedHero';
import CallToActionSection from "@/components/CallToAction";
import FeaturesShowcase from "@/components/Features";
import TrustSection from "@/components/Trust";

export default function Home() {
  return (
    <div className="bg-[#F7F7F7] min-h-screen">
      <AnimatedHero />
      <FeaturesShowcase />
      <TrustSection />
      <CallToActionSection />
    </div>
  );
}
