import React from "react";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  badge?: string;
  centered?: boolean;
}

const SectionHeader = ({ title, subtitle, badge, centered = true }: SectionHeaderProps) => {
  return (
    <div style={{ 
      textAlign: centered ? "center" : "left", 
      marginBottom: "48px", 
      width: '100%',
      position: 'relative',
      zIndex: 1
    }}>
      {badge && <div className="ds-badge">{badge}</div>}
      <h2 style={{ 
        fontSize: "30px", 
        fontWeight: "700", 
        marginBottom: "16px", 
        fontFamily: "var(--font-montserrat)",
        color: "var(--secondary)"
      }}>
        {title}
      </h2>
      {subtitle && (
        <p style={{ 
          fontSize: "14px", 
          lineHeight: "1.6", 
          color: "var(--text-muted)", 
          maxWidth: "600px", 
          margin: centered ? "0 auto" : "0",
          fontFamily: "var(--font-opensans)"
        }}>
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
