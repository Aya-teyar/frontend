import React from 'react';
import { Search, Bell, Settings, ChevronLeft, ChevronRight, ChevronDown, PlayCircle, LogOut } from 'lucide-react';
import Sidebar from './Sidebar';


const ScheduleGrid = () => {
  const days = ['Mon 9', 'Tue 10', 'Wed 11', 'Thu 12', 'Fri 13'];
  const groups = Array(5).fill({
    name: 'Group 01',
    week: 'WK #1',
  });

  return (
    <div className="flex-1 overflow-auto">
      <div className="grid grid-cols-5 min-w-[1000px]">
        {days.map((day) => (
          <div key={day} className="p-4 text-center border-b border-gray-200">
            {day}
          </div>
        ))}
        
        {groups.map((group, groupIndex) => (
          <React.Fragment key={groupIndex}>
            {days.map((day, dayIndex) => (
              <div 
                key={`${groupIndex}-${dayIndex}`} 
                className="p-4 border border-gray-100 bg-green-50 min-h-[100px]"
              >
                {dayIndex === 0 && (
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 bg-green-200 rounded-lg"></div>
                    <div>
                      <div className="font-medium">{group.name}</div>
                      <div className="text-sm text-gray-500">{group.week}</div>
                    </div>
                  </div>
                )}
                {dayIndex === 1 && (
                  <div className="bg-white p-2 rounded-lg border border-gray-200">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                      Online Session
                    </div>
                    <PlayCircle className="w-5 h-5 text-customGreen mt-2" />
                  </div>
                )}
                {dayIndex >= 2 && Math.random() > 0.5 && (
                  <div className="bg-white p-2 rounded-lg border border-gray-200">
                    <div className="text-sm text-gray-600">
                      Due time 1:00 PM
                    </div>
                    <div className="text-sm text-gray-600">
                      WK#3
                    </div>
                  </div>
                )}
              </div>
            ))}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

const StudentSchedule = () => {
  return (
    <div className="flex h-screen bg-white">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        
        <ScheduleGrid />
      </div>
    </div>
  );
};

export default StudentSchedule;