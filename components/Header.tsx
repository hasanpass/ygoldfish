"use client"
import {
  IconSearch,
  IconBell,
  IconQuestionMark,
  IconMicrophone,
  IconDatabase,
  IconPlus,
  IconVideo,
  IconCalendar,
  IconUpload,
  IconPlayerRecord,
  IconUser,
  IconSettings,
  IconCreditCard,
  IconHelpCircle,
  IconLogout,
  IconChecks,
  IconBook,
  IconKeyboard,
  IconMessage,
  IconBug,
  IconGift,
  IconExternalLink
} from '@tabler/icons-react';
import { useState, useRef, useEffect } from 'react';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu';

interface HeaderProps {
  title?: string;
}

const Header = ({ title = "Home" }: HeaderProps) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  return (
    <header className="bg-white border-b border-gray-100 px-4 lg:px-6 py-4 shadow-sm">
      <div className="flex items-center justify-between gap-4">
        {/* Left Section - Home Tab */}
        <div className="flex items-center">
          <button className="px-6 py-2.5 text-sm font-medium text-gray-900 bg-gray-50 hover:bg-gray-100 rounded-lg mr-4 transition-colors">
            {title}
          </button>
        </div>

        {/* Middle Section - Search Bar */}
        <div className="flex-1 max-w-md mx-4 lg:mx-8 hidden md:block">
          <div className="relative">
            <IconSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            <input
              type="text"
              placeholder="Search by title or keyword..."
              className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm bg-gray-50 hover:bg-white transition-colors"
            />
          </div>
        </div>

        {/* Right Section - Action Buttons */}
        <div className="flex items-center space-x-2 lg:space-x-4">
          {/* Upgrade Button */}
          <button className="px-4 py-2 bg-green-200 text-green-600 text-sm font-medium rounded-lg transition-colors">
            UPGRADE
          </button>

          {/* Transcription Toggle */}
          <div className="hidden lg:flex items-center space-x-2">
            <IconMicrophone size={20} className="text-purple-600" />
            <div className="flex flex-col">
              <span className="text-xs font-medium text-gray-900">Transcription</span>
              <span className="text-xs text-gray-500">Unlimited credits *</span>
            </div>
          </div>

          {/* Storage Info */}
          <div className="hidden xl:flex items-center space-x-2">
            <IconDatabase size={20} className="text-blue-600" />
            <div className="flex flex-col">
              <span className="text-xs font-medium text-gray-900">Storage</span>
              <span className="text-xs text-gray-500">800 mins left / 800 mins</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center space-x-2">
            {/* Add to live meeting - Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button 
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="px-4 py-2 text-gray-600 bg-gray-100 rounded-lg hover:text-gray-900 transition-colors cursor-pointer"
              >
                <IconPlus size={20} />
              </button>

              {/* Dropdown Menu */}
              {isDropdownOpen && (
                <div className="absolute top-full right-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                  <div className="py-1">
                    <button className="w-full flex items-center space-x-3 px-4 py-3 text-gray-700 hover:bg-gray-50 transition-colors">
                      <IconVideo size={18} className="text-gray-600" />
                      <span className="text-sm">Add to live meeting</span>
                    </button>
                    
                    <button className="w-full flex items-center space-x-3 px-4 py-3 text-gray-700 hover:bg-gray-50 transition-colors">
                      <IconCalendar size={18} className="text-gray-600" />
                      <span className="text-sm">Schedule new meeting</span>
                    </button>
                    
                    <button className="w-full flex items-center space-x-3 px-4 py-3 text-gray-700 hover:bg-gray-50 transition-colors">
                      <IconUpload size={18} className="text-gray-600" />
                      <span className="text-sm">Upload audio or video</span>
                    </button>
                    
                    <button className="w-full flex items-center space-x-3 px-4 py-3 text-gray-700 hover:bg-gray-50 transition-colors">
                      <IconPlayerRecord size={18} className="text-gray-600" />
                      <span className="text-sm">Start recording</span>
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Notifications */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="relative p-2 text-gray-600 hover:text-gray-900 transition-colors cursor-pointer rounded-md">
                  <IconBell size={20} />
                  <span className="absolute -top-0.5 -right-0.5 h-2.5 w-2.5 rounded-full bg-red-500 ring-2 ring-white" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-80">
                <DropdownMenuLabel>Notifications</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="items-start">
                  <div className="flex items-start gap-3">
                    <span className="mt-0.5 inline-block h-2 w-2 rounded-full bg-blue-500"></span>
                    <div className="flex-1">
                      <p className="text-sm text-gray-900">Your meeting "Q3 Planning" starts in 10 minutes.</p>
                      <p className="text-xs text-gray-500 mt-1">2m ago</p>
                    </div>
                  </div>
                </DropdownMenuItem>
                <DropdownMenuItem className="items-start">
                  <div className="flex items-start gap-3">
                    <span className="mt-0.5 inline-block h-2 w-2 rounded-full bg-green-500"></span>
                    <div className="flex-1">
                      <p className="text-sm text-gray-900">Transcription finished for "All Hands".</p>
                      <p className="text-xs text-gray-500 mt-1">25m ago</p>
                    </div>
                  </div>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <IconChecks className="text-gray-500" size={18} />
                  <span>Mark all as read</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <span className="text-blue-600">View all notifications</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Help */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="p-2 text-gray-600 hover:text-gray-900 transition-colors cursor-pointer rounded-md">
                  <IconQuestionMark size={20} />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-72">
                <DropdownMenuLabel>Help & Resources</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <IconBook size={18} />
                  <span>Documentation</span>
                  <span className="ml-auto text-xs text-gray-400 flex items-center gap-1">
                    docs
                    <IconExternalLink size={14} />
                  </span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <IconKeyboard size={18} />
                  <span>Keyboard shortcuts</span>
                  <span className="ml-auto text-xs text-gray-400">?</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <IconGift size={18} />
                  <span>What’s new</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <IconHelpCircle size={18} />
                  <span>Community forum</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <IconMessage size={18} />
                  <span>Contact support</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <IconBug size={18} />
                  <span>Report a bug</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <IconHelpCircle size={18} />
                  <span>Professional support</span>
                  <span className="ml-auto text-[10px] px-1.5 py-0.5 rounded bg-gray-100 text-gray-600">Priority</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Profile */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-semibold cursor-pointer">
                  T
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuLabel>
                  <div className="flex flex-col">
                    <span className="text-sm font-medium text-gray-900">Tanvir</span>
                    <span className="text-xs text-gray-500">tanvir@example.com</span>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <IconUser size={18} />
                  <span>Profile</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <IconSettings size={18} />
                  <span>Settings</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <IconCreditCard size={18} />
                  <span>Billing</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <IconHelpCircle size={18} />
                  <span>Support</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem variant="destructive">
                  <IconLogout size={18} />
                  <span>Sign out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
