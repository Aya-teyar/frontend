import React from 'react';
import { Search, Bell, Settings, ChevronLeft, ChevronRight, ChevronDown, PlayCircle, LogOut } from 'lucide-react';

const Sidebar = () => (
  <div className="w-64 border-r border-gray-200 h-screen p-6 ">
    <div className="flex items-center gap-2 mb-8">
      <img src="./src/assets/logo.png" alt="DZ-Teacher Logo" className="h-8" />
      <span className="font-semibold text-gray-800">DZ-Teacher</span>
    </div>

    <div className="flex items-center gap-3 mb-8">
      <img src="./src/assets/pic4.jpg" alt="Profile" className="w-10 h-10 rounded-full" />
      <div>
        <h3 className="font-medium">Bryan Smith </h3>
        <p className="text-sm text-gray-500">Teacher</p>
      </div>
    </div>

    <nav className="space-y-4">
      {[
        { icon: "⭐", label: "Dashboard" },
        { icon: "🕒", label: "My Schedule", active: true },
        { icon: "📝", label: "My Notes" },
        { icon: "👥", label: "My Groups" },
        { icon: "💳", label: "Payment info" },
        { icon: "👤", label: "My Account" },
      ].map((item, index) => (
        <a
          key={index}
          href="#"
          className={`flex items-center gap-3 px-4 py-2 rounded-lg ${
            item.active ? 'text-green-600 bg-green-50' : 'text-gray-600 hover:bg-gray-50'
          }`}
        >
          <span>{item.icon}</span>
          <span>{item.label}</span>
        </a>
      ))}
    </nav>

    <button className="flex items-center gap-3 text-gray-600 mt-auto absolute bottom-8">
      <LogOut className="w-5 h-5" />
      <span>Logout</span>
    </button>
  </div>
);

const ScheduleHeader = () => (
  <div className="border-b border-gray-200 px-8 py-4 ">
    <div className="flex items-center justify-between mb-8">
      <div className="relative">
        <Search className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          placeholder="Search"
          className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg w-64"
        />
      </div>
      <div className="flex items-center gap-4">
        <button className="relative">
          <Bell className="w-6 h-6" />
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full text-white text-xs flex items-center justify-center">
            1
          </span>
        </button>
        <Settings className="w-6 h-6" />
        <img src="/api/placeholder/32/32" alt="Profile" className="w-8 h-8 rounded-full" />
      </div>
    </div>

    <h1 className="text-2xl font-semibold mb-6">My Schedule</h1>

    <div className="flex items-center justify-between mb-6">
      <div className="flex items-center gap-4">
        <span className="text-gray-600">02 - 08 March</span>
        <div className="flex gap-2">
          <button className="p-1 rounded-lg border">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button className="p-1 rounded-lg border">
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
      <button className="flex items-center gap-2 text-gray-600">
        (GMT +06:00) Public Time
        <ChevronDown className="w-5 h-5" />
      </button>
    </div>

    <div className="flex gap-4">
      <button className="px-4 py-2 rounded-lg border flex items-center gap-2">
        Level
        <ChevronDown className="w-4 h-4" />
      </button>
      <button className="px-4 py-2 rounded-lg border flex items-center gap-2">
        Matiere
        <ChevronDown className="w-4 h-4" />
      </button>
    </div>
  </div>
);

const ScheduleGrid = () => {
  const days = ['Mon 9', 'Tue 10', 'Wed 11', 'Thu 12', 'Fri 13'];
  const groups = Array(5).fill({
    name: 'Group 01',
    week: 'WK #1',
  });

  return (
    <div className="flex-1 overflow-auto ">
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
        <ScheduleHeader />
        <ScheduleGrid />
      </div>
    </div>
  );
};

export default StudentSchedule;