"use client";
import React, { useState } from "react";
import { MousePointer2, UserCheck, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import homeData from "../../data/home.json";

const iconMap: any = {
  MousePointer2,
  UserCheck,
  CheckCircle
};

const HowItWorks = () => {
  const { badge, title, description, steps } = homeData.howItWorks;

  return (
    <section className="ds-section" id="how-it-works" style={{ backgroundColor: 'white', padding: '100px 0', position: 'relative' }}>
      <div className="ds-container">
        {/* Title and Pill Badge */}
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
          <h2 style={{ fontSize: '30px', fontWeight: '700', marginBottom: '16px', fontFamily: 'var(--font-montserrat)', color: '#1B2B3A', lineHeight: '36px' }}>
            {title}
          </h2>
          <p style={{ fontSize: '14px', fontWeight: '400', color: '#6B7A8F', fontFamily: 'var(--font-montserrat)', maxWidth: '569px', margin: '0 auto', lineHeight: '16px' }}>
            {description}
          </p>
        </motion.div>
        
        {/* Grid of Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '32px', position: 'relative' }}>
          
          <div style={{ position: 'absolute', top: '24%', left: '15%', right: '15%', height: '1px', backgroundColor: '#F0F4F8', zIndex: 0 }} />

          {steps.map((step, idx) => {
            const [isHovered, setIsHovered] = useState(false);
            const Icon = iconMap[step.icon];

            return (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.4 }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                whileHover={{ 
                  y: -10, 
                  backgroundColor: "#F9FBFC",
                  boxShadow: "0 25px 50px -12px rgba(43, 138, 126, 0.12)"
                }}
                className="ds-card" 
                style={{ 
                  padding: '40px 24px', 
                  textAlign: 'center', 
                  display: 'flex', 
                  flexDirection: 'column', 
                  alignItems: 'center', 
                  minHeight: '168px',
                  zIndex: 1,
                  transition: 'all 0.3s cubic-bezier(0.165, 0.84, 0.44, 1)',
                  borderRadius: '8px',
                  border: '1px solid #E5E7EB',
                  backgroundColor: '#FFFFFF'
                }}
              >
                <div 
                  style={{ 
                    width: '42px', 
                    height: '43px', 
                    backgroundColor: isHovered ? 'var(--primary)' : '#E9F5F3', 
                    borderRadius: '10px', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center', 
                    marginBottom: '24px',
                    color: isHovered ? 'white' : 'var(--primary)',
                    flexShrink: 0,
                    transition: 'all 0.4s ease'
                  }}
                >
                  {Icon && <Icon size={24} />}
                </div>
                <h3 style={{ 
                  marginBottom: '16px', 
                  fontSize: '14px', 
                  fontWeight: '600', 
                  color: isHovered ? 'var(--primary)' : '#1B2B3A', 
                  fontFamily: 'var(--font-montserrat)',
                  transition: 'color 0.4s ease',
                  lineHeight: '20px'
                }}>
                  {step.title}
                </h3>
                <p style={{ fontSize: '11px', lineHeight: '16px', color: '#6B7A8F', fontFamily: 'var(--font-opensans)', maxWidth: '270px', fontWeight: '400' }}>
                  {step.desc}
                </p>
                
                {isHovered && (
                  <motion.div 
                    layoutId="glow"
                    style={{ position: 'absolute', bottom: '0', left: '10%', right: '10%', height: '3px', backgroundColor: 'var(--primary)', borderRadius: '3px 3px 0 0' }}
                  />
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
