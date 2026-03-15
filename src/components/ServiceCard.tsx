"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Home,
  Wrench,
  Droplets,
  Zap,
  Wind,
  PaintBucket,
  Bug,
  Leaf,
  Sparkles,
  LucideIcon,
} from "lucide-react";

// Map string icon names to components - all Lucide icons
const iconMap: Record<string, LucideIcon> = {
  Home,
  Wrench,
  Droplets,
  Zap,
  Wind,
  PaintBucket,
  Bug,
  Leaf,
  Sparkles,
};

interface ServiceCardProps {
  iconName: string;
  title: string;
  description: string;
  benefits: string[];
  index?: number;
}

export default function ServiceCard({
  iconName,
  title,
  description,
  benefits,
  index = 0,
}: ServiceCardProps) {
  const Icon = iconMap[iconName] ?? Sparkles;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="card p-7 group flex flex-col h-full border border-gray-100"
    >
      {/* Icon */}
      <div className="w-14 h-14 rounded-2xl bg-brand-gradient flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 shadow-brand">
        <Icon size={26} className="text-white" />
      </div>

      {/* Title */}
      <h3 className="text-xl font-bold text-brand-navy mb-3 font-poppins group-hover:text-brand-blue transition-colors duration-200">
        {title}
      </h3>

      {/* Description */}
      <p className="text-gray-500 text-sm leading-relaxed mb-5">
        {description}
      </p>

      {/* Benefits */}
      <ul className="space-y-2 mt-auto mb-6">
        {benefits.map((benefit) => (
          <li key={benefit} className="flex items-start gap-2 text-sm text-gray-600">
            <span className="mt-0.5 w-4 h-4 rounded-full bg-brand-gradient flex-shrink-0 flex items-center justify-center">
              <svg viewBox="0 0 16 16" fill="none" className="w-2.5 h-2.5">
                <path d="M3 8l3 3 7-6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            {benefit}
          </li>
        ))}
      </ul>

      {/* CTA */}
      <Link
        href="/book"
        className="inline-flex items-center gap-2 text-sm font-semibold text-brand-blue group-hover:gap-3 transition-all duration-200"
      >
        Book This Service
        <svg viewBox="0 0 20 20" fill="none" className="w-4 h-4">
          <path d="M4 10h12M10 4l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </Link>
    </motion.div>
  );
}
