/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React from "react";
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
          <div style={{ width: '100%' }}>
            <motion.h2
              whileHover={{ y: -3, textShadow: '0 0 15px rgba(43, 138, 126, 0.3)' }}
              style={{ fontSize: '30px', fontWeight: '700', marginBottom: '16px', fontFamily: 'var(--font-montserrat)', color: '#1B2B3A', lineHeight: '36px', cursor: 'default', display: 'inline-block' }}
            >
              {title}
            </motion.h2>
          </div>
          <p style={{ fontSize: '14.5px', fontWeight: '500', color: '#6B7A8F', fontFamily: 'var(--font-opensans)', maxWidth: '569px', margin: '0 auto', lineHeight: '1.6' }}>
            {description}
          </p>
        </motion.div>

        {/* Grid of Cards */}
        <div className="steps-grid">
          <style jsx>{`
            .steps-grid {
              display: grid;
              grid-template-columns: repeat(3, 1fr);
              gap: 32px;
              position: relative;
            }
            @media (max-width: 991px) {
              .steps-grid {
                grid-template-columns: 1fr;
                gap: 48px;
              }
            }
          `}</style>

          <div style={{ position: 'absolute', top: '24%', left: '15%', right: '15%', height: '1px', backgroundColor: '#F0F4F8', zIndex: 0 }} />

          {steps.map((step, idx) => {
            const Icon = iconMap[step.icon];

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
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
                  zIndex: 1,
                  transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                  borderRadius: '16px',
                  border: '1px solid #F1F5F9',
                  backgroundColor: '#FFFFFF',
                  position: 'relative',
                  overflow: 'hidden'
                }}
                variants={{
                  hover: {
                    y: -12,
                    borderColor: "#2B8A7E",
                    boxShadow: "0 25px 50px -12px rgba(43, 138, 126, 0.15)"
                  }
                }}
              >
                <motion.div
                  variants={{
                    hover: { scale: 1.15, backgroundColor: '#2B8A7E', color: '#FFFFFF' }
                  }}
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
                  style={{
                    marginBottom: '16px',
                    fontSize: '16px',
                    fontWeight: '700',
                    color: '#1B2B3A',
                    fontFamily: 'var(--font-montserrat)',
                    transition: 'color 0.4s ease',
                    lineHeight: '20px'
                  }}
                >
                  {step.title}
                </motion.h3>
                <p style={{ fontSize: '12px', lineHeight: '20px', color: '#6B7A8F', fontFamily: 'var(--font-opensans)', maxWidth: '270px', fontWeight: '400' }}>
                  {step.desc}
                </p>

                <motion.div
                  variants={{
                    initial: { width: 0, opacity: 0 },
                    hover: { width: '80%', opacity: 1 }
                  }}
                  style={{
                    position: 'absolute',
                    bottom: '0',
                    left: '10%',
                    height: '4px',
                    backgroundColor: '#2B8A7E',
                    borderRadius: '4px 4px 0 0'
                  }}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
