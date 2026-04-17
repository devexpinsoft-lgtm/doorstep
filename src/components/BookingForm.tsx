"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  CheckCircle, 
  Loader2, 
  ArrowRight, 
  DollarSign, 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  Calendar, 
  MessageSquare,
  ShieldCheck,
  CreditCard,
  Sparkles
} from "lucide-react";

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
const FormField = ({ 
  label, 
  icon: Icon, 
  children, 
  required, 
  error 
}: { 
  label: string; 
  icon: React.ElementType; 
  children: React.ReactNode; 
  required?: boolean;
  error?: string;
}) => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', width: '100%' }}>
    <label style={{ 
      fontSize: '14px', 
      fontWeight: '700', 
      color: '#1B2B3A', 
      fontFamily: 'var(--font-montserrat)',
      paddingLeft: '2px',
      display: 'flex',
      alignItems: 'center',
      gap: '8px'
    }}>
      <div style={{ color: '#2B8A7E', display: 'flex', alignItems: 'center' }}>
        <Icon size={16} strokeWidth={2.5} />
      </div>
      {label} {required && <span style={{ color: '#2B8A7E' }}>*</span>}
    </label>
    <div style={{ position: 'relative' }}>
      {children}
    </div>
    {error && <p style={{ fontSize: '12px', color: '#EF4444', marginTop: '2px' }}>{error}</p>}
  </div>
);

const inputStyle: React.CSSProperties = {
  width: '100%',
  padding: '16px 20px',
  borderRadius: '16px',
  border: '2px solid #F1F5F9',
  fontSize: '15px',
  fontFamily: 'var(--font-opensans)',
  color: '#1E293B',
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  outline: 'none',
  backgroundColor: '#F8FAFC',
};

