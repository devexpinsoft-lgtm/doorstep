import React from "react";
import type { Metadata } from "next";
import ServicesContent from "@/components/services/ServicesContent";

export const metadata: Metadata = {
  title: "Services",
  description: "Explore DoorStep's professional home services, from lawn care to house cleaning. High quality, reliable pros at your doorstep.",
};

export default function ServicesPage() {
  return <ServicesContent />;
}
