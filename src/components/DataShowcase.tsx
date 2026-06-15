"use client";

import { DATA_STATS } from "@/lib/constants";
import SectionTitle from "@/components/ui/SectionTitle";
import AnimatedCounter from "@/components/ui/AnimatedCounter";

export default function DataShowcase() {
  return (
    <section
      id="data-showcase"
      className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-green-dark relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
      <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-gold/8 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-tech-purple/10 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto">
        <SectionTitle
          title="用数据说话"
          subtitle="越来越多的乡村创业者正在通过AI技术实现增长"
          light
        />

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-12">
          {DATA_STATS.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-gold font-heading mb-3">
                <AnimatedCounter
                  end={stat.value}
                  suffix={stat.suffix}
                  prefix={stat.prefix}
                  decimals={stat.value % 1 !== 0 ? 1 : 0}
                  duration={2500}
                />
              </div>
              <p className="text-white/70 text-base md:text-lg">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
