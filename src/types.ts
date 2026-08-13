export interface Project {
  id: string;
  number: string;
  badge: string;
  title: string;
  description: string;
  longDescription?: string;
  technologies: string[];
  features?: string[];
  codeSnippet?: string;
  link?: string;
  github?: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  organization?: string;
  description: string;
  date: string;
  isCurrent?: boolean;
  highlights?: string[];
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}
