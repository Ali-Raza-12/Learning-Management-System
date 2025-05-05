import React from 'react';
import { User, Bell, Shield, Palette, Wrench, Globe, Accessibility, Link } from 'lucide-react';



const SettingsSidebar = ({ activeTab, onTabChange }) => {
  const tabs = [
    { id: 'profile', name: 'Profile', icon: User },
    { id: 'notifications', name: 'Notifications', icon: Bell },
    { id: 'security', name: 'Security', icon: Shield },
    { id: 'appearance', name: 'Appearance', icon: Palette },
    { id: 'amd', name: 'AMD Settings', icon: Wrench, badge: 'Beta' },
    { id: 'account', name: 'Account', icon: Globe },
    { id: 'accessibility', name: 'Accessibility', icon: Accessibility },
    { id: 'integrations', name: 'Integrations', icon: Link },
  ];

  return (
    <div className="bg-white shadow rounded-lg overflow-hidden">
      <div className="px-6 py-5 border-b border-gray-200">
        <h3 className="text-lg font-medium leading-6 text-gray-900">Settings</h3>
        <p className="mt-1 text-sm text-gray-500">
          Manage your account preferences and system settings.
        </p>
      </div>
      <nav className="px-3 py-2 space-y-1">
        {tabs.map((tab) => {
          const IconComponent = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={`flex items-center w-full px-3 py-2.5 text-sm font-medium rounded-md transition-colors ${
                activeTab === tab.id
                  ? 'bg-blue-50 text-blue-700'
                  : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
              }`}
            >
              <IconComponent className={`mr-3 h-5 w-5 ${
                activeTab === tab.id ? 'text-blue-500' : 'text-gray-400'
              }`} />
              <span>{tab.name}</span>
              {tab.badge && (
                <span className="ml-auto inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                  {tab.badge}
                </span>
              )}
            </button>
          );
        })}
      </nav>
    </div>
  );
};

export default SettingsSidebar;