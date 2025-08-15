import { notFound } from 'next/navigation';
import { getMeetingById } from '@/lib/meetingData';
import { MeetingPageParams } from '@/types';
import { MeetingDetailPageClient } from './MeetingDetailPageClient';

export default async function MeetingDetailPage({ params }: MeetingPageParams) {
  const { id } = await params;
  const meeting = getMeetingById(id);
  
  if (!meeting) {
    notFound();
  }

  return <MeetingDetailPageClient meeting={meeting} />;
}
