"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import homeData from "../data/home.json";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const { links, cta } = homeData.navbar;

  // Close menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Prevent scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  return (
    <>
      <nav 
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: '68px',
          zIndex: 1001,
          backgroundColor: 'rgba(255, 255, 255, 1)',
          backdropFilter: 'blur(10px)',
          transition: 'all 0.3s ease',
          borderBottom: '1px solid #D9E2EC'
        }}
      >
        <div className="ds-container ds-flex ds-justify-between ds-items-center" style={{ height: '100%', position: 'relative' }}>
          
          {/* Logo */}
          <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', zIndex: 1002 }}>
            <motion.div 
              whileHover={{ scale: 1.05 }}
              style={{ display: 'flex', alignItems: 'center' }}
            >
              <Image 
                src="/logo_cropped.png" 
                alt="Doorstep Logo" 
                width={80} 
                height={80}
                style={{ objectFit: 'contain' }}
                priority
              />
            </motion.div>
          </Link>

          {/* Desktop Nav Links */}
          <div className="ds-hide-mobile" style={{ 
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

          {/* Desktop Right Nav Action */}
          <div className="ds-hide-mobile">
            <motion.a
              href="/book"
              whileHover={{ scale: 1.05, boxShadow: "0 4px 10px rgba(43, 138, 126, 0.2)" }}
              whileTap={{ scale: 0.95 }}
              style={{
                backgroundColor: '#2B8A7E',
                color: 'white',
                padding: '8px 20px',
                borderRadius: '6px',
                fontSize: '16px', // Updated from 14px
                fontWeight: '600',
                fontFamily: 'var(--font-opensans)',
                textDecoration: 'none',
                boxShadow: '0px 1px 6px rgba(0, 0, 0, 0.15)'
              }}
            >
              {cta}
            </motion.a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="ds-show-mobile" style={{ zIndex: 1002 }}>
            <button 
              onClick={() => setIsOpen(!isOpen)}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
                gap: '6px',
                padding: '8px'
              }}
              aria-label="Toggle Menu"
            >
              <motion.span 
                animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                style={{ width: '24px', height: '2px', backgroundColor: '#374151', display: 'block' }}
              />
              <motion.span 
                animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                style={{ width: '24px', height: '2px', backgroundColor: '#374151', display: 'block' }}
              />
              <motion.span 
                animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                style={{ width: '24px', height: '2px', backgroundColor: '#374151', display: 'block' }}
              />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'white',
              zIndex: 1000,
              paddingTop: '100px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '24px'
            }}
          >
            {links.map((link, index) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 + index * 0.05 }}
              >
                <Link 
                  href={link.href}
                  style={{
                    fontSize: '20px', 
                    fontWeight: '500',
                    color: pathname === link.href ? '#2B8A7E' : '#1B2B3A',
                    fontFamily: 'var(--font-montserrat)',
                    textDecoration: 'none'
                  }}
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              style={{ marginTop: '20px', width: '80%' }}
            >
              <Link 
                href="/book"
                style={{
                  display: 'block',
                  textAlign: 'center',
                  backgroundColor: '#2B8A7E',
                  color: 'white',
                  padding: '16px',
                  borderRadius: '12px',
                  fontSize: '18px',
                  fontWeight: '600',
                  fontFamily: 'var(--font-opensans)',
                  textDecoration: 'none',
                  boxShadow: '0 10px 15px -3px rgba(43, 138, 126, 0.4)'
                }}
              >
                {cta}
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
