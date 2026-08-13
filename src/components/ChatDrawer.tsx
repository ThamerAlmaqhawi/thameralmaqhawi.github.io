import React, { useState, useRef, useEffect } from 'react';
import { X, Send, Sparkles, User, Bot, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { ChatMessage } from '../types';
import { PERSONAL_INFO } from '../data/portfolioData';
import { getClientAIResponse } from '../utils/knowledgeBase';

interface ChatDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ChatDrawer: React.FC<ChatDrawerProps> = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      role: 'assistant',
      content: "Hello! I'm Thamer's personal AI Assistant. Ask me anything about his software projects, experience at HungerStation, CS journey at KFUPM, standardized scores (1510 SAT with 800 Math), or technical skills.",
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, loading]);

  const sendQuery = async (queryText: string) => {
    if (!queryText.trim() || loading) return;

    const userMsgText = queryText.trim();
    setInput('');

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      content: userMsgText,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: userMsgText,
          history: messages.map(m => ({ role: m.role, content: m.content }))
        })
      });

      const data = await response.json();
      const botMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: data.reply || getClientAIResponse(userMsgText),
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botMessage]);
    } catch (err) {
      console.warn("API server unavailable (e.g. GitHub Pages static host), using local intelligence engine:", err);
      const fallbackReply = getClientAIResponse(userMsgText);
      setMessages(prev => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          role: 'assistant',
          content: fallbackReply,
          timestamp: new Date()
        }
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleSend = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    sendQuery(input);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex justify-end bg-black/40 backdrop-blur-xs">
        <motion.div
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          className="w-full max-w-md h-full bg-white border-l-2 border-[#1A1A1A] flex flex-col shadow-2xl"
        >
          {/* Header */}
          <div className="p-3.5 border-b border-[#1A1A1A] bg-[#FFD84D] flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full border border-[#1A1A1A] bg-[#1A1A1A] text-white flex items-center justify-center shadow-[1px_1px_0px_#1A1A1A] shrink-0">
                <Sparkles className="w-4 h-4 text-[#FFD84D]" />
              </div>
              <div>
                <h3 className="font-heading font-extrabold text-xs sm:text-sm text-[#1A1A1A] tracking-tight">
                  THAMER AI ASSISTANT
                </h3>
                <p className="text-[10px] font-mono text-[#1A1A1A]/80 font-bold flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse"></span>
                  Online • CV & LinkedIn Context
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-1.5 rounded-md border border-[#1A1A1A] bg-white hover:bg-[#ECECE8] text-[#1A1A1A] transition-colors cursor-pointer shadow-[1px_1px_0px_#1A1A1A]"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Quick Prompts */}
          <div className="p-2.5 bg-[#ECECE8] border-b border-[#1A1A1A]/20 flex gap-1.5 overflow-x-auto text-[11px] font-mono shrink-0 no-scrollbar">
            <button
              onClick={() => sendQuery("What are Thamer's key projects?")}
              className="px-2.5 py-1 rounded bg-white border border-[#1A1A1A]/30 hover:border-[#1A1A1A] whitespace-nowrap cursor-pointer hover:bg-[#FFD84D]/20 transition-colors font-bold"
            >
              🚀 Key Projects
            </button>
            <button
              onClick={() => sendQuery("Tell me about Thamer's work experience and leadership.")}
              className="px-2.5 py-1 rounded bg-white border border-[#1A1A1A]/30 hover:border-[#1A1A1A] whitespace-nowrap cursor-pointer hover:bg-[#FFD84D]/20 transition-colors font-bold"
            >
              💼 Experience
            </button>
            <button
              onClick={() => sendQuery("What is Thamer's academic background at KFUPM and SAT score?")}
              className="px-2.5 py-1 rounded bg-white border border-[#1A1A1A]/30 hover:border-[#1A1A1A] whitespace-nowrap cursor-pointer hover:bg-[#FFD84D]/20 transition-colors font-bold"
            >
              🎓 Education & SAT
            </button>
            <button
              onClick={() => sendQuery("How can I contact and connect with Thamer?")}
              className="px-2.5 py-1 rounded bg-white border border-[#1A1A1A]/30 hover:border-[#1A1A1A] whitespace-nowrap cursor-pointer hover:bg-[#FFD84D]/20 transition-colors font-bold"
            >
              📬 Contact Info
            </button>
          </div>

          {/* Messages Feed */}
          <div className="flex-1 p-3.5 overflow-y-auto space-y-3.5 font-sans text-xs sm:text-sm">
            {messages.map(msg => (
              <div
                key={msg.id}
                className={`flex gap-2.5 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {msg.role === 'assistant' && (
                  <div className="w-7 h-7 rounded-full bg-[#1A1A1A] text-white flex items-center justify-center shrink-0 mt-0.5 shadow-[1px_1px_0px_#1A1A1A]">
                    <Bot className="w-3.5 h-3.5 text-[#FFD84D]" />
                  </div>
                )}

                <div
                  className={`p-3 rounded-xl max-w-[85%] border text-xs sm:text-sm ${
                    msg.role === 'user'
                      ? 'bg-[#3B82F6] text-white border-[#1A1A1A] rounded-tr-none shadow-[2px_2px_0px_#1A1A1A]'
                      : 'bg-[#ECECE8] text-[#1A1A1A] border-[#1A1A1A] rounded-tl-none shadow-[2px_2px_0px_#1A1A1A]/30'
                  }`}
                >
                  <p className="whitespace-pre-wrap leading-relaxed">{msg.content}</p>
                </div>

                {msg.role === 'user' && (
                  <div className="w-7 h-7 rounded-full bg-[#FFD84D] border border-[#1A1A1A] text-[#1A1A1A] flex items-center justify-center shrink-0 mt-0.5 font-extrabold text-xs shadow-[1px_1px_0px_#1A1A1A]">
                    <User className="w-3.5 h-3.5" />
                  </div>
                )}
              </div>
            ))}

            {loading && (
              <div className="flex gap-2.5 items-center text-xs font-mono text-[#1A1A1A]">
                <div className="w-7 h-7 rounded-full overflow-hidden border border-[#1A1A1A] bg-[#FFD84D] flex items-center justify-center shrink-0">
                  <Sparkles className="w-3.5 h-3.5 text-[#1A1A1A]" />
                </div>
                <div className="flex items-center gap-1.5 bg-[#ECECE8] px-3 py-1.5 rounded-xl border border-[#1A1A1A]/30">
                  <Loader2 className="w-3.5 h-3.5 animate-spin text-[#3B82F6]" />
                  <span>Generating answer...</span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Bar */}
          <form onSubmit={handleSend} className="p-2.5 sm:p-3 border-t border-[#1A1A1A] bg-white flex gap-2">
            <input
              type="text"
              value={input}
              onChange={e => setInput(e.target.value)}
              placeholder="Ask a question about Thamer..."
              className="flex-1 px-3 py-2 rounded-lg sm:rounded-xl border border-[#1A1A1A] text-xs sm:text-sm font-sans focus:outline-none focus:ring-2 focus:ring-[#3B82F6]"
            />
            <button
              type="submit"
              disabled={loading || !input.trim()}
              className="px-3.5 py-2 rounded-lg sm:rounded-xl bg-[#1A1A1A] text-white font-extrabold hover:bg-[#3B82F6] transition-colors disabled:opacity-50 cursor-pointer flex items-center justify-center shadow-[2px_2px_0px_#1A1A1A]"
            >
              <Send className="w-3.5 h-3.5" />
            </button>
          </form>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
