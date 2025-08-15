import React, { useState, useCallback } from 'react';
import { 
  Play, 
  Pause, 
  SkipForward, 
  SkipBack, 
  Volume2,
  Maximize2
} from 'lucide-react';

interface MiniMusicPlayerProps {
  isPlaying: boolean;
  currentTime: number;
  duration: number;
  onPlayPause: () => void;
  onSeek: (time: number) => void;
  onSkipForward: () => void;
  onSkipBack: () => void;
}

const formatTime = (seconds: number) => {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins}:${secs.toString().padStart(2, '0')}`;
};

const MiniMusicPlayer: React.FC<MiniMusicPlayerProps> = ({
  isPlaying,
  currentTime,
  duration,
  onPlayPause,
  onSeek,
  onSkipForward,
  onSkipBack
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const progress = (currentTime / duration) * 100;

  const handleProgressClick = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const percentage = clickX / rect.width;
    const newTime = percentage * duration;
    onSeek(newTime);
  }, [duration, onSeek]);

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <div className="bg-white border border-gray-200 rounded-lg shadow-lg transition-all duration-300 w-72">
        {/* Progress Bar */}
        <div className="h-1 bg-gray-200 rounded-t-lg cursor-pointer" onClick={handleProgressClick}>
          <div 
            className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-t-lg transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Player Controls */}
        <div className="p-3">
          <div className="flex items-center justify-between">
            {/* Time Display */}
            <div className="text-xs font-mono text-gray-600">
              {formatTime(currentTime)} / {formatTime(duration)}
            </div>

            {/* Expand/Collapse Button */}
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="p-1 text-gray-500 hover:text-gray-700 rounded transition-colors"
            >
              <Maximize2 size={14} />
            </button>
          </div>

          {/* Main Controls */}
          <div className="flex items-center justify-center gap-3 mt-2">
            <button 
              onClick={onSkipBack}
              className="p-1.5 text-gray-600 hover:text-gray-900 rounded-full hover:bg-gray-100 transition-colors"
            >
              <SkipBack size={16} />
            </button>
            
            <button 
              onClick={onPlayPause}
              className="p-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full hover:from-blue-600 hover:to-purple-600 transition-all shadow-md hover:shadow-lg transform hover:scale-105"
            >
              {isPlaying ? <Pause size={18} /> : <Play size={18} />}
            </button>
            
            <button 
              onClick={onSkipForward}
              className="p-1.5 text-gray-600 hover:text-gray-900 rounded-full hover:bg-gray-100 transition-colors"
            >
              <SkipForward size={16} />
            </button>
          </div>

          {/* Expanded Controls */}
          {isExpanded && (
            <div className="mt-3 pt-3 border-t border-gray-100">
              <div className="flex items-center justify-between text-xs text-gray-500">
                <span>Volume</span>
                <Volume2 size={12} />
              </div>
              <div className="mt-1 h-1 bg-gray-200 rounded-full">
                <div className="h-full bg-gray-400 rounded-full" style={{ width: '70%' }} />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MiniMusicPlayer;
