"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle, Loader2 } from "lucide-react";

const services = [
  "Home Cleaning",
  "Deep Cleaning",
  "Plumbing Repair",
  "Electrical Services",
  "HVAC & Heating",
  "Appliance Repair",
  "Painting & Finishing",
  "Carpentry & Repairs",
  "Pest Control",
  "Landscaping & Lawn Care",
];

interface FormData {
  name: string;
  email: string;
  phone: string;
  address: string;
  serviceType: string;
  preferredDate: string;
  message: string;
}

const initialForm: FormData = {
  name: "",
  email: "",
  phone: "",
  address: "",
  serviceType: "",
  preferredDate: "",
  message: "",
};

export default function BookingForm() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error("Something went wrong. Please try again.");

      setSubmitted(true);
      setForm(initialForm);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-16 px-8"
      >
        <div className="w-20 h-20 rounded-full bg-brand-gradient flex items-center justify-center mx-auto mb-6 shadow-brand-lg">
          <CheckCircle size={36} className="text-white" />
        </div>
        <h3 className="text-2xl font-bold text-brand-navy font-poppins mb-3">
          Booking Confirmed!
        </h3>
        <p className="text-gray-500 max-w-md mx-auto mb-6">
          Thank you! We&apos;ve received your booking request and will contact you
          within 30 minutes to confirm your appointment.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="btn-primary"
        >
          Book Another Service
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Row 1 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="form-label">Full Name *</label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={form.name}
            onChange={handleChange}
            placeholder="John Smith"
            className="form-input"
          />
        </div>
        <div>
          <label htmlFor="email" className="form-label">Email Address *</label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={form.email}
            onChange={handleChange}
            placeholder="john@example.com"
            className="form-input"
          />
        </div>
      </div>

      {/* Row 2 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label htmlFor="phone" className="form-label">Phone Number *</label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            value={form.phone}
            onChange={handleChange}
            placeholder="+1 (555) 000-0000"
            className="form-input"
          />
        </div>
        <div>
          <label htmlFor="serviceType" className="form-label">Service Type *</label>
          <select
            id="serviceType"
            name="serviceType"
            required
            value={form.serviceType}
            onChange={handleChange}
            className="form-input"
          >
            <option value="">Select a service...</option>
            {services.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Row 3 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label htmlFor="address" className="form-label">Service Address *</label>
          <input
            id="address"
            name="address"
            type="text"
            required
            value={form.address}
            onChange={handleChange}
            placeholder="123 Main St, City, State"
            className="form-input"
          />
        </div>
        <div>
          <label htmlFor="preferredDate" className="form-label">Preferred Date *</label>
          <input
            id="preferredDate"
            name="preferredDate"
            type="date"
            required
            min={new Date().toISOString().split("T")[0]}
            value={form.preferredDate}
            onChange={handleChange}
            className="form-input"
          />
        </div>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="form-label">Additional Details</label>
        <textarea
          id="message"
          name="message"
          rows={4}
          value={form.message}
          onChange={handleChange}
          placeholder="Describe what you need help with..."
          className="form-input resize-none"
        />
      </div>

      {/* Payment Placeholder Notice */}
      <div className="flex items-center gap-3 p-4 rounded-xl bg-blue-50 border border-blue-100">
        <div className="w-5 h-5 rounded-full bg-brand-blue flex items-center justify-center flex-shrink-0">
          <span className="text-white text-xs font-bold">$</span>
        </div>
        <p className="text-sm text-brand-blue font-medium">
          Secure payment powered by Stripe — coming soon. No payment required to book.
        </p>
      </div>

      {/* Error */}
      {error && (
        <p className="text-red-500 text-sm bg-red-50 px-4 py-3 rounded-xl border border-red-100">
          {error}
        </p>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={loading}
        className="btn-primary w-full justify-center py-4 text-base disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {loading ? (
          <>
            <Loader2 size={20} className="animate-spin" />
            Processing Booking...
          </>
        ) : (
          <>
            Confirm My Booking
            <svg viewBox="0 0 20 20" fill="none" className="w-5 h-5">
              <path d="M4 10h12M10 4l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </>
        )}
      </button>
    </form>
  );
}
