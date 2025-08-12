import { IconPlus } from '@tabler/icons-react';

const LeftColumn = () => {
  const tabs = [
    { id: 'feed', label: 'My Feed', active: true },
    { id: 'tasks', label: 'Tasks' },
    { id: 'ai-apps', label: 'AI Apps', badge: 'NEW' },
  ];

  return (
    <div className="w-80 bg-white border-r border-gray-200 flex flex-col shadow-sm min-h-0">
      {/* Date Range Header */}
      <div className="p-4 border-b border-gray-100">
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

      {/* Tabs */}
      <div className="border-b border-gray-100">
        <nav className="flex">
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
        </nav>
      </div>

      {/* Content Area */}
      <div className="flex-1 p-4">
        {/* Meeting Item */}
        <div className="bg-white border border-gray-200 rounded-xl p-4 hover:shadow-md transition-shadow">
          <div className="flex items-start space-x-3">
            <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
              <span className="text-purple-600 font-semibold">🔥</span>
            </div>
            
            <div className="flex-1">
              <h3 className="font-medium text-gray-900 mb-1">
                Fireflies AI Platform Quick Overview
              </h3>
              <p className="text-sm text-gray-500 mb-2">
                Thu, Aug 8, 2024 4:22 PM
              </p>
              
              {/* Features List */}
              <div className="space-y-2">
                <div className="flex items-start space-x-2">
                  <span className="text-green-500 text-sm">📊</span>
                  <span className="text-sm text-gray-700">
                    <strong>Dashboard Overview:</strong> The dashboard displays past meeting digests, upcoming attendance options, and transcription settings.
                  </span>
                </div>
                
                <div className="flex items-start space-x-2">
                  <span className="text-green-500 text-sm">✅</span>
                  <span className="text-sm text-gray-700">
                    <strong>Automatic Action Items:</strong> Tasks feature auto-generates action items for participants.
                  </span>
                </div>
                
                <div className="flex items-start space-x-2">
                  <span className="text-yellow-500 text-sm">📝</span>
                  <span className="text-sm text-gray-700">
                    <strong>Comprehensive Meeting Notes:</strong> Meeting notes include timestamps, speaker identification, and smart search filters.
                  </span>
                </div>
                
                <div className="flex items-start space-x-2">
                  <span className="text-orange-500 text-sm">🤝</span>
                  <span className="text-sm text-gray-700">
                    <strong>Collaboration Tools:</strong> Tools like 'Ask Fred' and soundbite creation enhance team collaboration.
                  </span>
                </div>
                
                <div className="flex items-start space-x-2">
                  <span className="text-red-500 text-sm">📈</span>
                  <span className="text-sm text-gray-700">
                    <strong>Performance Analytics:</strong> Team management features and analytics provide insights into meeting productivity.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-8 text-center">
          <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-2xl">📅</span>
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">
            Meet Your AI-Powered Feed
          </h3>
          <p className="text-sm text-gray-500 mb-4">
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
