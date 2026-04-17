"use client";
import React from "react";
import CTA from "@/components/ui/CTA";
import homeData from "@/data/home.json";

const HomeCTAWrapper = () => {
  const { title, description, buttonText } = homeData.cta;
  return (
    <CTA 
      title={title}
      description={description}
      buttonText={buttonText}
      href="/book"
    />
  );
};

export default HomeCTAWrapper;
