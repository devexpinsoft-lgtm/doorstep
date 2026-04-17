"use client";
import React from "react";
import { Lightbulb, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";
import pricingData from "../../data/pricing.json";

const IconMap: { [key: string]: any } = {
  Lightbulb: Lightbulb,
  ShieldCheck: ShieldCheck,
};

const InfoSection = () => {
  const { info } = pricingData;

  return (
    <section className="ds-section" style={{ padding: '80px 0', backgroundColor: '#F3F7F6' }}>
      <div className="ds-container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '40px', maxWidth: '900px', margin: '0 auto' }}>
          {info.map((item, idx) => {
            const Icon = IconMap[item.icon];
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2, duration: 0.6 }}
                whileHover="hover"
                style={{
                  backgroundColor: 'white',
                  borderRadius: '20px',
                  padding: '40px',
                  boxShadow: '0 4px 6px rgba(0,0,0,0.02)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '16px',
                  cursor: 'default',
                  transition: 'all 0.3s ease',
                  border: '1px solid transparent'
                }}
                variants={{
                  hover: { 
                    y: -10, 
                    boxShadow: '0 20px 40px rgba(0,0,0,0.06)',
                    borderColor: '#EAF6F5'
                  }
                }}
              >
                <div style={{
                  width: '40px',
                  height: '40px',
                  backgroundColor: item.icon === 'Lightbulb' ? '#E6F4F1' : '#EAF6F5', // Defaulting to light teal
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: item.icon === 'Lightbulb' ? '#F59E0B' : '#2B8A7E'
                }}
                className={item.icon === 'Lightbulb' ? 'lightbulb-container' : 'shield-container'}
                >
                  <div style={{
                    width: '40px',
                    height: '40px',
                    backgroundColor: item.icon === 'Lightbulb' ? '#FFFBEB' : '#EAF6F5',
                    borderRadius: '100px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: item.icon === 'Lightbulb' ? '#F59E0B' : '#2B8A7E'
                  }}>
                    {Icon && <Icon size={22} strokeWidth={2.5} />}
                  </div>
                </div>
                <div>
                  <h4 style={{ 
                    fontSize: '14px', 
                    fontWeight: '600', 
                    color: '#1A1A1A', 
                    marginBottom: '8px',
                    fontFamily: 'var(--font-montserrat)',
                    lineHeight: '18px'
                  }}>
                    {item.title}
                  </h4>
                  <p style={{ 
                    fontSize: '14px', 
                    color: '#4B4B4B', 
                    lineHeight: '18px',
                    fontFamily: 'var(--font-montserrat)',
                    fontWeight: '400'
                  }}>
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
