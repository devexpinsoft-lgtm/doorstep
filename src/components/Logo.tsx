import React from 'react';
import Image from 'next/image';

interface LogoProps {
  className?: string;
  textColor?: string;
  variant?: 'default' | 'light';
}

export default function Logo({ 
  className = "h-12", 
  textColor = "text-white",
  variant = 'default'
}: LogoProps) {
  const isLight = variant === 'light';
  
  return (
    <div className={`flex items-center ${className}`}>
      <div className={`relative h-full w-auto aspect-[5/1] ${
        isLight 
          ? "brightness-0 invert opacity-90" 
          : "drop-shadow-[0_2px_8px_rgba(255,255,255,0.15)]"
      }`}>
        <Image
          src="/logo2.png"
          alt="Doorstep"
          width={300}
          height={60}
          className="object-contain h-full w-auto"
          priority
        />
      </div>
    </div>
  );
}