export default function BookingForm() {
  const [step, setStep] = useState(1);
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

  const nextStep = () => setStep(prev => Math.min(prev + 1, 3));
  const prevStep = () => setStep(prev => Math.max(prev - 1, 1));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 3) {
      nextStep();
      return;
    }
    
    setLoading(true);
    setError("");

    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      const res = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error("Our booking system is currently facing heavy traffic. Please try again in a moment.");

      setSubmitted(true);
      setForm(initialForm);
      setStep(1);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        style={{ textAlign: 'center', padding: '60px 0' }}
      >
        <motion.div 
          initial={{ scale: 0 }}
          animate={{ scale: 1, rotate: 360 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          style={{ 
            width: '100px', 
            height: '100px', 
            borderRadius: '30px', 
            backgroundColor: '#2B8A7E', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            margin: '0 auto 40px',
            boxShadow: '0 20px 40px rgba(43, 138, 126, 0.3)',
            transform: 'rotate(-10deg)'
          }}>
          <CheckCircle size={50} color="white" strokeWidth={2.5} />
        </motion.div>
        
        <h3 className="success-title" style={{ 
          fontSize: '32px', 
          fontWeight: '900', 
          color: '#1B2B3A', 
          fontFamily: 'var(--font-montserrat)', 
          marginBottom: '20px',
          letterSpacing: '-1px'
        }}>
          Booking <span style={{ color: '#2B8A7E' }}>Successfully</span> Received!
        </h3>
        
        <p className="success-desc" style={{ 
          fontSize: '17px', 
          color: '#6B7A8F', 
          maxWidth: '460px', 
          margin: '0 auto 40px',
          fontFamily: 'var(--font-opensans)',
          lineHeight: '26px'
        }}>
          We&apos;ve sent a confirmation email to your inbox. A Doorstep professional will contact you within <span style={{ fontWeight: '700', color: '#1B2B3A' }}>30 minutes</span> to verify your details.
        </p>
        
        <motion.button
          whileHover={{ scale: 1.05, boxShadow: '0 20px 30px rgba(43, 138, 126, 0.25)' }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setSubmitted(false)}
          style={{ 
            backgroundColor: '#1B2B3A', 
            color: 'white', 
            padding: '18px 40px', 
            borderRadius: '16px', 
            border: 'none', 
            fontSize: '16px', 
            fontWeight: '700', 
            fontFamily: 'var(--font-montserrat)', 
            cursor: 'pointer',
            transition: 'all 0.3s ease'
          }}
        >
          Book Another Service
        </motion.button>
      </motion.div>
    );
  }

  const getInputStyle = (name: string) => ({
    ...inputStyle,
    borderColor: focusedField === name ? '#2B8A7E' : '#F1F5F9',
    boxShadow: focusedField === name ? '0 10px 20px -8px rgba(43, 138, 126, 0.15)' : 'none',
    backgroundColor: focusedField === name ? 'white' : '#F8FAFC',
    transform: focusedField === name ? 'translateY(-2px)' : 'none'
  });

  const stepTitles = ["Personal Info", "Service Details", "Logistics"];

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
      <style jsx>{`
        @media (max-width: 768px) {
          form {
            gap: 28px !important;
          }
          .form-section-grid {
            gap: 24px !important;
          }
          .submit-button {
            padding: 18px 24px !important;
            font-size: 16px !important;
          }
          .step-indicators {
            margin-bottom: 32px !important;
          }
          .success-title {
            font-size: 26px !important;
          }
          .success-desc {
            font-size: 15px !important;
          }
        }
      `}</style>

      {/* Step Indicators */}
      <div className="step-indicators" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'relative', marginBottom: '40px', padding: '0 20px' }}>
        <div style={{ position: 'absolute', top: '50%', left: '40px', right: '40px', height: '2px', backgroundColor: '#F1F5F9', zIndex: 0 }} />
        <div style={{ position: 'absolute', top: '50%', left: '40px', width: `${(step - 1) * 50}%`, height: '2px', backgroundColor: '#2B8A7E', zIndex: 1, transition: 'width 0.5s ease' }} />
        
        {[1, 2, 3].map((s) => (
          <div key={s} style={{ zIndex: 2, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
            <motion.div 
              animate={{ 
                backgroundColor: step >= s ? '#2B8A7E' : 'white',
                color: step >= s ? 'white' : '#64748B',
                scale: step === s ? 1.2 : 1,
                borderColor: step >= s ? '#2B8A7E' : '#E2E8F0'
              }}
              style={{ 
                width: '32px', 
                height: '32px', 
                borderRadius: '10px', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                fontSize: '14px',
                fontWeight: '700',
                border: '2px solid',
                boxShadow: step === s ? '0 10px 15px -3px rgba(43, 138, 126, 0.2)' : 'none'
              }}>
              {s}
            </motion.div>
            <span style={{ 
              fontSize: '11px', 
              fontWeight: '700', 
              color: step >= s ? '#1B2B3A' : '#94A3B8', 
              fontFamily: 'var(--font-montserrat)',
              textTransform: 'uppercase',
              letterSpacing: '0.05em'
            }}>
              {stepTitles[s-1].split(" ")[0]}
            </span>
          </div>
        ))}
      </div>
      
      <AnimatePresence mode="wait">
        {step === 1 && (
          <motion.div
            key="step1"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.4 }}
            className="form-section-grid"
            style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '32px' }}
          >
            <FormField label="Full Name" icon={User} required>
              <input
                name="name"
                type="text"
                required
                value={form.name}
                onFocus={() => setFocusedField('name')}
                onBlur={() => setFocusedField(null)}
                onChange={handleChange}
                placeholder="e.g. Michael Jordan"
                style={getInputStyle('name')}
              />
            </FormField>
            <FormField label="Email Address" icon={Mail} required>
              <input
                name="email"
                type="email"
                required
                value={form.email}
                onFocus={() => setFocusedField('email')}
                onBlur={() => setFocusedField(null)}
                onChange={handleChange}
                placeholder="mike@example.com"
                style={getInputStyle('email')}
              />
            </FormField>
            <FormField label="Phone Number" icon={Phone} required>
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
          </motion.div>
        )}

        {step === 2 && (
          <motion.div
            key="step2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.4 }}
            style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}
          >
            <FormField label="Service Type" icon={Sparkles} required>
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
            <FormField label="Additional Request Details" icon={MessageSquare}>
              <textarea
                name="message"
                rows={4}
                value={form.message}
                onFocus={() => setFocusedField('message')}
                onBlur={() => setFocusedField(null)}
                onChange={handleChange}
                placeholder="Any specific instructions or tools required? (optional)..."
                style={{ ...getInputStyle('message'), resize: 'none' }}
              />
            </FormField>
          </motion.div>
        )}

        {step === 3 && (
          <motion.div
            key="step3"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.4 }}
            className="form-section-grid"
            style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '32px' }}
          >
            <FormField label="Service Address" icon={MapPin} required>
              <input
                name="address"
                type="text"
                required
                value={form.address}
                onFocus={() => setFocusedField('address')}
                onBlur={() => setFocusedField(null)}
                onChange={handleChange}
                placeholder="Street, Apartment, City"
                style={getInputStyle('address')}
              />
            </FormField>
            <FormField label="Preferred Date" icon={Calendar} required>
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
            
            <div style={{ gridColumn: '1 / -1', padding: '24px', backgroundColor: '#F0F9FF', borderRadius: '20px', border: '1px solid #BAE6FD', display: 'flex', alignItems: 'center', gap: '16px' }}>
               <div style={{ color: '#0EA5E9' }}><CreditCard size={24} /></div>
               <p style={{ fontSize: '13px', color: '#0369A1', fontFamily: 'var(--font-opensans)', fontWeight: '500' }}>
                 Almost there! We will only collect payment <span style={{ fontWeight: '700' }}>after</span> your service is completed.
               </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Navigation Buttons */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginTop: '20px' }}>
        {step > 1 && (
          <motion.button
            type="button"
            onClick={prevStep}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            style={{
              flex: 1,
              backgroundColor: 'white',
              color: '#1B2B3A',
              padding: '18px 24px',
              borderRadius: '16px',
              border: '2px solid #F1F5F9',
              fontSize: '16px',
              fontWeight: '700',
              fontFamily: 'var(--font-montserrat)',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
          >
            Back
          </motion.button>
        )}
        
        <motion.button
          type="submit"
          disabled={loading}
          whileHover={loading ? {} : { scale: 1.02, boxShadow: '0 25px 50px -12px rgba(43, 138, 126, 0.4)' }}
          whileTap={loading ? {} : { scale: 0.98 }}
          className="submit-button"
          style={{
            flex: 2,
            backgroundColor: '#2B8A7E',
            color: 'white',
            padding: '20px 32px',
            borderRadius: '18px',
            border: 'none',
            fontSize: '18px',
            fontWeight: '800',
            fontFamily: 'var(--font-montserrat)',
            cursor: loading ? 'not-allowed' : 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '16px',
            transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
            opacity: loading ? 0.8 : 1,
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          {loading ? (
            <>
              <Loader2 size={24} className="animate-spin" />
              <span>Securing...</span>
            </>
          ) : (
            <>
              <span>{step === 3 ? "Confirm Booking" : "Continue"}</span>
              <ArrowRight size={22} />
            </>
          )}
          
          {!loading && (
            <motion.div
              animate={{ x: ['-200%', '200%'] }}
              transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '40%',
                height: '100%',
                background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent)',
                transform: 'skewX(-25deg)',
                pointerEvents: 'none'
              }}
            />
          )}
        </motion.button>
      </div>

      {step === 3 && (
        <div className="trust-badge-grid" style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
          gap: '20px',
          padding: '24px',
          backgroundColor: '#F1F5F9',
          borderRadius: '20px',
          border: '1px dashed #CBD5E1',
          marginTop: '20px'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
             <div style={{ color: '#2B8A7E' }}><ShieldCheck size={20} /></div>
             <span style={{ fontSize: '12px', fontWeight: '600', color: '#334155', fontFamily: 'var(--font-opensans)' }}>Secure 256-bit Booking</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
             <div style={{ color: '#2B8A7E' }}><DollarSign size={20} /></div>
             <span style={{ fontSize: '12px', fontWeight: '600', color: '#334155', fontFamily: 'var(--font-opensans)' }}>Upfront Transparent Pricing</span>
          </div>
        </div>
      )}

      {error && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          style={{ 
            padding: '16px', 
            backgroundColor: '#FEF2F2', 
            border: '1px solid #FECACA', 
            borderRadius: '12px', 
            color: '#B91C1C', 
            fontSize: '14px', 
            textAlign: 'center',
            fontFamily: 'var(--font-opensans)',
            fontWeight: '500'
          }}
        >
          {error}
        </motion.div>
      )}
    </form>
  );
}
