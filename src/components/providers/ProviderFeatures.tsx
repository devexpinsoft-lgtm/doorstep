/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React from "react";
import { motion } from "framer-motion";
import { DollarSign, Calendar, Users, Star } from "lucide-react";
import providerData from "../../data/providers.json";
import FeatureCard from "../ui/FeatureCard";

const iconMap: any = {
  DollarSign,
  Calendar,
  Users,
  Star
};

const ProviderFeatures = () => {
  const { title, highlight, list } = providerData.features;

  return (
    <section className="ds-section" style={{ backgroundColor: 'white', padding: '100px 0 40px 0' }}>
      <div className="ds-container">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ textAlign: 'center', marginBottom: '64px' }}
        >
          <motion.h2 
            whileHover={{ y: -3, textShadow: '0 0 20px rgba(43, 138, 126, 0.3)' }}
            style={{ 
              fontSize: '26px', 
              fontWeight: '700', 
              fontFamily: 'var(--font-montserrat)', 
              color: '#1A1A1A', 
              cursor: 'default', 
              display: 'inline-block',
              lineHeight: '32px'
            }}>
            {title} <span style={{ color: '#2B8A7E' }}>{highlight}</span>
          </motion.h2>
        </motion.div>

        {/* Features Grid - Cleaned up to use common FeatureCard */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(4, 1fr)', 
          gap: '24px',
          justifyContent: 'center',
          maxWidth: '1100px',
          margin: '0 auto'
        }}>
          {list.map((feature, idx) => (
            <FeatureCard
              key={idx}
              icon={iconMap[feature.icon]}
              title={feature.title}
              description={feature.desc}
              delay={idx * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProviderFeatures;
