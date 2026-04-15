"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import homeData from "../data/home.json";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const { links, cta } = homeData.navbar;

  return (
    <nav 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: '88px',
        zIndex: 1000,
        backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.9)' : 'transparent',
        backdropFilter: isScrolled ? 'blur(10px)' : 'none',
        transition: 'all 0.3s ease',
        borderBottom: isScrolled ? '1px solid #D9E2EC' : 'none'
      }}
    >
      <div className="ds-container ds-flex ds-justify-between ds-items-center" style={{ height: '100%', position: 'relative' }}>
        
        {/* Logo */}
        <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
          <motion.div 
            whileHover={{ scale: 1.05 }}
            style={{ 
              fontSize: '24px', 
              fontWeight: '800', 
              color: 'var(--primary)', 
              fontFamily: 'var(--font-montserrat)',
              marginTop: '10px'
            }}
          >
            Doorstep
          </motion.div>
        </Link>

        {/* Centered Nav Links from JSON */}
        <div style={{ 
          position: 'absolute', 
          left: '50%', 
          top: '50%', 
          transform: 'translate(-50%, -50%)', 
          display: 'flex', 
          gap: '32px',
          fontFamily: 'var(--font-montserrat)',
          fontWeight: '500', 
          color: '#374151',
          marginTop: '10px'
        }}>
          {links.map((link) => (
            <Link key={link.name} href={link.href} style={{ textDecoration: 'none', position: 'relative' }}>
              <motion.span
                whileHover={{ color: 'var(--primary)' }}
                style={{ 
                  fontSize: link.size, 
                  color: '#374151', 
                  transition: 'color 0.3s ease' 
                }}
              >
                {link.name}
              </motion.span>
              <motion.div 
                className="ds-absolute ds-bottom-[-10px] ds-left-0 ds-right-0 ds-h-[2px] ds-bg-[#2B8A7E]"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
              />
            </Link>
          ))}
        </div>

        {/* Right Nav Action from JSON */}
        <motion.a
          href="/book"
          whileHover={{ scale: 1.05, boxShadow: "0 4px 10px rgba(43, 138, 126, 0.2)" }}
          whileTap={{ scale: 0.95 }}
          style={{
            backgroundColor: 'var(--primary)',
            color: 'white',
            padding: '8px 20px',
            borderRadius: '6px',
            fontSize: '14px',
            fontWeight: '600',
            fontFamily: 'var(--font-opensans)',
            textDecoration: 'none',
            boxShadow: '0px 1px 6px rgba(0, 0, 0, 0.15)',
            marginTop: '10px'
          }}
        >
          {cta}
        </motion.a>
      </div>
    </nav>
  );
};

export default Navbar;
