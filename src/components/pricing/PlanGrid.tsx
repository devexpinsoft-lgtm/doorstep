"use client";
import React from "react";
import PricingCard from "./PricingCard";
import pricingData from "../../data/pricing.json";

const PlanGrid = () => {
  return (
    <section className="ds-section" style={{ padding: '40px 0 40px', backgroundColor: '#FCFAF6' }}>
      <div className="ds-container">
        <div className="pricing-grid">
          <style jsx>{`
            .pricing-grid {
              display: grid;
              grid-template-columns: repeat(2, 1fr);
              gap: 40px;
              max-width: 1000px;
              margin: 0 auto;
            }
            @media (max-width: 767px) {
              .pricing-grid {
                grid-template-columns: 1fr;
              }
            }
          `}</style>
          {pricingData.plans.map((plan, idx) => (
            <PricingCard key={plan.id} plan={plan} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlanGrid;
