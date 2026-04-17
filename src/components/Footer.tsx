"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Mail, Phone, Clock } from "lucide-react";

const quickLinks = [
  { name: "Book a Service", href: "/book" },
  { name: "How It Works", href: "/#how-it-works" },
  { name: "About Us", href: "/about" },
  { name: "Testimonials", href: "/#testimonials" },
  { name: "FAQ", href: "/#faq" }
];

const serviceLinks = [
  { name: "Lawn Care", href: "/services#lawn-care" },
  { name: "House Cleaning", href: "/services#home-cleaning" },
  { name: "Pricing Plans", href: "/pricing" },
  { name: "Become a Provider", href: "/providers" }
];

const Footer = () => {
  return (
    <footer style={{ backgroundColor: "#FFFFFF", padding: "80px 0 32px 0", borderTop: "1px solid #D9E2EC" }}>
      <div className="ds-container">
        <div style={{ display: "grid", gridTemplateColumns: "1.2fr 0.8fr 0.8fr 1.2fr", gap: "48px", marginBottom: "80px" }}>
          
          {/* Brand Column */}
          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            <Link href="/" style={{ textDecoration: "none" }}>
              <Image 
                src="/images/doorstep-logo.png" 
                alt="Doorstep Logo" 
                width={120} 
                height={32} 
                style={{ height: 'auto', width: '120px' }}
                priority
              />
            </Link>
            <p style={{ fontSize: "14px", lineHeight: "1.6", color: "#6B7A8F", fontFamily: "var(--font-opensans)", maxWidth: "260px", fontWeight: "400" }}>
              Your trusted partner for home services. Vetted professionals, transparent pricing, guaranteed satisfaction.
            </p>
          </div>

          {/* Quick Links */}
          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            <h4 style={{ fontSize: "14px", fontWeight: "600", color: "#1B2B3A", fontFamily: "var(--font-opensans)" }}>
              Quick Links
            </h4>
            <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "12px" }}>
              {quickLinks.map((link, i) => (
                <li key={i}>
                  <Link href={link.href} style={{ fontSize: "14px", color: "#6B7A8F", textDecoration: "none", fontFamily: "var(--font-opensans)", transition: "color 0.2s ease", fontWeight: "400", lineHeight: "20px" }}>
                    <motion.span whileHover={{ x: 5, color: "#2B8A7E" }}>{link.name}</motion.span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            <h4 style={{ fontSize: "14px", fontWeight: "600", color: "#1B2B3A", fontFamily: "var(--font-opensans)" }}>
              Our Platform
            </h4>
            <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "12px" }}>
              {serviceLinks.map((link, i) => (
                <li key={i}>
                  <Link href={link.href} style={{ fontSize: "14px", color: "#6B7A8F", textDecoration: "none", fontFamily: "var(--font-opensans)", transition: "color 0.2s ease", fontWeight: "400", lineHeight: "20px" }}>
                    <motion.span whileHover={{ x: 5, color: "#2B8A7E" }}>{link.name}</motion.span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            <h4 style={{ fontSize: "14px", fontWeight: "600", color: "#1B2B3A", fontFamily: "var(--font-opensans)" }}>
              Contact Us
            </h4>
            <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "14px" }}>
              <li style={{ display: "flex", alignItems: "center", gap: "10px", color: "#6B7A8F", fontSize: "14px", fontFamily: "var(--font-opensans)", fontWeight: "400", lineHeight: "20px" }}>
                <Mail size={14} color="#6B7A8F" />
                <motion.a href="mailto:support@doorstep.com" whileHover={{ color: "#2B8A7E" }} style={{ textDecoration: "none", color: "inherit" }}>
                   support@doorstep.com
                </motion.a>
              </li>
              <li style={{ display: "flex", alignItems: "center", gap: "10px", color: "#6B7A8F", fontSize: "14px", fontFamily: "var(--font-opensans)", fontWeight: "400", lineHeight: "20px" }}>
                <Phone size={14} color="#6B7A8F" />
                <motion.a href="tel:1231234567" whileHover={{ color: "#2B8A7E" }} style={{ textDecoration: "none", color: "inherit" }}>
                   (123) 123-4567
                </motion.a>
              </li>
              <li style={{ display: "flex", alignItems: "center", gap: "10px", color: "#6B7A8F", fontSize: "14px", fontFamily: "var(--font-opensans)", fontWeight: "400", lineHeight: "20px" }}>
                <Clock size={14} color="#6B7A8F" />
                <span>Available Nationwide</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={{ borderTop: "1px solid #D9D9D9", paddingTop: "24px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "20px" }}>
          <p style={{ fontSize: "12px", color: "#A1B0BD", fontFamily: "var(--font-opensans)", fontWeight: "400" }}>
            © 2026 Doorstep. All rights reserved.
          </p>
          <div style={{ display: "flex", gap: "32px" }}>
            <Link href="/" style={{ fontSize: "12px", color: "#A1B0BD", textDecoration: "none", fontFamily: "var(--font-opensans)", transition: "color 0.2s ease" }}>
              <motion.span whileHover={{ color: "#2B8A7E" }}>Privacy Policy</motion.span>
            </Link>
            <Link href="/" style={{ fontSize: "12px", color: "#A1B0BD", textDecoration: "none", fontFamily: "var(--font-opensans)", transition: "color 0.2s ease" }}>
              <motion.span whileHover={{ color: "#2B8A7E" }}>Terms of Service</motion.span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
