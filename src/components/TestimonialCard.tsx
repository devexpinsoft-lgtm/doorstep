"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  location: string;
  rating: number;
  text: string;
  service: string;
  avatar: string;
  index?: number;
}

export default function TestimonialCard({
  name,
  location,
  rating,
  text,
  service,
  avatar,
  index = 0,
}: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.12 }}
      className="card p-7 border border-gray-100 flex flex-col h-full"
    >
      {/* Quote Icon */}
      <div className="flex items-center justify-between mb-5">
        <div className="flex gap-1">
          {Array.from({ length: rating }).map((_, i) => (
            <Star key={i} size={16} className="text-yellow-400 fill-yellow-400" />
          ))}
        </div>
        <Quote size={20} className="text-brand-teal opacity-50" />
      </div>

      {/* Review Text */}
      <p className="text-gray-600 text-sm leading-relaxed flex-1 mb-6 italic">
        &ldquo;{text}&rdquo;
      </p>

      {/* Service Badge */}
      <div className="mb-5">
        <span className="badge text-xs">
          {service}
        </span>
      </div>

      {/* Author */}
      <div className="flex items-center gap-3 pt-5 border-t border-gray-100">
        <div className="w-10 h-10 rounded-full bg-brand-gradient flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
          {avatar}
        </div>
        <div>
          <p className="font-semibold text-brand-navy text-sm">{name}</p>
          <p className="text-gray-400 text-xs">{location}</p>
        </div>
      </div>
    </motion.div>
  );
}
