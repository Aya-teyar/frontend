import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import { Search, Bell, Settings, ChevronLeft, ChevronRight, ChevronDown, PlayCircle, LogOut } from 'lucide-react';

const Sidebar = () => (
  <div className="w-64 border-r border-gray-200 h-screen p-6">
    <div className="flex items-center gap-2 mb-8">
      <img src="/api/placeholder/32/32" alt="DZ-Teacher Logo" className="h-8" />
      <span className="font-semibold text-gray-800">DZ-Teacher</span>
    </div>

    <div className="flex items-center gap-3 mb-8">
      <img src="/api/placeholder/40/40" alt="Profile" className="w-10 h-10 rounded-full" />
      <div>
        <h3 className="font-medium">Jone Copper</h3>
        <p className="text-sm text-gray-500">Student</p>
      </div>
    </div>

    <nav className="space-y-4">
      {[
        { icon: "⭐", label: "Dashboard", to: "/StudentDasshboard", active: true },
        { icon: "🕒", label: "My Schedule", to: "/studentschedule", active: true }, 
        { icon: "📝", label: "My Notes", to: "/notes" },
        { icon: "👥", label: "My Groups", to: "/studentgroup", active: true }, 
        { icon: "💳", label: "Payment info", to: "/payment-info" },
        { icon: "👤", label: "My Account", to: "/account" },
      ].map((item, index) => (
        <Link
          key={index}
          to={item.to} // Use Link component to handle navigation
          className={`flex items-center gap-3 px-4 py-2 rounded-lg ${
            item.active ? 'text-customGreen bg-green-50' : 'text-gray-600 hover:bg-gray-50'
          }`}
        >
          <span>{item.icon}</span>
          <span>{item.label}</span>
        </Link>
      ))}
    </nav>

    <button className="flex items-center gap-3 text-gray-600 mt-auto absolute bottom-8">
      <LogOut className="w-5 h-5" />
      <span>Logout</span>
    </button>
  </div>
);

export default Sidebar;
