import React from "react";
import type { Metadata } from "next";
import AboutHero from "@/components/about/AboutHero";
import MissionObjectives from "@/components/about/MissionObjectives";
import OurStory from "@/components/about/OurStory";
import OurValues from "@/components/about/OurValues";
import CTA from "@/components/ui/CTA";

export const metadata: Metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <main style={{ minHeight: '100vh', backgroundColor: 'white', overflowX: 'hidden' }}>
      <AboutHero />
      <MissionObjectives />
      <OurStory />
      <OurValues />
      <CTA 
        title="Ready to get started?" 
        description="Book a service in under 60 seconds. No commitments, transparent pricing, and satisfaction guaranteed."
        buttonText="Book a Service Now"
        href="/book"
      />
    </main>
  );
}
