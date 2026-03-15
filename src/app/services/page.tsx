import type { Metadata } from "next";
import ServiceCard from "@/components/ServiceCard";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore Doorstep's complete range of professional home services — cleaning, plumbing, electrical, HVAC, repairs, and more. Book online today.",
};

const allServices = [
  {
    iconName: "Home",
    title: "Home Cleaning",
    description:
      "Regular and deep cleaning services tailored to every home. Our trained cleaners use eco-friendly products that are tough on dirt but gentle on your family.",
    benefits: [
      "Standard, deep, and move-in/out cleaning",
      "Eco-friendly, non-toxic supplies",
      "Recurring weekly or monthly plans",
    ],
  },
  {
    iconName: "Wrench",
    title: "Home Repairs",
    description:
      "General handyman services covering a wide range of small to medium home repairs. We fix what's broken so you don't have to worry about it.",
    benefits: [
      "Drywall, doors, windows, fixtures",
      "Licensed & insured technicians",
      "Same-day service available",
    ],
  },
  {
    iconName: "Droplets",
    title: "Plumbing",
    description:
      "Our licensed plumbers handle everything from leaky faucets and clogged drains to full pipe replacements and water heater installations.",
    benefits: [
      "24/7 emergency plumbing service",
      "Upfront flat-rate pricing",
      "90-day workmanship guarantee",
    ],
  },
  {
    iconName: "Zap",
    title: "Electrical",
    description:
      "Safe, code-compliant electrical work performed by licensed electricians. From outlet replacements to full panel upgrades — done right the first time.",
    benefits: [
      "Licensed & insured electricians",
      "Code-compliant installations",
      "Electrical safety inspections included",
    ],
  },
  {
    iconName: "Wind",
    title: "HVAC & Heating",
    description:
      "Keep your home comfortable year-round. We install, repair, and maintain all major HVAC and heating systems with seasonal tune-ups available.",
    benefits: [
      "All major brands serviced",
      "AC & furnace installation and repair",
      "Preventive maintenance plans",
    ],
  },
  {
    iconName: "PaintBucket",
    title: "Painting & Finishing",
    description:
      "Transform any room with a fresh coat of paint. Our crews handle interior and exterior painting with premium materials and meticulous preparation.",
    benefits: [
      "Interior & exterior painting",
      "Premium low-VOC paints available",
      "Free color consultation",
    ],
  },
  {
    iconName: "Bug",
    title: "Pest Control",
    description:
      "Say goodbye to unwanted guests. Our certified pest control specialists use targeted treatments that are effective and safe for your household.",
    benefits: [
      "Eco-safe treatment options",
      "Preventive & reactive treatments",
      "Guaranteed results",
    ],
  },
  {
    iconName: "Leaf",
    title: "Landscaping & Lawn Care",
    description:
      "Keep your outdoor spaces looking their best. From regular lawn mowing to full landscape redesigns, we handle it all.",
    benefits: [
      "Weekly & bi-weekly mowing plans",
      "Fertilization & weed control",
      "Landscape design & installation",
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-hero pt-32 pb-20 px-4">
        <div className="container-xl px-4 md:px-8 text-center">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white/80 text-sm font-medium mb-6">
            Everything Your Home Needs
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-white font-poppins mb-5">
            Our <span className="text-gradient">Services</span>
          </h1>
          <p className="text-white/70 text-lg max-w-xl mx-auto mb-8">
            One platform, every service. Browse our full catalog and book your
            next home service in minutes.
          </p>
          <Link href="/book" className="btn-primary text-base py-4 px-8">
            Book a Service
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-gray-50">
        <div className="container-xl px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allServices.map((service, i) => (
              <ServiceCard key={service.title} {...service} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-white">
        <div className="container-xl px-4 md:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-navy font-poppins mb-4">
            Don&apos;t See What You Need?
          </h2>
          <p className="text-gray-500 max-w-lg mx-auto mb-8">
            Our service catalog is always growing. Contact us and we&apos;ll connect
            you with the right professional for any home need.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/book" className="btn-primary">
              Book a Service
              <ArrowRight size={18} />
            </Link>
            <Link href="/contact" className="btn-secondary">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
