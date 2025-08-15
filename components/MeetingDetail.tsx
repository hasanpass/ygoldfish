"use client"
import { IconClock, IconUser, IconCalendar, IconVideo, IconSearch } from '@tabler/icons-react';
import { useState, memo, useCallback, useRef } from 'react';
import { MeetingDetailProps, TabType, Tab } from '@/types';

const TABS: Tab[] = [
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

const MeetingDetail = memo<MeetingDetailProps>(({ meeting }) => {
  const [activeTab, setActiveTab] = useState<TabType>('overview');
  const [searchQuery, setSearchQuery] = useState('');
  const leftScrollRef = useRef<HTMLDivElement>(null);
  const rightScrollRef = useRef<HTMLDivElement>(null);

  const handleTabChange = useCallback((tabId: TabType) => {
    setActiveTab(tabId);
  }, []);

  const filteredTranscript = meeting.transcript.filter(item =>
    searchQuery === '' || 
    item.text.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.speaker.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex-1 flex flex-col bg-white rounded-2xl shadow-xl overflow-hidden m-4 border border-gray-100">
      {/* Main Content Area */}
      <div className="flex flex-1 min-h-0">
        {/* Left Column - Overview/Outline/Chapters */}
        <div className="w-full lg:w-1/2 border-r border-gray-100 flex flex-col bg-gradient-to-br from-white to-gray-50">
        {/* Header */}
        <div className="border-b border-gray-100 p-4 lg:p-6 bg-white">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <div className="p-2 bg-blue-100 rounded-lg">
                <IconVideo size={20} className="text-blue-600" />
              </div>
              <div>
                <span className="text-sm font-medium text-gray-900">Video Recording</span>
                <p className="text-xs text-gray-500">High Quality • 1080p</p>
              </div>
            </div>
          </div>
          
          <h1 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4 leading-tight">{meeting.title}</h1>
          
          <div className="flex flex-wrap items-center gap-4 lg:gap-6 text-sm text-gray-600 mb-4">
            <span className="flex items-center gap-2">
              <IconUser size={16} />
              <span className="font-medium">{meeting.host}</span>
            </span>
            <span className="flex items-center gap-2">
              <IconCalendar size={16} />
              {formatDate(meeting.date)}
            </span>
            <span className="flex items-center gap-2">
              <IconClock size={16} />
              {meeting.durationMinutes} mins
            </span>
          </div>

          {/* Enhanced Tabs */}
          <div className="flex border-b border-gray-200 overflow-x-auto">
            {TABS.map((tab) => (
              <button
                key={tab.id}
                onClick={() => handleTabChange(tab.id)}
                className={`px-4 lg:px-6 py-3 text-sm font-medium border-b-2 transition-all duration-200 whitespace-nowrap ${
                  activeTab === tab.id
                    ? 'border-blue-500 text-blue-600 bg-blue-50'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 hover:bg-gray-50'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <div 
          ref={leftScrollRef}
          className="flex-1 p-4 lg:p-6 overflow-y-auto custom-scrollbar scroll-smooth"
          style={{ 
            scrollBehavior: 'smooth',
            maxHeight: 'calc(100vh - 200px)',
            minHeight: '300px'
          }}
        >
          {activeTab === 'overview' && (
            <div className="animate-fadeIn">
              <h3 className="font-semibold text-gray-900 mb-4 text-lg">Overview</h3>
              <div className="prose prose-gray max-w-none">
                <p className="text-gray-700 leading-relaxed text-base">{meeting.overview}</p>
              </div>
            </div>
          )}

          {activeTab === 'outline' && (
            <div className="animate-fadeIn">
              <h3 className="font-semibold text-gray-900 mb-4 text-lg">Outline</h3>
              <div className="space-y-3">
                {meeting.outline.map((item, index) => (
                  <div 
                    key={item.id} 
                    className="group flex items-start gap-4 p-4 rounded-xl hover:bg-white hover:shadow-md transition-all duration-200 cursor-pointer border border-transparent hover:border-gray-200 hover-scale"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="text-sm text-blue-600 font-mono mt-1 bg-blue-50 px-2 py-1 rounded">
                      {item.timestamp}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors">
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
              <h3 className="font-semibold text-gray-900 mb-4 text-lg">Chapters</h3>
              <div className="space-y-4">
                {meeting.chapters.map((chapter, index) => (
                  <div 
                    key={chapter.id} 
                    className="group p-5 border border-gray-200 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-200 cursor-pointer hover-scale"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex items-start justify-between mb-3">
                      <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                        {chapter.title}
                      </h4>
                      <div className="text-sm text-blue-600 font-mono bg-blue-50 px-2 py-1 rounded">
                        {chapter.timestamp}
                      </div>
                    </div>
                    <p className="text-gray-600 mb-2 leading-relaxed">{chapter.summary}</p>
                    <p className="text-sm text-gray-500">Duration: {chapter.duration}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Right Column - Transcript */}
      <div className="w-full lg:w-1/2 flex flex-col bg-gradient-to-br from-gray-50 to-white">
        {/* Enhanced Transcript Header */}
        <div className="border-b border-gray-100 p-4 lg:p-6 bg-white">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-gray-900 text-lg">Transcript</h3>
            <button className="px-4 py-2 text-sm text-blue-600 hover:text-blue-700 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors">
              Ask Fred
            </button>
          </div>
          
          {/* Search Bar */}
          <div className="relative">
            <IconSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            <input
              type="text"
              placeholder="Search transcript..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm bg-gray-50 hover:bg-white transition-all duration-200"
            />
          </div>
        </div>

        {/* Enhanced Transcript Content */}
        <div 
          ref={rightScrollRef}
          className="flex-1 p-4 lg:p-6 overflow-y-auto space-y-4 scroll-smooth custom-scrollbar"
          style={{ 
            scrollBehavior: 'smooth',
            maxHeight: 'calc(100vh - 200px)',
            minHeight: '300px'
          }}
        >
          {filteredTranscript.map((item, index) => (
            <div 
              key={item.id} 
              className="group flex items-start gap-4 p-4 rounded-xl transition-all duration-300 cursor-pointer hover:bg-white hover:shadow-md border border-transparent hover:border-gray-200"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center flex-shrink-0 shadow-md">
                <span className="text-white text-sm font-bold">
                  {item.speaker.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-3 mb-2">
                  <span className="font-semibold text-gray-900 text-sm">{item.speaker}</span>
                  <span className="text-xs text-blue-600 font-mono bg-blue-50 px-2 py-1 rounded group-hover:bg-blue-100 transition-colors">
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
    </div>
  );
});

MeetingDetail.displayName = 'MeetingDetail';

export default MeetingDetail;
