"use client";
import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface AccordionItem {
  question: string;
  answer: string;
}

interface AccordionProps {
  items: AccordionItem[];
}

const Accordion = ({ items }: AccordionProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const [isHovered, setIsHovered] = useState(false);

        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{
              backgroundColor: "white",
              borderRadius: "8px",
              overflow: "hidden",
              boxShadow: isHovered || isOpen ? "0 10px 25px rgba(43, 138, 126, 0.08)" : "0 4px 6px rgba(0,0,0,0.02)",
              transition: "all 0.3s cubic-bezier(0.165, 0.84, 0.44, 1)",
              position: 'relative'
            }}
          >
            {/* Restoring the Old Focus Indicator Effect */}
            <motion.div 
              animate={{ width: isOpen || isHovered ? '6px' : '0px' }}
              style={{ 
                position: 'absolute', 
                top: 0, 
                bottom: 0, 
                left: 0, 
                backgroundColor: 'var(--primary)', 
                zIndex: 2 
              }}
            />

            <button
              onClick={() => setOpenIndex(isOpen ? null : index)}
              style={{
                width: "100%",
                padding: "20px 24px 20px 32px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                background: "none",
                border: "none",
                cursor: "pointer",
                textAlign: "left",
                outline: "none"
              }}
            >
              <span
                style={{
                  fontSize: "14px",
                  fontWeight: "600",
                  color: isHovered || isOpen ? "var(--primary)" : "#2B8A7E",
                  fontFamily: "var(--font-opensans)",
                  transition: "all 0.3s ease",
                  lineHeight: '20px'
                }}
              >
                {item.question}
              </span>
              <motion.div
                animate={{ 
                  rotate: isOpen ? 180 : 0,
                  color: isHovered || isOpen ? "var(--primary)" : "#2B8A7E"
                }}
                transition={{ duration: 0.3 }}
              >
                <ChevronDown size={18} />
              </motion.div>
            </button>

            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                >
                  <div
                    style={{
                      padding: "0 24px 24px 32px",
                      fontSize: "14px",
                      lineHeight: "1.6",
                      color: "#6B7A8F",
                      fontFamily: "var(--font-opensans)",
                    }}
                  >
                    {item.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        );
      })}
    </div>
  );
};

export default Accordion;
