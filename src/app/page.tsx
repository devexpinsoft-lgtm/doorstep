"use client";

import Hero from "@/components/home/Hero";
import HowItWorks from "@/components/home/HowItWorks";
import TrustedPartner from "@/components/home/TrustedPartner";
import WhyDoorstep from "@/components/home/WhyDoorstep";
import ServicesSection from "@/components/home/ServicesSection";
import Testimonials from "@/components/home/Testimonials";
import FAQ from "@/components/home/FAQ";
import CTA from "@/components/home/CTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <HowItWorks />
      <TrustedPartner />
      <WhyDoorstep />
      <ServicesSection />
      <Testimonials />
      <FAQ />
      <CTA />
    </>
  );
}
