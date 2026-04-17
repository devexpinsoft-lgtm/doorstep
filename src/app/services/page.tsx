"use client";
import React from "react";
import { motion } from "framer-motion";
import servicesData from "@/data/services.json";
import CTA from "@/components/home/CTA";
import ServiceRow from "@/components/services/ServiceRow";
import FutureServiceCard from "@/components/services/FutureServiceCard";

export default function ServicesPage() {
  const { header, mainServices, futureServices } = servicesData;

  return (
    <main style={{ paddingTop: '74px', minHeight: '100vh', backgroundColor: '#F9F9F7', overflowX: 'hidden' }}>
      {/* Header Section */}
      <section style={{ padding: '60px 16px 40px', textAlign: 'center' }}>
        <div className="ds-container" style={{ maxWidth: '800px' }}>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            style={{ 
              display: 'inline-flex',
              padding: '6px 18px',
              backgroundColor: '#E6F4F1',
              color: '#2B8A7E',
              borderRadius: '100px',
              fontSize: '11px',
              fontWeight: '800',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              marginBottom: '12px',
              fontFamily: 'var(--font-montserrat)'
            }}
          >
            {header.badge}
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            whileHover={{ y: -5, textShadow: '0 0 20px rgba(43, 138, 126, 0.4)' }}
            style={{ 
              fontSize: 'clamp(2.5rem, 10vw, 4rem)', 
              fontWeight: '900', 
              color: '#1B2B3A', 
              marginBottom: '16px', 
              fontFamily: 'var(--font-montserrat)', 
              letterSpacing: '-2.5px',
              lineHeight: '1.05',
              cursor: 'default',
            }}
          >
            Our <span style={{ color: '#2B8A7E' }}>Focus</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            style={{ 
              fontSize: '18px', 
              color: '#556677', 
              maxWidth: '680px', 
              margin: '0 auto', 
              lineHeight: '1.6', 
              fontWeight: '500',
              fontFamily: 'var(--font-opensans)',
              letterSpacing: '-0.2px'
            }}
          >
            {header.description}
          </motion.p>
        </div>
      </section>

      {/* Main Services Rows */}
      {mainServices.map((service, index) => (
        <ServiceRow key={service.id} service={service} index={index} />
      ))}

      {/* Future Services */}
      <section style={{ padding: '120px 16px', backgroundColor: 'white' }}>
        <div className="ds-container">
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              style={{ 
                display: 'inline-flex',
                padding: '6px 18px',
                backgroundColor: '#E6F4F1',
                color: '#2B8A7E',
                borderRadius: '100px',
                fontSize: '11px',
                fontWeight: '800',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                marginBottom: '20px',
                fontFamily: 'var(--font-montserrat)'
              }}
            >
              {futureServices.badge}
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              whileHover={{ y: -4, textShadow: '0 0 15px rgba(43, 138, 126, 0.3)' }}
              style={{ 
                fontSize: 'clamp(2.5rem, 8vw, 3.5rem)', 
                fontWeight: '900', 
                color: '#1B2B3A', 
                marginBottom: '24px', 
                fontFamily: 'var(--font-montserrat)', 
                letterSpacing: '-2px',
                lineHeight: '1.1',
                cursor: 'default'
              }}
            >
              Future <span style={{ color: '#2B8A7E' }}>Services</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              style={{ 
                fontSize: '18px', 
                color: '#556677', 
                maxWidth: '640px', 
                margin: '0 auto', 
                lineHeight: '1.6',
                fontWeight: '500',
                fontFamily: 'var(--font-opensans)'
              }}
            >
              {futureServices.description}
            </motion.p>
          </div>

          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
            gap: '32px',
            maxWidth: '1100px',
            margin: '0 auto'
          }}>
            {futureServices.services.map((service: any, index: number) => (
              <FutureServiceCard key={index} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTA />
    </main>
  );
}
