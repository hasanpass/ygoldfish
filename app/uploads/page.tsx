"use client"
import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';
import { IconUpload, IconSearch, IconPlus } from '@tabler/icons-react';
import { useMemo, useState } from 'react';
import { dummyUploadItems } from '@/lib/dummyData';

const UploadsPage = () => {
  const [query, setQuery] = useState('');
  const items = dummyUploadItems;
  const filtered = useMemo(() => items.filter(i => i.name.toLowerCase().includes(query.toLowerCase())), [items, query]);

  return (
    <div className="flex h-screen bg-[#f8fafc] overflow-hidden">
      <Sidebar />
      <div className="flex-1 flex flex-col min-w-0">
        <Header title="Uploads" />
        <div className="flex-1 p-6 overflow-hidden">
          <div className="grid grid-cols-12 gap-6 h-full">
            <div className="col-span-4 bg-white border border-gray-200 rounded-xl h-full flex flex-col">
              <div className="p-4 border-b border-gray-100 flex items-center gap-2">
                <IconUpload size={18} className="text-gray-600" />
                <span className="font-semibold text-gray-900">Files</span>
                <div className="ml-auto relative w-40">
                  <IconSearch size={16} className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search" className="w-full pl-7 pr-2 py-1.5 text-sm border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
                <button className="ml-2 px-2.5 py-1.5 text-sm bg-blue-600 text-white rounded-md hover:bg-blue-700 flex items-center gap-1">
                  <IconPlus size={14} /> Upload
                </button>
              </div>
              <div className="flex-1 overflow-auto divide-y divide-gray-100">
                {filtered.map(i => (
                  <div key={i.id} className="p-4 hover:bg-gray-50 cursor-pointer flex items-center justify-between">
                    <h4 className="text-sm font-semibold text-gray-900">{i.name}</h4>
                    <span className={`text-xs px-2 py-0.5 rounded-full ${i.status === 'Processed' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>{i.status}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-span-8 bg-white border border-gray-200 rounded-xl h-full flex flex-col">
              <div className="p-4 border-b border-gray-100">
                <h3 className="text-lg font-semibold text-gray-900">Upload Details</h3>
              </div>
              <div className="flex-1 overflow-auto p-6 text-sm text-gray-700">
                Select a file to see transcription, summary, and notes.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadsPage;


