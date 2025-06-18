import React from 'react';
import { Card, Progress } from 'antd';
import { CalendarCheck, Figma, Command } from 'lucide-react';

const IDPProgressCard = () => {
  return (
    <Card bodyStyle={{ padding: 0, height: '100%' }} className='h-full !rounded-lg'>
      <div className="flex flex-col lg:flex-row lg:items-center gap-2 sm:gap-4 p-4 xl:p-6">
        {/* Left: Circular Progress */}
        <div className="lg:w-1/3">
          <h2 className="text-base font-semibold text-salic mb-6 line-clamp-1">
            IDP Progress
          </h2>
          <div className="flex flex-row lg:flex-col gap-4 lg:gap-0 items-center lg:justify-center">
            <Progress
              type="circle"
              percent={80}
              width={90}
              strokeColor="#339BD6"
              strokeWidth={14}
              format={(percent) => (
                <span className="text-salic font-semibold">{percent}%</span>
              )}
            />
            <p className="text-lg lg:text-xs text-left lg:text-center text-gray-600 mt-3">
              You've made impressive progress with{' '}
              <span className="text-salic-skyBlue font-medium">80%</span>.
            </p>
          </div>
        </div>

        {/* Right: Courses */}
        <div className="flex-1 space-y-4 w-full">
          {/* Figma Course */}
          <div className="flex flex-col gap-1 bg-gradient-to-r from-salic-lightGreen/10 to-salic-lightBlue/10 p-3 rounded-lg">
            <div className="flex items-center gap-3">
              <div className="bg-pink-600 text-white p-2 rounded-md">
                <Figma size={18} />
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold text-sm mb-0 line-clamp-1">Figma Course</h3>
                    <p className="text-xs text-salic-skyBlue mb-0 line-clamp-1">Design Course</p>
                  </div>
                  <div className="text-xs text-gray-500 flex items-center gap-1">
                    <CalendarCheck size={16} />
                    <span>25 Sep</span>
                  </div>
                </div>
              </div>
            </div>
            <Progress percent={100} strokeColor="#309575" />
          </div>

          {/* ICDL Course */}
          <div className="flex flex-col gap-1 bg-gradient-to-r from-salic-lightGreen/10 to-salic-lightBlue/10 p-3 rounded-lg">
            <div className="flex items-center gap-3">
              <div className="bg-salic-skyBlue text-white p-2 rounded-md">
                <Command size={18} />
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold text-sm mb-0 line-clamp-1">ICDL Course</h3>
                    <p className="text-xs text-salic-skyBlue mb-0 line-clamp-1">Training Program</p>
                  </div>
                  <div className="text-xs text-gray-500 flex items-center gap-1">
                    <CalendarCheck size={16} />
                    <span>25 Sep</span>
                  </div>
                </div>
              </div>
            </div>
            <Progress percent={100} strokeColor="#309575" />
          </div>
        </div>
      </div>
    </Card>
  );
};

export default IDPProgressCard;
