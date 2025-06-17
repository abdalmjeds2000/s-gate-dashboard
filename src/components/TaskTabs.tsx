import React, { useState } from 'react';
import { CalendarCheck } from 'lucide-react';

interface Task {
  id: number;
  title: string;
  assignedTo: string;
  avatar: string;
  dueDate: string;
  borderColor: string;
}

const tasks: { myTasks: Task[]; teamTasks: Task[] } = {
  myTasks: [
    {
      id: 1,
      title: 'Preparing Contracts For Employees In IT Department.',
      assignedTo: 'Akmal Aldahdouh',
      avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
      dueDate: '4 Nov, 2024',
      borderColor: '#3b82f6',
    },
    {
      id: 6,
      title: 'Follow Up On The Progress Of Employees.',
      assignedTo: 'Abdulmohsen Alaiban',
      avatar: 'https://randomuser.me/api/portraits/men/33.jpg',
      dueDate: '4 Nov, 2024',
      borderColor: '#2A7C62',
    },
    {
      id: 7,
      title: 'Follow Up On The Progress Of Employees.',
      assignedTo: 'Mohammed Alotaibi',
      avatar: 'https://randomuser.me/api/portraits/men/34.jpg',
      dueDate: '4 Nov, 2024',
      borderColor: '#df2456',
    },
  ],
  teamTasks: [
    {
      id: 2,
      title: 'Follow Up On The Progress Of Employees.',
      assignedTo: 'Abdulmohsen Alaiban',
      avatar: 'https://randomuser.me/api/portraits/men/33.jpg',
      dueDate: '4 Nov, 2024',
      borderColor: '#ffe456',
    },
    {
      id: 3,
      title: 'Follow Up On The Progress Of Employees.',
      assignedTo: 'Mohammed Alotaibi',
      avatar: 'https://randomuser.me/api/portraits/men/34.jpg',
      dueDate: '4 Nov, 2024',
      borderColor: '#df2456',
    },
    {
      id: 4,
      title: 'Preparing Contracts For Employees In IT Department.',
      assignedTo: 'Akmal Aldahdouh',
      avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
      dueDate: '4 Nov, 2024',
      borderColor: '#2A7C62',
    },
  ],
};

const TaskCard: React.FC<Task> = ({
  title,
  assignedTo,
  avatar,
  dueDate,
  borderColor,
}) => (
  <div className={`bg-white rounded-lg p-4 border border-sky-100 border-l-4 cursor-pointer`} style={{ borderLeftColor: borderColor }}>
    <p className="text-[14px] font-semibold line-clamp-1">{title}</p>
    <div className="flex justify-between items-center flex-wrap gap-3 text-sm">
      <div className="flex items-center gap-2">
        <img
          src={avatar}
          alt={assignedTo}
          className="w-6 h-6 rounded-full object-cover"
        />
        <div>
          <p className="text-gray-400 text-xs m-0">Assigned by</p>
          <p className="text-xs m-0 font-medium">{assignedTo}</p>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <CalendarCheck size={18} className="text-salic-skyBlue" />
        <div>
          <p className="text-gray-400 text-xs m-0">Due date</p>
          <p className="text-xs m-0 font-medium">{dueDate}</p>
        </div>
      </div>
    </div>
  </div>
);

const TaskTabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'1' | '2'>('1');

  const tabButton = (key: '1' | '2', label: string) => (
    <button
      onClick={() => setActiveTab(key)}
      className={`relative w-1/2 text-start pb-3 font-semibold text-sm transition-all ${
        activeTab === key ? 'text-salic' : 'text-gray-400'
      }`}
    >
      {label}
      <span
        className={`absolute left-0 bottom-0 h-0.5 rounded-full transition-all duration-300 ${
          activeTab === key ? 'bg-salic w-full' : 'w-0'
        }`}
      />
    </button>
  );

  const activeTasks = activeTab === '1' ? tasks.myTasks : tasks.teamTasks;

  return (
    <div className="bg-sky-50 border border-sky-100 rounded-lg p-6 w-full max-w-3xl mx-auto h-full">
      <div className="flex border-b border-gray-200">
        {tabButton('1', 'My Tasks')}
        {tabButton('2', 'My Team Tasks')}
      </div>

      <div className="mt-4 space-y-4">
        {activeTasks.map((task) => (
          <TaskCard key={task.id} {...task} />
        ))}
      </div>
    </div>
  );
};

export default TaskTabs;
