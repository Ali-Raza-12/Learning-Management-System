import React from 'react';
import { Menu, Search, Bell, User } from 'lucide-react';


const Header = ({ toggleSidebar }) => {
  return (
    <header className="bg-white z-10 h-16 border-b border-gray-200">
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center gap-4">
          <button
            type="button"
            className="lg:hidden text-gray-500 focus:outline-none"
            onClick={toggleSidebar}
          >
            <Menu className="h-6 w-6" />
          </button>
          
          <div className="relative">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <Search className="h-4 w-4 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search..."
              className="w-full sm:w-64 py-2 pl-10 pr-4 rounded-md border border-gray-300 bg-gray-50 text-sm focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
            />
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <button
            type="button"
            className="p-1 rounded-full text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <Bell className="h-6 w-6" />
          </button>
          
          <div className="relative inline-block text-left">
            <button
              type="button"
              className="flex items-center space-x-2 bg-gray-100 rounded-full p-1 pr-2 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <div className="h-8 w-8 rounded-full bg-indigo-500 flex items-center justify-center">
                <User className="h-5 w-5 text-white" />
              </div>
              <span className="text-sm font-medium text-gray-700">Admin</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;