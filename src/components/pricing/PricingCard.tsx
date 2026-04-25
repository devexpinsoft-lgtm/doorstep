"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { Trees, Sparkles, Check } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

const MotionIconMap: Record<string, any> = {
  Tree: motion(Trees),
  Sparkles: motion(Sparkles),
};

const DefaultMIcon = motion(Trees);

interface PricingPlan {
  title: string;
  icon: string;
  subtitle: string;
  basePrice: string;
  table: Array<{ label: string; price: string }>;
  includes: string[];
}

interface PricingCardProps {
  plan: PricingPlan;
  index: number;
}

const PricingCard = ({ plan, index }: PricingCardProps) => {
  const MIcon = MotionIconMap[plan.icon] || DefaultMIcon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.2, duration: 0.6 }}
      whileHover="hover"
      className="ds-card"
      style={{
        padding: '48px',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        cursor: 'default'
      }}
      variants={{
        hover: { 
          y: -15, 
          boxShadow: '0 40px 80px rgba(43, 138, 126, 0.15)',
          borderColor: '#2B8A7E'
        }
      }}
    >
      {/* Header */}
      <div style={{ marginBottom: '32px' }}>
        <motion.div
          variants={{
            hover: { backgroundColor: '#2B8A7E', color: 'white', scale: 1.1, rotate: 5 }
          }}
          style={{
            width: '48px',
            height: '48px',
            backgroundColor: 'rgba(43, 138, 126, 0.1)',
            borderRadius: '12px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#2B8A7E',
            marginBottom: '24px',
            transition: 'all 0.3s ease',
            border: '1px solid rgba(43, 138, 126, 0.2)'
          }}
        >
          <MIcon 
            size={24} 
            initial={{ fill: 'rgba(43, 138, 126, 0)' }}
            variants={{ hover: { fill: 'white' } }}
          />
        </motion.div>
        
        <motion.h3 
          variants={{ hover: { color: '#2B8A7E' } }}
          style={{ 
            fontSize: '18px', 
            fontWeight: '700', 
            color: 'var(--secondary)', 
            fontFamily: 'var(--font-montserrat)',
            marginBottom: '8px',
            lineHeight: '22px'
          }}
        >
          {plan.title}
        </motion.h3>
        
        <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px' }}>
          <span style={{ fontSize: '13px', color: '#6B7A8F', fontFamily: 'var(--font-opensans)', fontWeight: '400' }}>{plan.subtitle}</span>
          <span style={{ fontSize: '20px', fontWeight: '600', color: '#1B2B3A', fontFamily: 'var(--font-montserrat)' }}>{plan.basePrice}</span>
        </div>
      </div>

      {/* Pricing Table */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '32px' }}>
        {plan.table.map((row, i) => (
          <motion.div 
            key={i}
            whileHover={{ scale: 1.02, backgroundColor: '#F9FAFB' }}
            style={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'center', 
              padding: '8px 16px', 
              backgroundColor: '#F4F7FB', 
              borderRadius: '6px',
              transition: 'all 0.2s ease'
            }}
          >
            <span style={{ fontSize: '13px', fontWeight: '700', color: '#2B8A7E', fontFamily: 'var(--font-montserrat)' }}>{row.price}</span>
          </motion.div>
        ))}
      </div>

      {/* Includes Checklist */}
      <div style={{ flex: 1, marginBottom: '32px' }}>
        <p style={{ fontSize: '11px', fontWeight: '700', color: '#6B7A8F', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '16px', fontFamily: 'var(--font-opensans)' }}>Includes</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {plan.includes.map((item: string, i: number) => (
            <motion.div 
              key={i}
              style={{ display: 'flex', alignItems: 'center', gap: '10px' }}
              whileHover="itemHover"
            >
                <motion.div
                  variants={{
                    itemHover: { backgroundColor: '#2B8A7E', color: 'white', scale: 1.1 }
                  }}
                  style={{ 
                    width: '20px', 
                    height: '20px', 
                    borderRadius: '50%', 
                    border: '1.5px solid #2B8A7E', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    color: '#2B8A7E',
                    transition: 'all 0.2s ease'
                  }}
                >
                  <Check size={12} strokeWidth={4} />
                </motion.div>
                  <motion.span 
                    variants={{ itemHover: { color: '#2B8A7E', x: 4 } }}
                    style={{ fontSize: '14px', color: 'var(--secondary)', fontFamily: 'var(--font-montserrat)', fontWeight: '500', transition: 'all 0.2s ease', lineHeight: '20px' }}
                  >
                    {item}
                  </motion.span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Button wrapped in Link */}
      <Link href="/book" style={{ textDecoration: 'none' }}>
        <motion.button
          whileHover={{ scale: 1.05, boxShadow: '0 10px 20px rgba(43, 138, 126, 0.2)' }}
          whileTap={{ scale: 0.98 }}
          style={{
            width: '100%',
            padding: '16px',
            background: 'linear-gradient(135deg, #2B8A7E 0%, #1B4FD8 100%)',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            fontSize: '16px',
            fontWeight: '700',
            fontFamily: 'var(--font-montserrat)',
            cursor: 'pointer',
            transition: 'all 0.3s ease'
          }}
        >
          Book Now
        </motion.button>
      </Link>
    </motion.div>
  );
};

export default PricingCard;
