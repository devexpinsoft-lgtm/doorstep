import React from "react";
import Link from "next/link";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline" | "ghost";
  href?: string;
  className?: string;
  children: React.ReactNode;
}

const Button = ({ variant = "primary", href, className = "", children, ...props }: ButtonProps) => {
  const baseClass = `btn btn-${variant} ${className}`;

  if (href) {
    return (
      <Link href={href} className={baseClass}>
        {children}
      </Link>
    );
  }

  return (
    <button className={baseClass} {...props}>
      {children}
    </button>
  );
};

export default Button;
