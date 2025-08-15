import { IconProps } from '@tabler/icons-react';
import { ComponentType } from 'react';

// Meeting related types
export interface MeetingData {
  id: string;
  title: string;
  host: string;
  date: string; // ISO date string
  durationMinutes: number;
  overview: string;
  outline: OutlineItem[];
  chapters: Chapter[];
  transcript: TranscriptItem[];
}

export interface OutlineItem {
  id: string;
  title: string;
  timestamp: string;
  duration: string;
}

export interface Chapter {
  id: string;
  title: string;
  timestamp: string;
  duration: string;
  summary: string;
}

export interface TranscriptItem {
  id: string;
  speaker: string;
  timestamp: string;
  text: string;
}

// Navigation types
export interface NavigationItem {
  icon: ComponentType<IconProps>;
  label: string;
  link: string;
  badge?: string;
}

export interface Channel {
  id: string;
  name: string;
  type: 'preset' | 'custom';
  icon?: ComponentType<IconProps>;
}

// Component prop types
export interface SidebarProps {
  collapsed?: boolean;
}

export interface HeaderProps {
  title?: string;
  showHamburger?: boolean;
  onHamburgerHover?: (isHovered: boolean) => void;
}

export interface MeetingDetailProps {
  meeting: MeetingData;
}

export interface HoverSidebarProps {
  isVisible: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

export interface NotebookNavProps {
  activeChannel?: string;
  onChannelSelect?: (channelId: string) => void;
}

// Tab types
export type TabType = 'overview' | 'outline' | 'chapters';

export interface Tab {
  id: TabType;
  label: string;
}

// API response types
export interface ApiResponse<T> {
  data: T;
  success: boolean;
  message?: string;
}

export interface ErrorState {
  message: string;
  code?: number;
}

// Page params for Next.js 15 App Router
export interface MeetingPageParams {
  params: Promise<{
    id: string;
  }>;
}
