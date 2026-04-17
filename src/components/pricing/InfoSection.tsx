/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React from "react";
import { Lightbulb, ShieldCheck } from "lucide-react";
import pricingData from "../../data/pricing.json";
import FeatureCard from "../ui/FeatureCard";

const IconMap: { [key: string]: any } = {
  Lightbulb: Lightbulb,
  ShieldCheck: ShieldCheck,
};

const InfoSection = () => {
  const { info } = pricingData;

  return (
    <section className="ds-section" style={{ padding: '40px 0 100px 0', backgroundColor: '#F8FAFC' }}>
      <div className="ds-container">
        <style jsx>{`
          .info-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 40px;
            max-width: 1000px;
            margin: 0 auto;
          }
          @media (max-width: 767px) {
            .info-grid {
              grid-template-columns: 1fr;
              gap: 32px;
            }
          }
        `}</style>
        <div className="info-grid">
          {info.map((item, idx) => {
            const Icon = IconMap[item.icon];
            const isLightbulb = item.icon === 'Lightbulb';
            
            return (
              <FeatureCard
                key={idx}
                icon={Icon}
                title={item.title}
                description={item.description}
                primaryColor={isLightbulb ? "#F59E0B" : "#2B8A7E"}
                backgroundSecondary={isLightbulb ? "#FFFBEB" : "#EAF6F5"}
                delay={idx * 0.1}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
