import React from "react";
import {
  ArrowRight,
  LayoutDashboard,
  MessageCircle,
  Gift,
  Settings,
  Users,
  Server
} from "lucide-react";
import { Image, Progress } from "antd";

const services = [
  {
    title: "Interactive Dashboard",
    desc: "Data visualization tool through a user-friendly interface.",
    icon: <LayoutDashboard size={20} className="text-salic" />,
  },
  {
    title: "Communication",
    desc: "Sharing information, ideas, and updates.",
    icon: <MessageCircle size={20} className="text-salic" />,
  },
  {
    title: "Offers",
    desc: "Deals providing products, services, discounts.",
    icon: <Gift size={20} className="text-salic" />,
  },
  {
    title: "Other Services",
    desc: "Additional employee tools and resources.",
    icon: <Settings size={20} className="text-salic" />,
  },
  {
    title: "HR & Employee",
    desc: "Employee documents and requests.",
    icon: <Users size={20} className="text-salic" />,
  },
  {
    title: "IT Support",
    desc: "Technical assistance and ticketing.",
    icon: <Server size={20} className="text-salic" />,
  },
];

const ServiceHubContent: React.FC = () => {
  return (
    <div className="space-y-8">
      {/* Service Tiles */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 text-sm text-gray-700">
        {services.map(({ title, desc, icon }, idx) => (
          <div key={idx} className="flex items-start gap-3">
            <div className="bg-[#E0F0FF] p-2.5 rounded">{icon}</div>
            <div>
              <h3 className="font-semibold text-salic mb-1 line-clamp-1">{title}</h3>
              <p className="text-xs text-gray-500 leading-tight mb-0 line-clamp-1">{desc}</p>
            </div>
          </div>
        ))}
      </div>

      <hr className="border-gray-200" />

      {/* Highlights Section */}
      <div className="grid grid-cols-1 lg:grid-cols-[7fr_4fr_4fr] gap-4 lg:gap-10 text-sm">
        {/* SALIC Resort */}
        <div>
          <h3 className="font-semibold text-salic mb-2 text-lg">SALIC Resort</h3>
          <div className="bg-gradient-to-b from-[#EBF6ED] to-[#F7FCF8] p-4 lg:p-6 rounded-lg space-y-4">
            <div className="flex gap-4">
              <Image 
                src="/images/shaleeh1.png"
                alt="shaleeh1"
              />
              <Image 
                src="/images/shaleeh2.png"
                alt="shaleeh1"
              />
            </div>
            <div className="flex justify-end">
              <button className="flex items-center gap-1 text-sm font-semibold px-4 py-2 text-white bg-[#A4D5AD] hover:bg-[#93c79d] rounded">
                <span>Explore</span>
                <ArrowRight size={16} strokeWidth={2.25} />
              </button>
            </div>
          </div>
        </div>

        {/* Latest Offers */}
        <div>
          <h3 className="font-semibold text-salic mb-2 text-lg">Latest Offers</h3>

          <div className="bg-gradient-to-b from-[#E2F1F9] to-[#F8FCFE] p-4 rounded-lg w-full space-y-3">
            <p className="text-salic-skyBlue font-medium mb-0">iPad Air Sale</p>
            <p className="text-salic text-lg font-bold !mt-0">Up to 60% Off</p>
            <img
              src={"/images/LatestOffers.png"}
              alt="offer"
              className="mx-4 w-28 object-cover"
            />
            <div className="flex justify-end">
              <button className="flex items-center gap-1 text-sm font-semibold px-4 py-2 text-white bg-salic hover:bg-[#0f253c] rounded">
                <span>Explore</span>
                <ArrowRight size={16} strokeWidth={2.25} />
              </button>
            </div>
          </div>
        </div>

        {/* Employee Satisfaction */}
        <div>
          <h3 className="font-semibold text-salic mb-2 text-lg">Employee Satisfaction</h3>

          <div className="bg-[#DBEFDF8F] w-full p-4 lg:p-6 rounded-lg text-center">
            <div className="relative w-[100px] h-[100px] mx-auto mb-4">
              <Progress
                type="circle"
                percent={90}
                width={100}
                strokeColor={{ "0%": "#4CAF50", "100%": "#4CAF50" }}
                trailColor="#E6E6E6"
                format={() => (
                  <div className="flex justify-center items-center">
                    <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
                      <circle cx="40" cy="40" r="39.8672" fill="white" />
                      <path d="M48.2 52.6C43.1 55.8 36.6 55.8 31.5 52.6" stroke="#76AD80" strokeWidth="6" strokeLinecap="round" />
                      <path d="M31.9 33.2C30.4 28 23.1 28 21.6 33.2" stroke="#76AD80" strokeWidth="7" strokeLinecap="round" />
                      <path d="M57.5 33.2C56 28 48.7 28 47.2 33.2" stroke="#76AD80" strokeWidth="7" strokeLinecap="round" />
                    </svg>
                  </div>
                )}
              />
            </div>
            <div className="text-xl font-bold text-salic mb-2">90%</div>
            <p className="text-xs text-gray-600 m-0">You're achieving a 90% rating this month! Keep going.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceHubContent;
