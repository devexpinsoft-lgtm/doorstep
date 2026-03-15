"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import ServiceCard from "@/components/ServiceCard";
import TestimonialCard from "@/components/TestimonialCard";
import {
  Sparkles,
  ShieldCheck,
  Clock,
  Star,
  ArrowRight,
  CheckCircle,
  Phone,
  Calendar,
  ThumbsUp,
} from "lucide-react";

const services = [
  {
    iconName: "Home",
    title: "Home Cleaning",
    description:
      "Thorough top-to-bottom cleaning by trained professionals using eco-friendly products that are safe for your family and pets.",
    benefits: [
      "Eco-friendly cleaning supplies",
      "Background-checked cleaners",
      "Flexible recurring schedules",
    ],
  },
  {
    iconName: "Wrench",
    title: "Home Repairs",
    description:
      "From minor fixes to bigger repairs, our skilled handymen tackle it all so your home stays in perfect shape year-round.",
    benefits: [
      "Licensed & insured technicians",
      "Same-day availability",
      "Free estimates",
    ],
  },
  {
    iconName: "Droplets",
    title: "Plumbing",
    description:
      "Leaky faucets, clogged drains, water heater issues — our certified plumbers resolve problems fast and get it right the first time.",
    benefits: [
      "24/7 emergency plumbing",
      "Upfront pricing",
      "90-day service guarantee",
    ],
  },
  {
    iconName: "Zap",
    title: "Electrical",
    description:
      "Safe, code-compliant electrical work from licensed electricians. Outlets, panel upgrades, lighting installs, and more.",
    benefits: [
      "Licensed electricians",
      "Code-compliant work",
      "Safety inspections included",
    ],
  },
  {
    iconName: "Wind",
    title: "HVAC & Heating",
    description:
      "Keep your home comfortable all year. We service, repair, and install all major heating and cooling systems.",
    benefits: [
      "All major brands serviced",
      "Energy-efficiency tune-ups",
      "Seasonal maintenance plans",
    ],
  },
  {
    iconName: "PaintBucket",
    title: "Painting & Finishing",
    description:
      "Interior and exterior painting that transforms your home. Clean prep, premium materials, and flawless results every time.",
    benefits: [
      "Premium low-VOC paints",
      "Free color consultations",
      "Minimal disruption to daily life",
    ],
  },
];

const testimonials = [
  {
    name: "Sarah M.",
    location: "Austin, TX",
    rating: 5,
    service: "Home Cleaning",
    avatar: "S",
    text: "Doorstep made booking so painless. I had a cleaner at my house within hours, and the result was spotless. The online booking was the easiest part of my whole week.",
  },
  {
    name: "James R.",
    location: "Chicago, IL",
    rating: 5,
    service: "Plumbing Repair",
    avatar: "J",
    text: "Had a nasty pipe leak on a Sunday morning. Doorstep connected me with a plumber in under 30 minutes. Fixed it same day, fair price. Couldn't ask for more.",
  },
  {
    name: "Priya K.",
    location: "San Jose, CA",
    rating: 5,
    service: "Electrical Services",
    avatar: "P",
    text: "Professional, on-time, and explained everything clearly. My new panel upgrade went perfectly. I&apos;ve already referred Doorstep to three neighbors.",
  },
  {
    name: "David L.",
    location: "Houston, TX",
    rating: 5,
    service: "HVAC Service",
    avatar: "D",
    text: "The HVAC tune-up saved me from a summer breakdown. Their tech was knowledgeable and honest about what needed fixing vs. what could wait. Refreshing.",
  },
  {
    name: "Amy T.",
    location: "Phoenix, AZ",
    rating: 5,
    service: "Painting",
    avatar: "A",
    text: "Absolute perfection. The painting crew was neat, fast, and the finish is flawless. My living room looks like a magazine shoot. Genuinely impressed.",
  },
  {
    name: "Marcus B.",
    location: "Atlanta, GA",
    rating: 5,
    service: "Home Repairs",
    avatar: "M",
    text: "Fixed a long list of repairs in one visit. No up-selling, no drama — just solid work and a fair bill. Doorstep is now my go-to for everything around the house.",
  },
];

