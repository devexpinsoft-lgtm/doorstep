"use client";
import React, { useState } from "react";
import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";
import homeData from "../../data/home.json";

const Testimonials = () => {
  const { badge, title, subtitle, list } = homeData.testimonials;

  return (
    <section className="ds-section" style={{ backgroundColor: 'white', padding: '100px 0' }}>
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
          <h2 style={{ fontSize: '30px', fontWeight: '700', lineHeight: '36px', marginBottom: '16px', fontFamily: 'var(--font-montserrat)', color: '#1B2B3A' }}>
            What Our <span style={{ color: 'var(--primary)' }}>Customers</span> Say
          </h2>
          <p style={{ fontSize: '12px', fontWeight: '400', color: '#6B7A8F', fontFamily: 'var(--font-opensans)', lineHeight: '16px' }}>
            {subtitle}
          </p>
        </motion.div>
        
        {/* 3x2 Grid for 6 Testimonials */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
          {list.map((testi: any, idx: number) => {
            const [isHovered, setIsHovered] = useState(false);

            return (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (idx % 3) * 0.1, duration: 0.5 }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                whileHover={{ y: -5 }}
                style={{ 
                  padding: '32px 24px', 
                  backgroundColor: 'white',
                  borderRadius: '12px',
                  border: isHovered ? '1px solid var(--primary)' : '1px solid #E5E7EB',
                  transition: 'all 0.3s ease',
                  boxShadow: isHovered ? '0 15px 30px rgba(43, 138, 126, 0.08)' : '0 4px 12px rgba(0,0,0,0.02)',
                  position: 'relative',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between'
                }}
              >
                {/* Visual Quote Icon */}
                <div style={{ position: 'absolute', top: '16px', right: '16px', color: isHovered ? 'var(--primary)' : '#F0F4F8', opacity: 0.4 }}>
                  <Quote size={40} fill={isHovered ? 'var(--primary)' : 'currentColor'} />
                </div>

                <div>
                  <div style={{ display: 'flex', gap: '2px', marginBottom: '16px' }}>
                    {[...Array(testi.stars)].map((_, i) => (
                      <Star key={i} size={14} fill="#2B8A7E" color="#2B8A7E" />
                    ))}
                  </div>
                  
                  <p style={{ 
                    fontSize: '12px', 
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
                  <div style={{ 
                    width: '32px', 
                    height: '32px', 
                    backgroundColor: isHovered ? 'var(--primary)' : '#E9F5F3', 
                    color: isHovered ? 'white' : 'var(--primary)', 
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
                  </div>
                  <div>
                    <h4 style={{ fontSize: '13px', fontWeight: '700', color: '#1B2B3A', fontFamily: 'var(--font-montserrat)', marginBottom: '0px' }}>{testi.name}</h4>
                    <p style={{ fontSize: '10px', color: '#9CA3AF', fontFamily: 'var(--font-opensans)', fontWeight: '400' }}>{testi.role}</p>
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
