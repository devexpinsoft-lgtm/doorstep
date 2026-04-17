"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import providerData from "../../data/providers.json";

const ProvidersHero = () => {
  const { badge, titleLine1, titleLine2, description, image } = providerData.hero;

  return (
    <section 
      style={{ 
        position: 'relative',
        width: '100%',
        minHeight: '450px',
        paddingTop: '80px', // Header offset
        paddingBottom: '60px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        backgroundColor: '#f5f5f5'
      }}
    >
      {/* Background with PREMIUM Effects */}
      <motion.div 
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        whileHover={{ scale: 1.05 }}
        style={{ 
          position: 'absolute', 
          inset: 0, 
          backgroundImage: `url("${image}")`,
          backgroundSize: 'cover', 
          backgroundPosition: 'center 20%', // Keeps the person in view
          zIndex: 0,
          transition: 'all 1s ease'
        }} 
      />
      
      {/* Subtle overlay to ensure text readability */}
      <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.3)', zIndex: 1 }} />

      <div className="ds-container" style={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
        <motion.div
          initial="initial"
          animate="animate"
          variants={{
            initial: { opacity: 0 },
            animate: { opacity: 1, transition: { staggerChildren: 0.15 } }
          }}
        >
          <motion.div 
            variants={{
              initial: { opacity: 0, y: 15 },
              animate: { opacity: 1, y: 0 }
            }}
            whileHover={{ y: -3 }}
            style={{ 
              backgroundColor: 'white', 
              color: '#2B8A7E', 
              padding: '4px 18px', 
              borderRadius: '50px', 
              display: 'inline-block',
              fontSize: '13px',
              fontWeight: '600',
              fontFamily: 'var(--font-opensans)',
              marginBottom: '24px',
              lineHeight: '18px',
              cursor: 'default',
              transition: 'all 0.3s ease'
            }}>
            {badge}
          </motion.div>

          <motion.h1 
            variants={{
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 }
            }}
            style={{ 
              fontFamily: 'var(--font-montserrat)',
              marginBottom: '24px',
              lineHeight: '1.2'
            }}>
            <span style={{ fontSize: '32px', fontWeight: '800', color: 'white', display: 'inline-block' }}>{titleLine1}</span>
            <span style={{ fontSize: '26.7px', fontWeight: '700', color: '#2B6B5A', marginLeft: '10px', display: 'inline-block' }}>{titleLine2}</span>
          </motion.h1>

          <motion.p 
            variants={{
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 }
            }}
            style={{ 
              fontSize: '16px', 
              color: 'white', 
              lineHeight: '22px', 
              maxWidth: '695px',
              margin: '0 auto 40px auto',
              fontFamily: 'var(--font-montserrat)',
              fontWeight: '400'
            }}>
            {description}
          </motion.p>

          <Link href="#" style={{ textDecoration: 'none' }}>
            <motion.button
              variants={{
                initial: { opacity: 0, y: 20 },
                animate: { opacity: 1, y: 0 }
              }}
              whileHover={{ scale: 1.05, backgroundColor: '#349b8d', boxShadow: '0 15px 30px rgba(43, 138, 126, 0.3)' }}
              whileTap={{ scale: 0.95 }}
              style={{
                backgroundColor: '#2B8A7E',
                color: 'white',
                padding: '10px 24px',
                borderRadius: '6px',
                fontSize: '16px',
                fontWeight: '600',
                fontFamily: 'var(--font-opensans)',
                lineHeight: '22px',
                border: 'none',
                cursor: 'pointer',
                boxShadow: '0 1px 6px rgba(0, 0, 0, 0.15)',
                transition: 'background-color 0.3s ease, box-shadow 0.3s ease'
              }}
            >
              {providerData.hero.ctaText}
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ProvidersHero;