const steps = [
  {
    icon: Calendar,
    step: "01",
    title: "Book Online in Minutes",
    description:
      "Pick your service, choose a date that works for you, and share your address. Simple, fast, and no phone calls required.",
  },
  {
    icon: ShieldCheck,
    step: "02",
    title: "We Match You With a Pro",
    description:
      "We send a vetted, background-checked professional to your door — on time, every time. You'll get a confirmation and pro profile beforehand.",
  },
  {
    icon: ThumbsUp,
    step: "03",
    title: "Sit Back & Enjoy",
    description:
      "Your service is completed to a high standard. Rate your experience after, and rebook in seconds when you need us again.",
  },
];

const stats = [
  { value: "50,000+", label: "Services Completed" },
  { value: "4.9★", label: "Average Rating" },
  { value: "500+", label: "Vetted Professionals" },
  { value: "35+", label: "US Cities" },
];

const whyUs = [
  { icon: ShieldCheck, title: "Fully Vetted Pros", desc: "Every professional undergoes thorough background checks, license verification, and skills assessments before joining Doorstep." },
  { icon: Clock, title: "Same-Day Availability", desc: "Life doesn't wait, and neither should you. We offer same-day and next-day booking for most of our services." },
  { icon: Star, title: "Satisfaction Guaranteed", desc: "If you're not happy, we'll make it right — free of charge. Your satisfaction isn't just a policy; it's our promise." },
  { icon: Sparkles, title: "Transparent Pricing", desc: "No surprise fees, no hidden costs. You'll see the full price before you confirm a single booking." },
];

