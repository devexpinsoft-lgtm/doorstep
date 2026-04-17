"use client";
import React, { useRef, useState } from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import homeData from "../../data/home.json";

const CTA = () => {
  const { title, description, buttonText } = homeData.cta;
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
    <section className="ds-section-full" style={{ position: 'relative', minHeight: '400px', overflow: 'hidden', display: 'flex', alignItems: 'center' }}>
      {/* Parallax Background */}
      <motion.div 
        style={{ 
          position: 'absolute', 
          inset: 0, 
          backgroundImage: 'url("/images/family-happy.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          zIndex: 0
        }}
        initial={{ scale: 1.1 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 1.5 }}
      />
      <div 
        style={{ 
          position: 'absolute', 
          inset: 0, 
          // Re-adding the overlay but keeping it subtle as per previous user adjustment
          zIndex: 1
        }}
      />

      {/* Floating Shapes */}
      <motion.div 
        animate={{ y: [0, 20, 0], opacity: [0.1, 0.2, 0.1] }}
        transition={{ repeat: Infinity, duration: 5 }}
        style={{ position: 'absolute', top: '10%', right: '10%', width: '300px', height: '300px', borderRadius: '50%', background: 'white', filter: 'blur(80px)', zIndex: 1 }}
      />

      <div className="ds-container" style={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
        >
          <motion.h2 
            whileHover={{ y: -3, textShadow: '0 0 20px rgba(255, 255, 255, 0.4)' }}
            style={{ 
              fontSize: '42px', 
              fontWeight: '900', 
              color: 'white', 
              marginBottom: '24px', 
              fontFamily: 'var(--font-montserrat)',
              lineHeight: '1.1',
              cursor: 'default',
              display: 'inline-block'
            }}>
            {title.split(" home?")[0]}
          </motion.h2>
          <p style={{ 
            fontSize: '16px', 
            color: 'rgba(255,255,255,0.9)', 
            marginBottom: '48px', 
            maxWidth: '600px', 
            margin: '0 auto 48px auto',
            fontFamily: 'var(--font-opensans)',
            lineHeight: '1.6',
            fontWeight: '400'
          }}>
            {description}
          </p>
          
          <motion.a
            ref={buttonRef}
            href="/book"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            animate={{ x: position.x, y: position.y }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '12px',
              backgroundColor: 'white',
              color: 'var(--primary)',
              padding: '18px 40px',
              borderRadius: '12px',
              fontSize: '16px',
              fontWeight: '700',
              textDecoration: 'none',
              fontFamily: 'var(--font-montserrat)',
              boxShadow: '0 20px 40px rgba(0,0,0,0.2)',
              cursor: 'pointer'
            }}
          >
            {buttonText}
            <motion.div 
              animate={{ x: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              <ArrowRight size={20} />
            </motion.div>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
