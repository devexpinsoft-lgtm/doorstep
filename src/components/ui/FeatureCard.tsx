"use client";
import React from "react";
import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  variant?: "solid" | "ghost";
  primaryColor?: string;
  backgroundSecondary?: string;
  delay?: number;
  maxWidth?: string | number;
}

const FeatureCard = ({
  icon: Icon,
  title,
  description,
  variant = "solid",
  primaryColor = "#2B8A7E",
  backgroundSecondary = "#E9F5F3",
  delay = 0,
  maxWidth = "100%"
}: FeatureCardProps) => {
  const isGhost = variant === "ghost";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ 
        delay, 
        duration: 0.8, 
        ease: [0.22, 1, 0.36, 1] 
      }}
      whileHover="hover"
      style={{
        width: "100%",
        maxWidth: maxWidth,
        height: "auto",
        backgroundColor: isGhost ? "transparent" : "white",
        borderRadius: "24px",
        padding: "32px 24px",
        border: "1px solid",
        borderColor: isGhost ? "transparent" : "#F1F5F9",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        transition: "all 0.5s cubic-bezier(0.22, 1, 0.36, 1)",
        boxShadow: isGhost ? "none" : "0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)"
      }}
      variants={{
        hover: {
          y: -12,
          backgroundColor: "white",
          borderColor: primaryColor,
          boxShadow: "0 30px 60px -12px rgba(50, 50, 93, 0.08), 0 18px 36px -18px rgba(0, 0, 0, 0.1)"
        }
      }}
    >
      <div style={{ display: 'contents' }}>
        {/* Icon Container with snappy transition */}
        <motion.div 
          variants={{
            hover: { 
              backgroundColor: primaryColor, 
              color: "#FFFFFF",
              scale: 1.1,
              y: -5
            }
          }}
          style={{ 
            width: "60px", 
            height: "60px", 
            backgroundColor: backgroundSecondary, 
            borderRadius: "14px", 
            display: "flex", 
            alignItems: "center", 
            justifyContent: "center", 
            color: primaryColor,
            marginBottom: "20px",
            transition: "all 0.4s cubic-bezier(0.22, 1, 0.36, 1)",
            boxShadow: "inset 0 2px 4px 0 rgba(0, 0, 0, 0.02)"
          }}>
          <Icon size={28} strokeWidth={2.5} />
        </motion.div>
        
        {/* Text Content */}
        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          <h3 style={{ 
            fontSize: "18px", 
            fontWeight: "700", 
            fontFamily: "var(--font-montserrat)", 
            color: "#1B2B3A", 
            lineHeight: "24px",
            letterSpacing: "-0.5px"
          }}>
            {title}
          </h3>
          
          <p style={{ 
            fontSize: "14px", 
            lineHeight: "20px", 
            color: "#64748B", 
            fontFamily: "var(--font-opensans)", 
            maxWidth: "240px",
            fontWeight: "400"
          }}>
            {description}
          </p>
        </div>

        {/* Decorative Accent Expansion */}
        <motion.div 
          initial={{ width: 0 }}
          whileHover={{ width: "32px" }}
          transition={{ duration: 0.3 }}
          style={{ 
            height: "3px", 
            backgroundColor: primaryColor, 
            marginTop: "20px", 
            borderRadius: "10px",
            opacity: 0.6
          }} 
        />
      </div>
    </motion.div>
  );
};

export default FeatureCard;
