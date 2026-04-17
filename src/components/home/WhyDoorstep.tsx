/* eslint-disable @typescript-eslint/no-explicit-any */
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
          <div style={{ width: '100%' }}>
            <motion.h2
              whileHover={{ y: -3, textShadow: '0 0 15px rgba(43, 138, 126, 0.3)' }}
              style={{ fontSize: '30px', fontWeight: '700', marginBottom: '16px', fontFamily: 'var(--font-montserrat)', lineHeight: '36px', color: '#1B2B3A', cursor: 'default', display: 'inline-block' }}
            >
              {title}
            </motion.h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <p style={{ fontSize: '13.85px', lineHeight: '20px', color: '#6B7280', fontFamily: 'var(--font-montserrat)', maxWidth: '653px', fontWeight: '400' }}>
              {subtitle}
            </p>
          </div>
        </motion.div>

        {/* Reasons Grid */}
        <div className="reasons-grid">
          <style jsx>{`
            .reasons-grid {
              display: grid;
              grid-template-columns: repeat(4, 1fr);
              gap: 24px;
            }
            @media (max-width: 991px) {
              .reasons-grid {
                grid-template-columns: repeat(2, 1fr);
              }
            }
            @media (max-width: 640px) {
              .reasons-grid {
                grid-template-columns: 1fr;
              }
            }
          `}</style>
          {reasons.map((reason, idx) => {
            const Icon = iconMap[reason.icon];
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.4 }}
                whileHover="hover"
                className="ds-card"
                style={{
                  padding: '40px 24px',
                  textAlign: 'center',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  minHeight: '220px',
                  transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                  backgroundColor: '#FFFFFF',
                  borderRadius: '16px',
                  border: '1px solid #F1F5F9'
                }}
                variants={{
                  hover: {
                    y: -12,
                    backgroundColor: "#FFFFFF",
                    borderColor: "#2B8A7E",
                    boxShadow: "0 25px 50px -12px rgba(43, 138, 126, 0.15)"
                  }
                }}
              >
                <motion.div
                  variants={{
                    hover: { y: -5, scale: 1.1, backgroundColor: '#2B8A7E', color: '#FFFFFF' }
                  }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  style={{
                    width: '52px',
                    height: '52px',
                    backgroundColor: '#E9F5F3',
                    borderRadius: '14px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '24px',
                    color: '#2B8A7E',
                    flexShrink: 0,
                    transition: 'all 0.3s ease'
                  }}
                >
                  {Icon && <Icon size={26} />}
                </motion.div>
                <motion.h3
                  variants={{ hover: { color: '#2B8A7E' } }}
                  style={{ marginBottom: '16px', fontSize: '16px', fontWeight: '700', color: '#111827', fontFamily: 'var(--font-montserrat)', lineHeight: '20px' }}
                >
                  {reason.title}
                </motion.h3>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  {reason.desc.map((line, lidx) => (
                    <p key={lidx} style={{
                      fontSize: '13px',
                      lineHeight: '20px',
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
