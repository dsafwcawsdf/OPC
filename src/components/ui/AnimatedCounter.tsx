"use client";

import { useCountUp } from "@/hooks/useCountUp";

interface AnimatedCounterProps {
  end: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
  duration?: number;
  className?: string;
}

export default function AnimatedCounter({
  end,
  suffix = "",
  prefix = "",
  decimals = 0,
  duration = 2000,
  className = "",
}: AnimatedCounterProps) {
  const { ref, display } = useCountUp({
    end,
    suffix,
    prefix,
    decimals,
    duration,
  });

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
}
