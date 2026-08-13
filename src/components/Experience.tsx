import React from 'react';
import { Briefcase, Calendar, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';
import { EXPERIENCES } from '../data/portfolioData';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="w-full max-w-6xl mx-auto px-3 sm:px-6 md:px-8 py-6 sm:py-12 border-t border-[#1A1A1A]/10">
      {/* Section Header */}
      <motion.div 
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="mb-4 sm:mb-8"
      >
        <p className="font-mono text-[10px] sm:text-xs font-bold uppercase tracking-widest text-[#1A1A1A] mb-1 sm:mb-2">
          03 — EXPERIENCE
        </p>
        <h2 className="text-xl sm:text-4xl md:text-5xl font-black font-heading uppercase text-[#1A1A1A] tracking-tight">
          Learning in public.
        </h2>
      </motion.div>

      {/* Experience List - 2 Columns on all devices like desktop */}
      <div className="grid grid-cols-2 gap-2.5 sm:gap-5 md:gap-6">
        {EXPERIENCES.map((exp, index) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.25, delay: index * 0.05 }}
            className="framer-card p-3 sm:p-6 md:p-7 shadow-[3px_3px_0px_#1A1A1A] sm:shadow-[4px_4px_0px_#1A1A1A] bg-white flex flex-col justify-between hover:border-[#3B82F6] transition-all min-h-[160px] sm:min-h-[240px]"
          >
            <div>
              {/* Header with Icon & Date Badge */}
              <div className="flex items-center justify-between gap-1.5 mb-1.5 sm:mb-2.5">
                <div className="w-6 h-6 sm:w-9 sm:h-9 rounded-lg bg-[#3B82F6]/10 border border-[#3B82F6]/20 flex items-center justify-center shrink-0">
                  <Briefcase className="w-3 h-3 sm:w-4.5 sm:h-4.5 text-[#3B82F6] shrink-0" />
                </div>
                
                {/* Date Badge */}
                <span className="font-mono text-[8px] sm:text-xs font-bold text-[#3B82F6] bg-[#3B82F6]/10 px-1.5 sm:px-2.5 py-0.5 rounded border border-[#3B82F6]/20 uppercase whitespace-nowrap shrink-0">
                  {exp.date}
                </span>
              </div>

              {/* Role / Title */}
              <h3 className="text-xs sm:text-xl md:text-2xl font-bold font-heading text-[#1A1A1A] leading-tight mb-1.5 sm:mb-2">
                {exp.role}
              </h3>

              <p className="text-[10px] sm:text-sm text-[#1A1A1A]/80 leading-relaxed font-sans mb-2 sm:mb-3">
                {exp.description}
              </p>

              {exp.highlights && exp.highlights.length > 0 && (
                <ul className="space-y-1 sm:space-y-1.5 pl-1 sm:pl-2 border-l-2 border-[#3B82F6]/30">
                  {exp.highlights.map((highlight, hIdx) => (
                    <li key={hIdx} className="text-[9px] sm:text-xs text-[#1A1A1A]/70 flex items-start gap-1 sm:gap-1.5 leading-snug">
                      <CheckCircle2 className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 text-[#3B82F6] shrink-0 mt-0.5" />
                      <span className="line-clamp-2 sm:line-clamp-none">{highlight}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
