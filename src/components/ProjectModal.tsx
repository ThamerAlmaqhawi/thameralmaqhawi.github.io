import React, { useState } from 'react';
import { X, Code2, CheckCircle2, Copy, Check, Terminal, ExternalLink } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [copiedCode, setCopiedCode] = useState(false);

  if (!project) return null;

  const handleCopyCode = () => {
    if (project.codeSnippet) {
      navigator.clipboard.writeText(project.codeSnippet);
      setCopiedCode(true);
      setTimeout(() => setCopiedCode(false), 2000);
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/50 backdrop-blur-sm">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 10 }}
          className="bg-white border-2 border-[#1A1A1A] rounded-2xl max-w-3xl w-full p-6 sm:p-8 shadow-[8px_8px_0px_#1A1A1A] relative max-h-[90vh] overflow-y-auto"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full border border-[#1A1A1A] bg-[#ECECE8] hover:bg-[#FFD84D] text-[#1A1A1A] transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Badge & Title */}
          <div className="mb-4">
            <span className="font-mono text-xs font-bold tracking-wider text-[#3B82F6] bg-[#3B82F6]/10 px-3 py-1 rounded border border-[#3B82F6]/20 uppercase inline-block mb-3">
              {project.badge}
            </span>

            <h2 className="text-2xl sm:text-4xl font-extrabold font-heading text-[#1A1A1A] leading-tight">
              {project.title}
            </h2>
          </div>

          {/* Description */}
          <div className="mb-6 space-y-3 font-sans">
            <p className="text-base text-[#1A1A1A]/85 leading-relaxed font-medium">
              {project.longDescription || project.description}
            </p>
          </div>

          {/* Key Features */}
          {project.features && project.features.length > 0 && (
            <div className="mb-6 p-4 rounded-xl bg-[#ECECE8] border border-[#1A1A1A]/30">
              <h3 className="font-heading font-extrabold text-sm uppercase text-[#1A1A1A] mb-3 flex items-center gap-2">
                <Terminal className="w-4 h-4 text-[#3B82F6]" /> Key Features & Capabilities
              </h3>
              <ul className="space-y-2">
                {project.features.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#1A1A1A]/80">
                    <CheckCircle2 className="w-4 h-4 text-[#3B82F6] shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Tech Stack */}
          <div className="mb-6">
            <h3 className="font-mono text-xs font-bold uppercase text-[#1A1A1A]/70 mb-2">
              TECHNOLOGY STACK
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, tIdx) => (
                <span
                  key={tIdx}
                  className="px-3 py-1 rounded-md bg-[#FFD84D] border border-[#1A1A1A] font-mono text-xs font-bold text-[#1A1A1A]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Code Snippet Box */}
          {project.codeSnippet && (
            <div className="mb-6">
              <div className="flex items-center justify-between mb-2">
                <span className="font-mono text-xs font-bold uppercase text-[#1A1A1A]/70 flex items-center gap-1.5">
                  <Code2 className="w-3.5 h-3.5 text-[#3B82F6]" /> Implementation Architecture
                </span>
                <button
                  onClick={handleCopyCode}
                  className="flex items-center gap-1 text-xs font-mono font-semibold text-[#3B82F6] hover:underline cursor-pointer"
                >
                  {copiedCode ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedCode ? "Copied!" : "Copy Snippet"}</span>
                </button>
              </div>

              <div className="p-4 rounded-xl bg-[#1A1A1A] text-white font-mono text-xs overflow-x-auto border border-[#1A1A1A]">
                <pre>
                  <code>{project.codeSnippet}</code>
                </pre>
              </div>
            </div>
          )}

          {/* Action Footer */}
          <div className="pt-4 border-t border-[#1A1A1A]/10 flex items-center justify-end gap-3">
            <button
              onClick={onClose}
              className="px-5 py-2.5 rounded-xl border border-[#1A1A1A] bg-white hover:bg-[#ECECE8] text-sm font-extrabold font-heading text-[#1A1A1A] transition-colors cursor-pointer"
            >
              Close
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
