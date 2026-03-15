"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Loader2, CheckCircle } from "lucide-react";

const contactInfo = [
  {
    icon: Phone,
    label: "Phone",
    value: "+1 (800) 555-DOOR",
    sub: "Mon–Sun 7am–9pm ET",
  },
  {
    icon: Mail,
    label: "Email",
    value: "hello@doorstephome.com",
    sub: "We reply within 2 hours",
  },
  {
    icon: MapPin,
    label: "Address",
    value: "123 Main Street, Suite 400",
    sub: "New York, NY 10001",
  },
  {
    icon: Clock,
    label: "Hours",
    value: "7 days a week",
    sub: "7:00 AM – 9:00 PM ET",
  },
];

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSent(true);
    }, 1200);
  };

  return (
    <>
      {/* Hero */}
      <section className="bg-hero pt-32 pb-16 px-4">
        <div className="container-xl px-4 md:px-8 text-center">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white/80 text-sm font-medium mb-6">
            We&apos;re Here to Help
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white font-poppins mb-4">
            Get in <span className="text-gradient">Touch</span>
          </h1>
          <p className="text-white/70 text-lg max-w-xl mx-auto">
            Have a question, need a custom quote, or just want to say hello?
            Our team is standing by and happy to help.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-xl px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-bold text-brand-navy font-poppins mb-6">
                Contact Information
              </h2>
              <div className="space-y-5 mb-10">
                {contactInfo.map((item) => (
                  <div key={item.label} className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-brand-gradient flex items-center justify-center flex-shrink-0 shadow-brand">
                      <item.icon size={20} className="text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-brand-navy text-sm">{item.label}</p>
                      <p className="text-gray-700 text-sm font-medium">{item.value}</p>
                      <p className="text-gray-400 text-xs">{item.sub}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Map Placeholder */}
              <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-card aspect-video bg-gradient-to-br from-slate-100 to-blue-50 flex items-center justify-center">
                <div className="text-center p-8">
                  <MapPin size={40} className="text-brand-teal mx-auto mb-3 opacity-60" />
                  <p className="font-semibold text-brand-navy mb-1">New York, NY 10001</p>
                  <p className="text-gray-400 text-sm">
                    Map integration via Google Maps API (coming soon)
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="card p-8 border border-gray-100">
              <h2 className="text-2xl font-bold text-brand-navy font-poppins mb-6">
                Send Us a Message
              </h2>

              {sent ? (
                <div className="text-center py-10">
                  <div className="w-16 h-16 rounded-full bg-brand-gradient flex items-center justify-center mx-auto mb-4">
                    <CheckCircle size={30} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-brand-navy font-poppins mb-2">Message Sent!</h3>
                  <p className="text-gray-500 text-sm mb-4">We&apos;ll get back to you within 2 hours.</p>
                  <button onClick={() => setSent(false)} className="btn-primary text-sm py-2.5">
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form className="space-y-5" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="contact-name" className="form-label">Full Name *</label>
                      <input id="contact-name" type="text" required placeholder="John Smith" className="form-input" />
                    </div>
                    <div>
                      <label htmlFor="contact-email" className="form-label">Email Address *</label>
                      <input id="contact-email" type="email" required placeholder="john@example.com" className="form-input" />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="contact-phone" className="form-label">Phone Number</label>
                    <input id="contact-phone" type="tel" placeholder="+1 (555) 000-0000" className="form-input" />
                  </div>
                  <div>
                    <label htmlFor="contact-subject" className="form-label">Subject *</label>
                    <input id="contact-subject" type="text" required placeholder="How can we help?" className="form-input" />
                  </div>
                  <div>
                    <label htmlFor="contact-message" className="form-label">Message *</label>
                    <textarea id="contact-message" rows={5} required placeholder="Tell us more about your inquiry..." className="form-input resize-none" />
                  </div>
                  <button type="submit" disabled={loading} className="btn-primary w-full justify-center py-4">
                    {loading ? <><Loader2 size={18} className="animate-spin" /> Sending...</> : <>Send Message</>}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
