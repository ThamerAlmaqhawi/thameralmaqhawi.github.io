import React from 'react';
import { X, Download, Printer, Mail, Phone, MapPin, Linkedin, GraduationCap, Briefcase, Code, Award, ExternalLink } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { PERSONAL_INFO, EXPERIENCES, PROJECTS } from '../data/portfolioData';

interface CVModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CVModal: React.FC<CVModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    try {
      window.focus();
      window.print();
    } catch (err) {
      console.error('Print error:', err);
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/60 backdrop-blur-sm">
        <motion.div
          id="printable-cv"
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          className="bg-white border-2 border-[#1A1A1A] rounded-2xl max-w-4xl w-full p-6 sm:p-10 shadow-[8px_8px_0px_#1A1A1A] relative max-h-[92vh] overflow-y-auto text-[#1A1A1A]"
        >
          {/* Top Bar Action Controls */}
          <div className="flex items-center justify-between border-b border-[#1A1A1A]/20 pb-4 mb-6 no-print">
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs font-bold uppercase tracking-wider bg-[#FFD84D] px-2.5 py-1 rounded border border-[#1A1A1A]">
                CURRICULUM VITAE
              </span>
              <span className="text-xs font-mono text-gray-500 hidden sm:inline">
                Thamer Almaqhawi — KFUPM CS Student
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handlePrint}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[#1A1A1A] bg-[#ECECE8] hover:bg-[#FFD84D] transition-colors text-xs font-bold font-heading cursor-pointer"
                title="Print CV"
              >
                <Printer className="w-3.5 h-3.5" />
                <span className="hidden xs:inline">Print / Save PDF</span>
              </button>

              <button
                onClick={onClose}
                className="p-1.5 rounded-full border border-[#1A1A1A] bg-[#ECECE8] hover:bg-[#FFD84D] text-[#1A1A1A] transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Printable CV Container */}
          <div className="space-y-6 font-sans">
            {/* Header / Contact Info */}
            <div className="border-b border-[#1A1A1A]/15 pb-6">
              <h1 className="text-3xl sm:text-4xl font-extrabold font-heading text-[#1A1A1A] mb-2 tracking-tight">
                Thamer Almaqhawi
              </h1>
              <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs sm:text-sm font-mono text-[#1A1A1A]/80">
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-[#3B82F6]" />
                  {PERSONAL_INFO.location}
                </span>
                <a href={`mailto:${PERSONAL_INFO.email}`} className="flex items-center gap-1 hover:text-[#3B82F6]">
                  <Mail className="w-3.5 h-3.5 text-[#3B82F6]" />
                  {PERSONAL_INFO.email}
                </a>
                <span className="flex items-center gap-1">
                  <Phone className="w-3.5 h-3.5 text-[#3B82F6]" />
                  {PERSONAL_INFO.phone}
                </span>
                <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:text-[#3B82F6]">
                  <Linkedin className="w-3.5 h-3.5 text-[#0A66C2]" />
                  linkedin.com/in/thamer-almaqhawi
                </a>
              </div>
            </div>

            {/* Education */}
            <div>
              <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-[#3B82F6] mb-3 flex items-center gap-1.5 border-b border-[#3B82F6]/30 pb-1">
                <GraduationCap className="w-4 h-4" /> EDUCATION
              </h2>
              <div className="space-y-4">
                {PERSONAL_INFO.education.map((edu, idx) => (
                  <div key={idx} className="flex flex-col sm:flex-row sm:items-start justify-between gap-1">
                    <div>
                      <h3 className="font-extrabold text-base font-heading text-[#1A1A1A]">
                        {edu.institution} <span className="font-medium text-sm text-[#1A1A1A]/70">— {edu.degree}</span>
                      </h3>
                      {edu.gpa && <p className="text-xs font-mono text-gray-600">High School Diploma · {edu.gpa}</p>}
                      {edu.scores && (
                        <p className="text-xs font-mono text-gray-700 mt-0.5">
                          {edu.scores.join(' · ')}
                        </p>
                      )}
                    </div>
                    <span className="font-mono text-xs font-bold text-[#3B82F6] bg-[#3B82F6]/10 px-2.5 py-0.5 rounded shrink-0 self-start">
                      {edu.period}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Experience */}
            <div>
              <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-[#3B82F6] mb-3 flex items-center gap-1.5 border-b border-[#3B82F6]/30 pb-1">
                <Briefcase className="w-4 h-4" /> EXPERIENCE
              </h2>
              <div className="space-y-4">
                {EXPERIENCES.map((exp) => (
                  <div key={exp.id} className="space-y-1">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                      <h3 className="font-extrabold text-base font-heading text-[#1A1A1A]">
                        {exp.role} {exp.organization && <span className="font-medium text-sm text-[#1A1A1A]/70">— {exp.organization}</span>}
                      </h3>
                      <span className="font-mono text-xs font-bold text-[#3B82F6]">
                        {exp.date}
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-[#1A1A1A]/85 leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Projects */}
            <div>
              <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-[#3B82F6] mb-3 flex items-center gap-1.5 border-b border-[#3B82F6]/30 pb-1">
                <Code className="w-4 h-4" /> FEATURED PROJECTS
              </h2>
              <div className="space-y-4">
                {PROJECTS.map((proj) => (
                  <div key={proj.id} className="space-y-1">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                      <h3 className="font-extrabold text-base font-heading text-[#1A1A1A]">
                        {proj.title}
                      </h3>
                      <span className="font-mono text-xs text-[#1A1A1A]/60">
                        {proj.technologies.join(' · ')}
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-[#1A1A1A]/85 leading-relaxed">
                      {proj.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Skills & Certifications */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
              {/* Skills */}
              <div>
                <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-[#3B82F6] mb-3 flex items-center gap-1.5 border-b border-[#3B82F6]/30 pb-1">
                  <Code className="w-4 h-4" /> TECHNICAL SKILLS
                </h2>
                <div className="space-y-2 text-xs font-sans">
                  <div>
                    <span className="font-bold text-[#1A1A1A]">Languages: </span>
                    <span className="text-[#1A1A1A]/80">{PERSONAL_INFO.skills.languages.join(', ')}</span>
                  </div>
                  <div>
                    <span className="font-bold text-[#1A1A1A]">Technologies: </span>
                    <span className="text-[#1A1A1A]/80">{PERSONAL_INFO.skills.technologies.join(', ')}</span>
                  </div>
                  <div>
                    <span className="font-bold text-[#1A1A1A]">Areas: </span>
                    <span className="text-[#1A1A1A]/80">{PERSONAL_INFO.skills.areas.join(', ')}</span>
                  </div>
                </div>
              </div>

              {/* Certifications */}
              <div>
                <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-[#3B82F6] mb-3 flex items-center gap-1.5 border-b border-[#3B82F6]/30 pb-1">
                  <Award className="w-4 h-4" /> CERTIFICATIONS
                </h2>
                <div className="space-y-2 text-xs font-sans">
                  {PERSONAL_INFO.certifications.map((cert, cIdx) => (
                    <div key={cIdx}>
                      <span className="font-bold text-[#1A1A1A]">{cert.issuer}: </span>
                      <span className="text-[#1A1A1A]/80">{cert.title}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Footer controls */}
          <div className="mt-8 pt-4 border-t border-[#1A1A1A]/20 flex items-center justify-between no-print">
            <span className="text-xs font-mono text-gray-500">
              Verified CV — Thamer Almaqhawi
            </span>
            <button
              onClick={onClose}
              className="px-6 py-2 rounded-xl bg-[#1A1A1A] text-white hover:bg-[#3B82F6] font-extrabold font-heading text-sm transition-colors cursor-pointer"
            >
              Close CV
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
