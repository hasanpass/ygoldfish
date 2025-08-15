"use client"
import { IconCalendar, IconClock, IconUser } from '@tabler/icons-react';
import { useRouter } from 'next/navigation';
import { memo, useCallback } from 'react';
import { meetingsData } from '@/lib/meetingData';

const formatDate = (iso: string) => {
  const d = new Date(iso);
  return d.toLocaleString(undefined, {
    weekday: 'short',
    month: 'short',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
  });
};

const MeetingsList = memo(() => {
  const router = useRouter();

  const handleMeetingClick = useCallback((meetingId: string) => {
    router.push(`/meetings/${meetingId}`);
  }, [router]);

  return (
    <section className="flex-1 bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden m-4">
      <div className="border-b border-gray-100 px-5 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2 text-sm text-gray-700">
          <IconCalendar size={18} className="text-gray-500" />
          <span>My Meetings</span>
        </div>
      </div>

      <div className="divide-y divide-gray-100">
        {meetingsData.map((m) => (
          <div 
            key={m.id} 
            onClick={() => handleMeetingClick(m.id)}
            className="p-5 hover:bg-gray-50 transition-colors cursor-pointer"
          >
            <h3 className="text-base font-semibold text-gray-900 mb-1">{m.title}</h3>
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
              <span className="inline-flex items-center gap-1">
                <IconUser size={16} className="text-gray-400" />
                {m.host}
              </span>
              <span className="inline-flex items-center gap-1">
                <IconCalendar size={16} className="text-gray-400" />
                {formatDate(m.date)}
              </span>
              <span className="inline-flex items-center gap-1">
                <IconClock size={16} className="text-gray-400" />
                {m.durationMinutes} mins
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
});

MeetingsList.displayName = 'MeetingsList';

export default MeetingsList;


