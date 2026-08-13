import React from 'react';
import { ArrowUpRight, FolderGit2, Sparkles, Layers } from 'lucide-react';
import { motion } from 'motion/react';
import { PROJECTS } from '../data/portfolioData';
import { Project } from '../types';

interface SelectedWorkProps {
  onSelectProject: (project: Project) => void;
}

export const SelectedWork: React.FC<SelectedWorkProps> = ({ onSelectProject }) => {
  return (
    <section id="work" className="w-full max-w-6xl mx-auto px-3 sm:px-6 md:px-8 py-6 sm:py-12 border-t border-[#1A1A1A]/10">
      {/* Section Header */}
      <motion.div 
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="mb-4 sm:mb-8"
      >
        <p className="font-mono text-[10px] sm:text-xs font-bold uppercase tracking-widest text-[#1A1A1A] mb-1 sm:mb-2">
          02 — SELECTED WORK
        </p>
        <h2 className="text-xl sm:text-4xl md:text-5xl font-black font-heading uppercase text-[#1A1A1A] tracking-tight">
          Things I’ve built.
        </h2>
      </motion.div>

      {/* Projects Grid / Stack - 2 Columns on all devices like desktop */}
      <div className="grid grid-cols-2 gap-2.5 sm:gap-5 md:gap-6">
        {PROJECTS.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.015 }}
            transition={{ duration: 0.25, delay: index * 0.05 }}
            onClick={() => onSelectProject(project)}
            className="framer-card p-3 sm:p-6 md:p-7 flex flex-col justify-between shadow-[3px_3px_0px_#1A1A1A] sm:shadow-[4px_4px_0px_#1A1A1A] bg-white hover:bg-[#FFD84D]/10 hover:border-[#1A1A1A] transition-all duration-200 cursor-pointer group relative overflow-hidden min-h-[160px] sm:min-h-[250px]"
          >
            {/* Top Badge & Number */}
            <div className="flex items-center justify-between mb-2 sm:mb-4">
              <span className="font-mono text-[8px] sm:text-xs font-bold tracking-wider text-[#3B82F6] bg-[#3B82F6]/10 px-1.5 sm:px-2.5 py-0.5 rounded border border-[#3B82F6]/20 uppercase">
                {project.badge}
              </span>

              <div className="w-5 h-5 sm:w-8 sm:h-8 rounded-full border border-[#1A1A1A] bg-white flex items-center justify-center text-[#1A1A1A] group-hover:bg-[#1A1A1A] group-hover:text-white transition-colors shrink-0">
                <ArrowUpRight className="w-2.5 h-2.5 sm:w-4 sm:h-4" />
              </div>
            </div>

            {/* Title & Description - Top Aligned */}
            <div className="flex-1 mb-2 sm:mb-4">
              <h3 className="text-xs sm:text-xl md:text-2xl font-extrabold font-heading text-[#1A1A1A] leading-tight mb-1 sm:mb-2 group-hover:text-[#3B82F6] transition-colors">
                {project.title}
              </h3>
              <p className="text-[10px] sm:text-sm text-[#1A1A1A]/80 leading-relaxed font-sans line-clamp-2 sm:line-clamp-3">
                {project.description}
              </p>
            </div>

            {/* Bottom Tech Tags */}
            <div className="pt-2 sm:pt-4 border-t border-[#1A1A1A]/10 flex flex-wrap items-center justify-between gap-1 mt-auto">
              <div className="flex flex-wrap items-center gap-1 sm:gap-1.5 font-mono text-[8px] sm:text-xs font-semibold text-[#1A1A1A]">
                {project.technologies.slice(0, 3).map((tech, tIdx) => (
                  <span key={tIdx} className="bg-[#ECECE8] px-1 sm:px-2 py-0.5 rounded border border-[#1A1A1A]/20">
                    {tech}
                  </span>
                ))}
              </div>

              <span className="text-[9px] sm:text-xs font-mono font-bold text-[#3B82F6] group-hover:underline flex items-center gap-0.5 shrink-0">
                Details &rarr;
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
