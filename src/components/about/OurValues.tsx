/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React from "react";
import { ShieldCheck, Heart, Zap } from "lucide-react";
import { motion } from "framer-motion";
import aboutData from "../../data/about.json";
import FeatureCard from "../ui/FeatureCard";

const iconMap: any = {
  ShieldCheck,
  Heart,
  Zap
};

const OurValues = () => {
  const { title, description, list } = aboutData.values;

  return (
    <section className="ds-section" style={{ backgroundColor: 'white', padding: '100px 0' }}>
      <div className="ds-container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <motion.h2 
             initial={{ opacity: 0, y: 15 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             whileHover={{ y: -3, textShadow: '0 0 20px rgba(43, 138, 126, 0.3)' }}
             style={{ 
               fontSize: '30px', 
               fontWeight: '700', 
               color: '#1A1A1A', 
               fontFamily: 'var(--font-montserrat)',
               lineHeight: '42px',
               marginBottom: '8px',
               cursor: 'default',
               display: 'inline-block'
             }}>
            {title}
          </motion.h2>
          <motion.p 
             initial={{ opacity: 0, y: 15 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.1 }}
             style={{ 
               fontSize: '14px', 
               color: '#4B4B4B', 
               fontFamily: 'var(--font-montserrat)',
               fontWeight: '400',
               lineHeight: '20px'
             }}>
            {description}
          </motion.p>
        </div>

        {/* Values Grid */}
        <div className="ds-grid-3" style={{ maxWidth: '1100px', margin: '0 auto' }}>
          {list.map((val, idx) => (
            <FeatureCard
              key={idx}
              icon={iconMap[val.icon]}
              title={val.title}
              description={val.desc}
              delay={idx * 0.1}
              variant="solid"
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default OurValues;
