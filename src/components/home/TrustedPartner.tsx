"use client";
import React from "react";
import Image from "next/image";
import { ShieldCheck, Heart, Award } from "lucide-react";
import { motion } from "framer-motion";
import CountUp from "../ui/CountUp";
import homeData from "../../data/home.json";

const iconMap: any = {
  ShieldCheck,
  Heart,
  Award
};

const TrustedPartner = () => {
  const { badge, title, description, image, stats, benefits } = homeData.trustedPartner;

  return (
    <section className="ds-section" style={{ backgroundColor: '#F4F7FB', overflow: 'hidden', padding: '100px 0' }}>
      <div className="ds-container">
        <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: '64px', alignItems: 'start' }}>
          
          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}
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
                {title}
              </motion.h2>
            </div>
            <p style={{ fontSize: '12px', lineHeight: '21px', color: '#6B7A8F', marginBottom: '40px', maxWidth: '471px', fontFamily: 'var(--font-opensans)', fontWeight: '400' }}>
               {description}
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
              {stats.map((stat: any, i: number) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.05, duration: 0.4 }}
                  whileHover={{ 
                    scale: 1.03, 
                    borderColor: "var(--primary)",
                    boxShadow: "0 10px 20px rgba(0,0,0,0.05)"
                  }}
                  style={{ 
                    backgroundColor: 'white', 
                    border: '1px solid #E0E5EB', 
                    borderRadius: '8px', 
                    height: '84px', 
                    display: 'flex', 
                    flexDirection: 'column', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    cursor: 'default',
                    transition: 'border-color 0.2s ease'
                  }}
                >
                  <p style={{ fontSize: '18px', fontWeight: '700', color: 'var(--primary)', marginBottom: '4px', fontFamily: 'var(--font-opensans)' }}>
                    <CountUp to={stat.val} suffix={stat.suffix || ""} decimals={stat.decimals || 0} />
                  </p>
                  <p style={{ fontSize: '12px', fontWeight: '400', color: '#6B7A8F', fontFamily: 'var(--font-opensans)' }}>{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Side */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <motion.div 
              initial={{ opacity: 0, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              whileHover="hover"
              style={{ borderRadius: '24px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.1)', position: 'relative', cursor: 'pointer' }}
            >
              <motion.div
                variants={{
                  hover: { scale: 1.05, filter: 'saturate(1.1) brightness(1.05)' }
                }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                style={{ width: '100%', height: '100%' }}
              >
                <Image 
                  src={image} 
                  alt={title} 
                  width={537} 
                  height={213}
                  style={{ width: '100%', height: 'auto', display: 'block' }}
                />
              </motion.div>
              {/* Shine Sweep */}
              <motion.div
                variants={{
                  hover: { x: ['-100%', '200%'] }
                }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '50%',
                  height: '100%',
                  background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.25), transparent)',
                  transform: 'skewX(-25deg)',
                  zIndex: 2,
                  pointerEvents: 'none'
                }}
              />
            </motion.div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {benefits.map((item: any, idx: number) => {
                const Icon = iconMap[item.icon];
                return (
                  <motion.div 
                    key={idx} 
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + idx * 0.08, duration: 0.4 }}
                    whileHover="hover"
                    style={{ 
                      backgroundColor: 'white', 
                      border: '1px solid #E0E5EB', 
                      borderRadius: '12px', 
                      padding: '24px', 
                      display: 'flex', 
                      alignItems: 'center', 
                      gap: '24px',
                      cursor: 'pointer',
                      boxShadow: '0 4px 10px rgba(0,0,0,0.03)',
                      transition: 'all 0.3s ease',
                      height: '96px'
                    }}
                    variants={{
                      hover: { 
                        x: 8, 
                        borderColor: "#2B8A7E",
                        boxShadow: '0 12px 24px rgba(43, 138, 126, 0.08)' 
                      }
                    }}
                  >
                    <motion.div 
                      variants={{
                        hover: { scale: 1.15, rotate: 10, backgroundColor: '#2B8A7E', color: '#FFFFFF' }
                      }}
                      style={{ 
                        width: '52px', 
                        height: '52px', 
                        backgroundColor: '#E9F5F3', 
                        borderRadius: '14px', 
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'center', 
                        flexShrink: 0, 
                        color: '#2B8A7E',
                        transition: 'all 0.3s ease'
                      }}
                    >
                      {Icon && <Icon size={24} />}
                    </motion.div>
                    <div>
                      <motion.h4 
                        variants={{ hover: { color: '#2B8A7E' } }}
                        style={{ fontSize: '15px', fontWeight: '700', marginBottom: '4px', color: '#1B2B3A', fontFamily: 'var(--font-montserrat)' }}
                      >
                        {item.title}
                      </motion.h4>
                      <p style={{ fontSize: '12px', lineHeight: '18px', color: '#6B7A8F', fontFamily: 'var(--font-opensans)', fontWeight: '400' }}>{item.desc}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default TrustedPartner;
