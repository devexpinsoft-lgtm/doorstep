import React from "react";
import Link from "next/link";
import Image from "next/image";

interface LogoProps {
  className?: string;
  variant?: "default" | "light";
}

const Logo = ({ className = "" }: LogoProps) => {
  return (
    <Link 
      href="/" 
      className={`flex items-center ${className}`}
      style={{ 
        display: 'flex', 
        alignItems: 'center', 
        textDecoration: 'none',
        flexShrink: 0
      }}
    >
      <Image 
        src="/doorstep-full-logo.png" 
        alt="Doorstep" 
        width={100} 
        height={50} 
        style={{ height: '44px', width: 'auto', display: 'block' }}
        priority
      />
    </Link>
  );
};

export default Logo;
