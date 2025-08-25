"use client"
import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';
import { IconChartBar, IconSearch } from '@tabler/icons-react';
import { useMemo, useState } from 'react';
import { dummyAnalyticsReports } from '@/lib/dummyData';

const AnalyticsPage = () => {
  const [query, setQuery] = useState('');
  const reports = dummyAnalyticsReports;
  const filtered = useMemo(() => reports.filter(r => r.name.toLowerCase().includes(query.toLowerCase())), [reports, query]);

  return (
    <div className="flex h-screen bg-[#f8fafc] overflow-hidden">
      <Sidebar />
      <div className="flex-1 flex flex-col min-w-0">
        <Header title="Analytics" />
        <div className="flex-1 p-6 overflow-hidden">
          <div className="grid grid-cols-12 gap-6 h-full">
            <div className="col-span-4 bg-white border border-gray-200 rounded-xl h-full flex flex-col">
              <div className="p-4 border-b border-gray-100 flex items-center gap-2">
                <IconChartBar size={18} className="text-gray-600" />
                <span className="font-semibold text-gray-900">Reports</span>
                <div className="ml-auto relative w-40">
                  <IconSearch size={16} className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search" className="w-full pl-7 pr-2 py-1.5 text-sm border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
              </div>
              <div className="flex-1 overflow-auto divide-y divide-gray-100">
                {filtered.map(r => (
                  <div key={r.id} className="p-4 hover:bg-gray-50 cursor-pointer">
                    <h4 className="text-sm font-semibold text-gray-900">{r.name}</h4>
                    <p className="text-xs text-gray-500">{r.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-span-8 bg-white border border-gray-200 rounded-xl h-full flex flex-col">
              <div className="p-4 border-b border-gray-100">
                <h3 className="text-lg font-semibold text-gray-900">Dashboard</h3>
              </div>
              <div className="flex-1 overflow-auto p-6">
                <div className="grid grid-cols-3 gap-4">
                  <div className="p-4 rounded-lg border border-gray-200 bg-gray-50">
                    <div className="text-xs text-gray-500">Meetings this week</div>
                    <div className="mt-2 text-2xl font-bold text-gray-900">12</div>
                  </div>
                  <div className="p-4 rounded-lg border border-gray-200 bg-gray-50">
                    <div className="text-xs text-gray-500">Avg duration</div>
                    <div className="mt-2 text-2xl font-bold text-gray-900">38m</div>
                  </div>
                  <div className="p-4 rounded-lg border border-gray-200 bg-gray-50">
                    <div className="text-xs text-gray-500">Action items</div>
                    <div className="mt-2 text-2xl font-bold text-gray-900">24</div>
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

export default AnalyticsPage;


