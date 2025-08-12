"use client"
import { IconPlus, IconCalendar, IconChevronDown,IconVideo } from '@tabler/icons-react';
import { useState } from 'react';

const RightColumn = () => {
  const [transcriptionEnabled, setTranscriptionEnabled] = useState(true);

  return (
    <div className="w-[30%] p-6 space-y-6 overflow-y-auto bg-gray-50 m-4 mr-6">
      {/* Top Right - Add to live meeting button */}
      <div className="flex justify-end mb-4">
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-lg font-medium text-sm transition-colors flex items-center space-x-2">
          <IconVideo size={20} className="text-white" />
          <span>Add to live meeting</span>
        </button>
      </div>

      {/* Fireflies Notetaker Section */}
      <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
        <div className="flex items-center space-x-3 mb-6">
          <h2 className="text-lg font-semibold text-gray-900">
            YGoldfish Notetaker
          </h2>
        </div>
        
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <label className="text-sm font-medium text-gray-900">
              Enable Unlimited Free Transcription
            </label>
            <button
              onClick={() => setTranscriptionEnabled(!transcriptionEnabled)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                transcriptionEnabled ? 'bg-blue-600' : 'bg-gray-200'
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  transcriptionEnabled ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
          </div>
          
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-900">
              Auto join calendar meetings
            </label>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">All meetings with web-conf link</span>
              <IconChevronDown size={16} className="text-gray-400" />
            </div>
          </div>
          
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-900">
              Send email recap to
            </label>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Everyone on the invite</span>
              <IconChevronDown size={16} className="text-gray-400" />
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-900">🌐 Meeting language</span>
            <span className="text-sm text-blue-600 underline cursor-pointer">English (Global)</span>
          </div>
        </div>
      </div>

      {/* Upcoming Meetings Section */}
      <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
        <div className="flex items-center space-x-3 mb-6">
          <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
            <IconCalendar size={18} className="text-blue-600" />
          </div>
          <h2 className="text-lg font-semibold text-gray-900">
            Upcoming Meetings
          </h2>
        </div>
        
        <div className="text-center py-12">
          <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-4">
            <IconCalendar size={24} className="text-gray-400" />
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">
            No meetings in the next 2 days
          </h3>
          <p className="text-sm text-gray-500 mb-6 leading-relaxed">
            Schedule a meeting on your calendar or transcribe a<br />
            live meeting.
          </p>
          <button className="inline-flex items-center px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors">
            <IconPlus size={16} className="mr-2" />
            New
          </button>
        </div>
      </div>
    </div>
  );
};

export default RightColumn;
