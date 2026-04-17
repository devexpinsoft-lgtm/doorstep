"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle, Clock, Shield } from "lucide-react";
import BookingForm from "@/components/BookingForm";

const perks = [
  { icon: Shield, text: "Background-checked pros" },
  { icon: Clock, text: "Same-day availability" },
  { icon: CheckCircle, text: "Satisfaction guarantee" },
];

export default function BookingPageContent() {
  return (
    <main style={{ minHeight: '100vh', backgroundColor: '#F8FAFC', position: 'relative', overflow: 'hidden' }}>
      <style jsx>{`
        .booking-layout {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 60px;
          align-items: flex-start;
          padding-top: 180px;
          padding-bottom: 120px;
          width: 100%;
        }
        .title-section { grid-row: 1; grid-column: 1; width: 100%; }
        .extra-info-mobile { grid-row: 2; grid-column: 1; width: 100%; }
        .form-container-card { 
          grid-row: 1 / span 2; 
          grid-column: 2; 
          width: 100%;
          background-color: white;
          border-radius: 32px;
          padding: 48px;
          box-shadow: 0 40px 100px -20px rgba(0, 0, 0, 0.08), 0 20px 40px -15px rgba(0, 0, 0, 0.04);
          border: 1px solid #F1F5F9;
          margin-top: 10px;
        }

        @media (max-width: 991px) {
          .booking-layout {
            grid-template-columns: 100%;
            gap: 40px;
            padding-top: 140px;
            padding-bottom: 80px;
            margin: 0;
            width: 100%;
          }
          .title-section { 
            grid-row: 1; 
            grid-column: 1;
            text-align: center;
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 100%;
          }
          .form-container-card { 
            grid-row: 2; 
            grid-column: 1; 
            margin: 0;
            padding: 40px 24px;
            width: 100%;
            max-width: 100%;
            border-radius: 24px;
          }
          .extra-info-mobile { 
            grid-row: 3; 
            grid-column: 1;
            margin: 40px 0 0;
            text-align: center;
            width: 100%;
          }
          .hero-title {
            font-size: 42px !important;
            letter-spacing: -1.5px !important;
            margin-bottom: 24px !important;
          }
          .process-item {
            flex-direction: column;
            align-items: center;
            text-align: center;
          }
          .perk-item {
            justify-content: center;
          }
        }
        @media (max-width: 480px) {
          .form-container-card {
            padding: 32px 16px;
          }
          .hero-title {
            font-size: 32px !important;
          }
        }
      `}</style>
      
      {/* Background patterns */}
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '700px', background: 'linear-gradient(135deg, #F8FAFC 0%, #F1F5F9 100%)', zIndex: 0 }} />
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '700px', backgroundImage: 'radial-gradient(#2B8A7E12 1px, transparent 1px)', backgroundSize: '40px 40px', zIndex: 0 }} />

      <div className="ds-container" style={{ position: 'relative', zIndex: 10 }}>
        <div className="booking-layout">
          
          {/* 1. Main Title Section */}
          <div className="title-section">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div style={{ backgroundColor: '#EAF6F5', color: '#2B8A7E', padding: '6px 18px', borderRadius: '100px', display: 'inline-block', fontSize: '11px', fontWeight: '800', fontFamily: 'var(--font-montserrat)', marginBottom: '24px', letterSpacing: '0.15em' }}>
                SECURE BOOKING HUB
              </div>
              
              <h1 className="hero-title" style={{ fontSize: '56px', fontWeight: '900', color: '#1B2B3A', fontFamily: 'var(--font-montserrat)', letterSpacing: '-2.5px', lineHeight: '1.05', marginBottom: '32px' }}>
                Finalize Your <br /> <span style={{ color: '#2B8A7E' }}>Booking</span>
              </h1>
            </motion.div>
          </div>

          {/* Right Side: The Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="form-container-card"
          >
            <div style={{ marginBottom: '40px' }}>
              <h2 style={{ fontSize: '24px', fontWeight: '900', color: '#1B2B3A', fontFamily: 'var(--font-montserrat)', marginBottom: '8px' }}>
                Quick Reservations
              </h2>
              <div style={{ width: '40px', height: '4px', backgroundColor: '#34D399', borderRadius: '100px' }} />
            </div>
            
            <BookingForm />
          </motion.div>

          {/* 3. Extra Info (Process & Perks) */}
          <div className="extra-info-mobile">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', marginTop: '10px' }}>
                <h3 style={{ fontSize: '20px', fontWeight: '800', color: '#1B2B3A', fontFamily: 'var(--font-montserrat)' }}>
                  How it works
                </h3>
                
                {[
                  { title: "Verification", desc: "A service specialist verifies details with you via phone." },
                  { title: "Smart Scheduling", desc: "We match you with a pro who fits your specific time slot." },
                  { title: "Pay Post-Service", desc: "Only pay when you're 100% satisfied with the result." }
                ].map((item, i) => (
                  <div key={i} className="process-item" style={{ display: 'flex', gap: '16px' }}>
                    <div style={{ flexShrink: 0, width: '28px', height: '28px', borderRadius: '50%', backgroundColor: '#2B8A7E', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '13px', fontWeight: '800' }}>{i + 1}</div>
                    <div>
                      <h4 style={{ fontSize: '15px', fontWeight: '700', color: '#1B2B3A', marginBottom: '2px', fontFamily: 'var(--font-montserrat)' }}>{item.title}</h4>
                      <p style={{ fontSize: '14px', color: '#64748B', lineHeight: '20px', fontFamily: 'var(--font-opensans)' }}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginTop: '64px', borderTop: '1px solid #E2E8F0', paddingTop: '40px' }}>
                {perks.map((p, i) => (
                  <div key={i} className="perk-item" style={{ display: 'flex', alignItems: 'center', gap: '12px', color: '#475569', fontSize: '13px', fontWeight: '600', fontFamily: 'var(--font-opensans)' }}>
                    <div style={{ color: '#2B8A7E' }}><p.icon size={16} /></div>
                    <span>{p.text}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </main>
  );
}
