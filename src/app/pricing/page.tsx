import type { Metadata } from "next";
import PricingHero from "@/components/pricing/PricingHero";
import PlanGrid from "@/components/pricing/PlanGrid";
import InfoSection from "@/components/pricing/InfoSection";

export const metadata: Metadata = {
  title: "Pricing – Simple, Transparent Home Service Plans",
  description: "View Doorstep's upfront pricing for lawn care, home cleaning, and more. No bidding, no hidden fees, just professional service.",
};

export default function PricingPage() {
  return (
    <main>
      <PricingHero />
      <PlanGrid />
      <InfoSection />
    </main>
  );
}
