import React from 'react';

export const Footer = () => {
  return (
    <footer className="bg-salic text-white mt-12 container mx-auto my-8 px-4 lg:px-8 pb-4 pt-12 rounded-t-xl overflow-hidden">
      <div className=''>
        <img src='/images/logo.png' alt="logo" className="w-24 lg:w-32 mb-12" />
        <div className="mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-xs lg:text-sm">
          <div>
            <h4 className="font-semibold mb-6 text-white text-sm lg:text-base">HR Services</h4>
            <ul className="space-y-4">
              <li><a href="#" className='!text-white hover:underline'>Leave Application</a></li>
              <li><a href="#" className='!text-white hover:underline'>Payslip Access</a></li>
              <li><a href="#" className='!text-white hover:underline'>Attendance Policy</a></li>
              <li><a href="#" className='!text-white hover:underline'>Official Holidays Calendar</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-6 text-white text-sm lg:text-base">Employee Tools</h4>
            <ul className="space-y-4">
              <li><a href="#" className='!text-white hover:underline'>Self-Service Portal (ESS)</a></li>
              <li><a href="#" className='!text-white hover:underline'>Time Tracking System</a></li>
              <li><a href="#" className='!text-white hover:underline'>Update Personal Info</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-6 text-white text-sm lg:text-base">Learning & Development</h4>
            <ul className="space-y-4">
              <li><a href="#" className='!text-white hover:underline'>Training Schedule</a></li>
              <li><a href="#" className='!text-white hover:underline'>eLearning Portal</a></li>
              <li><a href="#" className='!text-white hover:underline'>Career Development</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-6 text-white text-sm lg:text-base">Support</h4>
            <ul className="space-y-4">
              <li><a href="#" className='!text-white hover:underline'>HR Help Desk</a></li>
              <li><a href="#" className='!text-white hover:underline'>IT Service Request</a></li>
              <li><a href="#" className='!text-white hover:underline'>Contact Directory</a></li>
            </ul>
          </div>
        </div>

        <hr className="border-t border-salic-primary my-6" />

        <div className="mx-auto flex flex-col md:flex-row justify-between items-center text-[9px] lg:text-xs text-[#cbd5e1]">
          <p>© 2025 SALIC. All rights reserved.</p>
          <div className="flex space-x-2 lg:space-x-4 mt-2 md:mt-0">
            <a href="#" className="hover:text-white hover:underline text-white">Privacy & Data Policy</a>
            <span>|</span>
            <a href="#" className="hover:text-white hover:underline text-white">Terms of Use</a>
            <span>|</span>
            <a href="#" className="hover:text-white hover:underline text-white">System User Guide</a>
          </div>
        </div>

        <div className="w-full mt-6">
          <img src='/images/line-pattern.png' alt="line-pattern" className="w-full max-sm:scale-[4] max-sm:overflow-hidden" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
