import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';
import NotebookNav from '@/components/NotebookNav';
import MeetingsList from '@/components/MeetingsList';

export default function MeetingsPage() {
  return (
    <div className="flex h-screen bg-[#f8fafc] overflow-hidden">
      {/* Collapsed Left Sidebar */}
      <Sidebar collapsed={true} />

      {/* Main Area */}
      <div className="flex-1 flex flex-col min-w-0">
        <Header title="Meetings" />

        {/* Notebook layout: left notebook nav + right list */}
        <div className="flex-1 flex min-h-0">
          <NotebookNav />
          <div className="flex-1 flex flex-col min-w-0">
            <MeetingsList />
          </div>
        </div>
      </div>
    </div>
  );
}