export default function HomePage() {
  return (
    <>
      {/* ─── HERO ─── */}
      <section className="relative min-h-screen bg-hero flex items-center overflow-hidden">
        {/* Background blobs */}
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full opacity-40 blur-3xl"
            style={{ background: "radial-gradient(circle, rgba(255,255,255,0.4) 0%, #00C49A 60%, transparent 100%)" }}
          />
          <div
            className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full opacity-20 blur-3xl"
            style={{ background: "radial-gradient(circle, #1B4FD8, transparent)" }}
          />
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-5 blur-3xl"
            style={{ background: "radial-gradient(circle, #00C49A, #1B4FD8)" }}
          />
        </div>

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />

        <div className="container-xl px-4 md:px-8 pt-24 pb-16 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur border border-white/20 text-white/90 text-sm font-medium mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-brand-teal animate-pulse" />
              Trusted by 50,000+ homeowners across the US
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-white font-poppins leading-tight mb-6"
            >
              Quality Home Services,{" "}
              <span className="text-gradient">Right at Your Door</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-10 leading-relaxed"
            >
              Doorstep connects you with certified, background-checked home service
              professionals — for cleaning, repairs, plumbing, electrical, and much
              more. Book in minutes, relax all day.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link href="/book" className="btn-primary text-base py-4 px-8">
                Book a Service
                <ArrowRight size={18} />
              </Link>
              <Link href="/services" className="btn-outline-white text-base py-4 px-8">
                Explore Services
              </Link>
            </motion.div>

            {/* Trust Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-wrap justify-center gap-6 mt-12 text-white/60 text-sm"
            >
              {["Background-Checked Pros", "Satisfaction Guaranteed", "Transparent Pricing", "Same-Day Booking"].map((t) => (
                <span key={t} className="flex items-center gap-1.5">
                  <CheckCircle size={14} className="text-brand-teal" />
                  {t}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-16 relative max-w-5xl mx-auto"
          >
            <div className="rounded-2xl overflow-hidden shadow-brand-lg border border-white/10">
              <Image
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80&auto=format&fit=crop"
                alt="Professional home service technician at work"
                width={1200}
                height={500}
                className="w-full object-cover"
                priority
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/50 to-transparent rounded-2xl" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── STATS ─── */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="container-xl px-4 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="text-center"
              >
                <p className="text-3xl md:text-4xl font-bold font-poppins text-gradient mb-1">
                  {stat.value}
                </p>
                <p className="text-gray-500 text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── ABOUT INTRO ─── */}
      <section className="section-padding bg-white">
        <div className="container-xl px-4 md:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="badge mb-4">About Doorstep</span>
              <h2 className="text-3xl md:text-4xl font-bold text-brand-navy font-poppins mb-5">
                Home Services, Simplified
              </h2>
              <p className="text-gray-500 text-lg leading-relaxed">
                We know finding a trustworthy, affordable home service professional
                can feel like a gamble. Doorstep was built to change that. By
                combining smart technology with rigorous vetting, we put qualified
                pros at your fingertips — so you can get back to the things that
                actually matter.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── SERVICES ─── */}
      <section id="services" className="section-padding bg-gray-50">
        <div className="container-xl px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span className="badge mb-4">What We Offer</span>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy font-poppins mb-4">
              Every Service Your Home Needs
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              From routine maintenance to urgent repairs — our network of certified
              professionals covers every corner of your home.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <ServiceCard key={s.title} {...s} index={i} />
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-10"
          >
            <Link href="/services" className="btn-primary">
              View All Services
              <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ─── HOW IT WORKS ─── */}
      <section id="how-it-works" className="section-padding bg-white">
        <div className="container-xl px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span className="badge mb-4">Simple Process</span>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy font-poppins mb-4">
              How Doorstep Works
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Getting expert help for your home has never been this easy. Three
              simple steps stand between you and a job well done.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Connector line */}
            <div className="hidden md:block absolute top-10 left-1/3 right-1/3 h-0.5 bg-gradient-to-r from-brand-teal to-brand-blue opacity-30" />

            {steps.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="text-center relative"
              >
                <div className="w-20 h-20 rounded-2xl bg-brand-gradient flex items-center justify-center mx-auto mb-5 shadow-brand">
                  <step.icon size={32} className="text-white" />
                </div>
                <div className="absolute -top-2 -right-2 md:right-auto md:left-[calc(50%+28px)] w-7 h-7 rounded-full bg-brand-navy flex items-center justify-center text-xs font-bold text-white">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold text-brand-navy font-poppins mb-3">{step.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WHY CHOOSE US ─── */}
      <section className="section-padding bg-gray-50">
        <div className="container-xl px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="badge mb-4">Why Doorstep</span>
              <h2 className="text-3xl md:text-4xl font-bold text-brand-navy font-poppins mb-5">
                The Standard Your Home Deserves
              </h2>
              <p className="text-gray-500 leading-relaxed mb-8">
                We&apos;re not just another marketplace. Doorstep is a quality-first
                platform where every pro is held to a higher bar — and every
                customer is treated like a priority.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {whyUs.map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="w-11 h-11 rounded-xl bg-brand-gradient flex items-center justify-center flex-shrink-0 shadow-brand">
                      <item.icon size={20} className="text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-brand-navy mb-1 text-sm">{item.title}</h4>
                      <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="rounded-2xl overflow-hidden shadow-brand-lg">
                <Image
                  src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80&auto=format&fit=crop"
                  alt="Professional home service team"
                  width={800}
                  height={600}
                  className="w-full object-cover"
                />
              </div>
              {/* Floating card */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-5 shadow-brand-lg border border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-brand-gradient flex items-center justify-center">
                    <Phone size={22} className="text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-brand-navy text-sm">Same-Day Response</p>
                    <p className="text-gray-400 text-xs">Average response in 28 min</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── TESTIMONIALS ─── */}
      <section className="section-padding bg-white">
        <div className="container-xl px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span className="badge mb-4">Real Reviews</span>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy font-poppins mb-4">
              What Our Customers Say
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Don&apos;t take our word for it. Here&apos;s what homeowners all across the
              US are saying about their Doorstep experience.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <TestimonialCard key={t.name} {...t} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA BANNER ─── */}
      <section className="py-20 px-4">
        <div className="container-xl px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-3xl overflow-hidden p-12 md:p-16 text-center"
            style={{ background: "linear-gradient(135deg, #0a1628 0%, #1E2D5A 60%, #1B4FD8 100%)" }}
          >
            {/* Blobs */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full opacity-20 blur-3xl" style={{ background: "radial-gradient(circle, #00C49A, transparent)" }} />
              <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full opacity-20 blur-3xl" style={{ background: "radial-gradient(circle, #1B4FD8, transparent)" }} />
            </div>

            <div className="relative z-10">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-white/80 text-sm font-medium mb-6">
                <Sparkles size={14} className="text-brand-teal" />
                Ready to get started?
              </span>
              <h2 className="text-3xl md:text-5xl font-bold text-white font-poppins mb-5">
                Your Home Deserves the Best
              </h2>
              <p className="text-white/70 text-lg max-w-xl mx-auto mb-10">
                Book a service today and experience what it feels like when
                everything just works. Fast booking, trusted pros, guaranteed results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/book" className="btn-primary text-base py-4 px-10">
                  Book a Service Now
                  <ArrowRight size={18} />
                </Link>
                <Link href="/contact" className="btn-outline-white text-base py-4 px-10">
                  Get In Touch
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
