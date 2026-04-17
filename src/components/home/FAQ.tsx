"use client";
import React from "react";
import Accordion from "../ui/Accordion";
import { motion } from "framer-motion";
import homeData from "../../data/home.json";

const FAQ = () => {
  const { badge, items } = homeData.faq;

  return (
    <section className="ds-section" id="faq" style={{ backgroundColor: '#F9FBFC', padding: '100px 0' }}>
      <div className="ds-container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        
        {/* Centered Pill Badge and Heading Forced Centering */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ 
            textAlign: 'center', 
            marginBottom: '64px',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}
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
          <h2 style={{ 
            fontSize: '30px', 
            fontWeight: '700', 
            lineHeight: '36px', 
            marginBottom: '16px', 
            fontFamily: 'var(--font-montserrat)', 
            color: '#1B2B3A',
            textAlign: 'center'
          }}>
            Frequently Asked <span style={{ color: 'var(--primary)' }}>Questions</span>
          </h2>
        </motion.div>
        
        {/* Accordion List Centered */}
        <div style={{ width: '100%', maxWidth: '800px', margin: '0 auto' }}>
          <Accordion items={items} />
        </div>
      </div>
    </section>
  );
};

export default FAQ;
