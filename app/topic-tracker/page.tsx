"use client"
import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';
import { IconStar, IconSearch, IconPlus } from '@tabler/icons-react';
import { useMemo, useState } from 'react';
import { dummyTopics } from '@/lib/dummyData';

const TopicTrackerPage = () => {
  const [query, setQuery] = useState('');
  const topics = dummyTopics;
  const filtered = useMemo(() => topics.filter(t => t.name.toLowerCase().includes(query.toLowerCase())), [topics, query]);

  return (
    <div className="flex h-screen bg-[#f8fafc] overflow-hidden">
      <Sidebar />
      <div className="flex-1 flex flex-col min-w-0">
        <Header title="Topic Tracker" />
        <div className="flex-1 p-6 overflow-hidden">
          <div className="grid grid-cols-12 gap-6 h-full">
            <div className="col-span-4 bg-white border border-gray-200 rounded-xl h-full flex flex-col">
              <div className="p-4 border-b border-gray-100 flex items-center gap-2">
                <IconStar size={18} className="text-gray-600" />
                <span className="font-semibold text-gray-900">Topics</span>
                <div className="ml-auto relative w-40">
                  <IconSearch size={16} className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search" className="w-full pl-7 pr-2 py-1.5 text-sm border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
                <button className="ml-2 px-2.5 py-1.5 text-sm bg-blue-600 text-white rounded-md hover:bg-blue-700 flex items-center gap-1">
                  <IconPlus size={14} /> Track
                </button>
              </div>
              <div className="flex-1 overflow-auto divide-y divide-gray-100">
                {filtered.map(t => (
                  <div key={t.id} className="p-4 hover:bg-gray-50 cursor-pointer flex items-center justify-between">
                    <h4 className="text-sm font-semibold text-gray-900">{t.name}</h4>
                    <span className={`text-xs px-2 py-0.5 rounded-full ${t.trend === 'Rising' ? 'bg-green-100 text-green-800' : t.trend === 'Stable' ? 'bg-gray-100 text-gray-700' : 'bg-red-100 text-red-800'}`}>{t.trend}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-span-8 bg-white border border-gray-200 rounded-xl h-full flex flex-col">
              <div className="p-4 border-b border-gray-100">
                <h3 className="text-lg font-semibold text-gray-900">Topic Insights</h3>
              </div>
              <div className="flex-1 overflow-auto p-6 text-sm text-gray-700">
                Select a topic to view mentions across meetings and sentiment trends.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopicTrackerPage;


