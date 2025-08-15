import { IconCalendar, IconUser } from '@tabler/icons-react';
import { Channel } from '@/types';

export const PRESET_CHANNELS: Channel[] = [
  { id: 'all-meetings', name: 'All Meetings', type: 'preset', icon: IconCalendar },
  { id: 'my-meetings', name: 'My Meetings', type: 'preset', icon: IconUser },
];

export const INITIAL_CUSTOM_CHANNELS: Channel[] = [
  { id: 'general', name: 'general', type: 'custom' },
  { id: 'engineering', name: 'engineering', type: 'custom' },
  { id: 'sales', name: 'sales', type: 'custom' },
];
