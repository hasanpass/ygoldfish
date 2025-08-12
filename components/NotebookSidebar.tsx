"use client"
import { 
  IconCalendar, 
  IconUsers, 
  IconShare, 
  IconPlus,
  IconHash,
  IconLock
} from '@tabler/icons-react';
import { dummyChannels } from '@/lib/dummyData';
import { useState } from 'react';

interface NotebookSidebarProps {
  activeSection?: string;
  onSectionChange?: (section: string) => void;
}

const NotebookSidebar = ({ activeSection = 'my-meetings', onSectionChange }: NotebookSidebarProps) => {
  const [expandedChannels, setExpandedChannels] = useState(true);

  const navigationItems = [
    { 
      id: 'my-meetings', 
      icon: IconCalendar, 
      label: 'My Meetings', 
      active: activeSection === 'my-meetings' 
    },
    { 
      id: 'all-meetings', 
      icon: IconUsers, 
      label: 'All Meetings', 
      active: activeSection === 'all-meetings' 
    },
    { 
      id: 'shared-with-me', 
      icon: IconShare, 
      label: 'Shared With Me', 
      active: activeSection === 'shared-with-me' 
    },
  ];

  return (
    <div className="w-64 bg-[#2C3E50] flex flex-col min-h-screen">
      {/* Header */}
      <div className="p-4 border-b border-gray-600">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-gradient-to-br from-pink-500 to-purple-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">📓</span>
          </div>
          <span className="text-white font-bold text-xl">Notebook</span>
        </div>
      </div>

      {/* Navigation Items */}
      <nav className="flex-1 flex flex-col py-4">
        <div className="px-4 space-y-1">
          {navigationItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onSectionChange?.(item.id)}
              className={`flex items-center space-x-3 px-3 py-3 rounded-lg transition-all duration-200 w-full ${
                item.active
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'text-gray-300 hover:text-white hover:bg-slate-600/70'
              }`}
            >
              <item.icon size={20} />
              <span className="text-sm font-medium">{item.label}</span>
            </button>
          ))}
        </div>

        {/* Channels Section */}
        <div className="mt-8 px-4">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-gray-400 text-sm font-medium uppercase tracking-wide">
              Channels
            </h3>
            <button 
              onClick={() => setExpandedChannels(!expandedChannels)}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <IconPlus size={16} className={`transform transition-transform ${expandedChannels ? 'rotate-45' : ''}`} />
            </button>
          </div>

          {expandedChannels && (
            <div className="space-y-1">
              {dummyChannels.map((channel) => (
                <button
                  key={channel.id}
                  className="flex items-center space-x-3 px-3 py-2 rounded-lg text-gray-300 hover:text-white hover:bg-slate-600/70 transition-all duration-200 w-full"
                >
                  {channel.isPrivate ? (
                    <IconLock size={16} className="text-gray-400" />
                  ) : (
                    <IconHash size={16} className="text-gray-400" />
                  )}
                  <span className="text-sm truncate">{channel.name}</span>
                  <span className="ml-auto text-xs text-gray-500">{channel.memberCount}</span>
                </button>
              ))}
              
              {/* Create Channel Button */}
              <button className="flex items-center space-x-3 px-3 py-2 rounded-lg text-gray-400 hover:text-white hover:bg-slate-600/70 transition-all duration-200 w-full mt-2">
                <IconPlus size={16} />
                <span className="text-sm">Create</span>
              </button>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default NotebookSidebar;
