"use client";
import React from "react";
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
          <div style={{ width: '100%' }}>
            <motion.h2
              whileHover={{ y: -3, textShadow: '0 0 15px rgba(43, 138, 126, 0.3)' }}
              style={{ fontSize: '24px', fontWeight: '700', color: '#1B2B3A', marginBottom: '12px', fontFamily: 'var(--font-montserrat)', lineHeight: '32px', cursor: 'default', display: 'inline-block' }}
            >
              {title}
            </motion.h2>
          </div>
          <p style={{ fontSize: '13.5px', fontWeight: '500', color: '#6B7A8F', fontFamily: 'var(--font-opensans)', lineHeight: '1.6' }}>
            {subtitle}
          </p>
        </motion.div>

        <div className="services-grid">
          <style jsx>{`
            .services-grid {
              display: grid;
              grid-template-columns: repeat(2, 1fr);
              gap: 40px;
              max-width: 1000px;
              margin: 0 auto;
            }
            @media (max-width: 767px) {
              .services-grid {
                grid-template-columns: 1fr;
                gap: 24px;
              }
            }
          `}</style>
          {list.map((service, idx) => {
            const Icon = iconMap[service.icon];
 
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15, duration: 0.6 }}
                whileHover="hover"
              >
                <Link href="/services" style={{ textDecoration: 'none' }}>
                  <motion.div
                    variants={{
                      hover: { y: -15, boxShadow: "0 30px 60px rgba(43, 138, 126, 0.15)", borderColor: "#2B8A7E" }
                    }}
                    style={{
                      overflow: 'hidden',
                      display: 'flex',
                      flexDirection: 'column',
                      border: '1px solid #E5E7EB',
                      borderRadius: '24px',
                      transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                      backgroundColor: 'white',
                      height: 'auto',
                      minHeight: '420px',
                      position: 'relative'
                    }}
                  >
                    <div style={{ position: 'relative', height: '240px', width: '100%', overflow: 'hidden' }}>
                      <motion.div
                        variants={{ hover: { scale: 1.1, filter: 'saturate(1.1) brightness(1.05)' } }}
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
                          variants={{ hover: { opacity: 0.2 } }}
                          initial={{ opacity: 0 }}
                          style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, #2B8A7E, transparent)', pointerEvents: 'none' }}
                        />
                      </motion.div>
                      {/* Shine Sweep */}
                      <motion.div
                        variants={{
                          hover: { x: ['-100%', '200%'] }
                        }}
                        transition={{ duration: 1, ease: "easeInOut" }}
                        style={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          width: '50%',
                          height: '100%',
                          background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)',
                          transform: 'skewX(-25deg)',
                          zIndex: 2,
                          pointerEvents: 'none'
                        }}
                      />
                    </div>
 
                    <div style={{ padding: '32px', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', flex: 1, justifyContent: 'center' }}>
                      <motion.div
                        variants={{ hover: { scale: 1.25, rotate: 10, color: '#2B8A7E' } }}
                        style={{
                          color: '#2B8A7E',
                          marginBottom: '16px',
                          transition: 'all 0.4s ease'
                        }}
                      >
                        {Icon && <Icon size={24} />}
                      </motion.div>
                      <motion.h3
                        variants={{ hover: { color: '#2B8A7E' } }}
                        style={{
                          fontSize: '18px',
                          fontWeight: '700',
                          color: '#1B2B3A',
                          marginBottom: '8px',
                          fontFamily: 'var(--font-montserrat)',
                          transition: 'color 0.4s ease'
                        }}>
                        {service.name}
                      </motion.h3>
                      <motion.p
                        variants={{ hover: { color: '#2B8A7E', fontWeight: '700' } }}
                        style={{
                          fontSize: '14px',
                          color: '#6B7A8F',
                          fontFamily: 'var(--font-opensans)',
                          fontWeight: '400',
                          transition: 'all 0.4s ease'
                        }}>
                        {service.price}
                      </motion.p>
 
                      <motion.div
                        variants={{ hover: { opacity: 1, y: 0 } }}
                        initial={{ opacity: 0, y: 10 }}
                        style={{ marginTop: '20px', color: '#2B8A7E', display: 'flex', alignItems: 'center', gap: '8px' }}
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
