"use client"
import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';
import { IconUsers, IconSearch, IconPlus } from '@tabler/icons-react';
import { useMemo, useState } from 'react';
import { dummyContacts } from '@/lib/dummyData';

const ContactsPage = () => {
  const [query, setQuery] = useState('');
  const contacts = dummyContacts;
  const filtered = useMemo(() =>
    contacts.filter(c =>
      c.name.toLowerCase().includes(query.toLowerCase()) ||
      c.company.toLowerCase().includes(query.toLowerCase())
    )
  , [contacts, query]);

  return (
    <div className="flex h-screen bg-[#f8fafc] overflow-hidden">
      <Sidebar />
      <div className="flex-1 flex flex-col min-w-0">
        <Header title="Contacts" />
        <div className="flex-1 p-6 overflow-hidden">
          <div className="grid grid-cols-12 gap-6 h-full">
            <div className="col-span-4 bg-white border border-gray-200 rounded-xl h-full flex flex-col">
              <div className="p-4 border-b border-gray-100 flex items-center gap-2">
                <IconUsers size={18} className="text-gray-600" />
                <span className="font-semibold text-gray-900">Contacts</span>
                <div className="ml-auto relative w-40">
                  <IconSearch size={16} className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search" className="w-full pl-7 pr-2 py-1.5 text-sm border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
                <button className="ml-2 px-2.5 py-1.5 text-sm bg-blue-600 text-white rounded-md hover:bg-blue-700 flex items-center gap-1">
                  <IconPlus size={14} /> New
                </button>
              </div>
              <div className="flex-1 overflow-auto divide-y divide-gray-100">
                {filtered.map(c => (
                  <div key={c.id} className="p-4 hover:bg-gray-50 cursor-pointer">
                    <h4 className="text-sm font-semibold text-gray-900">{c.name}</h4>
                    <p className="text-xs text-gray-500">{c.role} • {c.company}</p>
                  </div>
                ))}
                {filtered.length === 0 && <div className="p-8 text-center text-sm text-gray-500">No contacts found.</div>}
              </div>
            </div>
            <div className="col-span-8 bg-white border border-gray-200 rounded-xl h-full flex flex-col">
              <div className="p-4 border-b border-gray-100">
                <h3 className="text-lg font-semibold text-gray-900">Contact Details</h3>
              </div>
              <div className="flex-1 overflow-auto p-6 text-sm text-gray-700">
                Select a contact to view details, meeting history, and notes.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactsPage;


