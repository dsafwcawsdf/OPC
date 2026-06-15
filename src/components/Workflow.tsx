"use client";

import { WORKFLOW_STEPS } from "@/lib/constants";
import SectionTitle from "@/components/ui/SectionTitle";
import { motion } from "framer-motion";

export default function Workflow() {
  return (
    <section id="workflow" className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-5xl mx-auto">
        <SectionTitle
          title="从入驻到变现，只需四步"
          subtitle="简单四步，开启你的乡村创业之旅"
        />

        <div className="relative">
          {/* Connecting line (desktop) */}
          <div className="hidden lg:block absolute top-12 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-green-primary via-tech-purple to-green-primary" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
            {WORKFLOW_STEPS.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="relative flex flex-col items-center text-center group"
              >
                {/* Step circle */}
                <div className="relative z-10 w-24 h-24 rounded-full bg-gradient-to-br from-green-primary to-tech-purple flex items-center justify-center text-white text-2xl font-bold font-heading mb-5 shadow-lg shadow-green-primary/20 group-hover:scale-110 transition-transform duration-300">
                  {step.step}
                </div>

                {/* Duration badge */}
                <span className="inline-flex px-3 py-1 mb-3 rounded-full text-xs font-medium text-green-primary bg-green-light">
                  {step.duration}
                </span>

                {/* Title */}
                <h3 className="text-lg font-bold text-text-dark mb-2 font-heading">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-text-body leading-relaxed max-w-[220px]">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
