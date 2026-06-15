"use client";

import { CASE_STUDIES } from "@/lib/constants";
import SectionTitle from "@/components/ui/SectionTitle";
import { motion } from "framer-motion";
import { User, MapPin, TrendingUp, Quote } from "lucide-react";

export default function Cases() {
  return (
    <section id="cases" className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-warm-bg to-white">
      <div className="max-w-6xl mx-auto">
        <SectionTitle
          title="他们已经在改变"
          subtitle="真实的乡村创业者故事，用AI技术实现收入增长"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {CASE_STUDIES.map((c, i) => (
            <motion.div
              key={c.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group"
            >
              <div className="h-full rounded-2xl bg-white border border-muted-bg p-6 md:p-7 flex flex-col transition-all duration-300 hover:shadow-xl hover:border-green-primary/20">
                {/* Avatar placeholder */}
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-green-light to-tech-purple-light flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                  <User size={26} className="text-green-primary" strokeWidth={1.5} />
                </div>

                {/* Name + Location */}
                <div className="flex items-center gap-1 text-sm font-semibold text-text-dark mb-1">
                  {c.name}
                </div>
                <div className="flex items-center gap-1 text-xs text-text-body mb-4">
                  <MapPin size={12} />
                  {c.location}
                </div>

                {/* Result highlight */}
                <div className="flex items-start gap-2 mb-4 p-3 rounded-xl bg-green-light/50 border border-green-primary/10">
                  <TrendingUp size={16} className="text-green-primary shrink-0 mt-0.5" />
                  <span className="text-sm font-medium text-green-primary">
                    {c.result}
                  </span>
                </div>

                {/* Quote */}
                <div className="flex-1 flex items-start gap-2">
                  <Quote size={16} className="text-muted-bg shrink-0 mt-1 rotate-180" />
                  <p className="text-sm text-text-body leading-relaxed italic">
                    {c.quote}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
