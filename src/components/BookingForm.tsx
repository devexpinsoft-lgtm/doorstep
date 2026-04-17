"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, Loader2, ArrowRight, DollarSign } from "lucide-react";

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

// Reusable Input Component for consistent high-fidelity styling
const FormField = ({ label, children, required }: { label: string; children: React.ReactNode; required?: boolean }) => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', width: '100%' }}>
    <label style={{ 
      fontSize: '14px', 
      fontWeight: '600', 
      color: '#334155', 
      fontFamily: 'var(--font-montserrat)',
      paddingLeft: '4px'
    }}>
      {label} {required && <span style={{ color: '#2B8A7E' }}>*</span>}
    </label>
    {children}
  </div>
);

const inputStyle: React.CSSProperties = {
  width: '100%',
  padding: '14px 16px',
  borderRadius: '12px',
  border: '1px solid #E2E8F0',
  fontSize: '15px',
  fontFamily: 'var(--font-opensans)',
  color: '#1E293B',
  transition: 'all 0.2s ease',
  outline: 'none',
  backgroundColor: '#F8FAFC'
};

export default function BookingForm() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [focusedField, setFocusedField] = useState<string | null>(null);

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
        style={{ textAlign: 'center', padding: '40px 0' }}
      >
        <motion.div 
          initial={{ scale: 0 }}
          animate={{ scale: 1, rotate: 360 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          style={{ 
            width: '80px', 
            height: '80px', 
            borderRadius: '50%', 
            backgroundColor: '#E6F4F1', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            margin: '0 auto 32px',
            boxShadow: '0 8px 16px rgba(43, 138, 126, 0.15)'
          }}>
          <CheckCircle size={40} color="#2B8A7E" strokeWidth={2.5} />
        </motion.div>
        
        <h3 style={{ 
          fontSize: '28px', 
          fontWeight: '700', 
          color: '#1B2B3A', 
          fontFamily: 'var(--font-montserrat)', 
          marginBottom: '16px' 
        }}>
          Booking Confirmed!
        </h3>
        
        <p style={{ 
          fontSize: '16px', 
          color: '#64748B', 
          maxWidth: '400px', 
          margin: '0 auto 32px',
          fontFamily: 'var(--font-opensans)',
          lineHeight: '24px'
        }}>
          Thank you! We&apos;ve received your request and our team will contact you within 30 minutes to finalize details.
        </p>
        
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => setSubmitted(false)}
          style={{ 
            backgroundColor: '#2B8A7E', 
            color: 'white', 
            padding: '14px 32px', 
            borderRadius: '10px', 
            border: 'none', 
            fontSize: '16px', 
            fontWeight: '600', 
            fontFamily: 'var(--font-montserrat)', 
            cursor: 'pointer',
            boxShadow: '0 10px 15px -3px rgba(43, 138, 126, 0.3)'
          }}
        >
          Book Another Service
        </motion.button>
      </motion.div>
    );
  }

  const getInputStyle = (name: string) => ({
    ...inputStyle,
    borderColor: focusedField === name ? '#2B8A7E' : '#E2E8F0',
    boxShadow: focusedField === name ? '0 0 0 3px rgba(43, 138, 126, 0.1)' : 'none',
    backgroundColor: focusedField === name ? 'white' : '#F8FAFC'
  });

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
      
      {/* Row 1: Name & Email */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
        <FormField label="Full Name" required>
          <input
            name="name"
            type="text"
            required
            value={form.name}
            onFocus={() => setFocusedField('name')}
            onBlur={() => setFocusedField(null)}
            onChange={handleChange}
            placeholder="John Smith"
            style={getInputStyle('name')}
          />
        </FormField>
        <FormField label="Email Address" required>
          <input
            name="email"
            type="email"
            required
            value={form.email}
            onFocus={() => setFocusedField('email')}
            onBlur={() => setFocusedField(null)}
            onChange={handleChange}
            placeholder="john@example.com"
            style={getInputStyle('email')}
          />
        </FormField>
      </div>

      {/* Row 2: Phone & Service */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
        <FormField label="Phone Number" required>
          <input
            name="phone"
            type="tel"
            required
            value={form.phone}
            onFocus={() => setFocusedField('phone')}
            onBlur={() => setFocusedField(null)}
            onChange={handleChange}
            placeholder="+1 (555) 000-0000"
            style={getInputStyle('phone')}
          />
        </FormField>
        <FormField label="Service Type" required>
          <select
            name="serviceType"
            required
            value={form.serviceType}
            onFocus={() => setFocusedField('serviceType')}
            onBlur={() => setFocusedField(null)}
            onChange={handleChange}
            style={{ ...getInputStyle('serviceType'), cursor: 'pointer' }}
          >
            <option value="">Select a service...</option>
            {services.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </FormField>
      </div>

      {/* Row 3: Address & Date */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
        <FormField label="Service Address" required>
          <input
            name="address"
            type="text"
            required
            value={form.address}
            onFocus={() => setFocusedField('address')}
            onBlur={() => setFocusedField(null)}
            onChange={handleChange}
            placeholder="123 Main St, City, State"
            style={getInputStyle('address')}
          />
        </FormField>
        <FormField label="Preferred Date" required>
          <input
            name="preferredDate"
            type="date"
            required
            min={new Date().toISOString().split("T")[0]}
            value={form.preferredDate}
            onFocus={() => setFocusedField('preferredDate')}
            onBlur={() => setFocusedField(null)}
            onChange={handleChange}
            style={{ ...getInputStyle('preferredDate'), cursor: 'pointer' }}
          />
        </FormField>
      </div>

      {/* Message */}
      <FormField label="Additional Details">
        <textarea
          name="message"
          rows={4}
          value={form.message}
          onFocus={() => setFocusedField('message')}
          onBlur={() => setFocusedField(null)}
          onChange={handleChange}
          placeholder="Describe what you need help with (optional)..."
          style={{ ...getInputStyle('message'), resize: 'none' }}
        />
      </FormField>

      {/* Modern Notice */}
      <div style={{ 
        display: 'flex', 
        alignItems: 'center', 
        gap: '16px', 
        padding: '16px 20px', 
        borderRadius: '14px', 
        backgroundColor: '#F0F9FF', 
        border: '1px solid #BAE6FD' 
      }}>
        <div style={{ 
          width: '32px', 
          height: '32px', 
          borderRadius: '50%', 
          backgroundColor: '#0EA5E9', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center',
          flexShrink: 0
        }}>
          <DollarSign size={18} color="white" />
        </div>
        <p style={{ fontSize: '13px', color: '#0369A1', fontFamily: 'var(--font-opensans)', fontWeight: '500', lineHeight: '1.5' }}>
          Secure payment powered by Stripe — coming soon. No payment required to book today.
        </p>
      </div>

      {/* Error Message */}
      <AnimatePresence>
        {error && (
          <motion.p 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            style={{ 
              color: '#DC2626', 
              fontSize: '14px', 
              backgroundColor: '#FEF2F2', 
              padding: '12px 16px', 
              borderRadius: '10px', 
              border: '1px solid #FEE2E2',
              fontFamily: 'var(--font-opensans)'
            }}
          >
            {error}
          </motion.p>
        )}
      </AnimatePresence>

      {/* Submit Button */}
      <motion.button
        type="submit"
        disabled={loading}
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.99 }}
        style={{
          backgroundColor: '#2B8A7E',
          color: 'white',
          padding: '18px 32px',
          borderRadius: '12px',
          border: 'none',
          fontSize: '16px',
          fontWeight: '700',
          fontFamily: 'var(--font-montserrat)',
          cursor: loading ? 'not-allowed' : 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '12px',
          boxShadow: '0 20px 25px -5px rgba(43, 138, 126, 0.2)',
          transition: 'all 0.3s ease',
          opacity: loading ? 0.7 : 1
        }}
      >
        {loading ? (
          <>
            <Loader2 size={20} className="animate-spin" />
            <span>Processing Booking...</span>
          </>
        ) : (
          <>
            <span>Confirm My Booking</span>
            <ArrowRight size={20} />
          </>
        )}
      </motion.button>
    </form>
  );
}
