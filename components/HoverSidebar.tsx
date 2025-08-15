"use client"
import { memo } from 'react';
import Sidebar from '@/components/Sidebar';
import { HoverSidebarProps } from '@/types';

const HoverSidebar = memo<HoverSidebarProps>(({ isVisible, onMouseEnter, onMouseLeave }) => {
  return (
    <>
      {isVisible && (
        <div 
          className="fixed left-0 top-0 z-50 h-full"
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        >
          <Sidebar collapsed={false} />
        </div>
      )}
    </>
  );
});

HoverSidebar.displayName = 'HoverSidebar';

export default HoverSidebar;
