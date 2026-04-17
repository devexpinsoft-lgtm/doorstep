"use client";
import React from "react";
import { motion } from "framer-motion";
import { ClipboardCheck } from "lucide-react";
import providerData from "../../data/providers.json";
import FeatureCard from "../ui/FeatureCard";

const ProviderSteps = () => {
  const { title, highlight, steps } = providerData.howItWorks;

  return (
    <section className="ds-section" style={{ backgroundColor: '#F8FAFC', padding: '40px 0 100px 0' }}>
      <div className="ds-container">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ textAlign: 'center', marginBottom: '72px' }}
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

        {/* Steps Grid - Using FeatureCard ghost variant */}
        <div className="ds-grid-3" style={{ maxWidth: '1200px', margin: '0 auto' }}>
          {steps.map((step, idx) => (
            <FeatureCard
              key={idx}
              icon={ClipboardCheck}
              title={`${step.step}: ${step.title}`}
              description={step.desc}
              variant="ghost"
              delay={idx * 0.15}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProviderSteps;
