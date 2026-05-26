import Hero from "@/components/hero/Hero";
import Pillars from "@/components/sections/Pillars";
import ServicesPreview from "@/components/sections/ServicesPreview";
import PortfolioPreview from "@/components/sections/PortfolioPreview";
import TechStack from "@/components/sections/TechStack";
import CTA from "@/components/sections/CTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Pillars />
      <ServicesPreview />
      <PortfolioPreview />
      <TechStack />
      <CTA />
    </>
  );
}
