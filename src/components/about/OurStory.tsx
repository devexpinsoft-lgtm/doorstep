"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import aboutData from "../../data/about.json";
import CountUp from "@/components/ui/CountUp";

const OurStory = () => {
  const { badge, title, description, image, stats } = aboutData.story;

  // Helper to determine CountUp props based on the static data
  const getCountUpProps = (value: string) => {
    if (value === "10K+") return { to: 10, suffix: "K+" };
    if (value === "500+") return { to: 500, suffix: "+" };
    if (value === "4.9★") return { to: 4.9, suffix: "★", decimals: 1 };
    return { to: parseFloat(value) || 0 };
  };

  return (
    <section className="ds-section" style={{ backgroundColor: '#F6FAF9', padding: '100px 0' }}>
      <div className="ds-container">
        <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '80px', alignItems: 'center' }}>
          
          {/* Content side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
             <div style={{ 
              backgroundColor: '#DFEEEF', 
              color: '#2B8A7E', 
              padding: '2px 14px', 
              borderRadius: '50px', 
              display: 'inline-block',
              fontSize: '13px',
              fontWeight: '600',
              fontFamily: 'var(--font-opensans)',
              marginBottom: '20px',
              cursor: 'default'
            }}>
              {badge}
            </div>

            <h2 style={{ 
              fontSize: '32px', 
              fontWeight: '700', 
              color: '#000000', 
              fontFamily: 'var(--font-montserrat)', 
              marginBottom: '24px',
              lineHeight: '38px'
            }}>
              {title}
            </h2>

            <p style={{ 
              fontSize: '14px', 
              lineHeight: '23px', 
              color: '#6B7A8F', 
              fontFamily: 'var(--font-montserrat)',
              fontWeight: '400',
              marginBottom: '40px'
            }}>
              {description}
            </p>

            {/* Stats Grid */}
            <div style={{ display: 'flex', gap: '24px' }}>
              {stats.map((stat, idx) => {
                const countProps = getCountUpProps(stat.value);
                return (
                  <motion.div 
                    key={idx}
                    whileHover={{ y: -5, borderColor: '#2B8A7E' }}
                    style={{ 
                      backgroundColor: 'white', 
                      border: '1px solid #E0E5EB', 
                      borderRadius: '8px', 
                      padding: '16px 24px',
                      textAlign: 'center',
                      minWidth: '144px',
                      transition: 'all 0.3s ease'
                    }}>
                    <div style={{ 
                      fontSize: '20px', 
                      fontWeight: '700', 
                      color: '#2B8A7E', 
                      fontFamily: 'var(--font-opensans)',
                      lineHeight: '28px'
                    }}>
                      <CountUp {...countProps} />
                    </div>
                    <div style={{ 
                      fontSize: '14px', 
                      fontWeight: '400', 
                      color: '#6B7A8F', 
                      fontFamily: 'var(--font-opensans)',
                      lineHeight: '18px'
                    }}>
                      {stat.label}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Image side with Premium Effect */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            whileHover="hover"
            style={{ position: 'relative', borderRadius: '24px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.1)', cursor: 'pointer' }}
          >
            <motion.div
              variants={{
                hover: { scale: 1.05, filter: 'saturate(1.1) brightness(1.05)' }
              }}
              transition={{ duration: 0.8 }}
            >
              <Image 
                src={image} 
                alt="Our Story" 
                width={600} 
                height={400} 
                style={{ width: '100%', height: 'auto', display: 'block' }} 
              />
            </motion.div>
            
            {/* Shine Sweep Overlay */}
            <motion.div
              variants={{
                hover: { x: ['-100%', '200%'] }
              }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
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
    </section>
  );
};

export default OurStory;
