"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import Image from "next/image";
import homeData from "../data/home.json";

const Navbar = () => {
  const pathname = usePathname();

  const { links, cta } = homeData.navbar;

  return (
    <nav 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: '68px',
        zIndex: 1000,
        backgroundColor: 'rgba(255, 255, 255, 1)',
        backdropFilter: 'blur(10px)',
        transition: 'all 0.3s ease',
        borderBottom: '1px solid #D9E2EC'
      }}
    >
      <div className="ds-container ds-flex ds-justify-between ds-items-center" style={{ height: '100%', position: 'relative' }}>
        
        {/* Logo */}
        <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
          <motion.div 
            whileHover={{ scale: 1.05 }}
            style={{ display: 'flex', alignItems: 'center' }}
          >
            <Image 
              src="/logo_cropped.png" 
              alt="Doorstep Logo" 
              width={90} 
              height={90}
              style={{ objectFit: 'contain' }}
              priority
            />
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
          fontWeight: '500'
        }}>
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link key={link.name} href={link.href} style={{ textDecoration: 'none', position: 'relative' }}>
                <motion.span
                  whileHover={{ color: '#2B8A7E' }}
                  style={{ 
                    fontSize: link.size, 
                    color: isActive ? '#2B8A7E' : '#374151', 
                    transition: 'color 0.3s ease' 
                  }}
                >
                  {link.name}
                </motion.span>
                <motion.div 
                  className="ds-absolute ds-bottom-[-10px] ds-left-0 ds-right-0 ds-h-[2px] ds-bg-[#2B8A7E]"
                  initial={{ scaleX: isActive ? 1 : 0 }}
                  animate={{ scaleX: isActive ? 1 : 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </Link>
            );
          })}
        </div>

        {/* Right Nav Action from JSON */}
        <motion.a
          href="/book"
          whileHover={{ scale: 1.05, boxShadow: "0 4px 10px rgba(43, 138, 126, 0.2)" }}
          whileTap={{ scale: 0.95 }}
          style={{
            backgroundColor: '#2B8A7E',
            color: 'white',
            padding: '8px 20px',
            borderRadius: '6px',
            fontSize: '14px',
            fontWeight: '600',
            fontFamily: 'var(--font-opensans)',
            textDecoration: 'none',
            boxShadow: '0px 1px 6px rgba(0, 0, 0, 0.15)'
          }}
        >
          {cta}
        </motion.a>
      </div>
    </nav>
  );
};

export default Navbar;
