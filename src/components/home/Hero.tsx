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
            <motion.h1 
              whileHover={{ y: -3, textShadow: '0 0 20px rgba(43, 138, 126, 0.3)' }}
              style={{ 
                fontSize: '52px', 
                fontWeight: '900', 
                lineHeight: '56px', 
                marginBottom: '24px', 
                letterSpacing: '-2px',
                fontFamily: 'var(--font-montserrat)',
                color: '#1B2B3A',
                cursor: 'default',
                display: 'inline-block'
              }}>
              <span style={{ color: '#1B2B3A' }}>{titleLine1}</span><br />
              <motion.span 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                style={{ color: '#2B8A7E' }}
              >
                {titleLine2}
              </motion.span>
            </motion.h1>
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
              {checklist.map((item: any, idx: number) => (
                <motion.li 
                  key={idx} 
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + idx * 0.08 }}
                  whileHover="hover"
                  style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px', cursor: 'default' }}
                >
                  <motion.div 
                    variants={{
                      hover: { backgroundColor: '#2B8A7E', scale: 1.1 }
                    }}
                    style={{ 
                      width: '22px',
                      height: '22px',
                      color: '#2B8A7E', 
                      backgroundColor: '#EAF6F5', 
                      borderRadius: '50%', 
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      transition: 'all 0.3s ease'
                    }}
                  >
                    <motion.div variants={{ hover: { color: '#FFFFFF' } }} style={{ display: 'flex' }}>
                      <Check size={14} strokeWidth={4} />
                    </motion.div>
                  </motion.div>
                  <motion.span 
                    variants={{ hover: { color: '#2B8A7E', x: 5 } }}
                    style={{ 
                      fontSize: item.size, 
                      color: '#1B2B3A', 
                      fontFamily: 'var(--font-opensans)', 
                      fontWeight: '500',
                      transition: 'all 0.3s ease'
                    }}
                  >
                    {item.label}
                  </motion.span>
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
            <motion.div 
              whileHover="hover"
              style={{ borderRadius: '24px', overflow: 'hidden', boxShadow: '0 30px 60px rgba(0,0,0,0.12)', position: 'relative', cursor: 'pointer' }}
            >
              <motion.div
                variants={{
                  hover: { scale: 1.05, filter: 'saturate(1.1) brightness(1.05)' }
                }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <Image 
                  src="/images/hero-handyman.png" 
                  alt="Professional handyman standing in front of doors" 
                  width={527} 
                  height={377}
                  style={{ width: '100%', height: 'auto', display: 'block' }}
                  priority
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
            </motion.div>
            
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
