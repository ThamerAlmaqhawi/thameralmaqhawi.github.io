import React, { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon, Maximize2, Minimize2, X, CornerDownLeft, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';
import { PERSONAL_INFO, PROJECTS, EXPERIENCES } from '../data/portfolioData';

interface CLITerminalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenCV: () => void;
  onOpenChat: () => void;
}

interface CommandLog {
  id: string;
  command: string;
  output: React.ReactNode;
}

export const CLITerminal: React.FC<CLITerminalProps> = ({ isOpen, onClose, onOpenCV, onOpenChat }) => {
  const [input, setInput] = useState('');
  const [isExpanded, setIsExpanded] = useState(false);
  const [logs, setLogs] = useState<CommandLog[]>([
    {
      id: 'init-1',
      command: '',
      output: (
        <div className="space-y-1 text-gray-300 font-mono text-xs sm:text-sm">
          <p className="text-[#FFD84D] font-bold">
            Thamer Almaqhawi CLI Terminal v1.0.0 [KFUPM / Harvard CS50]
          </p>
          <p className="text-gray-400">
            Type <span className="text-[#3B82F6] font-bold">"help"</span> to view available terminal commands.
          </p>
        </div>
      )
    }
  ]);

  const inputRef = useRef<HTMLInputElement>(null);
  const terminalEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [logs]);

  if (!isOpen) return null;

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = input.trim().toLowerCase();
    if (!cmd) return;

    setInput('');

    let outputNode: React.ReactNode = null;

    switch (cmd) {
      case 'help':
        outputNode = (
          <div className="text-xs sm:text-sm font-mono space-y-1.5 text-gray-300">
            <p className="text-[#FFD84D] font-bold">Available Terminal Commands:</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 py-1 text-gray-300">
              <div><span className="text-emerald-400 font-bold">bio</span> - Short summary</div>
              <div><span className="text-emerald-400 font-bold">education</span> - KFUPM & High School</div>
              <div><span className="text-emerald-400 font-bold">sat</span> - SAT & IELTS scores</div>
              <div><span className="text-emerald-400 font-bold">projects</span> - 4 Core Projects</div>
              <div><span className="text-emerald-400 font-bold">experience</span> - Internships & Roles</div>
              <div><span className="text-emerald-400 font-bold">skills</span> - Languages & Frameworks</div>
              <div><span className="text-emerald-400 font-bold">certifications</span> - Harvard CS50</div>
              <div><span className="text-emerald-400 font-bold">contact</span> - Email & LinkedIn</div>
              <div><span className="text-emerald-400 font-bold">cv</span> - Open Full CV</div>
              <div><span className="text-emerald-400 font-bold">ai</span> - Launch Gemini AI Chat</div>
              <div><span className="text-emerald-400 font-bold">clear</span> - Clear Screen</div>
              <div><span className="text-emerald-400 font-bold">whoami</span> - User Identity</div>
            </div>
          </div>
        );
        break;

      case 'bio':
        outputNode = (
          <div className="text-xs sm:text-sm font-mono text-gray-300 space-y-1">
            <p className="text-[#FFD84D] font-bold">Thamer Almaqhawi</p>
            <p>Computer Science Student at King Fahd University of Petroleum & Minerals (KFUPM).</p>
            <p className="text-[#3B82F6]">Motto: {PERSONAL_INFO.motto}</p>
          </div>
        );
        break;

      case 'education':
        outputNode = (
          <div className="text-xs sm:text-sm font-mono text-gray-300 space-y-2">
            <p className="text-[#FFD84D] font-bold">🎓 Education Credentials:</p>
            {PERSONAL_INFO.education.map((edu, idx) => (
              <div key={idx} className="border-l-2 border-[#3B82F6] pl-2">
                <p className="font-bold text-white">{edu.institution}</p>
                <p className="text-gray-400">{edu.degree} ({edu.period})</p>
                {edu.scores && <p className="text-emerald-400">{edu.scores.join(' | ')}</p>}
              </div>
            ))}
          </div>
        );
        break;

      case 'sat':
        outputNode = (
          <div className="text-xs sm:text-sm font-mono text-gray-300 space-y-1">
            <p className="text-[#FFD84D] font-bold">📊 Academic Standardized Scores:</p>
            <p>• <span className="text-emerald-400 font-bold">SAT Score:</span> 1510 / 1600 (800 / 800 Math)</p>
            <p>• <span className="text-emerald-400 font-bold">IELTS Academic:</span> 7.5 / 9.0</p>
            <p>• <span className="text-emerald-400 font-bold">High School GPA:</span> 98.86%</p>
          </div>
        );
        break;

      case 'projects':
        outputNode = (
          <div className="text-xs sm:text-sm font-mono text-gray-300 space-y-2">
            <p className="text-[#FFD84D] font-bold">🚀 Featured Projects:</p>
            {PROJECTS.map((p) => (
              <div key={p.id} className="border-l-2 border-[#FFD84D] pl-2">
                <p className="font-bold text-white">{p.number} — {p.title}</p>
                <p className="text-gray-400">{p.description}</p>
                <p className="text-[#3B82F6] text-xs">Stack: {p.technologies.join(', ')}</p>
              </div>
            ))}
          </div>
        );
        break;

      case 'experience':
        outputNode = (
          <div className="text-xs sm:text-sm font-mono text-gray-300 space-y-2">
            <p className="text-[#FFD84D] font-bold">💼 Work & Leadership Experience:</p>
            {EXPERIENCES.map((e) => (
              <div key={e.id} className="border-l-2 border-[#3B82F6] pl-2">
                <p className="font-bold text-white">{e.role} <span className="text-gray-400">({e.date})</span></p>
                <p className="text-gray-300">{e.description}</p>
              </div>
            ))}
          </div>
        );
        break;

      case 'skills':
        outputNode = (
          <div className="text-xs sm:text-sm font-mono text-gray-300 space-y-1">
            <p className="text-[#FFD84D] font-bold">🛠 Technical Skills:</p>
            <p><span className="text-emerald-400">Languages:</span> {PERSONAL_INFO.skills.languages.join(', ')}</p>
            <p><span className="text-emerald-400">Tech Stack:</span> {PERSONAL_INFO.skills.technologies.join(', ')}</p>
            <p><span className="text-emerald-400">Specializations:</span> {PERSONAL_INFO.skills.areas.join(', ')}</p>
          </div>
        );
        break;

      case 'certifications':
        outputNode = (
          <div className="text-xs sm:text-sm font-mono text-gray-300 space-y-1">
            <p className="text-[#FFD84D] font-bold">📜 Certifications & Honors:</p>
            {PERSONAL_INFO.certifications.map((c, idx) => (
              <p key={idx}>• <span className="text-white font-bold">{c.issuer}:</span> {c.title} ({c.date})</p>
            ))}
          </div>
        );
        break;

      case 'contact':
        outputNode = (
          <div className="text-xs sm:text-sm font-mono text-gray-300 space-y-1">
            <p className="text-[#FFD84D] font-bold">📬 Contact Thamer Almaqhawi:</p>
            <p>• Email: <a href={`mailto:${PERSONAL_INFO.email}`} className="text-[#3B82F6] underline">{PERSONAL_INFO.email}</a></p>
            <p>• Phone: <span className="text-white">{PERSONAL_INFO.phone}</span></p>
            <p>• LinkedIn: <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer" className="text-[#3B82F6] underline">{PERSONAL_INFO.linkedin}</a></p>
          </div>
        );
        break;

      case 'cv':
        onOpenCV();
        outputNode = <p className="text-emerald-400 font-mono text-xs">✓ Opening Curriculum Vitae Modal...</p>;
        break;

      case 'ai':
        onOpenChat();
        outputNode = <p className="text-[#FFD84D] font-mono text-xs">✓ Opening Thamer AI Assistant...</p>;
        break;

      case 'clear':
        setLogs([]);
        return;

      case 'whoami':
        outputNode = <p className="text-gray-300 font-mono text-xs">guest@thamer-portfolio ~ (Role: Recruiter / Engineer / Tech Explorer)</p>;
        break;

      case 'sudo':
        outputNode = <p className="text-rose-400 font-mono text-xs">Nice try! Thamer Almaqhawi is the only superuser here 😉</p>;
        break;

      default:
        outputNode = (
          <p className="text-rose-400 font-mono text-xs">
            Command not recognized: "{cmd}". Type <span className="text-[#FFD84D] underline font-bold cursor-pointer" onClick={() => setInput('help')}>help</span> for available commands.
          </p>
        );
    }

    setLogs(prev => [
      ...prev,
      {
        id: Date.now().toString(),
        command: cmd,
        output: outputNode
      }
    ]);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/60 backdrop-blur-sm">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className={`w-full max-w-4xl bg-[#0D1117] border-2 border-[#1A1A1A] rounded-2xl overflow-hidden shadow-[8px_8px_0px_#1A1A1A] transition-all duration-300 ${
          isExpanded ? 'h-[85vh]' : 'h-[480px]'
        } flex flex-col relative`}
      >
        {/* Terminal Titlebar (Mac-style) */}
        <div className="bg-[#161B22] px-4 py-3 border-b border-gray-800 flex items-center justify-between shrink-0 select-none">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-rose-500 inline-block cursor-pointer" onClick={onClose}></span>
            <span className="w-3 h-3 rounded-full bg-amber-500 inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-emerald-500 inline-block"></span>

            <div className="ml-3 flex items-center gap-1.5 font-mono text-xs text-gray-300 font-semibold">
              <TerminalIcon className="w-3.5 h-3.5 text-[#3B82F6]" />
              <span>thamer@kfupm:~ (CLI Terminal)</span>
            </div>
          </div>

          <div className="flex items-center gap-2 text-gray-400">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="p-1 hover:text-white transition-colors cursor-pointer"
              title={isExpanded ? "Collapse" : "Expand"}
            >
              {isExpanded ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
            </button>
            <button
              onClick={onClose}
              className="p-1 hover:text-rose-400 transition-colors cursor-pointer"
              title="Close Terminal"
            >
              <X className="w-4 h-4 text-white" />
            </button>
          </div>
        </div>

        {/* Terminal Logs Output Feed */}
        <div 
          className="flex-1 p-4 sm:p-6 overflow-y-auto font-mono text-xs sm:text-sm space-y-4"
          onClick={() => inputRef.current?.focus()}
        >
          {logs.map((log) => (
            <div key={log.id} className="space-y-1">
              {log.command && (
                <div className="flex items-center gap-2 text-gray-400">
                  <span className="text-emerald-400 font-bold">$</span>
                  <span className="text-white font-semibold">{log.command}</span>
                </div>
              )}
              {log.output}
            </div>
          ))}
          <div ref={terminalEndRef} />
        </div>

        {/* Terminal Input Footer */}
        <form 
          onSubmit={handleCommand}
          className="bg-[#161B22] p-3 border-t border-gray-800 flex items-center gap-2 shrink-0 font-mono text-xs sm:text-sm"
        >
          <span className="text-emerald-400 font-bold pl-1">$</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type 'help', 'bio', 'sat', 'projects', 'contact'..."
            className="flex-1 bg-transparent text-white focus:outline-none placeholder-gray-500"
          />
          <button
            type="submit"
            className="p-1.5 rounded bg-gray-800 hover:bg-[#3B82F6] text-gray-300 hover:text-white transition-colors cursor-pointer"
          >
            <CornerDownLeft className="w-3.5 h-3.5" />
          </button>
        </form>
      </motion.div>
    </div>
  );
};
