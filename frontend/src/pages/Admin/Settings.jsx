import React from 'react';
// import SettingsLayout from '../../layouts/SettingLayout/AdminSettingLayout';
// import SettingsSidebar from '../../components/AdminComponents/SettingsSidebar';
// import ProfileSettings from '../../components/AdminComponents/ProfileSettings';
// import NotificationSettings from '../../components/AdminComponents/NotificationSettings';
// import SecuritySettings from './SecuritySettings';
// import AppearanceSettings from '../../components/AdminComponents/AppearanceSettings';
// import AMDSettings from './AMDSettings';

const Settings = () => {
  // const [activeTab, setActiveTab] = useState('amd'); 
  // const handleTabChange = (tab) => {
  //   setActiveTab(tab);
  // };

  const renderContent = () => {
    // switch (activeTab) {
    //   case 'profile':
    //     return <ProfileSettings />;
    //   case 'notifications':
    //     return <NotificationSettings />;
    //   case 'security':
    //     return <SecuritySettings />;
    //   case 'appearance':
    //     return <AppearanceSettings />;
    //   case 'amd':
    //     return <AMDSettings />;
    //   default:
    //     return (
    //       <div className="bg-white shadow rounded-lg p-6">
    //         <h2 className="text-lg font-medium">Coming Soon</h2>
    //         <p className="mt-2 text-gray-500">This section is currently under development.</p>
    //       </div>
    //     );
    // }
    return (
      <div className="bg-white shadow rounded-lg p-6">
        <h2 className="text-lg font-medium">Coming Soon</h2>
        <p className="mt-2 text-gray-500">This section is currently under development.</p>
      </div>
    );
  };

  return (
    // <SettingsLayout>
    <>
      <div className="pb-6">
        <h1 className="text-2xl font-bold text-gray-900">Settings</h1>
        <p className="mt-1 text-sm text-gray-500">
          Manage your account settings and preferences.
        </p>
      </div>
      
      <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
        <div className="md:col-span-1">
          {/* <SettingsSidebar activeTab={activeTab} onTabChange={handleTabChange} /> */}
        </div>
        <div className="md:col-span-3">
          {renderContent()}
        </div>
      </div>
    </>
    // </SettingsLayout>
  );
};

export default Settings;
