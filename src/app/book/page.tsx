import type { Metadata } from "next";
import BookingForm from "@/components/BookingForm";
import { CheckCircle, Clock, Shield } from "lucide-react";

export const metadata: Metadata = {
  title: "Book a Service",
  description:
    "Book a professional home service with DoorStep. Fill out the quick form and we'll match you with a certified pro — same day, guaranteed.",
};

const perks = [
  { icon: Shield, text: "Background-checked pros" },
  { icon: Clock, text: "Same-day availability" },
  { icon: CheckCircle, text: "Satisfaction guarantee" },
];

export default function BookPage() {
  return (
    <main style={{ minHeight: '100vh', backgroundColor: '#F8FAFC' }}>
      {/* High-Fidelity Hero for Booking */}
      <section style={{ 
        position: 'relative',
        width: '100%',
        paddingBottom: '100px',
        paddingTop: '160px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        backgroundColor: '#111827' // Dark professional theme
      }}>
        {/* Subtle background texture or gradient */}
        <div style={{ 
          position: 'absolute', 
          inset: 0, 
          background: 'linear-gradient(135deg, #111827 0%, #1F2937 100%)',
          zIndex: 0
        }} />
        
        <div className="ds-container" style={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
          <div style={{ 
            backgroundColor: 'rgba(255, 255, 255, 0.1)', 
            color: 'rgba(255, 255, 255, 0.9)', 
            padding: '4px 16px', 
            borderRadius: '50px', 
            display: 'inline-block',
            fontSize: '13px',
            fontWeight: '600',
            fontFamily: 'var(--font-opensans)',
            marginBottom: '24px',
            border: '1px solid rgba(255, 255, 255, 0.1)'
          }}>
            FAST & EASY BOOKING
          </div>
          
          <h1 style={{ 
            fontSize: '42px', 
            fontWeight: '800', 
            color: 'white', 
            fontFamily: 'var(--font-montserrat)', 
            marginBottom: '20px',
            letterSpacing: '-1px'
          }}>
            Book a <span style={{ color: '#2B8A7E' }}>Service</span>
          </h1>
          
          <p style={{ 
            fontSize: '18px', 
            color: 'rgba(255, 255, 255, 0.7)', 
            lineHeight: '28px', 
            maxWidth: '600px', 
            margin: '0 auto 40px',
            fontFamily: 'var(--font-montserrat)',
            fontWeight: '400'
          }}>
            Tell us what you need, pick a time that works, and we&apos;ll handle the rest. It takes less than 2 minutes.
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '32px' }}>
            {perks.map((p, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'rgba(255, 255, 255, 0.8)', fontSize: '14px', fontFamily: 'var(--font-opensans)' }}>
                <p.icon size={16} color="#2B8A7E" />
                <span>{p.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modern Form Section */}
      <section style={{ marginTop: '-60px', paddingBottom: '120px', position: 'relative', zIndex: 10 }}>
        <div className="ds-container">
          <div style={{ 
            maxWidth: '800px', 
            margin: '0 auto', 
            backgroundColor: 'white', 
            borderRadius: '24px', 
            padding: '60px 48px',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.15)',
            border: '1px solid #F1F5F9'
          }}>
            <div style={{ marginBottom: '48px', textAlign: 'center' }}>
              <h2 style={{ 
                fontSize: '24px', 
                fontWeight: '700', 
                color: '#1B2B3A', 
                fontFamily: 'var(--font-montserrat)', 
                marginBottom: '12px' 
              }}>
                Service Booking Form
              </h2>
              <p style={{ 
                fontSize: '14px', 
                color: '#64748B', 
                fontFamily: 'var(--font-opensans)' 
              }}>
                All fields marked with <span style={{ color: '#2B8A7E' }}>*</span> are required. We&apos;ll confirm your appointment within 30 minutes.
              </p>
            </div>

            <BookingForm />

            <div style={{ marginTop: '40px', textAlign: 'center', borderTop: '1px solid #F1F5F9', paddingTop: '32px' }}>
              <p style={{ fontSize: '12px', color: '#94A3B8', fontFamily: 'var(--font-opensans)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}>
                <span>🔒</span> Your information is encrypted and never shared with third parties.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
