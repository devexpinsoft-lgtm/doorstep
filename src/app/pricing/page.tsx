import type { Metadata } from "next";
import PricingHero from "@/components/pricing/PricingHero";
import PlanGrid from "@/components/pricing/PlanGrid";
import InfoSection from "@/components/pricing/InfoSection";
import CTA from "@/components/ui/CTA";
import homeData from "@/data/home.json";

export const metadata: Metadata = {
  title: "Pricing",
  description: "View Doorstep's upfront pricing for lawn care, home cleaning, and more. No bidding, no hidden fees, just professional service.",
};

export default function PricingPage() {
  const { title, description, buttonText } = homeData.cta;

  return (
    <main>
      <PricingHero />
      <PlanGrid />
      <InfoSection />
      <CTA 
        title={title}
        description={description}
        buttonText={buttonText}
        href="/book"
      />
    </main>
  );
}
