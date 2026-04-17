/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React from "react";
import { Target, MapPin, Rocket } from "lucide-react";
import aboutData from "../../data/about.json";
import FeatureCard from "../ui/FeatureCard";

const iconMap: any = {
  Target,
  MapPin,
  Rocket
};

const MissionObjectives = () => {
  return (
    <section className="ds-section" style={{ backgroundColor: 'white', padding: '100px 0 40px 0' }}>
      <div className="ds-container">
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(3, 1fr)', 
          gap: '40px',
          maxWidth: '1100px',
          margin: '0 auto'
        }}>
          {aboutData.objectives.map((obj, idx) => (
            <FeatureCard
              key={idx}
              icon={iconMap[obj.icon]}
              title={obj.title}
              description={obj.desc}
              delay={idx * 0.1}
              variant="solid"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MissionObjectives;
