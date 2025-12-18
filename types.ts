import { LucideIcon } from 'lucide-react';

export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  githubUrl: string;
  demoUrl: string;
}

export interface ExperienceItem {
  id: string;
  title: string;
  company: string;
  period: string;
  description: string;
  skills: string[];
}

export interface SkillCategory {
  title: string;
  icon: LucideIcon;
  skills: string[];
  color: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: LucideIcon;
}