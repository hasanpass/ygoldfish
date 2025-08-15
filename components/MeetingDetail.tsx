"use client"
import { IconClock, IconUser, IconCalendar, IconVideo } from '@tabler/icons-react';
import { useState, memo, useCallback } from 'react';
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

  const handleTabChange = useCallback((tabId: TabType) => {
    setActiveTab(tabId);
  }, []);

  return (
    <div className="flex-1 flex bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden m-4">
      {/* Left Column - Overview/Outline/Chapters */}
      <div className="w-1/2 border-r border-gray-200 flex flex-col">
        {/* Header */}
        <div className="border-b border-gray-100 p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <IconVideo size={20} className="text-blue-600" />
              <span className="text-sm text-gray-600">Video</span>
            </div>
          </div>
          
          <h1 className="text-xl font-semibold text-gray-900 mb-3">{meeting.title}</h1>
          
          <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
            <span className="flex items-center gap-1">
              <IconUser size={16} />
              {meeting.host}
            </span>
            <span className="flex items-center gap-1">
              <IconCalendar size={16} />
              {formatDate(meeting.date)}
            </span>
            <span className="flex items-center gap-1">
              <IconClock size={16} />
              {meeting.durationMinutes} mins
            </span>
          </div>

          {/* Tabs */}
          <div className="flex border-b border-gray-100">
            {TABS.map((tab) => (
              <button
                key={tab.id}
                onClick={() => handleTabChange(tab.id)}
                className={`px-4 py-2 text-sm font-medium border-b-2 transition-colors ${
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

        {/* Content */}
        <div className="flex-1 p-6 overflow-y-auto">
          {activeTab === 'overview' && (
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Overview</h3>
              <p className="text-gray-700 leading-relaxed">{meeting.overview}</p>
            </div>
          )}

          {activeTab === 'outline' && (
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Outline</h3>
              <div className="space-y-3">
                {meeting.outline.map((item) => (
                  <div key={item.id} className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                    <div className="text-xs text-blue-600 font-mono mt-1">{item.timestamp}</div>
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-900">{item.title}</h4>
                      <p className="text-xs text-gray-500">{item.duration}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'chapters' && (
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Chapters</h3>
              <div className="space-y-4">
                {meeting.chapters.map((chapter) => (
                  <div key={chapter.id} className="p-4 border border-gray-100 rounded-lg hover:bg-gray-50 transition-colors">
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="font-medium text-gray-900">{chapter.title}</h4>
                      <div className="text-xs text-blue-600 font-mono">{chapter.timestamp}</div>
                    </div>
                    <p className="text-sm text-gray-600 mb-1">{chapter.summary}</p>
                    <p className="text-xs text-gray-500">Duration: {chapter.duration}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Right Column - Transcript */}
      <div className="w-1/2 flex flex-col">
        {/* Transcript Header */}
        <div className="border-b border-gray-100 p-6">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold text-gray-900">Transcript</h3>
            <button className="text-sm text-blue-600 hover:text-blue-700">Ask Fred</button>
          </div>
        </div>

        {/* Transcript Content */}
        <div className="flex-1 p-6 overflow-y-auto space-y-4">
          {meeting.transcript.map((item) => (
            <div key={item.id} className="flex items-start gap-3">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-green-600 text-xs font-semibold">
                  {item.speaker.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-medium text-gray-900 text-sm">{item.speaker}</span>
                  <span className="text-xs text-blue-600 font-mono">{item.timestamp}</span>
                </div>
                <p className="text-sm text-gray-700 leading-relaxed">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
});

MeetingDetail.displayName = 'MeetingDetail';

export default MeetingDetail;
