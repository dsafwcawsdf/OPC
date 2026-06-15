"use client";

import { useRef, useState, useEffect, useCallback } from "react";

interface UseCountUpOptions {
  end: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
  triggerOnce?: boolean;
}

export function useCountUp({
  end,
  duration = 2000,
  suffix = "",
  prefix = "",
  decimals = 0,
  triggerOnce = true,
}: UseCountUpOptions) {
  const ref = useRef<HTMLDivElement>(null);
  const [count, setCount] = useState(0);
  const [hasTriggered, setHasTriggered] = useState(false);

  const animate = useCallback(() => {
    const startTime = performance.now();

    function tick(now: number) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // easeOutExpo
      const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const current = eased * end;
      setCount(current);

      if (progress < 1) {
        requestAnimationFrame(tick);
      } else {
        setCount(end);
      }
    }

    requestAnimationFrame(tick);
  }, [end, duration]);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && (!triggerOnce || !hasTriggered)) {
          setHasTriggered(true);
          animate();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [animate, hasTriggered, triggerOnce]);

  const display = `${prefix}${count.toFixed(decimals)}${suffix}`;

  return { ref, display };
}
