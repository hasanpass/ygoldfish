"use client"
import {
  IconHome,
  IconCalendar,
  IconUsers,
  IconSettings,
  IconPuzzle,
  IconChartBar,
  IconUpload,
  IconStar,
  IconShield,
  IconHelp,
  IconDatabase
} from '@tabler/icons-react';
import { useRouter } from 'next/navigation';

const Sidebar = () => {
  const router = useRouter();
  const navigationItems = [
    { icon: IconHome, label: 'Home', active: true, link: '/' },
    { icon: IconCalendar, label: 'Meetings', link: '/meetings' },
    { icon: IconUsers, label: 'Contacts', link: '/contacts' },
    { icon: IconPuzzle, label: 'Integrations', badge: 'NEW', link: '/integrations' },
    { icon: IconDatabase, label: 'AI Apps', link: '/ai-apps' },
    { icon: IconChartBar, label: 'Analytics', link: '/analytics' },
    { icon: IconUpload, label: 'Uploads', link: '/uploads' },
    { icon: IconStar, label: 'Topic Tracker', link: '/topic-tracker' },
  ];

  const bottomItems = [
    { icon: IconUsers, label: 'Team', link: '/team' },
    { icon: IconStar, label: 'Upgrade', link: '/upgrade' },
    { icon: IconSettings, label: 'Settings', link: '/settings' },
  ];

  return (
    <div className="w-64 bg-[#475569] flex flex-col py-6 border-r border-slate-600 min-h-screen">
      {/* Logo */}
      <div className="mb-8 px-6">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-gradient-to-br from-pink-500 to-purple-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">🔥</span>
          </div>
          <span className="text-white font-bold text-xl">YGoldfish</span>
        </div>
      </div>

      {/* Navigation Items */}
      <nav className="flex-1 flex flex-col space-y-1 px-4">
        {navigationItems.map((item, index) => (
          <button
            key={index}
            className={`flex items-center space-x-3 px-3 py-3 rounded-lg transition-all duration-200 relative ${
              item.active
                ? 'bg-blue-600 text-white shadow-lg'
                : 'text-gray-300 hover:text-white hover:bg-slate-600/70'
            }`} onClick={() => router.push(item.link)}
          >
            <item.icon size={20} />
            <span className="text-sm font-medium">{item.label}</span>
            {item.badge && (
              <span className="ml-auto bg-blue-500 text-white text-xs px-2 py-0.5 rounded-full font-semibold shadow-lg">
                {item.badge}
              </span>
            )}
          </button>
        ))}
      </nav>

      {/* Bottom Items */}
      <div className="flex flex-col space-y-1 px-4 mb-4">
        {bottomItems.map((item, index) => (
          <button
            key={index}
            className="flex items-center space-x-3 px-3 py-3 rounded-lg text-gray-300 hover:text-white hover:bg-slate-600/70 transition-all duration-200"
          >
            <item.icon size={20} />
            <span className="text-sm font-medium">{item.label}</span>
          </button>
        ))}
      </div>

      {/* Referral Badge */}
      <div className="px-4">
        <div className="bg-gradient-to-br from-orange-400 to-orange-600 rounded-lg p-4 text-center shadow-lg">
          <div className="text-white text-lg mb-1">🎯🎊</div>
          <div className="text-white text-sm font-bold mb-2">Refer and get $5</div>
          <div className="text-white text-xs mb-3 leading-relaxed">Get $5 when someone signs up using your referral link</div>
          <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm px-4 py-2 rounded-lg font-semibold w-full transition-colors shadow-sm">
            Refer
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
