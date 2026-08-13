import React, { useState } from 'react';
import { ArrowUpRight, Code2, Terminal, CheckCircle2, Play, FileText, Linkedin } from 'lucide-react';
import { motion } from 'motion/react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroProps {
  onOpenChat: () => void;
  onOpenCV: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenChat, onOpenCV }) => {
  const [debugOutput, setDebugOutput] = useState<string | null>(null);
  const [isRunning, setIsRunning] = useState(false);

  const handleRunDebug = () => {
    setIsRunning(true);
    setDebugOutput("Analyzing stack trace...");
    setTimeout(() => {
      setDebugOutput("✓ Bug resolved. System optimal! 🚀");
      setIsRunning(false);
    }, 700);
  };

  return (
    <section id="cover" className="w-full max-w-6xl mx-auto px-3 sm:px-6 md:px-8 pt-4 sm:pt-8 pb-6 sm:pb-12">
      {/* Badge & Title */}
      <motion.div 
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="mb-4 sm:mb-8"
      >
        <div className="flex flex-wrap items-center gap-2 mb-2 sm:mb-4">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full border border-[#1A1A1A] bg-white font-mono text-[9px] sm:text-xs font-bold tracking-wider text-[#1A1A1A] uppercase shadow-[2px_2px_0px_#1A1A1A]">
            <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            {PERSONAL_INFO.welcomeBadge}
          </div>
        </div>

        <h1 className="text-2xl sm:text-5xl md:text-6xl lg:text-7xl font-black font-heading uppercase tracking-tight text-[#1A1A1A] leading-[1.02] sm:leading-[0.98] max-w-5xl">
          CODE WITH CURIOSITY.<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1A1A1A] via-[#3B82F6] to-[#1A1A1A]">
            BUILD WITH PURPOSE.
          </span>
        </h1>
      </motion.div>

      {/* Hero Bento Cards Grid - Same division as desktop (12 columns) */}
      <motion.div 
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="grid grid-cols-12 gap-2.5 sm:gap-5"
      >
        {/* Card 1: Yellow Identity Card (5 columns) */}
        <div className="col-span-5 framer-card-yellow p-3 sm:p-6 md:p-8 flex flex-col justify-between shadow-[3px_3px_0px_#1A1A1A] sm:shadow-[4px_4px_0px_#1A1A1A] group hover:scale-[1.015] transition-all duration-200 min-h-[160px] sm:min-h-[240px]">
          <div className="flex items-center justify-between mb-2 sm:mb-3">
            <span className="text-xl sm:text-3xl font-black font-heading text-[#1A1A1A]">*</span>
            <span className="px-2 py-0.5 sm:px-2.5 sm:py-0.5 rounded-full bg-white text-[#1A1A1A] border border-[#1A1A1A] text-[9px] sm:text-xs font-mono font-bold uppercase">
              KFUPM
            </span>
          </div>
          <div>
            <h2 className="text-xs sm:text-2xl md:text-3xl font-extrabold font-heading text-[#1A1A1A] leading-tight">
              Computer Science @ KFUPM
            </h2>
            <p className="text-[10px] sm:text-sm text-[#1A1A1A]/80 font-sans mt-0.5 sm:mt-1">
              {PERSONAL_INFO.location}
            </p>
          </div>
        </div>

        {/* Card 2: Interactive Coding Visual Card (7 columns) */}
        <div className="col-span-7 framer-card p-3 sm:p-6 md:p-8 flex flex-col justify-between shadow-[3px_3px_0px_#1A1A1A] sm:shadow-[4px_4px_0px_#1A1A1A] bg-white hover:scale-[1.015] transition-all duration-200 min-h-[160px] sm:min-h-[240px]">
          <div className="flex items-center justify-between mb-1.5 sm:mb-3">
            <div className="flex items-center gap-1.5 sm:gap-2">
              <Terminal className="w-3.5 h-3.5 sm:w-5 sm:h-5 text-[#3B82F6]" />
              <span className="font-mono text-[9px] sm:text-xs font-bold uppercase tracking-wider text-[#1A1A1A]">
                LOGIC ENGINE
              </span>
            </div>
            <span className="text-[9px] sm:text-xs font-mono text-[#3B82F6] font-bold bg-[#3B82F6]/10 px-1.5 sm:px-2 py-0.5 rounded border border-[#3B82F6]/20">
              ACTIVE
            </span>
          </div>

          <div>
            <h3 className="text-xs sm:text-xl md:text-2xl font-extrabold font-heading text-[#1A1A1A] mb-1 sm:mb-3">
              {PERSONAL_INFO.motto}
            </h3>

            {/* Interactive Code Snippet Box */}
            <div className="p-2 sm:p-4 rounded-lg sm:rounded-xl bg-[#1A1A1A] text-white font-mono text-[10px] sm:text-sm relative overflow-hidden border border-[#1A1A1A]">
              <div className="flex items-center justify-between text-[9px] sm:text-xs text-gray-400 mb-1 sm:mb-2 border-b border-gray-800 pb-1 sm:pb-2">
                <span className="flex items-center gap-1 sm:gap-1.5">
                  <Code2 className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#FFD84D]" /> main.ts
                </span>
                <button 
                  onClick={handleRunDebug}
                  disabled={isRunning}
                  className="flex items-center gap-0.5 sm:gap-1 px-1.5 sm:px-2 py-0.5 rounded bg-[#3B82F6] hover:bg-[#2563EB] text-white text-[9px] sm:text-[11px] font-sans font-bold cursor-pointer transition-colors active:scale-95"
                >
                  <Play className="w-2 h-2 sm:w-3 sm:h-3 fill-current" />
                  {isRunning ? "Running..." : "Run"}
                </button>
              </div>

              <code className="text-[#FFD84D] block py-0.5 sm:py-1 font-bold truncate">
                {PERSONAL_INFO.codeSnippet}
              </code>

              {debugOutput && (
                <div className="mt-1 sm:mt-2 text-[9px] sm:text-xs text-emerald-400 font-mono border-t border-gray-800 pt-1 sm:pt-2 flex items-center gap-1 sm:gap-1.5 truncate">
                  <CheckCircle2 className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-emerald-400 shrink-0" />
                  <span>{debugOutput}</span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Card 3: Profile / Builder Card (8 columns) */}
        <div className="col-span-8 framer-card p-3 sm:p-6 md:p-8 flex flex-col sm:flex-row items-start sm:items-center gap-2.5 sm:gap-6 shadow-[3px_3px_0px_#1A1A1A] sm:shadow-[4px_4px_0px_#1A1A1A] bg-white overflow-hidden hover:scale-[1.015] transition-all duration-200 min-h-[150px] sm:min-h-[220px]">
          <div className="w-12 h-12 sm:w-32 sm:h-32 md:w-36 md:h-36 rounded-xl overflow-hidden border-2 border-[#1A1A1A] shrink-0 bg-[#FFD84D] shadow-[2px_2px_0px_#1A1A1A]">
            <img 
              src={PERSONAL_INFO.profileImage} 
              alt="Thamer Almaqhawi" 
              className="w-full h-full object-cover object-center"
              referrerPolicy="no-referrer"
            />
          </div>

          <div className="flex flex-col justify-center text-left min-w-0">
            <div className="inline-flex items-center gap-1.5 text-[9px] sm:text-xs font-mono font-bold text-[#3B82F6] uppercase mb-0.5 sm:mb-1">
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-emerald-500"></span>
              BUILDER & SOFTWARE DEVELOPER
            </div>
            <h3 className="text-xs sm:text-xl md:text-2xl font-bold font-heading text-[#1A1A1A] leading-snug mb-0.5 sm:mb-1.5">
              Building practical software with clean architectures.
            </h3>
            <p className="text-[10px] sm:text-sm text-[#1A1A1A]/80 leading-relaxed font-sans line-clamp-2 sm:line-clamp-none">
              Passionate about backends, algorithms, AI systems, and creating software that serves communities effectively.
            </p>
          </div>
        </div>

        {/* Card 4: LinkedIn Connect Card (4 columns) */}
        <a 
          href={PERSONAL_INFO.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="col-span-4 rounded-xl sm:rounded-2xl p-3 sm:p-6 md:p-8 flex flex-col justify-between shadow-[3px_3px_0px_#1A1A1A] sm:shadow-[4px_4px_0px_#1A1A1A] bg-[#0A66C2] text-white hover:bg-[#084e96] transition-all duration-200 group cursor-pointer border border-[#1A1A1A] hover:scale-[1.015] min-h-[150px] sm:min-h-[220px]"
        >
          <div className="flex items-center justify-between w-full">
            <span className="font-mono text-[8px] sm:text-xs font-extrabold tracking-wider text-[#1A1A1A] uppercase bg-[#FFD84D] px-1.5 sm:px-2.5 py-0.5 rounded border border-[#1A1A1A]">
              NETWORKING
            </span>
            <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-white text-[#0A66C2] flex items-center justify-center group-hover:scale-110 transition-transform shadow-md border border-[#1A1A1A] shrink-0">
              <Linkedin className="w-3 h-3 sm:w-4 sm:h-4 fill-current" />
            </div>
          </div>

          <div className="pt-2">
            <span className="text-[11px] sm:text-xl md:text-2xl font-black font-heading text-white block group-hover:translate-x-1 transition-transform leading-tight">
              Connect on LinkedIn &rarr;
            </span>
            <span className="text-[9px] sm:text-xs text-white/90 font-mono font-semibold block truncate mt-0.5 sm:mt-1">
              thamer-almaqhawi
            </span>
          </div>
        </a>
      </motion.div>
    </section>
  );
};
