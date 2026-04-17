"use client";
import React from "react";
import PricingCard from "./PricingCard";
import pricingData from "../../data/pricing.json";

const PlanGrid = () => {
  return (
    <section className="ds-section" style={{ padding: '40px 0 100px', backgroundColor: '#FCFAF6' }}>
      <div className="ds-container">
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(2, 1fr)', 
          gap: '40px', 
          maxWidth: '1000px', 
          margin: '0 auto' 
        }}>
          {pricingData.plans.map((plan, idx) => (
            <PricingCard key={plan.id} plan={plan} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlanGrid;
