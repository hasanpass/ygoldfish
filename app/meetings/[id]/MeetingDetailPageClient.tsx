"use client"
import { useState, useCallback } from 'react';
import Header from '@/components/Header';
import HoverSidebar from '@/components/HoverSidebar';
import EnhancedMeetingDetail from '@/components/EnhancedMeetingDetail';
import { MeetingData } from '@/types';

interface MeetingDetailPageClientProps {
  meeting: MeetingData;
}

export function MeetingDetailPageClient({ meeting }: MeetingDetailPageClientProps) {
  const [showSidebar, setShowSidebar] = useState(false);

  const handleHamburgerHover = useCallback((isHovered: boolean) => {
    setShowSidebar(isHovered);
  }, []);

  const handleSidebarMouseEnter = useCallback(() => {
    setShowSidebar(true);
  }, []);

  const handleSidebarMouseLeave = useCallback(() => {
    setShowSidebar(false);
  }, []);

  return (
    <div className="flex h-screen bg-[#f8fafc] overflow-hidden">
      {/* Hover Sidebar */}
      <HoverSidebar 
        isVisible={showSidebar}
        onMouseEnter={handleSidebarMouseEnter}
        onMouseLeave={handleSidebarMouseLeave}
      />

      {/* Main Area - Full Width */}
      <div className="flex-1 flex flex-col min-w-0">
        <Header 
          title={meeting.title} 
          showHamburger={true}
          onHamburgerHover={handleHamburgerHover}
        />

        {/* Full width meeting detail */}
        <div className="flex-1 min-w-0">
          <EnhancedMeetingDetail meeting={meeting} />
        </div>
      </div>
    </div>
  );
}
