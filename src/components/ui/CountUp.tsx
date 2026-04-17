"use client";
import React, { useEffect, useState } from "react";
import { useInView, animate } from "framer-motion";

interface CountUpProps {
  to: number;
  duration?: number;
  suffix?: string;
  decimals?: number;
}

const CountUp = ({ to, duration = 2, suffix = "", decimals = 0 }: CountUpProps) => {
  const [count, setCount] = useState(0);
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const controls = animate(0, to, {
        duration,
        ease: "easeOut",
        onUpdate: (value) => {
          setCount(value);
        },
      });
      return () => controls.stop();
    }
  }, [isInView, to, duration]);

  return <span ref={ref}>{count.toFixed(decimals)}{suffix}</span>;
};

export default CountUp;
