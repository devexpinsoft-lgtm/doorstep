/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React from "react";
import { motion } from "framer-motion";
import { TreePine, Sparkles, Droplets, Zap, Scissors } from "lucide-react";

interface FutureServiceCardProps {
  service: any;
}

const MotionIconMap: { [key: string]: any } = {
  Tree: motion(TreePine),
  Sparkles: motion(Sparkles),
  Droplets: motion(Droplets),
  Zap: motion(Zap),
  Scissors: motion(Scissors),
};

const DefaultMIcon = motion(TreePine);

const FutureServiceCard = ({ service }: FutureServiceCardProps) => {
  const MIcon = MotionIconMap[service.icon] || DefaultMIcon;

  return (
    <motion.div
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      className="ds-card"
      style={{
        display: 'flex',
        flexDirection: 'column',
        cursor: 'pointer'
      }}
      whileHover="hover"
    >
      {/* Image at Top */}
      <div style={{ width: '100%', overflow: 'hidden', backgroundColor: '#F9FAFB', position: 'relative' }}>
        {service.image ? (
          <motion.img
            variants={{
              hover: { scale: 1.1, filter: 'saturate(1.15) brightness(1.05)' }
            }}
            transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
            src={service.image}
            alt={service.title}
            style={{ width: '100%', height: 'auto', display: 'block' }}
          />
        ) : (
          <div style={{ width: '100%', height: '160px', backgroundColor: '#f3f4f6', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#9ca3af' }}>
            Image
          </div>
        )}
        {/* Shine Sweep */}
        <motion.div
          variants={{
            hover: { x: ['-100%', '200%'] }
          }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '60%',
            height: '100%',
            background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)',
            transform: 'skewX(-25deg)',
            zIndex: 2,
            pointerEvents: 'none'
          }}
        />
      </div>

      {/* Content Below */}
      <div style={{ padding: '32px 20px', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
        <MIcon 
          size={32}
          strokeWidth={2}
          initial={{ color: '#2B8A7E' }}
          variants={{
            hover: { y: -8, scale: 1.15, rotate: [0, -10, 10, 0], color: '#1B4FD8' }
          }}
          transition={{ duration: 0.4 }}
        />
        <div>
            <motion.h3 
              whileHover={{ y: -2 }}
              style={{ 
                fontSize: '16px', 
                fontWeight: '700', 
                color: 'var(--secondary)', 
                marginBottom: '6px', 
                fontFamily: 'var(--font-montserrat)',
                lineHeight: '20px',
                cursor: 'default',
                display: 'inline-block'
              }}>
              {service.title}
            </motion.h3>
          <motion.p 
            variants={{
              hover: { color: '#2B8A7E', scale: 1.05 }
            }}
            style={{
              color: 'var(--primary)',
              fontSize: '12px',
              fontWeight: '700',
              fontFamily: 'var(--font-montserrat)',
              lineHeight: '16px',
              transition: 'all 0.3s ease'
            }}
          >
            {service.price}
          </motion.p>
        </div>
      </div>
    </motion.div>
  );
};

export default FutureServiceCard;
