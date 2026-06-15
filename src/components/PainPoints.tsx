"use client";

import { PAIN_POINTS } from "@/lib/constants";
import SectionTitle from "@/components/ui/SectionTitle";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export default function PainPoints() {
  return (
    <section id="pain-points" className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-warm-bg">
      <div className="max-w-6xl mx-auto">
        <SectionTitle
          title="乡村创业面临的四大难题"
          subtitle="AI技术为你一一解决"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {PAIN_POINTS.map((point, i) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group"
            >
              <div className="h-full rounded-2xl bg-muted-bg p-6 md:p-7 flex flex-col transition-all duration-300 hover:bg-white hover:shadow-lg">
                {/* Icon */}
                <div className="text-4xl mb-4">{point.icon}</div>

                {/* Title */}
                <h3 className="text-lg font-bold text-text-dark mb-2 font-heading">
                  {point.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-text-body leading-relaxed mb-4 flex-1">
                  {point.description}
                </p>

                {/* Arrow + Solution */}
                <div className="flex items-center gap-2 pt-3 border-t border-green-primary/10">
                  <ArrowDown size={14} className="text-green-primary shrink-0" />
                  <span className="text-xs font-medium text-green-primary">
                    {point.solution}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
