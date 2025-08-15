"use client"
import { IconHash, IconPlus } from '@tabler/icons-react';
import { useState, useCallback, memo } from 'react';
import { Channel, NotebookNavProps } from '@/types';
import { PRESET_CHANNELS, INITIAL_CUSTOM_CHANNELS } from '@/constants/channels';

const NotebookNav = memo<NotebookNavProps>(({ 
  activeChannel = 'all-meetings', 
  onChannelSelect 
}) => {
  const [customChannels, setCustomChannels] = useState<Channel[]>(INITIAL_CUSTOM_CHANNELS);
  const [newChannelName, setNewChannelName] = useState('');
  const [localActiveChannel, setLocalActiveChannel] = useState(activeChannel);

  const handleAddChannel = useCallback(() => {
    const trimmed = newChannelName.trim();
    if (!trimmed) return;
    
    const allChannels = [...PRESET_CHANNELS, ...customChannels];
    const exists = allChannels.some(c => c.name.toLowerCase() === trimmed.toLowerCase());
    
    if (exists) {
      setNewChannelName('');
      return;
    }
    
    setCustomChannels(prev => [...prev, { 
      id: trimmed.toLowerCase().replace(/\s+/g, '-'), 
      name: trimmed, 
      type: 'custom' 
    }]);
    setNewChannelName('');
  }, [newChannelName, customChannels]);

  const handleChannelSelect = useCallback((channelId: string) => {
    setLocalActiveChannel(channelId);
    onChannelSelect?.(channelId);
  }, [onChannelSelect]);

  return (
    <aside className="w-64 bg-white border-r border-gray-200 flex flex-col py-6 min-h-full">
      <div className="px-4 mb-6">
        <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-4">Notebook</h3>
        
        {/* Preset Channels */}
        <div className="space-y-1 mb-4">
          {PRESET_CHANNELS.map((channel) => {
            const IconComponent = channel.icon!;
            const isActive = localActiveChannel === channel.id;
            
            return (
              <button 
                key={channel.id} 
                onClick={() => handleChannelSelect(channel.id)}
                className={`w-full flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition-colors ${
                  isActive 
                    ? 'bg-blue-100 text-blue-700 font-medium' 
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                <IconComponent size={16} className={isActive ? 'text-blue-600' : 'text-gray-400'} />
                <span className="truncate">{channel.name}</span>
              </button>
            );
          })}
        </div>

        {/* Custom Channels Section */}
        <div className="border-t border-gray-100 pt-4">
          <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Text Channels</h4>
          <div className="flex items-center gap-2 mb-3">
            <input
              value={newChannelName}
              onChange={(e) => setNewChannelName(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleAddChannel()}
              placeholder="Create channel"
              className="flex-1 text-sm px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <button
              onClick={handleAddChannel}
              className="p-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors"
              aria-label="Add channel"
            >
              <IconPlus size={18} />
            </button>
          </div>
        </div>
      </div>

      <div className="px-2 space-y-1">
        {customChannels.map((channel) => {
          const isActive = localActiveChannel === channel.id;
          
          return (
            <button 
              key={channel.id} 
              onClick={() => handleChannelSelect(channel.id)}
              className={`w-full flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition-colors ${
                isActive 
                  ? 'bg-blue-100 text-blue-700 font-medium' 
                  : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              <IconHash size={16} className={isActive ? 'text-blue-600' : 'text-gray-400'} />
              <span className="truncate">{channel.name}</span>
            </button>
          );
        })}
      </div>
    </aside>
  );
});

NotebookNav.displayName = 'NotebookNav';

export default NotebookNav;


