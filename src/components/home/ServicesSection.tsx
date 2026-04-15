"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Trees, Sparkles, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import homeData from "../../data/home.json";

const iconMap: Record<string, React.ElementType> = {
  Trees,
  Sparkles
};

const ServicesSection = () => {
  const { badge, title, subtitle, list } = homeData.services;

  return (
    <section className="ds-section" style={{ backgroundColor: '#F4F7FB', padding: '100px 0' }}>
      <div className="ds-container">
        
        {/* Pagination Dots */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          style={{ display: 'flex', gap: '12px', justifyContent: 'center', marginBottom: '32px' }}
        >
          <motion.div 
            animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }} 
            transition={{ repeat: Infinity, duration: 2 }}
            style={{ width: '12px', height: '12px', backgroundColor: 'var(--primary)', borderRadius: '50%' }} 
          />
          <div style={{ width: '12px', height: '12px', backgroundColor: '#D9E2EC', borderRadius: '50%' }} />
          <div style={{ width: '12px', height: '12px', backgroundColor: '#D9E2EC', borderRadius: '50%' }} />
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
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
          <h2 style={{ fontSize: '24px', fontWeight: '700', color: '#1B2B3A', marginBottom: '12px', fontFamily: 'var(--font-montserrat)', lineHeight: '32px' }}>
            {title}
          </h2>
          <p style={{ fontSize: '12px', fontWeight: '400', color: '#6B7A8F', fontFamily: 'var(--font-opensans)', lineHeight: '16px' }}>
            {subtitle}
          </p>
        </motion.div>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '40px', maxWidth: '1000px', margin: '0 auto' }}>
          {list.map((service, idx) => {
            const [isHovered, setIsHovered] = useState(false);
            const Icon = iconMap[service.icon];

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15, duration: 0.6 }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <Link href="#" style={{ textDecoration: 'none' }}>
                  <motion.div 
                    whileHover={{ 
                      y: -15,
                      boxShadow: "0 30px 60px rgba(43, 138, 126, 0.15)",
                    }}
                    style={{ 
                      overflow: 'hidden',
                      display: 'flex', 
                      flexDirection: 'column', 
                      border: isHovered ? '2px solid var(--primary)' : '1px solid #E5E7EB',
                      borderRadius: '24px',
                      transition: 'all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1)',
                      backgroundColor: 'white',
                      height: '420px'
                    }}
                  >
                    <div style={{ position: 'relative', height: '240px', width: '100%', overflow: 'hidden' }}>
                      <motion.div
                        animate={{ scale: isHovered ? 1.1 : 1 }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                        style={{ width: '100%', height: '100%', position: 'relative' }}
                      >
                        <Image 
                          src={service.image}
                          alt={service.name}
                          fill
                          style={{ objectFit: 'cover' }}
                        />
                        <motion.div 
                          initial={{ opacity: 0 }}
                          animate={{ opacity: isHovered ? 0.3 : 0 }}
                          style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, var(--primary), transparent)' }}
                        />
                      </motion.div>
                    </div>

                    <div style={{ padding: '32px', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', flex: 1, justifyContent: 'center' }}>
                      <div 
                        style={{ 
                          color: isHovered ? 'var(--primary)' : '#2B8A7E', 
                          marginBottom: '16px',
                          transform: isHovered ? 'scale(1.2)' : 'scale(1)',
                          transition: 'all 0.4s ease'
                        }}
                      >
                        {Icon && <Icon size={24} />}
                      </div>
                      <h3 style={{ 
                        fontSize: '18px', 
                        fontWeight: '700', 
                        color: isHovered ? 'var(--primary)' : '#1B2B3A', 
                        marginBottom: '8px', 
                        fontFamily: 'var(--font-montserrat)',
                        transition: 'color 0.4s ease'
                      }}>
                        {service.name}
                      </h3>
                      <p style={{ 
                        fontSize: '14px', 
                        color: isHovered ? 'var(--primary)' : '#6B7A8F', 
                        fontFamily: 'var(--font-opensans)',
                        fontWeight: isHovered ? '700' : '400',
                        transition: 'all 0.4s ease'
                      }}>
                        {service.price}
                      </p>

                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 10 }}
                        style={{ marginTop: '20px', color: 'var(--primary)', display: 'flex', alignItems: 'center', gap: '8px' }}
                      >
                        <span style={{ fontSize: '13px', fontWeight: '700', fontFamily: 'var(--font-montserrat)' }}>Book Now</span>
                        <ArrowRight size={16} />
                      </motion.div>
                    </div>
                  </motion.div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
