import * as React from 'react';
import { CalendarCheck } from 'lucide-react';

interface NewsItem {
  title: string;
  date: string;
  image: string;
}

const news: NewsItem[] = [
  {
    title: 'SALIC Signs an Agreement to Increase Stake in Olam Agri Holding to 80.01%',
    date: '17 May, 2025',
    image: 'https://picsum.photos/200',
  },
  {
    title: 'SALIC and Riyadh Development Company (ARDCO) Sign a MoU to ...',
    date: '17 May, 2025',
    image: 'https://picsum.photos/200',
  },
  {
    title: 'SALIC Concludes Its Participation in the PIF Private Sector Forum 2025 ....',
    date: '17 May, 2025',
    image: 'https://picsum.photos/200',
  },
];

const News = () => {
  return (
    <div className="bg-sky-50 border border-sky-100 rounded-lg p-6 w-full max-w-3xl mx-auto h-full">
      
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-salic m-0">News</h2>
        <a href="#" className="text-sm font-medium hover:underline">See All</a>
      </div>

      <div className="space-y-3">
        {news.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-md p-3 flex items-start gap-3 hover:shadow-sm transition"
          >
            <div
              className="w-20 h-20 rounded-md flex items-center justify-center bg-cover"
              style={{ backgroundImage: `url(${item.image})` }}
            />
            <div className="flex flex-col justify-between gap-4 flex-1">
              <p className="text-sm font-semibold line-clamp-2 m-0">
                {item.title}
              </p>
              <div className="flex items-center gap-1 text-xs">
                <CalendarCheck size={16} />
                <span className="font-medium">{item.date}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default News;
