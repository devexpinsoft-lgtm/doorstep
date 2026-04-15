"use client";
import React from "react";
import { Check, ArrowRight, Shield, Clock, CheckCircle, Star } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import CountUp from "../ui/CountUp";
import homeData from "../../data/home.json";

const iconMap: any = {
  Star,
  CheckCircle,
  Shield,
  Clock
};

const Hero = () => {
  const { titleLine1, titleLine2, subtitle, checklist, description, ctaText, stats, trustBar } = homeData.hero;

  return (
    <section className="ds-section" style={{ paddingTop: '160px', paddingBottom: '0', backgroundColor: 'var(--bg-main)', position: 'relative', overflow: 'hidden' }}>
      <div className="ds-container">
        <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 1fr', alignItems: 'center', gap: '64px', position: 'relative', width: '100%' }}>
          
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <h1 style={{ 
              fontSize: '49px', 
              fontWeight: '700', 
              lineHeight: '50px', 
              marginBottom: '24px', 
              letterSpacing: '-1px',
              fontFamily: 'var(--font-montserrat)',
              color: '#1B2B3A'
            }}>
              <span style={{ color: '#1B2B3A' }}>{titleLine1}</span><br />
              <motion.span 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                style={{ color: 'var(--primary)' }}
              >
                {titleLine2}
              </motion.span>
            </h1>
            <p style={{ 
              fontSize: '16px', 
              lineHeight: '24px', 
              marginBottom: '32px', 
              maxWidth: '456px', 
              color: '#1B2B3A', 
              fontFamily: 'var(--font-opensans)', 
              fontWeight: '400'
            }}>
              {subtitle}
            </p>
            
            <ul style={{ listStyle: 'none', marginBottom: '40px', padding: 0 }}>
              {checklist.map((item, idx) => (
                <motion.li 
                  key={idx} 
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + idx * 0.08 }}
                  className="ds-flex ds-items-center" 
                  style={{ gap: '12px', marginBottom: '16px' }}
                >
                  <div style={{ color: 'var(--primary)', backgroundColor: 'var(--primary-light)', borderRadius: '50%', padding: '4px', display: 'flex' }}>
                    <Check size={14} strokeWidth={4} />
                  </div>
                  <span style={{ 
                    fontSize: item.size, 
                    color: '#1B2B3A', 
                    fontFamily: 'var(--font-opensans)', 
                    fontWeight: '400' 
                  }}>{item.label}</span>
                </motion.li>
              ))}
            </ul>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <p style={{ 
                fontSize: '16px', 
                lineHeight: '20px', 
                marginBottom: '40px', 
                maxWidth: '549px', 
                color: '#1B2B3A', 
                fontFamily: 'var(--font-opensans)',
                fontWeight: '400'
              }}>
                 {description}
              </p>

              <motion.a
                href="/book"
                whileHover={{ scale: 1.03, boxShadow: "0 10px 20px rgba(43, 138, 126, 0.15)" }}
                whileTap={{ scale: 0.97 }}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
                  backgroundColor: 'var(--primary)',
                  color: 'white',
                  padding: '12px 28px',
                  borderRadius: '6px',
                  fontSize: '14px',
                  fontWeight: '600',
                  textDecoration: 'none',
                  boxShadow: '0px 1px 6px rgba(0, 0, 0, 0.15)',
                  fontFamily: 'var(--font-montserrat)',
                  transition: 'background-color 0.2s ease'
                }}
              >
                {ctaText}
                <motion.span 
                  animate={{ x: [0, 5, 0] }}
                  transition={{ repeat: Infinity, duration: 2.5 }}
                >
                  <ArrowRight size={18} strokeWidth={3} />
                </motion.span>
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Image with Overlays */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            style={{ position: 'relative' }}
          >
            <div style={{ borderRadius: '20px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.08)' }}>
              <Image 
                src="/images/image%2018.png" 
                alt="Professional handyman standing in front of doors" 
                width={527} 
                height={377}
                style={{ width: '100%', height: 'auto', display: 'block' }}
                priority
              />
            </div>
            
            {/* Stat Cards from JSON mapping */}
            {stats.map((stat: any, idx: number) => {
              const Icon = iconMap[stat.icon];
              const isTop = stat.id === 'rating';
              return (
                <motion.div 
                  key={stat.id}
                  initial={{ y: isTop ? 15 : -15, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.8 + idx * 0.2, type: "spring", stiffness: 120, damping: 20 }}
                  style={{ 
                    position: 'absolute', 
                    top: isTop ? '-20px' : 'auto',
                    bottom: isTop ? 'auto' : '-20px', 
                    right: isTop ? '-10px' : 'auto',
                    left: isTop ? 'auto' : '-20px',
                    zIndex: 10,
                    backgroundColor: 'white', 
                    borderRadius: '10px', 
                    padding: '12px 20px',
                    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                    border: '1px solid #DDDDDD',
                    cursor: 'default'
                  }}
                  whileHover={{ y: -5, boxShadow: '0px 15px 35px rgba(43, 138, 126, 0.12)' }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <span style={{ fontSize: '15px', fontWeight: '700', color: '#000', fontFamily: 'var(--font-montserrat)' }}>
                      <CountUp to={stat.val} suffix={stat.suffix || ""} decimals={stat.decimals || 0} />
                    </span>
                    {Icon && <Icon size={14} fill="#000" color="#000" />}
                  </div>
                  <p style={{ fontSize: '10px', fontWeight: '600', color: '#7B8597', whiteSpace: 'nowrap', fontFamily: 'var(--font-montserrat)' }}>{stat.label}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>

      {/* Trust Bar from JSON */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 1.2, duration: 0.5 }}
        style={{ width: '100%', marginTop: '100px', backgroundColor: '#F4F7FB', borderTop: '1px solid #E0E5EB', padding: '24px 0' }}
      >
        <div className="ds-container ds-flex ds-justify-between ds-items-center" style={{ flexWrap: 'wrap', gap: '32px' }}>
          {trustBar.map((item: any, idx: number) => {
            const Icon = iconMap[item.icon];
            return (
              <motion.div 
                key={idx} 
                whileHover={{ y: -3, color: "var(--primary)" }}
                className="ds-flex ds-items-center" 
                style={{ gap: '10px', cursor: 'default', transition: 'color 0.3s ease' }}
              >
                <div style={{ color: '#2A9D90', display: 'flex' }}>
                   {Icon && <Icon size={18} />}
                </div>
                <span style={{ fontSize: '12px', color: '#6B7A8F', fontFamily: 'var(--font-opensans)', fontWeight: '400', lineHeight: '16px' }}>{item.label}</span>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
