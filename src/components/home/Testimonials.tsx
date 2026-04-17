/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React from "react";
import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";
import homeData from "../../data/home.json";

const Testimonials = () => {
  const { badge, subtitle, list } = homeData.testimonials;

  return (
    <section className="ds-section" id="testimonials" style={{ backgroundColor: 'white', padding: '100px 0' }}>
      <div className="ds-container">
        {/* Header with Pill Badge and Dual-Color Title */}
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
              style={{ fontSize: '30px', fontWeight: '700', lineHeight: '36px', marginBottom: '16px', fontFamily: 'var(--font-montserrat)', color: '#1B2B3A', cursor: 'default', display: 'inline-block' }}
            >
              What Our <span style={{ color: '#2B8A7E' }}>Customers</span> Say
            </motion.h2>
          </div>
          <p style={{ fontSize: '12px', fontWeight: '400', color: '#6B7A8F', fontFamily: 'var(--font-opensans)', lineHeight: '16px' }}>
            {subtitle}
          </p>
        </motion.div>
        
        {/* 3x2 Grid for 6 Testimonials */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
          {list.map((testi: any, idx: number) => {
            return (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (idx % 3) * 0.1, duration: 0.5 }}
                whileHover="hover"
                style={{ 
                  padding: '32px 24px', 
                  backgroundColor: 'white',
                  borderRadius: '16px',
                  border: '1px solid #E5E7EB',
                  transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.02)',
                  position: 'relative',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between'
                }}
                variants={{
                  hover: { 
                    y: -10, 
                    borderColor: "#2B8A7E",
                    boxShadow: '0 20px 40px rgba(43, 138, 126, 0.1)' 
                  }
                }}
              >
                {/* Visual Quote Icon */}
                <motion.div 
                  variants={{ hover: { color: '#2B8A7E', scale: 1.1 } }}
                  style={{ position: 'absolute', top: '16px', right: '16px', color: '#F0F4F8', opacity: 0.4 }}
                >
                  <Quote size={40} fill="currentColor" />
                </motion.div>

                <div>
                  <div style={{ display: 'flex', gap: '2px', marginBottom: '16px' }}>
                    {[...Array(testi.stars)].map((_, i) => (
                      <Star key={i} size={14} fill="#2B8A7E" color="#2B8A7E" />
                    ))}
                  </div>
                  
                  <p style={{ 
                    fontSize: '13px', 
                    lineHeight: '1.8', 
                    color: '#6B7A8F', 
                    marginBottom: '24px', 
                    fontFamily: 'var(--font-opensans)',
                    fontWeight: '400'
                  }}>
                    {testi.content}
                  </p>
                </div>

                <div className="ds-flex ds-items-center" style={{ gap: '12px' }}>
                  <motion.div 
                    variants={{ hover: { backgroundColor: '#2B8A7E', color: '#FFFFFF', scale: 1.1 } }}
                    style={{ 
                      width: '32px', 
                      height: '32px', 
                      backgroundColor: '#E9F5F3', 
                      color: '#2B8A7E', 
                      borderRadius: '50%', 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center', 
                      fontWeight: '700', 
                      fontSize: '12px',
                      fontFamily: 'var(--font-montserrat)',
                      transition: 'all 0.3s ease'
                    }}>
                    {testi.initial}
                  </motion.div>
                  <div>
                    <motion.h4 
                      variants={{ hover: { color: '#2B8A7E' } }}
                      style={{ fontSize: '14px', fontWeight: '700', color: '#1B2B3A', fontFamily: 'var(--font-montserrat)', marginBottom: '0px' }}
                    >
                      {testi.name}
                    </motion.h4>
                    <p style={{ fontSize: '11px', color: '#9CA3AF', fontFamily: 'var(--font-opensans)', fontWeight: '400' }}>{testi.role}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
