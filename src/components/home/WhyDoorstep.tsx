"use client";
import React from "react";
import { Ban, Brain, ShieldCheck, DollarSign } from "lucide-react";
import { motion } from "framer-motion";
import homeData from "../../data/home.json";

const iconMap: any = {
  Ban,
  Brain,
  ShieldCheck,
  DollarSign
};

const WhyDoorstep = () => {
  const { badge, title, subtitle, reasons } = homeData.whyDoorstep;

  return (
    <section className="ds-section" style={{ backgroundColor: 'white', padding: '100px 0' }}>
      <div className="ds-container">
        {/* Title and Badge */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ textAlign: 'center', marginBottom: '64px' }}
        >
          <div style={{ 
            display: 'inline-flex',
            alignItems: 'center', 
            justifyContent: 'center',
            backgroundColor: '#EAF6F5', 
            borderRadius: '100px', 
            padding: '4px 16px',
            marginBottom: '16px'
          }}>
            <span style={{ fontSize: '11px', fontWeight: '600', color: '#2B8A7E', fontFamily: 'var(--font-opensans)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{badge}</span>
          </div>
          <h2 style={{ fontSize: '30px', fontWeight: '700', marginBottom: '16px', fontFamily: 'var(--font-montserrat)', lineHeight: '36px', color: '#1B2B3A' }}>
            {title}
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <p style={{ fontSize: '13.85px', lineHeight: '20px', color: '#6B7280', fontFamily: 'var(--font-montserrat)', maxWidth: '653px', fontWeight: '400' }}>
               {subtitle}
            </p>
          </div>
        </motion.div>
        
        {/* Reasons Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px' }}>
          {reasons.map((reason, idx) => {
            const Icon = iconMap[reason.icon];
            return (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.4 }}
                whileHover={{ 
                  y: -10, 
                  backgroundColor: "#F9FBFC",
                  borderColor: "var(--primary-light)",
                  boxShadow: "0 25px 50px -12px rgba(43, 138, 126, 0.12)"
                }}
                className="ds-card" 
                style={{ 
                  padding: '40px 24px', 
                  textAlign: 'center', 
                  display: 'flex', 
                  flexDirection: 'column', 
                  alignItems: 'center', 
                  minHeight: '220px', 
                  transition: 'all 0.3s cubic-bezier(0.165, 0.84, 0.44, 1)',
                  backgroundColor: '#FFFFFF',
                  borderRadius: '8px'
                }}
              >
                <div 
                  style={{ 
                    width: '42px', 
                    height: '43px', 
                    backgroundColor: '#E9F5F3', 
                    borderRadius: '10px', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center', 
                    marginBottom: '24px',
                    color: 'var(--primary)',
                    flexShrink: 0
                  }}
                >
                  {Icon && <Icon size={24} />}
                </div>
                <h3 style={{ marginBottom: '16px', fontSize: '14px', fontWeight: '600', color: '#111827', fontFamily: 'var(--font-montserrat)', lineHeight: '20px' }}>
                  {reason.title}
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  {reason.desc.map((line, lidx) => (
                    <p key={lidx} style={{ 
                      fontSize: '12px', 
                      lineHeight: '19px', 
                      color: '#6B7280', 
                      fontFamily: 'var(--font-roboto)', 
                      textAlign: 'center',
                      fontWeight: '400'
                    }}>
                      {line}
                    </p>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyDoorstep;
