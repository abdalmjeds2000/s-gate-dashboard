import * as React from 'react';
import { useState } from 'react';
import {
  Briefcase,
  Server,
  BarChart2,
  Users,
  Scale,
  Send,
  Target,
  Receipt,
  FileText,
  FileArchive,
  ShieldCheck,
  Monitor,
  PenLine,
  BookOpenCheck,
  AlertCircle,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';

type AppItem = {
  name: string;
  icon: React.JSX.Element;
  color: string;
};

const apps: AppItem[] = [
  { name: 'Admin Services', icon: <Briefcase size={24} />, color: 'bg-[#309575]' },
  { name: 'IT Services', icon: <Server size={24} />, color: 'bg-[#339BD6]' },
  { name: 'Oracle EPM', icon: <BarChart2 size={24} />, color: 'bg-[#E3797B]' },
  { name: 'HC Services', icon: <Users size={24} />, color: 'bg-[#1F629F]' },
  { name: 'Legal & Transactions', icon: <Scale size={24} />, color: 'bg-[#56C7CD]' },
  { name: 'Corresponding System', icon: <Send size={24} />, color: 'bg-[#BDAE23]' },
  { name: 'Strategy', icon: <Target size={24} />, color: 'bg-[#335ED6]' },
  { name: 'E-Invoicing', icon: <Receipt size={24} />, color: 'bg-[#D99092]' },
  { name: 'e-Document System', icon: <FileArchive size={24} />, color: 'bg-[#BC9761]' },
  { name: 'GRC', icon: <ShieldCheck size={24} />, color: 'bg-[#CE8D44]' },
  { name: 'e-Front', icon: <Monitor size={24} />, color: 'bg-[#9C61BC]' },
  { name: 'E-Signature Document', icon: <PenLine size={24} />, color: 'bg-[#C7569F]' },
  { name: 'Talents & Learning Management', icon: <BookOpenCheck size={24} />, color: 'bg-[#71A7BB]' },
  { name: 'Incidents Center', icon: <AlertCircle size={24} />, color: 'bg-[#83C58C]' },
  { name: 'Service Name', icon: <FileText size={24} />, color: 'bg-[#8479E3]' },
];

const appsPerPage = window.innerWidth < 768 ? 6 : window.innerWidth < 1024 ? 8 : 15;

const AppGrid: React.FC = () => {
  const [page, setPage] = useState(0);
  const maxPage = Math.ceil(apps.length / appsPerPage) - 1;

  const currentApps = apps.slice(page * appsPerPage, (page + 1) * appsPerPage);

  return (
    <div className="bg-[#F3F9F4] border border-[#E2F1E5] p-4 md:p-6 rounded-lg h-full">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-salic">SALIC Applications</h2>

        <div className="flex gap-2">
          <button
            onClick={() => setPage((prev) => Math.max(prev - 1, 0))}
            disabled={page === 0}
            className={`w-8 h-8 rounded-md bg-white border border-[#B3B8DB] text-[#8498AE] flex items-center justify-center ${
              page === 0 ? 'opacity-30' : 'hover:bg-gray-100'
            }`}
          >
            <ChevronLeft size={18} />
          </button>
          <button
            onClick={() => setPage((prev) => Math.min(prev + 1, maxPage))}
            disabled={page === maxPage}
            className={`w-8 h-8 rounded-md bg-white border border-[#B3B8DB] text-[#8498AE] flex items-center justify-center ${
              page === maxPage ? 'opacity-30' : 'hover:bg-gray-100'
            }`}
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-4">
        {currentApps.map((app, idx) => (
          <div
            key={idx}
            className="group flex flex-col items-center justify-center p-3 rounded-xl cursor-pointer hover:bg-white hover:ring-1 hover:ring-[#E3E9F5] transition-all"
          >
            <div className={`w-12 h-12 rounded-lg text-white flex items-center justify-center mb-2 ${app.color}`}>
              {app.icon}
            </div>
            <p className="text-center text-sm text-salic font-medium leading-snug min-h-9 m-0 line-clamp-2">
              {app.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AppGrid;
