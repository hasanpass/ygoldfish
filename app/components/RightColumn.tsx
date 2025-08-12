import { IconPlus, IconCalendar } from '@tabler/icons-react';

const RightColumn = () => {
  return (
    <div className="flex-1 p-4 lg:p-6 space-y-4 lg:space-y-6 overflow-y-auto">
      {/* Top Section - Fireflies Notetaker */}
      <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
        <div className="flex items-center space-x-3 mb-4">
          <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
            <span className="text-purple-600 font-semibold">🔥</span>
          </div>
          <h2 className="text-lg font-semibold text-gray-900">
            Fireflies Notetaker
          </h2>
        </div>
        
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <label className="text-sm font-medium text-gray-700">
              Enable Unlimited Free Transcription
            </label>
            <div className="relative inline-flex h-6 w-11 items-center rounded-full bg-blue-600 transition-colors">
              <span className="inline-block h-4 w-4 transform rounded-full bg-white transition-transform translate-x-6" />
            </div>
          </div>
          
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">
              Auto join calendar meetings
            </label>
            <div className="text-sm text-gray-500">
              All meetings with web-conf link ▼
            </div>
          </div>
          
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">
              Send email recap to
            </label>
            <div className="text-sm text-gray-500">
              Everyone on the invite ▼
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-700">🌐 Meeting language</span>
            <span className="text-sm text-blue-600 underline">English (Global)</span>
          </div>
        </div>
      </div>

      {/* Middle Section - Upcoming Meetings */}
      <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
        <div className="flex items-center space-x-3 mb-4">
          <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
            <IconCalendar size={20} className="text-blue-600" />
          </div>
          <h2 className="text-lg font-semibold text-gray-900">
            Upcoming Meetings
          </h2>
        </div>
        
        <div className="text-center py-8">
          <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <IconCalendar size={24} className="text-gray-400" />
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">
            No meetings in the next 2 days
          </h3>
          <p className="text-sm text-gray-500 mb-6">
            Schedule a meeting on your calendar or transcribe a<br />
            live meeting.
          </p>
          <button className="inline-flex items-center px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors">
            <IconPlus size={16} className="mr-2" />
            New
          </button>
        </div>
      </div>

      {/* Bottom Section - Additional Content */}
      <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
        <div className="text-center py-8">
          <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-2xl">📊</span>
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">
            Meeting Analytics
          </h3>
          <p className="text-sm text-gray-500">
            Track your meeting productivity and insights
          </p>
        </div>
      </div>
    </div>
  );
};

export default RightColumn;
