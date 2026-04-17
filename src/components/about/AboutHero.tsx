"use client";
import React from "react";
import { motion } from "framer-motion";
import aboutData from "../../data/about.json";

const AboutHero = () => {
  const { badge, titleLine1, titleLine2, description, image } = aboutData.hero;

  return (
    <section 
      style={{ 
        position: 'relative',
        width: '100%',
        minHeight: '244.59px',
        paddingBottom: '100px',
        paddingTop: '160px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        backgroundColor: '#DDDDDD'
      }}
    >
      {/* Background with PREMIUM Effects */}
      <motion.div 
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        style={{ 
          position: 'absolute', 
          inset: 0, 
          backgroundImage: `url("${image}")`,
          backgroundSize: 'cover', 
          backgroundPosition: 'center',
          transition: 'all 0.8s ease',
          zIndex: 0
        }} 
      />
      
      {/* Overlay for Contrast */}
      <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.25)', zIndex: 1 }} />

      <div className="ds-container" style={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
        <motion.div
          initial="initial"
          animate="animate"
          variants={{
            initial: { opacity: 0 },
            animate: { opacity: 1, transition: { staggerChildren: 0.15 } }
          }}
        >
          {/* Badge */}
          <motion.div 
            variants={{ initial: { opacity: 0, y: 10 }, animate: { opacity: 1, y: 0 } }}
            whileHover={{ y: -3 }}
            style={{ 
              backgroundColor: 'white', 
              color: '#2B8A7E', 
              padding: '2px 16px', 
              borderRadius: '50px', 
              display: 'inline-block',
              fontSize: '13px',
              fontWeight: '600',
              fontFamily: 'var(--font-opensans)',
              marginBottom: '20px',
              lineHeight: '16px',
              cursor: 'default',
              transition: 'all 0.3s ease'
            }}>
            {badge}
          </motion.div>

          {/* Heading */}
          <motion.h1 
            variants={{ initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 } }}
            style={{ 
              fontFamily: 'var(--font-montserrat)',
              marginBottom: '24px',
              lineHeight: '1.2'
            }}>
            <span style={{ fontSize: '32px', fontWeight: '700', color: 'white', display: 'inline-block' }}>{titleLine1}</span>
            <span style={{ fontSize: '32px', fontWeight: '700', color: '#2B6B5A', marginLeft: '10px', display: 'inline-block' }}>{titleLine2}</span>
          </motion.h1>

          {/* Description */}
          <motion.p 
            variants={{ initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 } }}
            style={{ 
              fontSize: '16px', 
              color: 'white', 
              lineHeight: '22px', 
              maxWidth: '695px',
              margin: '0 auto',
              fontFamily: 'var(--font-montserrat)',
              letterSpacing: '-0.2px',
              fontWeight: '400'
            }}>
            {description}
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutHero;
