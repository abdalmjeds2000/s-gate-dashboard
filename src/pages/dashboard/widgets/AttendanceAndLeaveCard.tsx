import React from "react";
import { Card, Progress, Typography } from "antd";
import { Plus } from "lucide-react";
import { Link } from "react-router-dom";

const { Title, Text } = Typography;

const AttendanceAndLeaveCard = () => {
  return (
    <Card bodyStyle={{ padding: 0, height: '100%' }} className="h-full !rounded-lg hover:!shadow-none hover:!border-salic-primary hover:!bg-salic-primary/5 !transition-all !duration-300">
      <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] divide-y lg:divide-y-0 lg:divide-x h-full">
        {/* Attendance Section */}
        <div className="p-4 xl:p-6 flex flex-col justify-between">
          <Link to='/attendance'>
            <Title level={5} className="text-[16px] font-semibold mb-4">
              My Attendance
            </Title>
          </Link>

          <div>
            <div className="grid grid-cols-2 gap-y-6 gap-x-4 text-sm">
              {/* Check In */}
              <div className="relative pr-0 after:absolute after:top-1 after:bottom-1 after:right-0 after:w-px after:bg-gray-200">
                <p className="block text-gray-500 mb-1 text-xs">Check In</p>
                <Text className="text-base font-medium">8:00 AM</Text>
              </div>

              {/* Check Out */}
              <div className="">
                <p className="block text-gray-500 mb-1 text-xs">Check Out</p>
                <Text className="text-base font-semibold">16:00 PM</Text>
              </div>

              {/* Working Time */}
              <div className="relative pr-0 after:absolute after:top-1 after:bottom-1 after:right-0 after:w-px after:bg-gray-200">
                <p className="block text-gray-500 mb-1 text-xs">Working Time</p>
                <Text className="text-base font-semibold">5 Hrs. 5 min</Text>
              </div>

              {/* Monthly Avg. */}
              <div className="">
                <p className="block text-gray-500 mb-1 text-xs">Monthly Avg.</p>
                <Text className="text-base font-semibold">7.5 Hrs</Text>
              </div>
            </div>

            <Progress
              percent={60}
              showInfo={false}
              strokeColor="#A4D5AD"
              className="mt-4"
            />
          </div>
        </div>

        {/* Leaves Section */}
        <div className="p-4 xl:p-6 flex flex-col justify-between">
          <div className="flex justify-between items-center mb-4">
            <Title level={5} className="text-[16px] font-semibold m-0">
              Leaves
            </Title>
            <button 
              className="rounded-full border-[3px] border-salic-skyBlue text-salic-skyBlue p-1 hover:bg-salic-lightBlue/20 transition"
              onClick={e => {
                e.stopPropagation();
              }}
            >
              <Plus size={16} strokeWidth={3} />
            </button>
          </div>

          <div>
            <p className="block text-gray-500 mb-1 text-xs">Remaining</p>
            <Text className="text-base font-semibold">
              40 Days <span className="text-gray-400 font-normal">/ 100</span>
            </Text>
            <Progress
              percent={40}
              showInfo={false}
              strokeColor="#A4D5AD"
              className="mt-4"
            />
          </div>
        </div>
      </div>
    </Card>
  );
};

export default AttendanceAndLeaveCard;
