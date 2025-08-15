import React, { useState, memo, useCallback, useRef, useEffect } from 'react';
import { 
  Clock, 
  User, 
  Calendar, 
  Video,
  Download,
  Share,
  Bookmark,
  Search,
  MoreVertical,
  Tag
} from 'lucide-react';
import MiniMusicPlayer from './MiniMusicPlayer';

interface MeetingData {
  id: string;
  title: string;
  host: string;
  date: string;
  durationMinutes: number;
  overview: string;
  outline: Array<{
    id: string;
    title: string;
    timestamp: string;
    duration: string;
  }>;
  chapters: Array<{
    id: string;
    title: string;
    timestamp: string;
    summary: string;
    duration: string;
  }>;
  transcript: Array<{
    id: string;
    speaker: string;
    timestamp: string;
    text: string;
  }>;
}

interface EnhancedMeetingDetailProps {
  meeting: MeetingData;
}

const TABS = [
  { id: 'overview', label: 'Overview' },
  { id: 'outline', label: 'Outline' },
  { id: 'chapters', label: 'Chapters' }
];

const formatDate = (iso: string) => {
  const d = new Date(iso);
  return d.toLocaleString(undefined, {
    weekday: 'short',
    month: 'short',
    day: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
};

const formatTime = (seconds: number) => {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins}:${secs.toString().padStart(2, '0')}`;
};

const EnhancedMeetingDetail = memo<EnhancedMeetingDetailProps>(({ meeting }) => {
  const [activeTab, setActiveTab] = useState('chapters');
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration] = useState(meeting.durationMinutes * 60);

  const [searchQuery, setSearchQuery] = useState('');
  const [highlightedTranscriptId, setHighlightedTranscriptId] = useState<string | null>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);
  
  const leftScrollRef = useRef(null);
  const rightScrollRef = useRef(null);
  
  // Simulate audio progress
  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(() => {
        setCurrentTime(prev => {
          if (prev >= duration) {
            setIsPlaying(false);
            return duration;
          }
          return prev + 1;
        });
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [isPlaying, duration]);

  const handleTabChange = useCallback((tabId: string) => {
    setActiveTab(tabId);
  }, []);

  const handlePlayPause = useCallback(() => {
    setIsPlaying(!isPlaying);
  }, [isPlaying]);

  const handleSeek = useCallback((time: number) => {
    setCurrentTime(time);
  }, []);

  const handleSkipForward = useCallback(() => {
    setCurrentTime(prev => Math.min(prev + 10, duration));
  }, [duration]);

  const handleSkipBack = useCallback(() => {
    setCurrentTime(prev => Math.max(prev - 10, 0));
  }, []);

  const handleTranscriptClick = useCallback((timestamp: string) => {
    const [mins, secs] = timestamp.split(':').map(Number);
    const timeInSeconds = mins * 60 + secs;
    handleSeek(timeInSeconds);
    setHighlightedTranscriptId(timestamp);
    setTimeout(() => setHighlightedTranscriptId(null), 3000);
  }, [handleSeek]);

  const filteredTranscript = meeting.transcript.filter(item =>
    searchQuery === '' || 
    item.text.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.speaker.toLowerCase().includes(searchQuery.toLowerCase())
  );



  return (
    <div className="meeting-detail-container bg-gray-50">
      {/* Enhanced Header */}
      <div className="bg-white border-b border-gray-200 px-6 py-4 flex-shrink-0">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-4">
            <div className="p-2 bg-blue-100 rounded-lg">
              <Video size={20} className="text-blue-600" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">{meeting.title}</h1>
              <div className="flex items-center gap-4 text-sm text-gray-600 mt-1">
                <span className="flex items-center gap-1">
                  <User size={14} />
                  {meeting.host}
                </span>
                <span className="flex items-center gap-1">
                  <Calendar size={14} />
                  {formatDate(meeting.date)}
                </span>
                <span className="flex items-center gap-1">
                  <Clock size={14} />
                  {meeting.durationMinutes} mins
                </span>
              </div>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 px-3 py-1.5 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors">
              <Share size={16} />
              Share
            </button>
            <button className="flex items-center gap-2 px-3 py-1.5 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors">
              <Bookmark size={16} />
              Bookmark
            </button>
            <button className="flex items-center gap-2 px-3 py-1.5 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors">
              <Download size={16} />
              Download
            </button>
            <div className="flex items-center gap-1 px-2 py-1 bg-gray-100 rounded-lg">
              <Tag size={14} className="text-gray-500" />
              <span className="text-xs text-gray-600">Work</span>
            </div>
            <button className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">
              <MoreVertical size={18} />
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="meeting-content-wrapper flex">
        {/* Left Panel */}
        <div className="w-1/2 bg-white border-r border-gray-200 flex flex-col">
          {/* Tabs */}
          <div className="border-b border-gray-200 px-6">
            <div className="flex">
              {TABS.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => handleTabChange(tab.id)}
                  className={`px-6 py-4 text-sm font-medium border-b-2 transition-colors ${
                    activeTab === tab.id
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Tab Content */}
          <div className="flex-1 overflow-y-auto p-6 custom-scrollbar">
            {activeTab === 'overview' && (
              <div className="animate-fadeIn">
                <h3 className="font-semibold text-gray-900 mb-4">Overview</h3>
                <p className="text-gray-700 leading-relaxed">{meeting.overview}</p>
              </div>
            )}

            {activeTab === 'outline' && (
              <div className="animate-fadeIn">
                <h3 className="font-semibold text-gray-900 mb-4">Outline</h3>
                <div className="space-y-3">
                  {meeting.outline.map((item, index) => (
                    <div 
                      key={item.id} 
                      className="group flex items-start gap-4 p-4 rounded-lg hover:bg-gray-50 cursor-pointer border border-transparent hover:border-gray-200 transition-all hover-scale"
                      onClick={() => handleTranscriptClick(item.timestamp)}
                    >
                      <div className="text-sm text-blue-600 font-mono bg-blue-50 px-2 py-1 rounded">
                        {item.timestamp}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium text-gray-900 group-hover:text-blue-600">
                          {item.title}
                        </h4>
                        <p className="text-sm text-gray-500 mt-1">{item.duration}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'chapters' && (
              <div className="animate-fadeIn">
                <h3 className="font-semibold text-gray-900 mb-4">Chapters</h3>
                <div className="space-y-4">
                  {meeting.chapters.map((chapter, index) => (
                    <div 
                      key={chapter.id} 
                      className={`group p-4 border rounded-lg cursor-pointer transition-all hover-scale ${
                        index === 2 ? 'bg-blue-50 border-blue-200' : 'border-gray-200 hover:bg-gray-50 hover:border-gray-300'
                      }`}
                      onClick={() => handleTranscriptClick(chapter.timestamp)}
                    >
                      <div className="flex items-start justify-between mb-3">
                        <h4 className={`font-semibold group-hover:text-blue-600 ${
                          index === 2 ? 'text-blue-700' : 'text-gray-900'
                        }`}>
                          {chapter.title}
                        </h4>
                        <div className="text-sm text-blue-600 font-mono bg-blue-50 px-2 py-1 rounded">
                          {chapter.timestamp}
                        </div>
                      </div>
                      <p className="text-gray-600 mb-2">{chapter.summary}</p>
                      <p className="text-sm text-gray-500">Duration: {chapter.duration}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Right Panel - Transcript */}
        <div className="w-1/2 bg-gray-50 flex flex-col">
          {/* Transcript Header */}
          <div className="bg-white border-b border-gray-200 p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-gray-900">Transcript</h3>
              <button className="px-4 py-2 text-sm text-blue-600 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors">
                Ask Fred
              </button>
            </div>
            
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <input
                type="text"
                placeholder="Search transcript..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
              />
            </div>
          </div>

          {/* Transcript Content */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4 custom-scrollbar">
            {filteredTranscript.map((item, index) => (
              <div 
                key={item.id} 
                className={`group flex items-start gap-4 p-4 rounded-lg transition-all cursor-pointer hover-scale ${
                  highlightedTranscriptId === item.timestamp 
                    ? 'bg-blue-50 border-2 border-blue-200' 
                    : 'hover:bg-white border border-transparent hover:border-gray-200'
                }`}
                onClick={() => handleTranscriptClick(item.timestamp)}
              >
                <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-sm font-bold">
                    {item.speaker.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="font-semibold text-gray-900 text-sm">{item.speaker}</span>
                    <span className="text-xs text-blue-600 font-mono bg-blue-50 px-2 py-1 rounded">
                      {item.timestamp}
                    </span>
                  </div>
                  <p className="text-gray-700 leading-relaxed text-sm">
                    {searchQuery && item.text.toLowerCase().includes(searchQuery.toLowerCase()) ? (
                      item.text.split(new RegExp(`(${searchQuery})`, 'gi')).map((part, i) =>
                        part.toLowerCase() === searchQuery.toLowerCase() ? (
                          <mark key={i} className="bg-yellow-200 px-1 rounded">{part}</mark>
                        ) : part
                      )
                    ) : (
                      item.text
                    )}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mini Music Player */}
      <MiniMusicPlayer
        isPlaying={isPlaying}
        currentTime={currentTime}
        duration={duration}
        onPlayPause={handlePlayPause}
        onSeek={handleSeek}
        onSkipForward={handleSkipForward}
        onSkipBack={handleSkipBack}
      />
    </div>
  );
});

EnhancedMeetingDetail.displayName = 'EnhancedMeetingDetail';

export default EnhancedMeetingDetail;