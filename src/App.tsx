import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { SelectedWork } from './components/SelectedWork';
import { Experience } from './components/Experience';
import { CLITerminal } from './components/CLITerminal';
import { ContactSection } from './components/ContactSection';
import { ProjectModal } from './components/ProjectModal';
import { CVModal } from './components/CVModal';
import { ChatDrawer } from './components/ChatDrawer';
import { Project } from './types';
import { PERSONAL_INFO } from './data/portfolioData';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isCVOpen, setIsCVOpen] = useState(false);
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);
  const [emailCopied, setEmailCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[#ECECE8] text-[#1A1A1A] font-sans antialiased pb-12 selection:bg-[#FFD84D]">
      {/* Sticky Top Header */}
      <Header 
        onOpenChat={() => setIsChatOpen(true)}
        onOpenCV={() => setIsCVOpen(true)}
        onOpenTerminal={() => setIsTerminalOpen(true)}
        onCopyEmail={handleCopyEmail}
        emailCopied={emailCopied}
      />

      {/* Animated Main Sections */}
      <motion.main 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="space-y-4 sm:space-y-6"
      >
        {/* Hero Section (Cover Sheet) */}
        <Hero 
          onOpenChat={() => setIsChatOpen(true)} 
          onOpenCV={() => setIsCVOpen(true)}
        />

        {/* Section 02: Selected Work */}
        <section id="work">
          <SelectedWork onSelectProject={(project) => setSelectedProject(project)} />
        </section>

        {/* Section 03: Experience */}
        <section id="experience">
          <Experience />
        </section>

        {/* Section 04: Contact */}
        <section id="contact">
          <ContactSection 
            onCopyEmail={handleCopyEmail}
            emailCopied={emailCopied}
            onOpenCV={() => setIsCVOpen(true)}
          />
        </section>
      </motion.main>

      {/* CLI Terminal Modal */}
      <CLITerminal 
        isOpen={isTerminalOpen}
        onClose={() => setIsTerminalOpen(false)}
        onOpenCV={() => setIsCVOpen(true)}
        onOpenChat={() => setIsChatOpen(true)}
      />

      {/* Project Detail Modal */}
      <ProjectModal 
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      {/* Full CV Modal */}
      <CVModal
        isOpen={isCVOpen}
        onClose={() => setIsCVOpen(false)}
      />

      {/* Interactive AI Chat Drawer */}
      <ChatDrawer 
        isOpen={isChatOpen}
        onClose={() => setIsChatOpen(false)}
      />
    </div>
  );
}

