"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { TreePine, Sparkles, Check, Droplets, Zap, Scissors, ArrowRight } from "lucide-react";

interface ServiceRowProps {
  service: any;
  index: number;
}

const MotionIconMap: { [key: string]: any } = {
  Tree: motion(TreePine),
  Sparkles: motion(Sparkles),
  Droplets: motion(Droplets),
  Zap: motion(Zap),
  Scissors: motion(Scissors),
};

const DefaultMIcon = motion(TreePine);

const ServiceRow = ({ service, index }: ServiceRowProps) => {
  const MIcon = MotionIconMap[service.icon] || DefaultMIcon;
  const isEven = index % 2 === 0;
  const sectionRef = React.useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const rotate = useTransform(scrollYProgress, [0, 1], [isEven ? -1 : 1, isEven ? 1 : -1]);

  return (
    <section
      ref={sectionRef}
      id={service.id}
      style={{
        padding: '80px 0',
        backgroundColor: service.bgColor || "white",
        width: '100%',
        overflow: 'hidden'
      }}
    >
      <div className="ds-container">
        <div style={{
          display: 'flex',
          flexDirection: isEven ? 'row' : 'row-reverse',
          alignItems: 'center',
          gap: '100px',
          flexWrap: 'wrap'
        }}>
          {/* Image Container - Larger (60%) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{
              flex: '1.6',
              minWidth: '360px',
              position: 'relative',
              y,
              rotate
            }}
          >
            <motion.div 
              whileHover="hover"
              style={{
                position: 'relative',
                aspectRatio: '1.6',
                borderRadius: '24px',
                overflow: 'hidden',
                boxShadow: '0 20px 50px rgba(0,0,0,0.1)',
                backgroundColor: 'transparent',
                cursor: 'pointer'
              }}
              variants={{
                hover: { 
                  scale: 1.02, 
                  boxShadow: '0 30px 60px rgba(0,0,0,0.15)',
                }
              }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              {service.image ? (
                <motion.div
                  style={{ width: '100%', height: '100%' }}
                  variants={{
                    hover: { filter: 'saturate(1.1) brightness(1.05)' }
                  }}
                  transition={{ duration: 0.5 }}
                >
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    style={{ objectFit: 'cover', transform: 'scale(1.01)' }}
                  />
                </motion.div>
              ) : (
                <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#cbd5e1' }}>
                  Image Placeholder
                </div>
              )}
              {/* Premium Shine Effect */}
              <motion.div
                variants={{
                  hover: { x: ['-100%', '200%'] }
                }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '50%',
                  height: '100%',
                  background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)',
                  transform: 'skewX(-25deg)',
                  zIndex: 2,
                  pointerEvents: 'none'
                }}
              />
            </motion.div>
          </motion.div>

          {/* Content Container - Smaller (40%) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{
              flex: '1',
              minWidth: '320px'
            }}
          >
            <motion.div
              whileHover="hover"
              style={{
                width: '44px',
                height: '44px',
                backgroundColor: '#E6F4F1',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '28px',
                color: '#2B8A7E',
                cursor: 'pointer'
              }}
            >
              <MIcon
                size={24}
                initial={{ fill: 'rgba(43, 138, 126, 0)' }}
                variants={{
                  hover: { fill: 'rgba(43, 138, 126, 1)', scale: 1.1, rotate: 10 }
                }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
            <motion.h2 
              whileHover={{ y: -3, textShadow: '0 0 15px rgba(43, 138, 126, 0.3)', color: '#1B2B3A' }}
              style={{
                fontSize: '28px',
                fontWeight: '700',
                color: '#1B2B3A',
                marginBottom: '16px',
                fontFamily: 'var(--font-montserrat)',
                cursor: 'default',
                display: 'inline-block',
                transition: 'text-shadow 0.3s ease'
              }}
            >
              {service.title}
            </motion.h2>
            <p style={{
              fontSize: '15px',
              color: '#6B7A8F',
              marginBottom: '24px',
              maxWidth: '400px',
              lineHeight: '1.6',
              fontFamily: 'var(--font-opensans)',
              fontWeight: '400'
            }}>
              {service.description}
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '16px', marginBottom: '32px' }}>
              {service.features.map((feature: string, idx: number) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * idx }}
                  style={{ display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer' }}
                  whileHover="hover"
                >
                  <motion.div 
                    variants={{
                      hover: { scale: 1.15, rotate: 10, backgroundColor: '#2B8A7E', color: '#FFFFFF' }
                    }}
                    style={{
                      width: '24px',
                      height: '24px',
                      borderRadius: '50%',
                      border: '1.5px solid #2B8A7E',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#2B8A7E',
                      flexShrink: 0,
                      transition: 'all 0.3s ease'
                    }}
                  >
                    <Check size={14} strokeWidth={3} />
                  </motion.div>
                  <span style={{
                    fontWeight: '400',
                    color: '#4B5563',
                    fontFamily: 'var(--font-opensans)',
                    fontSize: '15px'
                  }}>{feature}</span>
                </motion.div>
              ))}
            </div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              style={{ display: 'inline-block' }}
            >
              <Link
                href={service.buttonLink}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
                  justifyContent: 'center',
                  backgroundColor: '#2B8A7E',
                  color: 'white',
                  padding: '14px 32px',
                  borderRadius: '10px',
                  fontWeight: '600',
                  textDecoration: 'none',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  fontSize: '15px',
                  fontFamily: 'var(--font-montserrat)',
                  boxShadow: '0 10px 25px rgba(43, 138, 126, 0.25)'
                }}
              >
                {service.buttonText}
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                >
                  <ArrowRight size={18} />
                </motion.span>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServiceRow;
