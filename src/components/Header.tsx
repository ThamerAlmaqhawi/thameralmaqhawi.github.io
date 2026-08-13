import React from 'react';
import { FileText, Linkedin, Mail, Sparkles, Terminal } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeaderProps {
  onOpenChat: () => void;
  onOpenCV: () => void;
  onOpenTerminal: () => void;
  onCopyEmail: () => void;
  emailCopied: boolean;
}

export const Header: React.FC<HeaderProps> = ({ onOpenChat, onOpenCV, onOpenTerminal, onCopyEmail, emailCopied }) => {
  return (
    <header className="sticky top-0 z-40 w-full bg-[#ECECE8]/95 backdrop-blur-md border-b border-[#1A1A1A]/10">
      <div className="max-w-6xl mx-auto py-2 px-3 sm:px-6 md:px-8 flex flex-row items-center justify-between gap-2 font-mono text-xs tracking-wider uppercase text-[#1A1A1A]">
        {/* Logo / Title */}
        <div className="flex items-center gap-2 font-bold shrink-0">
          <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#3B82F6] animate-pulse"></span>
          <a href="#cover" className="hover:opacity-70 transition-opacity flex items-center gap-1.5 text-xs sm:text-sm font-extrabold tracking-tight">
            {PERSONAL_INFO.name}
          </a>
        </div>

        {/* Section Navigation */}
        <nav className="hidden md:flex items-center gap-5 text-[11px] font-sans font-bold normal-case text-[#1A1A1A]/80">
          <a href="#work" className="hover:text-[#3B82F6] transition-colors">Work</a>
          <a href="#experience" className="hover:text-[#3B82F6] transition-colors">Experience</a>
          <a href="#contact" className="hover:text-[#3B82F6] transition-colors">Contact</a>
        </nav>

        {/* Action Controls */}
        <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
          {/* CLI Terminal Button */}
          <button
            onClick={onOpenTerminal}
            className="flex items-center gap-1 sm:gap-1.5 px-2 py-1 sm:py-1.5 rounded-md border border-[#1A1A1A] bg-white hover:bg-[#1A1A1A] hover:text-white transition-all cursor-pointer text-[10px] sm:text-[11px] font-sans font-bold tracking-normal uppercase shadow-[2px_2px_0px_#1A1A1A] active:scale-95"
            title="Open Interactive CLI Terminal"
          >
            <Terminal className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#3B82F6]" />
            <span>CLI</span>
          </button>

          {/* View CV Button */}
          <button
            onClick={onOpenCV}
            className="flex items-center gap-1 sm:gap-1.5 px-2 sm:px-2.5 py-1 sm:py-1.5 rounded-md border border-[#1A1A1A] bg-[#FFD84D] hover:bg-[#FFD84D]/80 text-[#1A1A1A] font-sans font-extrabold text-[10px] sm:text-[11px] uppercase tracking-normal transition-transform active:scale-95 cursor-pointer shadow-[2px_2px_0px_#1A1A1A]"
            title="View Full Curriculum Vitae"
          >
            <FileText className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#1A1A1A]" />
            <span>CV</span>
          </button>

          <button
            onClick={onCopyEmail}
            className="hidden sm:flex items-center gap-1.5 px-2.5 py-1.5 rounded-md border border-[#1A1A1A] bg-white hover:bg-[#ECECE8] transition-colors cursor-pointer text-[11px] font-sans font-semibold tracking-normal uppercase"
            title="Copy Email"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>{emailCopied ? "Copied!" : "Email"}</span>
          </button>

          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:flex items-center gap-1.5 px-2.5 py-1.5 rounded-md border border-[#1A1A1A] bg-white hover:bg-[#ECECE8] transition-colors text-[11px] font-sans font-semibold tracking-normal uppercase"
            title="LinkedIn Profile"
          >
            <Linkedin className="w-3.5 h-3.5 text-[#0A66C2]" />
            <span>LinkedIn</span>
          </a>

          {/* Ask AI Button */}
          <button
            onClick={onOpenChat}
            className="flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-md border border-[#1A1A1A] bg-[#1A1A1A] text-white hover:bg-[#3B82F6] transition-all cursor-pointer text-[10px] sm:text-[11px] font-sans font-extrabold tracking-normal uppercase shadow-[2px_2px_0px_#1A1A1A] active:scale-95"
          >
            <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#FFD84D]" />
            <span>Ask AI</span>
          </button>
        </div>
      </div>
    </header>
  );
};
