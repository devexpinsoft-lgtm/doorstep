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
  const { badge, title, description, stats, benefits } = homeData.trustedPartner;

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
            <h2 style={{ fontSize: '30px', fontWeight: '700', lineHeight: '36px', marginBottom: '16px', fontFamily: 'var(--font-montserrat)', color: '#1B2B3A' }}>
              {title}
            </h2>
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
              style={{ borderRadius: '20px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}
            >
              <Image 
                src="/images/image%2019.png" 
                alt="Modern living room interior" 
                width={537} 
                height={213}
                style={{ width: '100%', height: 'auto', display: 'block' }}
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
                    whileHover={{ x: 5, backgroundColor: "#FFFFFF", borderColor: "var(--primary)" }}
                    style={{ 
                      backgroundColor: 'white', 
                      border: '1px solid #E0E5EB', 
                      borderRadius: '8px', 
                      padding: '24px', 
                      display: 'flex', 
                      alignItems: 'center', 
                      gap: '24px',
                      cursor: 'default',
                      boxShadow: '0 4px 10px rgba(0,0,0,0.03)',
                      transition: 'all 0.2s ease',
                      height: '84px'
                    }}
                  >
                    <div style={{ width: '48px', height: '48px', backgroundColor: '#E9F5F3', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, color: 'var(--primary)' }}>
                      {Icon && <Icon size={20} />}
                    </div>
                    <div>
                      <h4 style={{ fontSize: '14px', fontWeight: '600', marginBottom: '4px', color: '#1B2B3A', fontFamily: 'var(--font-montserrat)' }}>{item.title}</h4>
                      <p style={{ fontSize: '11px', lineHeight: '16px', color: '#6B7A8F', fontFamily: 'var(--font-opensans)', fontWeight: '400' }}>{item.desc}</p>
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
