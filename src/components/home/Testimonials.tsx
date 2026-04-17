/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React from "react";
import { Star, Quote, ChevronLeft, ChevronRight, ShieldCheck, CreditCard, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import homeData from "../../data/home.json";
import Link from "next/link";
import Image from "next/image";

const Testimonials = () => {
  const { badge, title, highlight, description, list } = homeData.testimonials;
  const [activeIndex, setActiveIndex] = React.useState(0);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % list.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + list.length) % list.length);
  };

  return (
    <section className="ds-section" id="testimonials" style={{ backgroundColor: 'white', padding: '100px 0' }}>
      <div className="ds-container">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ textAlign: 'center', marginBottom: '80px' }}
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
            fontSize: '32px', 
            fontWeight: '700', 
            lineHeight: '40px', 
            marginBottom: '16px', 
            fontFamily: 'var(--font-montserrat)', 
            color: '#1B2B3A' 
          }}>
            {title} <span style={{ color: '#2B8A7E' }}>{highlight}</span>
          </h2>
          <p style={{ fontSize: '15px', color: '#6B7A8F', maxWidth: '600px', margin: '0 auto', fontFamily: 'var(--font-opensans)', fontWeight: '400' }}>
            {description}
          </p>
        </motion.div>

        {/* Mobile Carousel View */}
        <div className="mobile-carousel">
          <style jsx>{`
            .mobile-carousel {
              display: none;
              position: relative;
              width: 100%;
              max-width: 500px;
              margin: 0 auto;
              padding: 0 16px;
            }
            @media (max-width: 767px) {
              .mobile-carousel {
                display: block;
              }
              .desktop-grid {
                display: none !important;
              }
            }
            .carousel-controls {
              display: flex;
              justify-content: center;
              align-items: center;
              gap: 24px;
              margin-top: 32px;
            }
            .control-btn {
              width: 44px;
              height: 44px;
              border-radius: 50%;
              border: 1px solid #E5E7EB;
              background: white;
              display: flex;
              align-items: center;
              justify-content: center;
              cursor: pointer;
              transition: all 0.2s ease;
              color: #1B2B3A;
            }
            .control-btn:hover {
              border-color: #2B8A7E;
              color: #2B8A7E;
              box-shadow: 0 4px 12px rgba(43, 138, 126, 0.1);
            }
            .dot {
              width: 8px;
              height: 8px;
              border-radius: 50%;
              background: #E5E7EB;
              transition: all 0.3s ease;
            }
            .dot.active {
              background: #2B8A7E;
              width: 24px;
              border-radius: 4px;
            }
          `}</style>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              style={{
                backgroundColor: 'white',
                borderRadius: '24px',
                padding: '40px 24px',
                border: '1px solid #F1F5F9',
                boxShadow: '0 20px 40px rgba(0,0,0,0.04)',
                minHeight: '340px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
            >
              <div>
                <Quote size={40} color="#2B8A7E" fill="#2B8A7E" style={{ marginBottom: '24px', opacity: 0.15 }} />
                <div style={{ display: 'flex', gap: '4px', marginBottom: '20px' }}>
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill={i < list[activeIndex].stars ? "#2B8A7E" : "#E5E7EB"} color={i < list[activeIndex].stars ? "#2B8A7E" : "#E5E7EB"} />
                  ))}
                </div>
                <p style={{ fontSize: '16px', lineHeight: '1.7', color: '#374151', marginBottom: '32px', fontFamily: 'var(--font-opensans)' }}>
                  {list[activeIndex].content}
                </p>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '50%', backgroundColor: '#E9F5F3', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#2B8A7E', fontWeight: '700', fontSize: '18px' }}>
                  {list[activeIndex].initial}
                </div>
                <div>
                  <h4 style={{ fontSize: '16px', fontWeight: '700', color: '#1B2B3A', marginBottom: '2px' }}>{list[activeIndex].name}</h4>
                  <p style={{ fontSize: '13px', color: '#6B7A8F' }}>{list[activeIndex].role}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="carousel-controls">
            <button className="control-btn" onClick={prevSlide} aria-label="Previous">
              <ChevronLeft size={22} />
            </button>
            <div style={{ display: 'flex', gap: '8px' }}>
              {list.map((_, i) => (
                <div key={i} className={`dot ${i === activeIndex ? 'active' : ''}`} />
              ))}
            </div>
            <button className="control-btn" onClick={nextSlide} aria-label="Next">
              <ChevronRight size={22} />
            </button>
          </div>
        </div>

        <div className="desktop-grid">
          <style jsx>{`
            .desktop-grid {
              display: grid;
              grid-template-columns: repeat(3, 1fr);
              gap: 26px;
            }
            @media (max-width: 991px) {
              .desktop-grid {
                grid-template-columns: repeat(2, 1fr);
              }
            }
            @media (max-width: 767px) {
              .desktop-grid {
                display: none !important;
              }
            }
          `}</style>
          {list.map((testi: any, idx: number) => {
            return (
              <motion.div 
                key={idx} 
                className="testimonial-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                whileHover="hover"
                style={{ 
                  padding: '42px 34px', 
                  backgroundColor: 'white',
                  borderRadius: '24px',
                  border: '1px solid #F1F5F9',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.02)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                  cursor: 'default',
                  position: 'relative'
                }}
                variants={{
                  hover: { 
                    y: -10, 
                    borderColor: "#2B8A7E",
                    boxShadow: '0 20px 40px rgba(43, 138, 126, 0.1)' 
                  }
                }}
              >
                  {/* Visual Quote Icon */}
                  <motion.div
                    variants={{ hover: { color: '#2B8A7E', opacity: 1, scale: 1.1 } }}
                    style={{ position: 'absolute', top: '18px', right: '18px', color: '#F0F4F8', opacity: 0.4 }}
                  >
                    <Quote size={42} fill="currentColor" />
                  </motion.div>
  
                  <div>
                    <div style={{ display: 'flex', gap: '2px', marginBottom: '16px' }}>
                      {[...Array(testi.stars)].map((_, i) => (
                        <Star key={i} size={14} fill="#2B8A7E" color="#2B8A7E" />
                      ))}
                    </div>
  
                    <div style={{ flex: 1, width: '100%', minWidth: 0 }}>
                      <p style={{
                        fontSize: '14px',
                        lineHeight: '1.8',
                        color: '#4B5563',
                        marginBottom: '28px',
                        fontFamily: 'var(--font-opensans)',
                        fontWeight: '400',
                        whiteSpace: 'normal',
                        wordWrap: 'break-word',
                        width: '100%',
                        overflowWrap: 'break-word'
                      }}>
                        {testi.content}
                      </p>
                    </div>
                  </div>
  
                  <div className="ds-flex ds-items-center" style={{ gap: '12px' }}>
                    <motion.div
                      variants={{ hover: { backgroundColor: '#2B8A7E', color: '#FFFFFF', scale: 1.1 } }}
                      style={{
                        width: '32px',
                        height: '32px',
                        backgroundColor: '#E9F5F3',
                        color: '#2B8A7E',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontWeight: '700',
                        fontSize: '12px',
                        fontFamily: 'var(--font-montserrat)',
                        transition: 'all 0.3s ease'
                      }}>
                      {testi.initial}
                    </motion.div>
                    <div>
                      <h4
                        style={{ fontSize: '14px', fontWeight: '700', color: '#1B2B3A', fontFamily: 'var(--font-montserrat)', marginBottom: '0px' }}
                      >
                        {testi.name}
                      </h4>
                      <p style={{ fontSize: '11px', color: '#9CA3AF', fontFamily: 'var(--font-opensans)', fontWeight: '400' }}>{testi.role}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
      </div>
    </section>
  );
};

export default Testimonials;
