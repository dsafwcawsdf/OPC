"use client";

import Link from "next/link";
import { CORE_MODULES } from "@/lib/constants";
import SectionTitle from "@/components/ui/SectionTitle";
import GlassCard from "@/components/ui/GlassCard";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function CoreModules() {
  return (
    <section
      id="core-modules"
      className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-warm-bg via-white to-warm-bg"
    >
      <div className="max-w-6xl mx-auto">
        <SectionTitle
          title="六大核心模块"
          subtitle="覆盖乡村创业全流程的AI能力支持，从孵化到变现的完整闭环"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {CORE_MODULES.map((mod, i) => (
            <motion.div
              key={mod.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <Link href={mod.href} className="block h-full group/card">
                <GlassCard className="h-full flex flex-col relative">
                  {/* Icon container */}
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-green-primary to-tech-purple flex items-center justify-center mb-5 shadow-md shadow-green-primary/20 group-hover/card:scale-110 transition-transform duration-300">
                    <mod.icon size={28} className="text-white" strokeWidth={1.5} />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-text-dark mb-2 font-heading group-hover/card:text-green-primary transition-colors duration-200">
                    {mod.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-text-body leading-relaxed mb-5 flex-1">
                    {mod.description}
                  </p>

                  {/* Feature tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {mod.features.map((feat) => (
                      <span
                        key={feat}
                        className="inline-flex px-3 py-1 rounded-full text-xs font-medium bg-green-light text-green-primary border border-green-primary/10"
                      >
                        {feat}
                      </span>
                    ))}
                  </div>

                  {/* Link indicator */}
                  <div className="flex items-center gap-1.5 text-sm font-medium text-green-primary opacity-0 group-hover/card:opacity-100 transition-all duration-300 translate-x-0 group-hover/card:translate-x-1">
                    <span>查看详情</span>
                    <ArrowRight size={15} />
                  </div>
                </GlassCard>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
