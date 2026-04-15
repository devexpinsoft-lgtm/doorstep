"use client";
import React from "react";
import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin, Github } from "lucide-react";
import { motion } from "framer-motion";
import homeData from "../data/home.json";

const Footer = () => {
  const { description, links, copyright } = homeData.footer;

  return (
    <footer style={{ backgroundColor: "#FFFFFF", padding: "80px 0 40px 0", borderTop: "1px solid #E5E7EB" }}>
      <div className="ds-container">
        <div style={{ display: "grid", gridTemplateColumns: "1.5fr repeat(3, 1fr) 1fr", gap: "48px", marginBottom: "64px" }}>
          
          {/* Brand Column */}
          <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            <Link href="/" style={{ textDecoration: "none" }}>
              <div style={{ fontSize: "24px", fontWeight: "800", color: "var(--primary)", fontFamily: "var(--font-montserrat)" }}>
                Doorstep
              </div>
            </Link>
            <p style={{ fontSize: "14px", lineHeight: "24px", color: "#6B7280", fontFamily: "var(--font-opensans)", maxWidth: "260px" }}>
              {description}
            </p>
            <div style={{ display: "flex", gap: "16px" }}>
              {[
                { icon: <Facebook size={20} />, href: "#" },
                { icon: <Twitter size={20} />, href: "#" },
                { icon: <Instagram size={20} />, href: "#" },
                { icon: <Linkedin size={20} />, href: "#" }
              ].map((social, idx) => (
                <motion.a
                  key={idx}
                  href={social.href}
                  whileHover={{ y: -3, color: "var(--primary)" }}
                  style={{ color: "#9CA3AF", transition: "color 0.2s ease" }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Nav Columns from JSON */}
          {links.map((column, idx) => (
            <div key={idx} style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
              <h4 style={{ fontSize: "14px", fontWeight: "700", color: "#111827", fontFamily: "var(--font-montserrat)", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                {column.title}
              </h4>
              <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "12px" }}>
                {column.items.map((item, i) => (
                  <li key={i}>
                    <Link 
                      href={item.href} 
                      style={{ 
                        fontSize: "14px", 
                        color: "#6B7280", 
                        textDecoration: "none", 
                        fontFamily: "var(--font-opensans)",
                        transition: "color 0.2s ease" 
                      }}
                    >
                      <motion.span whileHover={{ x: 3, color: "var(--primary)" }}>
                        {item.name}
                      </motion.span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Newsletter Column */}
          <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            <h4 style={{ fontSize: "14px", fontWeight: "700", color: "#111827", fontFamily: "var(--font-montserrat)", textTransform: "uppercase", letterSpacing: "0.05em" }}>
              Stay Updated
            </h4>
            <p style={{ fontSize: "13px", color: "#6B7280", fontFamily: "var(--font-opensans)", lineHeight: "20px" }}>
              Subscribe to get the latest news and offers.
            </p>
            <div style={{ display: "flex", gap: "8px" }}>
              <input 
                type="email" 
                placeholder="Email address" 
                style={{ 
                  flex: 1, 
                  padding: "10px 16px", 
                  borderRadius: "6px", 
                  border: "1px solid #E5E7EB", 
                  fontSize: "13px",
                  fontFamily: "var(--font-opensans)",
                  outline: "none"
                }} 
              />
              <button style={{ 
                backgroundColor: "var(--primary)", 
                color: "white", 
                border: "none", 
                padding: "10px 16px", 
                borderRadius: "6px", 
                cursor: "pointer",
                fontFamily: "var(--font-montserrat)",
                fontWeight: "600",
                fontSize: "13px"
              }}>
                Join
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar from JSON */}
        <div style={{ borderTop: "1px solid #F3F4F6", paddingTop: "40px", textAlign: "center" }}>
          <p style={{ fontSize: "12px", color: "#9CA3AF", fontFamily: "var(--font-opensans)" }}>
            {copyright}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
