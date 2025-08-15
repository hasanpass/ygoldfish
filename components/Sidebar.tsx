"use client"
import { useRouter, usePathname } from 'next/navigation';
import { memo } from 'react';
import { SidebarProps } from '@/types';
import { NAVIGATION_ITEMS, BOTTOM_NAVIGATION_ITEMS, ICON_SIZES } from '@/constants/navigation';

const Sidebar = memo<SidebarProps>(({ collapsed = false }) => {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <div className={`${collapsed ? 'w-20' : 'w-64'} bg-[#475569] flex flex-col py-6 border-r border-slate-600 min-h-screen transition-all duration-300`}>
      {/* Logo */}
      <div className="mb-8 px-6">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-gradient-to-br from-pink-500 to-purple-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">🔥</span>
          </div>
          {!collapsed && <span className="text-white font-bold text-xl">YGoldfish</span>}
        </div>
      </div>

      {/* Navigation Items */}
      <nav className="flex-1 flex flex-col space-y-1 px-4">
        {NAVIGATION_ITEMS.map((item) => (
          <button
            key={item.link}
            className={`flex items-center ${collapsed ? 'justify-center' : 'space-x-3'} px-3 py-3 rounded-lg transition-all duration-200 relative ${
              pathname === item.link
                ? 'bg-blue-600 text-white shadow-lg'
                : 'text-gray-300 hover:text-white hover:bg-slate-600/70'
            }`} 
            onClick={() => router.push(item.link)}
            title={collapsed ? item.label : undefined}
          >
            <item.icon size={collapsed ? ICON_SIZES.COLLAPSED : ICON_SIZES.EXPANDED} />
            {!collapsed && (
              <>
                <span className="text-sm font-medium">{item.label}</span>
                {item.badge && (
                  <span className="ml-auto bg-blue-500 text-white text-xs px-2 py-0.5 rounded-full font-semibold shadow-lg">
                    {item.badge}
                  </span>
                )}
              </>
            )}
          </button>
        ))}
      </nav>

      {/* Bottom Items */}
      <div className="flex flex-col space-y-1 px-4 mb-4">
        {BOTTOM_NAVIGATION_ITEMS.map((item) => (
          <button
            key={item.link}
            className={`flex items-center ${collapsed ? 'justify-center' : 'space-x-3'} px-3 py-3 rounded-lg text-gray-300 hover:text-white hover:bg-slate-600/70 transition-all duration-200`}
            title={collapsed ? item.label : undefined}
            onClick={() => router.push(item.link)}
          >
            <item.icon size={collapsed ? ICON_SIZES.COLLAPSED : ICON_SIZES.EXPANDED} />
            {!collapsed && <span className="text-sm font-medium">{item.label}</span>}
          </button>
        ))}
      </div>
    </div>
  );
});

Sidebar.displayName = 'Sidebar';

export default Sidebar;
