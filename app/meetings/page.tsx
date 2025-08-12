"use client"
import { useState } from 'react';
import NotebookSidebar from '@/components/NotebookSidebar';
import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';
import { dummyMeetings } from '@/lib/dummyData';
import { IconClock, IconUsers, IconCalendar, IconVideo } from '@tabler/icons-react';
import { useRouter } from 'next/navigation';

const MeetingsPage = () => {
  const [activeSection, setActiveSection] = useState('my-meetings');
  const router = useRouter();

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-100 text-green-800';
      case 'upcoming':
        return 'bg-blue-100 text-blue-800';
      case 'live':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const handleMeetingClick = (meetingId: string) => {
    router.push(`/meetings/${meetingId}`);
  };

  return (
    <div className="flex h-screen bg-[#f8fafc] overflow-hidden">
      {/* Main Sidebar */}
      <Sidebar />
      
      {/* Notebook Sidebar */}
      <NotebookSidebar 
        activeSection={activeSection} 
        onSectionChange={setActiveSection} 
      />
      
      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Header with dynamic title */}
        <Header title="Meetings" />
        
        {/* Meetings List */}
        <div className="flex-1 p-6 overflow-auto">
          <div className="max-w-4xl mx-auto">
            <div className="mb-6">
              <h1 className="text-2xl font-bold text-gray-900 mb-2">
                {activeSection.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
              </h1>
              <p className="text-gray-600">
                {activeSection === 'my-meetings' && 'Meetings organized by you'}
                {activeSection === 'all-meetings' && 'All meetings in your workspace'}
                {activeSection === 'shared-with-me' && 'Meetings shared with you by others'}
              </p>
            </div>

            {/* Meeting Cards */}
            <div className="space-y-4">
              {dummyMeetings.map((meeting) => (
                <div
                  key={meeting.id}
                  onClick={() => handleMeetingClick(meeting.id)}
                  className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow cursor-pointer"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      {/* Meeting Header */}
                      <div className="flex items-center space-x-3 mb-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-purple-600 rounded-lg flex items-center justify-center">
                          <span className="text-white font-bold text-sm">🔥</span>
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900 hover:text-blue-600 transition-colors">
                            {meeting.title}
                          </h3>
                          <p className="text-sm text-gray-500">{meeting.organizer}</p>
                        </div>
                      </div>

                      {/* Meeting Info */}
                      <div className="flex items-center space-x-6 text-sm text-gray-600 mb-3">
                        <div className="flex items-center space-x-1">
                          <IconCalendar size={16} />
                          <span>{meeting.date}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <IconClock size={16} />
                          <span>{meeting.time}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <IconVideo size={16} />
                          <span>{meeting.duration}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <IconUsers size={16} />
                          <span>{meeting.participants.length} participants</span>
                        </div>
                      </div>

                      {/* Meeting Summary */}
                      {meeting.summary && (
                        <p className="text-gray-700 text-sm leading-relaxed mb-3 line-clamp-2">
                          {meeting.summary}
                        </p>
                      )}

                      {/* Participants */}
                      <div className="flex items-center space-x-2">
                        <span className="text-xs text-gray-500">Participants:</span>
                        <div className="flex items-center space-x-1">
                          {meeting.participants.slice(0, 3).map((participant, index) => (
                            <div
                              key={index}
                              className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs font-medium"
                            >
                              {participant.charAt(0)}
                            </div>
                          ))}
                          {meeting.participants.length > 3 && (
                            <div className="w-6 h-6 bg-gray-300 text-gray-600 rounded-full flex items-center justify-center text-xs">
                              +{meeting.participants.length - 3}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Status Badge */}
                    <div className="ml-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusBadge(meeting.status)}`}>
                        {meeting.status.charAt(0).toUpperCase() + meeting.status.slice(1)}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Empty State */}
            {dummyMeetings.length === 0 && (
              <div className="text-center py-12">
                <IconCalendar size={48} className="mx-auto text-gray-400 mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">No meetings found</h3>
                <p className="text-gray-600">
                  {activeSection === 'my-meetings' && 'You haven\'t organized any meetings yet.'}
                  {activeSection === 'all-meetings' && 'No meetings available in your workspace.'}
                  {activeSection === 'shared-with-me' && 'No meetings have been shared with you.'}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MeetingsPage;
