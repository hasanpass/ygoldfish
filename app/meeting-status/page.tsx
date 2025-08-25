"use client"
import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';
import { IconNotebook, IconCalendar, IconClock, IconUser, IconCheck, IconAlertCircle, IconPlus, IconSearch } from '@tabler/icons-react';
import { useState } from 'react';

const MeetingStatusPage = () => {
  const [notes, setNotes] = useState([
    { id: '1', title: 'Daily Standup - Aug 10', status: 'completed', timestamp: '9:00 AM', owner: 'Tanvir', content: 'Discussed blockers, deployment schedule, and bug triage.' },
    { id: '2', title: 'Client Sync - Roadmap', status: 'upcoming', timestamp: '2:00 PM', owner: 'Alice', content: 'Prepare Q3 roadmap highlights and risks.' },
    { id: '3', title: 'Design Review', status: 'live', timestamp: 'Now', owner: 'Sam', content: 'Review new note-taker UI components.' },
  ]);

  const [query, setQuery] = useState('');
  const filteredNotes = notes.filter(n => n.title.toLowerCase().includes(query.toLowerCase()) || n.content.toLowerCase().includes(query.toLowerCase()));

  const getBadge = (status: string) => {
    switch (status) {
      case 'completed':
        return { label: 'Completed', className: 'bg-green-100 text-green-800' };
      case 'upcoming':
        return { label: 'Upcoming', className: 'bg-blue-100 text-blue-800' };
      case 'live':
        return { label: 'Live', className: 'bg-red-100 text-red-800' };
      default:
        return { label: 'Draft', className: 'bg-gray-100 text-gray-800' };
    }
  };

  return (
    <div className="flex h-screen bg-[#f8fafc] overflow-hidden">
      {/* Left Sidebar */}
      <Sidebar />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0">
        <Header title="Meeting Status" />

        {/* Note-taker layout */}
        <div className="flex-1 p-6 overflow-hidden">
          <div className="grid grid-cols-12 gap-6 h-full">
            {/* Notebook list */}
            <div className="col-span-4 bg-white border border-gray-200 rounded-xl h-full flex flex-col">
              <div className="p-4 border-b border-gray-100 flex items-center gap-2">
                <IconNotebook size={18} className="text-gray-600" />
                <span className="font-semibold text-gray-900">Notes</span>
                <div className="ml-auto relative w-40">
                  <IconSearch size={16} className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search" className="w-full pl-7 pr-2 py-1.5 text-sm border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
                <button className="ml-2 px-2.5 py-1.5 text-sm bg-blue-600 text-white rounded-md hover:bg-blue-700 flex items-center gap-1">
                  <IconPlus size={14} /> New
                </button>
              </div>
              <div className="flex-1 overflow-auto divide-y divide-gray-100">
                {filteredNotes.map((n) => {
                  const badge = getBadge(n.status);
                  return (
                    <div key={n.id} className="p-4 hover:bg-gray-50 cursor-pointer">
                      <div className="flex items-start justify-between">
                        <div>
                          <h4 className="text-sm font-semibold text-gray-900 line-clamp-1">{n.title}</h4>
                          <div className="mt-1 flex items-center gap-3 text-xs text-gray-500">
                            <span className={`px-2 py-0.5 rounded-full ${badge.className}`}>{badge.label}</span>
                            <span className="flex items-center gap-1"><IconCalendar size={14} /> {n.timestamp}</span>
                            <span className="flex items-center gap-1"><IconUser size={14} /> {n.owner}</span>
                          </div>
                        </div>
                      </div>
                      <p className="mt-2 text-sm text-gray-700 line-clamp-2">{n.content}</p>
                    </div>
                  );
                })}
                {filteredNotes.length === 0 && (
                  <div className="p-8 text-center text-sm text-gray-500">No notes found.</div>
                )}
              </div>
            </div>

            {/* Note editor / details */}
            <div className="col-span-8 bg-white border border-gray-200 rounded-xl h-full flex flex-col">
              <div className="p-4 border-b border-gray-100 flex items-center gap-4">
                <h3 className="text-lg font-semibold text-gray-900">Status Overview</h3>
                <span className="ml-auto text-xs text-gray-500">Today</span>
              </div>
              <div className="flex-1 overflow-auto p-6 space-y-6">
                {/* Summary cards */}
                <div className="grid grid-cols-3 gap-4">
                  <div className="p-4 rounded-lg border border-gray-200 bg-gray-50">
                    <div className="flex items-center gap-2 text-gray-700 text-sm"><IconCheck size={16} className="text-green-600" /> Completed</div>
                    <div className="mt-2 text-2xl font-bold text-gray-900">{notes.filter(n => n.status === 'completed').length}</div>
                  </div>
                  <div className="p-4 rounded-lg border border-gray-200 bg-gray-50">
                    <div className="flex items-center gap-2 text-gray-700 text-sm"><IconClock size={16} className="text-blue-600" /> Upcoming</div>
                    <div className="mt-2 text-2xl font-bold text-gray-900">{notes.filter(n => n.status === 'upcoming').length}</div>
                  </div>
                  <div className="p-4 rounded-lg border border-gray-200 bg-gray-50">
                    <div className="flex items-center gap-2 text-gray-700 text-sm"><IconAlertCircle size={16} className="text-red-600" /> Live</div>
                    <div className="mt-2 text-2xl font-bold text-gray-900">{notes.filter(n => n.status === 'live').length}</div>
                  </div>
                </div>

                {/* Rich note area (static for now) */}
                <div className="border border-gray-200 rounded-lg">
                  <div className="px-4 py-2 border-b border-gray-100 flex items-center gap-2 bg-gray-50">
                    <button className="px-2 py-1 text-xs rounded-md bg-white border border-gray-200">H1</button>
                    <button className="px-2 py-1 text-xs rounded-md bg-white border border-gray-200 font-semibold">Bold</button>
                    <button className="px-2 py-1 text-xs rounded-md bg-white border border-gray-200 italic">Italic</button>
                    <button className="px-2 py-1 text-xs rounded-md bg-white border border-gray-200">Checklist</button>
                  </div>
                  <div className="p-4">
                    <h2 className="text-xl font-semibold text-gray-900">Meeting notes</h2>
                    <ul className="mt-3 space-y-2">
                      <li className="flex items-start gap-2">
                        <input type="checkbox" className="mt-1" />
                        <span className="text-gray-700">Finalize agenda and share with team</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <input type="checkbox" className="mt-1" />
                        <span className="text-gray-700">Prepare slides for client sync</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <input type="checkbox" className="mt-1" />
                        <span className="text-gray-700">Collect feedback from design review</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MeetingStatusPage;


