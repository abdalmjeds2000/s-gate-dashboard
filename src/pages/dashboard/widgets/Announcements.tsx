import { Gift, CalendarCheck, Megaphone } from 'lucide-react';

interface AnnouncementItem {
  title: string;
  description: string;
  date: string;
  icon: React.ReactNode;
}

const announcements: AnnouncementItem[] = [
  {
    title: 'Employee Promotion Announcement',
    description: `We are pleased to announce the promotion of 
      <a href="#" class="text-salic-skyBlue font-medium">Akmal Aldahdouh</a> 
      to the position of <a href="#" class="text-salic-skyBlue font-medium">AVP - IT Development</a>, effective 18 May, 2025.`,
    date: '17 May, 2025',
    icon: <Gift size={20} />,
  },
  {
    title: 'Office Relocation Announcement Office Relocation Announcement',
    description: `We are excited to announce that our office will be relocating to a new and improved space, effective 17 May, 2025.`,
    date: '17 May, 2025',
    icon: <Megaphone size={20} />,
  },
];

const Announcements = () => {
  return (
    <div className="bg-sky-50 border border-sky-100 rounded-lg p-6 w-full max-w-3xl mx-auto h-full">
      
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-salic m-0">Announcements</h2>
        <a href="#" className="text-sm text-salic font-medium hover:underline">See All</a>
      </div>

      {/* Cards */}
      <div className="space-y-4">
        {announcements.map((item, index) => (
          <div key={index} className="bg-white rounded-md p-4 space-y-2">
            <div className="flex items-center gap-3">
              <div className="bg-salic-lightBlue/20 p-1.5 rounded">
                {item.icon}
              </div>
              <h3 className="text-sm sm:text-sm font-semibold text-salic line-clamp-2 m-0">
                {item.title}
              </h3>
            </div>

            <p
              className="text-sm font-medium leading-relaxed"
              dangerouslySetInnerHTML={{ __html: item.description }}
            />
            <div className="flex items-center gap-2 pt-2 border-t border-gray-100 text-xs">
              <CalendarCheck size={16} strokeWidth={2} className="text-salic-primary" />
              <span className="font-medium">{item.date}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Announcements;
