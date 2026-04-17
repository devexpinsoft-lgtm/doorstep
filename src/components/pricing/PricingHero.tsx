"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import pricingData from "../../data/pricing.json";

const PricingHero = () => {
  const { badge, titleLine1, titleLine2, description } = pricingData.hero;

  return (
    <section className="ds-section" style={{ paddingTop: '160px', paddingBottom: '100px', backgroundColor: '#F6F4F1' }}>
      <div className="ds-container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.1fr', alignItems: 'center', gap: '80px' }}>
          
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div style={{ 
              display: 'inline-flex',
              padding: '4px 12px',
              backgroundColor: '#EAF6F5',
              borderRadius: '100px',
              marginBottom: '24px'
            }}>
              <span style={{ 
                fontSize: '11px', 
                fontWeight: '600', 
                color: '#2B8A7E', 
                fontFamily: 'var(--font-opensans)',
                letterSpacing: '0.05em'
              }}>{badge}</span>
            </div>
            
            <div style={{ width: '100%', marginBottom: '24px' }}>
              <motion.h1 
                whileHover={{ y: -3, textShadow: '0 0 20px rgba(43, 138, 126, 0.3)' }}
                style={{ 
                  fontSize: '40px', 
                  fontWeight: '900', 
                  color: '#1B2B3A', 
                  fontFamily: 'var(--font-montserrat)',
                  lineHeight: '48px',
                  letterSpacing: '-1.5px',
                  cursor: 'default',
                  display: 'inline-block'
                }}>
                {titleLine1} <span style={{ color: '#2B8A7E', fontWeight: '700', fontSize: '36px' }}>{titleLine2}</span>
              </motion.h1>
            </div>

            <p style={{ 
              fontSize: '16px', 
              color: '#6B6B6B', 
              lineHeight: '22px', 
              maxWidth: '695px',
              fontFamily: 'var(--font-montserrat)',
              fontWeight: '400'
            }}>
              {description}
            </p>
          </motion.div>

          <div style={{ position: 'relative' }}>
            <motion.div 
              whileHover="hover"
              style={{ 
                borderRadius: '24px', 
                overflow: 'hidden', 
                boxShadow: '0 20px 40px rgba(0,0,0,0.08)',
                position: 'relative',
                cursor: 'pointer'
              }}
              variants={{
                hover: { scale: 1.02, boxShadow: '0 40px 80px rgba(43, 138, 126, 0.15)' }
              }}
            >
              <motion.div
                variants={{
                  hover: { filter: 'saturate(1.1) brightness(1.05)' }
                }}
                transition={{ duration: 0.4 }}
              >
                <Image 
                  src="/images/pricing-hero.png"
                  alt="Pricing Hero"
                  width={600}
                  height={400}
                  style={{ width: '100%', height: 'auto', display: 'block' }}
                  priority
                />
              </motion.div>

              {/* High-Fidelity Shine Effect */}
              <motion.div
                variants={{
                  hover: { x: ['-100%', '200%'] }
                }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '60%',
                  height: '100%',
                  background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.25), transparent)',
                  transform: 'skewX(-25deg)',
                  zIndex: 2,
                  pointerEvents: 'none'
                }}
              />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PricingHero;
