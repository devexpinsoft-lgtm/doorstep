import React from "react";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

const Card = ({ children, className = "" }: CardProps) => {
  return (
    <div className={`ds-card ${className}`}>
      {children}
    </div>
  );
};

export default Card;
