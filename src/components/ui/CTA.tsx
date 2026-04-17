"use client";
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

interface CTAProps {
  title: string;
  description: string;
  buttonText: string;
  href?: string;
  image?: string;
}

const CTA = ({ 
  title, 
  description, 
  buttonText, 
  href = "/book", 
  image = "/images/family-happy.png" 
}: CTAProps) => {
  const buttonRef = useRef<HTMLAnchorElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!buttonRef.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = buttonRef.current.getBoundingClientRect();
    const x = clientX - (left + width / 2);
    const y = clientY - (top + height / 2);
    setPosition({ x: x * 0.3, y: y * 0.3 });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.section 
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      className="ds-section-full" 
      style={{ 
        position: 'relative', 
        minHeight: '350px', 
        backgroundColor: '#2B6B5A', 
        overflow: 'hidden', 
        display: 'flex', 
        alignItems: 'center', 
        borderRadius: '0px' 
      }}
    >
      {/* Background Image with HIGH-FIDELITY ZOOM Effects */}
      <motion.div 
        variants={{
          initial: { scale: 1.15, opacity: 0 },
          animate: { scale: 1, opacity: 1 }
        }}
        transition={{ duration: 1.5, ease: [0.33, 1, 0.68, 1] }}
        style={{ 
          position: 'absolute', 
          inset: 0, 
          backgroundImage: `url("${image}")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          zIndex: 0
        }}
        whileHover={{ scale: 1.05 }}
      />
      
      {/* Subtle Overlay for readability */}
      <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(0,0,0,0.3)', zIndex: 1 }} />

      <div className="ds-container" style={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
        >
          <motion.h2 
            style={{ 
              fontSize: '26px', 
              fontWeight: '700', 
              color: 'white', 
              marginBottom: '24px', 
              fontFamily: 'var(--font-montserrat)',
              lineHeight: '34px',
              cursor: 'default',
              display: 'inline-block',
              textShadow: '0 2px 4px rgba(0,0,0,0.3)'
            }}>
            {title}
          </motion.h2>
          <p style={{ 
            fontSize: '14px', 
            color: 'white', 
            marginBottom: '40px', 
            maxWidth: '500px', 
            margin: '0 auto 40px auto',
            fontFamily: 'var(--font-opensans)',
            lineHeight: '22px',
            fontWeight: '400',
            textShadow: '0 1px 2px rgba(0,0,0,0.3)'
          }}>
            {description}
          </p>
          
          <motion.a
            ref={buttonRef}
            href={href}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            animate={{ x: position.x, y: position.y }}
            whileHover={{ scale: 1.05, backgroundColor: '#f5f5f5' }}
            whileTap={{ scale: 0.95 }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              backgroundColor: '#FFFFFF',
              color: '#2B8A7E',
              padding: '14px 40px',
              borderRadius: '6px',
              fontSize: '16px',
              fontWeight: '600',
              textDecoration: 'none',
              fontFamily: 'var(--font-montserrat)',
              lineHeight: '22px',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 12px rgba(0,0,0,0.2)'
            }}
          >
            {buttonText}
          </motion.a>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default CTA;
