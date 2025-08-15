import {
  IconHome,
  IconCalendar,
  IconUsers,
  IconPuzzle,
  IconDatabase,
  IconChartBar,
  IconUpload,
  IconStar,
  IconSettings,
} from '@tabler/icons-react';
import { NavigationItem } from '@/types';

export const NAVIGATION_ITEMS: NavigationItem[] = [
  { icon: IconHome, label: 'Home', link: '/' },
  { icon: IconCalendar, label: 'Meetings', link: '/meetings' },
  { icon: IconUsers, label: 'Contacts', link: '/contacts' },
  { icon: IconPuzzle, label: 'Integrations', badge: 'NEW', link: '/integrations' },
  { icon: IconDatabase, label: 'AI Apps', link: '/ai-apps' },
  { icon: IconChartBar, label: 'Analytics', link: '/analytics' },
  { icon: IconUpload, label: 'Uploads', link: '/uploads' },
  { icon: IconStar, label: 'Topic Tracker', link: '/topic-tracker' },
];

export const BOTTOM_NAVIGATION_ITEMS: NavigationItem[] = [
  { icon: IconUsers, label: 'Team', link: '/team' },
  { icon: IconStar, label: 'Upgrade', link: '/upgrade' },
  { icon: IconSettings, label: 'Settings', link: '/settings' },
];

export const ICON_SIZES = {
  COLLAPSED: 32,
  EXPANDED: 20,
} as const;
