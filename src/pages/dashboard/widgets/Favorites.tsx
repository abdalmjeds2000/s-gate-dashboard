import {
  Star,
  Briefcase,
  PenLine,
  GraduationCap,
  Send
} from 'lucide-react';

const favorites = [
  { label: 'Admin Services', icon: <Briefcase size={22} />, color: 'bg-[#309575]' },
  { label: 'E-Signature Document', icon: <PenLine size={22} />, color: 'bg-[#C7569F]' },
  { label: 'Talents & Learning Management', icon: <GraduationCap size={22} />, color: 'bg-[#71A7BB]' },
  { label: 'Corresponding System', icon: <Send size={22} />, color: 'bg-[#BDAE22]' },
];

const Favorites = () => {
  return (
    <div className="bg-sky-50 border border-sky-100 rounded-lg p-6 w-full max-w-3xl mx-auto h-full">
      <h2 className="text-lg font-semibold text-salic mb-4">My Favorites ({favorites.length})</h2>

      <div className="space-y-3">
        {favorites.map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-between bg-white p-4 rounded-md group hover:shadow-sm transition"
          >
            <div className="flex items-center gap-3">
              <div
                className={`w-10 h-10 rounded-md flex items-center justify-center text-white ${item.color}`}
              >
                {item.icon}
              </div>
              <span className="text-sm text-salic font-semibold line-clamp-1">
                {item.label}
              </span>
            </div>
            <Star
              size={20}
              strokeWidth={2.5}
              className="text-yellow-400 fill-yellow-400 transition-opacity opacity-90 group-hover:opacity-100"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favorites;
