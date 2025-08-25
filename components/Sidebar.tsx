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
  IconDatabase,
  IconNotebook
} from '@tabler/icons-react';
import { useRouter, usePathname } from 'next/navigation';

const Sidebar = () => {
  const router = useRouter();
  const pathname = usePathname();
  
  const navigationItems = [
    { icon: IconHome, label: 'Home', active: pathname === '/', link: '/' },
    { icon: IconCalendar, label: 'Meetings', active: pathname.startsWith('/meetings'), link: '/meetings' },
    { icon: IconNotebook, label: 'Meeting Status', active: pathname === '/meeting-status', link: '/meeting-status' },
    { icon: IconUsers, label: 'Contacts', active: false, link: '/contacts' },
    { icon: IconPuzzle, label: 'Integrations', badge: 'NEW', active: false, link: '/integrations' },
    { icon: IconDatabase, label: 'AI Apps', active: false, link: '/ai-apps' },
    { icon: IconChartBar, label: 'Analytics', active: false, link: '/analytics' },
    { icon: IconUpload, label: 'Uploads', active: false, link: '/uploads' },
    { icon: IconStar, label: 'Topic Tracker', active: false, link: '/topic-tracker' },
  ];

  const bottomItems = [
    { icon: IconUsers, label: 'Team', link: '/team' },
    { icon: IconStar, label: 'Upgrade', link: '/upgrade', badge: 'PRO' },
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
            className={`flex items-center space-x-3 px-3 py-3 rounded-lg transition-all duration-200 relative cursor-pointer ${
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
            className="flex items-center space-x-3 px-3 py-3 rounded-lg text-gray-300 hover:text-white hover:bg-slate-600/70 transition-all duration-200 cursor-pointer"
            onClick={() => router.push(item.link)}
          >
            <item.icon size={20} />
            <span className="text-sm font-medium">{item.label}</span>
            {item.badge && (
              <span className="ml-auto bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs px-2 py-0.5 rounded-full font-semibold shadow-lg">
                {item.badge}
              </span>
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
