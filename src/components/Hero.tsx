"use client";

import { HERO } from "@/lib/constants";
import CTAButton from "@/components/ui/CTAButton";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-warm-bg"
    >
      {/* Decorative gradient orbs */}
      <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-green-primary/8 blur-3xl animate-float pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-tech-purple/6 blur-3xl animate-float pointer-events-none" style={{ animationDelay: "-3s" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-green-primary/3 blur-3xl pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-light/60 border border-green-primary/15 text-green-primary text-sm font-medium mb-8 animate-fade-in-up">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-primary opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-primary" />
          </span>
          AI驱动的乡村创业孵化平台
        </div>

        {/* Main heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-text-dark font-heading leading-tight mb-6 animate-fade-in-up">
          {HERO.highlight}
          <span className="gradient-text">{HERO.title}</span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-text-body max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in-up">
          {HERO.subtitle}
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up">
          <CTAButton href="#core-modules" variant="primary">
            {HERO.ctaPrimary}
          </CTAButton>
          <CTAButton href="#data-showcase" variant="secondary">
            {HERO.ctaSecondary}
          </CTAButton>
        </div>

        {/* Trust line */}
        <p className="mt-12 text-sm text-text-body animate-fade-in-up">
          已为 <span className="font-semibold text-green-primary">50,000+</span> 农户提供服务 · 覆盖{" "}
          <span className="font-semibold text-green-primary">300+</span> 区县
        </p>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-warm-bg to-transparent pointer-events-none" />
    </section>
  );
}
