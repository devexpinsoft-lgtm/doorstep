import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Heart, Shield, Award, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Doorstep's mission to connect US homeowners with certified, trustworthy home service professionals. Quality, reliability, and transparency at our core.",
};

const values = [
  {
    icon: Heart,
    title: "Built Around You",
    description:
      "Every decision we make starts with the customer. We designed Doorstep from the ground up to make home services feel effortless.",
  },
  {
    icon: Shield,
    title: "Uncompromising Safety",
    description:
      "Every pro on our platform is background-checked, licensed, and insured. We never cut corners on who we let into your home.",
  },
  {
    icon: Award,
    title: "Quality by Default",
    description:
      "We hold every pro to a strict quality standard. If a job isn't done right, we make it right — no questions asked.",
  },
  {
    icon: Users,
    title: "Community First",
    description:
      "We support local professionals and give back to the communities we serve. Doorstep is good for homeowners and great for local trades.",
  },
];

const team = [
  {
    name: "Alex Rivera",
    role: "CEO & Co-Founder",
    bio: "15+ years in home services and operations. Passionate about using tech to make life easier for homeowners and professionals alike.",
    avatar: "AR",
  },
  {
    name: "Melissa Chen",
    role: "Chief Technology Officer",
    bio: "Former software lead at two unicorn startups. Obsessed with building systems that scale without losing the human touch.",
    avatar: "MC",
  },
  {
    name: "Jordan Hayes",
    role: "Head of Operations",
    bio: "Oversees the vetting and quality assurance process for every professional on the Doorstep platform. No exceptions.",
    avatar: "JH",
  },
  {
    name: "Priya Sharma",
    role: "Customer Experience Lead",
    bio: "A relentless advocate for every customer. Priya ensures every Doorstep interaction exceeds expectations.",
    avatar: "PS",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-hero pt-32 pb-20 px-4">
        <div className="container-xl px-4 md:px-8 text-center max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white/80 text-sm font-medium mb-6">
            Our Story
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-white font-poppins mb-5">
            We&apos;re Rethinking{" "}
            <span className="text-gradient">Home Services</span>
          </h1>
          <p className="text-white/70 text-lg leading-relaxed">
            Doorstep was founded on a simple frustration: finding a reliable,
            affordable home service professional shouldn&apos;t require hours of
            research and crossed fingers. So we built the alternative.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section-padding bg-white">
        <div className="container-xl px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="badge mb-4">Our Mission</span>
              <h2 className="text-3xl md:text-4xl font-bold text-brand-navy font-poppins mb-5">
                Making Every Home Better
              </h2>
              <p className="text-gray-500 leading-relaxed mb-5">
                Our mission is to make professional home services accessible,
                affordable, and stress-free for every homeowner in America. We
                believe that a well-maintained home is the foundation of a happy
                life — and that maintaining one should never feel overwhelming.
              </p>
              <p className="text-gray-500 leading-relaxed mb-8">
                Since 2021, we&apos;ve completed over 50,000 service appointments
                across 35+ cities. We&apos;ve helped families reclaim their weekends,
                protected homeowners from safety hazards, and supported hundreds
                of local service businesses in growing their reach.
              </p>
              <Link href="/book" className="btn-primary">
                Book a Service Today
                <ArrowRight size={18} />
              </Link>
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-brand-lg">
                <Image
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80&auto=format&fit=crop"
                  alt="Doorstep team at work"
                  width={800}
                  height={550}
                  className="w-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-5 shadow-brand-lg border border-gray-100">
                <p className="text-3xl font-bold text-gradient font-poppins">50K+</p>
                <p className="text-gray-500 text-sm">Jobs Completed</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-gray-50">
        <div className="container-xl px-4 md:px-8">
          <div className="text-center mb-14">
            <span className="badge mb-4">What We Stand For</span>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy font-poppins mb-4">
              Our Core Values
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((v) => (
              <div key={v.title} className="card p-7 border border-gray-100 flex gap-5">
                <div className="w-12 h-12 rounded-xl bg-brand-gradient flex items-center justify-center flex-shrink-0 shadow-brand">
                  <v.icon size={22} className="text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-brand-navy font-poppins mb-2">{v.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{v.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding bg-white">
        <div className="container-xl px-4 md:px-8">
          <div className="text-center mb-14">
            <span className="badge mb-4">Meet the Team</span>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy font-poppins mb-4">
              The People Behind Doorstep
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              A small team with big ambitions. We&apos;re builders, operators, and
              homeowners ourselves — which is why we care about getting this right.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member) => (
              <div key={member.name} className="card p-6 border border-gray-100 text-center">
                <div className="w-16 h-16 rounded-2xl bg-brand-gradient flex items-center justify-center mx-auto mb-4 shadow-brand text-white font-bold text-lg">
                  {member.avatar}
                </div>
                <h3 className="font-bold text-brand-navy font-poppins mb-0.5">{member.name}</h3>
                <p className="text-brand-blue text-sm font-medium mb-3">{member.role}</p>
                <p className="text-gray-500 text-xs leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      </section>
    </>
  );
}
