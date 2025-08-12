"use client"
import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { dummyMeetings } from '@/lib/dummyData';
import type { Meeting } from '@/lib/dummyData';
import Sidebar from '@/components/Sidebar';
import { 
  IconChevronRight, 
  IconVideo,
  IconDownload,
  IconShare,
  IconStar,
  IconBookmark,
  IconSearch
} from '@tabler/icons-react';

const MeetingDetailPage = () => {
  const params = useParams();
  const router = useRouter();
  const [meeting, setMeeting] = useState<Meeting | null>(null);
  const [activeTab, setActiveTab] = useState('overview');
  const [sidebarHovered, setSidebarHovered] = useState(false);

  useEffect(() => {
    const foundMeeting = dummyMeetings.find(m => m.id === params.id);
    setMeeting(foundMeeting || null);
  }, [params.id]);

  if (!meeting) {
    return (
      <div className="flex h-screen bg-[#f8fafc] items-center justify-center">
        <div className="text-center">
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Meeting not found</h2>
          <button 
            onClick={() => router.push('/meetings')}
            className="text-blue-600 hover:text-blue-800"
          >
            Back to meetings
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-screen bg-white overflow-hidden">
      {/* Main Content Area - Full width since sidebar is hidden */}
      <div className="flex-1 flex flex-col">
        {/* Top Header with Breadcrumb */}
        <div className="h-16 bg-white border-b border-gray-200 flex items-center px-6">
          <div className="flex items-center space-x-2">
            {/* Hamburger Menu Icon */}
            <button 
              className="p-1 text-gray-600 hover:text-gray-900"
              onMouseEnter={() => setSidebarHovered(true)}
              onMouseLeave={() => setSidebarHovered(false)}
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                <rect x="0" y="2" width="16" height="2"/>
                <rect x="0" y="7" width="16" height="2"/>
                <rect x="0" y="12" width="16" height="2"/>
              </svg>
            </button>
            
            {/* Breadcrumb */}
            <div className="flex items-center space-x-1 text-sm text-gray-600">
              <button 
                onClick={() => router.push('/meetings')}
                className="hover:text-blue-600 transition-colors cursor-pointer"
              >
                #All Meetings
              </button>
              <IconChevronRight size={14} className="text-gray-400" />
              <span className="text-gray-900 font-medium">{meeting.title}</span>
            </div>
            
            {/* More options */}
            <button className="p-1 text-gray-400 hover:text-gray-600 ml-2">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                <circle cx="8" cy="3" r="1.5"/>
                <circle cx="8" cy="8" r="1.5"/>
                <circle cx="8" cy="13" r="1.5"/>
              </svg>
            </button>
          </div>
          
          {/* Right side header actions */}
          <div className="ml-auto flex items-center space-x-4">
            <button className="px-3 py-1.5 bg-teal-50 text-teal-700 text-sm font-medium rounded hover:bg-teal-100 transition-colors">
              Upgrade
            </button>
            <button className="p-2 text-gray-600 hover:text-gray-900 rounded-lg hover:bg-gray-100 transition-colors">
              <IconShare size={18} />
            </button>
            <button className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-semibold">
              T
            </button>
          </div>
        </div>

        {/* Meeting Title Header */}
        <div className="bg-white px-6 py-4 border-b border-gray-200">
          <div className="flex items-start justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">🔥</span>
              </div>
              <div>
                <h1 className="text-xl font-semibold text-gray-900">{meeting.title}</h1>
                <div className="flex items-center space-x-4 text-sm text-gray-600 mt-1">
                  <span>{meeting.organizer}</span>
                  <span>{meeting.date}, {meeting.time}</span>
                  <span>English (Global)</span>
                </div>
              </div>
            </div>
            
            {/* Video and Action Buttons */}
            <div className="flex items-center space-x-2">
              <button className="px-3 py-1.5 border border-gray-300 text-gray-700 text-sm rounded hover:bg-gray-50 transition-colors flex items-center space-x-1">
                <IconVideo size={16} />
                <span>Video</span>
              </button>
              <button className="p-2 text-gray-600 hover:text-gray-900 rounded hover:bg-gray-100 transition-colors">
                <IconSearch size={18} />
              </button>
              <button className="p-2 text-gray-600 hover:text-gray-900 rounded hover:bg-gray-100 transition-colors">
                <IconDownload size={18} />
              </button>
              <button className="p-2 text-gray-600 hover:text-gray-900 rounded hover:bg-gray-100 transition-colors">
                <IconStar size={18} />
              </button>
              <button className="p-2 text-gray-600 hover:text-gray-900 rounded hover:bg-gray-100 transition-colors">
                <IconBookmark size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* Two Column Layout - 60/40 Split */}
        <div className="flex-1 flex overflow-hidden bg-gray-50">
          {/* Left Column - Overview/Outline (60%) */}
          <div className="w-[60%] bg-white flex flex-col">
            {/* Navigation Tabs */}
            <div className="h-16 flex bg-white border-b border-gray-200">
              <button 
                onClick={() => setActiveTab('overview')}
                className={`flex items-center space-x-2 px-6 h-full text-sm font-medium transition-all duration-200 border-b-2 ${
                  activeTab === 'overview' 
                    ? 'text-blue-600 border-blue-500 bg-white' 
                    : 'text-gray-600 hover:text-gray-900 border-transparent hover:bg-gray-50'
                }`}
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" className="text-blue-500">
                  <path d="M8 0L10.2 5.8L16 5.8L11.6 9.2L13.8 15L8 11.6L2.2 15L4.4 9.2L0 5.8L5.8 5.8L8 0Z"/>
                </svg>
                <span>General Summary</span>
              </button>
              <button 
                onClick={() => setActiveTab('outline')}
                className={`px-6 h-full text-sm font-medium transition-all duration-200 border-b-2 ${
                  activeTab === 'outline' 
                    ? 'text-blue-600 border-blue-500 bg-white' 
                    : 'text-gray-600 hover:text-gray-900 border-transparent hover:bg-gray-50'
                }`}
              >
                Outline
              </button>
            </div>

            {/* Content Area */}
            <div className="flex-1 overflow-auto bg-white">
              {activeTab === 'overview' && (
                <div className="p-8">
                  <div className="max-w-4xl">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Overview</h2>
                    {meeting.summary ? (
                      <div className="prose prose-lg text-gray-700 leading-relaxed">
                        <p className="text-base leading-7 mb-6">{meeting.summary}</p>
                      </div>
                    ) : (
                      <div className="text-center py-12">
                        <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-gray-400">
                            <path d="M9 12H15M9 16H15M17 21H7C5.89543 21 5 20.1046 5 19V5C5 3.89543 5.89543 3 7 3H12.5858C12.851 3 13.1054 3.10536 13.2929 3.29289L19.7071 9.70711C19.8946 9.89464 20 10.149 20 10.4142V19C20 20.1046 19.1046 21 18 21H17Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                        <h3 className="text-lg font-medium text-gray-900 mb-2">No summary available</h3>
                        <p className="text-gray-500">Meeting summary will appear here once processed.</p>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {activeTab === 'outline' && (
                <div className="p-8">
                  <div className="max-w-4xl">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Outline</h2>
                    {meeting.outline ? (
                      <div className="space-y-8">
                        {meeting.outline.map((item, index) => (
                          <div key={item.id} className="relative">
                            <div className="flex items-start space-x-4">
                              <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl flex items-center justify-center border border-blue-200">
                                <span className="text-blue-600 font-semibold text-sm">{item.timestamp}</span>
                              </div>
                              <div className="flex-1 min-w-0 pt-1">
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{item.content}</p>
                              </div>
                            </div>
                            {meeting.outline && index < meeting.outline.length - 1 && (
                              <div className="absolute left-7 top-16 w-0.5 h-6 bg-gray-200"></div>
                            )}
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="text-center py-12">
                        <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-gray-400">
                            <path d="M8 6H21M8 12H21M8 18H21M3 6H3.01M3 12H3.01M3 18H3.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                        <h3 className="text-lg font-medium text-gray-900 mb-2">No outline available</h3>
                        <p className="text-gray-500">Meeting outline will appear here once processed.</p>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right Column - Transcript (40%) */}
          <div className="w-[40%] bg-white flex flex-col border-l border-gray-200">
            {/* Tab Headers */}
            <div className="h-16 flex items-center justify-between bg-white border-b border-gray-200 px-6">
              <div className="flex items-center space-x-8 h-full">
                <button className="flex items-center space-x-2 text-sm font-medium text-blue-600 h-full border-b-2 border-blue-500">
                  <span>Transcript</span>
                </button>
                <button className="text-sm font-medium text-gray-600 hover:text-gray-900 h-full flex items-center transition-colors">
                  AskFred
                </button>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <IconSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
                  <input
                    type="text"
                    placeholder="Find or Replace"
                    className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-52 bg-gray-50 hover:bg-white transition-colors"
                  />
                </div>
              </div>
            </div>

            {/* Transcript Content */}
            <div className="flex-1 overflow-auto bg-white">
              {meeting.transcript ? (
                <div className="p-6">
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-green-600 text-white rounded-full flex items-center justify-center text-sm font-semibold flex-shrink-0 shadow-sm">
                        K
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center space-x-3 mb-3">
                          <span className="text-sm font-semibold text-green-600">Krish Ramineni</span>
                          <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">00:00</span>
                        </div>
                        <div className="text-sm text-gray-700 leading-relaxed bg-gray-50 p-4 rounded-lg border-l-3 border-green-400">
                          {meeting.transcript}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="flex-1 flex items-center justify-center p-8">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <IconVideo size={32} className="text-gray-400" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">No transcript available</h3>
                    <p className="text-gray-600 max-w-sm">
                      Transcript will appear here once the meeting is processed.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Hoverable Main Sidebar Overlay */}
      {sidebarHovered && (
        <div 
          className="fixed left-0 top-0 w-64 h-full z-50 shadow-xl"
          onMouseEnter={() => setSidebarHovered(true)}
          onMouseLeave={() => setSidebarHovered(false)}
        >
          <div className="w-full h-full bg-[#475569]">
            <Sidebar />
          </div>
        </div>
      )}
      
      {/* Invisible hover trigger area */}
      <div 
        className="fixed left-0 top-0 w-8 h-full z-40"
        onMouseEnter={() => setSidebarHovered(true)}
      />
    </div>
  );
};

export default MeetingDetailPage;
