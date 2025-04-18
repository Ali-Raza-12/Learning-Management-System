import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Users, 
  GraduationCap, 
  BookOpen, 
  Settings, 
  Bell, 
  LogOut, 
  X 
} from 'lucide-react';


const Sidebar = ({ closeSidebar }) => {
  const navigation = [
    { name: 'Dashboard', icon: LayoutDashboard, href: '/' },
    { name: 'Students', icon: GraduationCap, href: '/students' },
    { name: 'Teachers', icon: Users, href: '/teachers' },
    { name: 'Courses', icon: BookOpen, href: '/courses' },
  ];

  const secondaryNavigation = [
    { name: 'Settings', icon: Settings, href: '/settings' },
    { name: 'Notifications', icon: Bell, href: '/notifications' },
  ];

  return (
    <div className="flex h-full flex-col overflow-y-auto bg-indigo-700 text-white">
      <div className="flex items-center justify-between px-4 py-5">
        <div className="flex items-center">
          <GraduationCap className="h-8 w-8 text-indigo-300" />
          <h1 className="ml-3 text-xl font-bold">EduAdmin</h1>
        </div>
        {closeSidebar && (
          <button 
            onClick={closeSidebar}
            className="lg:hidden text-indigo-300 hover:text-white"
          >
            <X className="h-6 w-6" />
          </button>
        )}
      </div>
      
      <div className="mt-6 flex flex-1 flex-col px-3">
        <nav className="space-y-1">
          {navigation.map((item) => (
            <NavLink
              key={item.name}
              to={item.href}
              className={({ isActive }) => 
                `flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors duration-150 ease-in-out ${
                  isActive 
                    ? 'bg-indigo-800 text-white' 
                    : 'text-indigo-100 hover:bg-indigo-600'
                }`
              }
              end={item.href === '/'}
            >
              <item.icon className="mr-3 h-5 w-5 flex-shrink-0" />
              {item.name}
            </NavLink>
          ))}
        </nav>
        
        <div className="mt-10">
          <p className="px-3 text-xs font-semibold text-indigo-200 uppercase tracking-wider">
            System
          </p>
          <nav className="mt-2 space-y-1">
            {secondaryNavigation.map((item) => (
              <NavLink
                key={item.name}
                to={item.href}
                className="flex items-center px-3 py-2 text-sm font-medium rounded-md text-indigo-100 hover:bg-indigo-600 transition-colors duration-150 ease-in-out"
              >
                <item.icon className="mr-3 h-5 w-5 flex-shrink-0" />
                {item.name}
              </NavLink>
            ))}
          </nav>
        </div>
      </div>
      
      <div className="border-t border-indigo-600 p-4">
        <button className="flex w-full items-center px-3 py-2 text-sm font-medium rounded-md text-indigo-100 hover:bg-indigo-600 transition-colors duration-150 ease-in-out">
          <LogOut className="mr-3 h-5 w-5 flex-shrink-0" />
          Sign out
        </button>
      </div>
    </div>
  );
};

export default Sidebar;