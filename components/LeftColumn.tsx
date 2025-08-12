import { IconPlus } from '@tabler/icons-react';

const LeftColumn = () => {
  const tabs = [
    { id: 'feed', label: 'My Feed', active: true },
    { id: 'tasks', label: 'Tasks' },
    { id: 'ai-apps', label: 'AI Apps', badge: 'NEW' },
  ];

  return (
    <div className="w-[70%] bg-white border-1 rounded-2xl border-gray-200 flex flex-col shadow-sm min-h-0 m-4 ml-6">
      {/* Date Range Header */}
      {/* Tabs */}
      <div className="border-b border-gray-100">
        <div className="flex">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`relative px-4 py-3 text-sm font-medium border-b-2 transition-colors ${
                tab.active
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              {tab.label}
              {tab.badge && (
                <span className="ml-2 inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                  {tab.badge}
                </span>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Content Area */}
      <div className="flex-1 p-5 overflow-y-auto">
      <div className="p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-600">📅</span>
            <span className="text-sm font-medium text-gray-900">Aug 4, 2024 - Aug 10, 2024</span>
            <span className="text-sm text-gray-500">1 Meeting</span>
          </div>
          <button className="text-gray-400 hover:text-gray-600">
            <span className="text-sm">Share Feedback</span>
          </button>
        </div>
      </div>
        {/* Meeting Item */}
        <div className="bg-white border-0 rounded-lg p-0 mb-6 ml-9">
          <div className="flex items-start space-x-4"> 
            <div className="flex-1 min-w-0">
              <h3 className="font-semibold text-gray-900 mb-1 text-base">
                YGoldfish AI Platform Quick Overview
              </h3>
              <p className="text-sm text-gray-500 mb-4">
                Thu, Aug 8, 2024 · 4:22 PM
              </p>
              
              {/* Features List */}
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-4 h-4 bg-green-100 rounded flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-green-600 text-xs">📊</span>
                  </div>
                  <span className="text-sm text-gray-700 leading-relaxed">
                    <span className="font-medium">Dashboard Overview:</span> The dashboard displays past meeting digests, upcoming attendance options, and transcription settings.
                  </span>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-4 h-4 bg-green-100 rounded flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-green-600 text-xs">✅</span>
                  </div>
                  <span className="text-sm text-gray-700 leading-relaxed">
                    <span className="font-medium">Automatic Action Items:</span> Tasks feature auto-generates action items for participants.
                  </span>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-4 h-4 bg-yellow-100 rounded flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-yellow-600 text-xs">📝</span>
                  </div>
                  <span className="text-sm text-gray-700 leading-relaxed">
                    <span className="font-medium">Comprehensive Meeting Notes:</span> Meeting notes include timestamps, speaker identification, and smart search filters.
                  </span>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-4 h-4 bg-orange-100 rounded flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-orange-600 text-xs">🤝</span>
                  </div>
                  <span className="text-sm text-gray-700 leading-relaxed">
                    <span className="font-medium">Collaboration Tools:</span> Tools like 'Ask Fred' and soundbite creation enhance team collaboration.
                  </span>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-4 h-4 bg-red-100 rounded flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-red-600 text-xs">📈</span>
                  </div>
                  <span className="text-sm text-gray-700 leading-relaxed">
                    <span className="font-medium">Performance Analytics:</span> Team management features and analytics provide insights into meeting productivity.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center py-12">
          <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-2xl">📅</span>
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">
            Meet Your AI-Powered Feed
          </h3>
          <p className="text-sm text-gray-500 mb-6 leading-relaxed">
            Stay up to date with your meetings, catch up on<br />
            important discussions in a glance.
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

export default LeftColumn;
