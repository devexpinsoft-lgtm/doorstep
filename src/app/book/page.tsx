import type { Metadata } from "next";
import BookingForm from "@/components/BookingForm";
import { CheckCircle, Clock, Shield } from "lucide-react";

export const metadata: Metadata = {
  title: "Book a Service",
  description:
    "Book a professional home service with Doorstep. Fill out the quick form and we'll match you with a certified pro — same day, guaranteed.",
};

const perks = [
  { icon: Shield, text: "Background-checked pros" },
  { icon: Clock, text: "Same-day availability" },
  { icon: CheckCircle, text: "Satisfaction guarantee" },
];

export default function BookPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-hero pt-32 pb-16 px-4">
        <div className="container-xl px-4 md:px-8 text-center">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white/80 text-sm font-medium mb-6">
            Fast & Easy Booking
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white font-poppins mb-4">
            Book a <span className="text-gradient">Service</span>
          </h1>
          <p className="text-white/70 text-lg max-w-xl mx-auto mb-8">
            Tell us what you need, pick a time that works, and we&apos;ll handle the
            rest. It takes less than 2 minutes.
          </p>
          {/* Perks */}
          <div className="flex flex-wrap justify-center gap-5 text-white/70 text-sm">
            {perks.map((p) => (
              <span key={p.text} className="flex items-center gap-1.5">
                <p.icon size={14} className="text-brand-teal" />
                {p.text}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-xl px-4 md:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="card p-8 md:p-12 border border-gray-100">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-brand-navy font-poppins mb-2">
                  Service Booking Form
                </h2>
                <p className="text-gray-500 text-sm">
                  All fields marked with * are required. We&apos;ll confirm your
                  appointment within 30 minutes.
                </p>
              </div>
              <BookingForm />
            </div>

            {/* Trust note */}
            <div className="mt-8 text-center">
              <p className="text-gray-400 text-sm">
                🔒 Your information is encrypted and never shared with third parties.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
