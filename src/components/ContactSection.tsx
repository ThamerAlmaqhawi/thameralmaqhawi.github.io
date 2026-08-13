import React from 'react';
import { Mail, Linkedin, Copy, Check, ArrowUpRight, FileText } from 'lucide-react';
import { motion } from 'motion/react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ContactSectionProps {
  onCopyEmail: () => void;
  emailCopied: boolean;
  onOpenCV: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onCopyEmail, emailCopied, onOpenCV }) => {
  return (
    <section id="contact" className="w-full max-w-6xl mx-auto px-3 sm:px-6 md:px-8 py-6 sm:py-16 border-t border-[#1A1A1A]/10">
      <motion.div 
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="framer-card-yellow p-4 sm:p-8 md:p-12 shadow-[3px_3px_0px_#1A1A1A] sm:shadow-[5px_5px_0px_#1A1A1A] relative overflow-hidden"
      >
        {/* Section Index */}
        <p className="font-mono text-[10px] sm:text-xs font-bold uppercase tracking-widest text-[#1A1A1A] mb-1.5 sm:mb-2">
          04 — CONTACT & RESUME
        </p>

        {/* Title & Copy */}
        <h2 className="text-xl sm:text-4xl md:text-5xl font-black font-heading uppercase text-[#1A1A1A] tracking-tight leading-tight mb-2 sm:mb-4">
          {PERSONAL_INFO.contactTitle}
        </h2>

        <p className="text-[11px] sm:text-base text-[#1A1A1A]/85 font-medium max-w-2xl mb-4 sm:mb-8 font-sans leading-relaxed">
          {PERSONAL_INFO.contactCopy}
        </p>

        {/* Action Buttons - 2 Columns on mobile */}
        <div className="grid grid-cols-2 sm:flex sm:flex-wrap items-center gap-2 sm:gap-4">
          {/* CV Button */}
          <button
            onClick={onOpenCV}
            className="flex items-center justify-center gap-1.5 px-3 py-2 sm:px-6 sm:py-3 rounded-lg sm:rounded-xl border border-[#1A1A1A] bg-[#FFD84D] text-[#1A1A1A] hover:bg-white font-heading font-extrabold text-[11px] sm:text-sm shadow-[2px_2px_0px_#1A1A1A] sm:shadow-[3px_3px_0px_#1A1A1A] transition-all transform active:scale-95 cursor-pointer"
          >
            <FileText className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#1A1A1A]" />
            <span>Full CV</span>
          </button>

          {/* LinkedIn Button */}
          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-1.5 px-3 py-2 sm:px-6 sm:py-3 rounded-lg sm:rounded-xl border border-[#1A1A1A] bg-[#1A1A1A] text-white hover:bg-[#0A66C2] font-heading font-extrabold text-[11px] sm:text-sm shadow-[2px_2px_0px_#1A1A1A] sm:shadow-[3px_3px_0px_#1A1A1A] transition-colors group"
          >
            <Linkedin className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#FFD84D]" />
            <span>LinkedIn</span>
            <ArrowUpRight className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>

          {/* Email Card Button (full width in 2-col or single) */}
          <div className="col-span-2 sm:col-auto flex items-center justify-between gap-2 bg-white border border-[#1A1A1A] rounded-lg sm:rounded-xl p-1 sm:p-1.5 shadow-[2px_2px_0px_#1A1A1A] sm:shadow-[3px_3px_0px_#1A1A1A]">
            <a 
              href={`mailto:${PERSONAL_INFO.email}`}
              className="flex items-center gap-1.5 sm:gap-2 px-2.5 py-1 text-[11px] sm:text-sm font-extrabold font-heading text-[#1A1A1A] hover:text-[#3B82F6] transition-colors truncate"
            >
              <Mail className="w-3 h-3 sm:w-4 sm:h-4 text-[#1A1A1A] shrink-0" />
              <span className="truncate">{PERSONAL_INFO.email}</span>
            </a>

            <button
              onClick={onCopyEmail}
              className="p-1 sm:p-2 rounded bg-[#ECECE8] hover:bg-[#3B82F6] hover:text-white text-[#1A1A1A] border border-[#1A1A1A] transition-all cursor-pointer shrink-0"
              title="Copy email to clipboard"
            >
              {emailCopied ? (
                <Check className="w-3 h-3 sm:w-4 sm:h-4 text-emerald-600" />
              ) : (
                <Copy className="w-3 h-3 sm:w-4 sm:h-4" />
              )}
            </button>
          </div>
        </div>
      </motion.div>

      {/* Footer info */}
      <footer className="mt-5 sm:mt-8 pt-3 sm:pt-4 border-t border-[#1A1A1A]/10 flex flex-row items-center justify-between gap-2 font-mono text-[10px] sm:text-xs text-[#1A1A1A]/60">
        <div>
          © {new Date().getFullYear()} Thamer Almaqhawi.
        </div>
        <div>
          <a href="#cover" className="hover:text-[#1A1A1A] transition-colors font-bold">
            Top ↑
          </a>
        </div>
      </footer>
    </section>
  );
};
