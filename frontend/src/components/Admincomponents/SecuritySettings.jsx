import React, { useState } from 'react';
import { Shield, Key, Smartphone } from 'lucide-react';
import Toggle from '../ui/Toggle';

const SecuritySettings = () => {
  const [passwordForm, setPasswordForm] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  });
  
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(false);
  const [sessionTimeout, setSessionTimeout] = useState(30);
  const [loginNotifications, setLoginNotifications] = useState(true);
  
  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    setPasswordForm(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    // Password change logic would go here
    console.log('Password change:', passwordForm);
    // Reset form
    setPasswordForm({
      currentPassword: '',
      newPassword: '',
      confirmPassword: '',
    });
  };

  return (
    <div className="bg-white shadow rounded-lg">
      <div className="px-6 py-5 border-b border-gray-200">
        <h3 className="text-lg font-medium leading-6 text-gray-900">Security Settings</h3>
        <p className="mt-1 text-sm text-gray-500">
          Manage your password, two-factor authentication, and other security settings.
        </p>
      </div>
      
      <div className="px-6 py-5 space-y-8">
        {/* Password Change Section */}
        <div>
          <div className="flex items-center mb-4">
            <Key className="h-5 w-5 text-gray-400 mr-2" />
            <h4 className="text-sm font-medium text-gray-900">Change Password</h4>
          </div>
          
          <form onSubmit={handlePasswordSubmit} className="space-y-4">
            <div>
              <label htmlFor="currentPassword" className="block text-sm font-medium text-gray-700">
                Current Password
              </label>
              <div className="mt-1">
                <input
                  type="password"
                  name="currentPassword"
                  id="currentPassword"
                  value={passwordForm.currentPassword}
                  onChange={handlePasswordChange}
                  required
                  className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="newPassword" className="block text-sm font-medium text-gray-700">
                New Password
              </label>
              <div className="mt-1">
                <input
                  type="password"
                  name="newPassword"
                  id="newPassword"
                  value={passwordForm.newPassword}
                  onChange={handlePasswordChange}
                  required
                  className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                />
              </div>
              <p className="mt-1 text-xs text-gray-500">
                Password must be at least 8 characters and include a number, a symbol, and an uppercase letter.
              </p>
            </div>
            
            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
                Confirm New Password
              </label>
              <div className="mt-1">
                <input
                  type="password"
                  name="confirmPassword"
                  id="confirmPassword"
                  value={passwordForm.confirmPassword}
                  onChange={handlePasswordChange}
                  required
                  className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                />
              </div>
            </div>
            
            <div>
              <button
                type="submit"
                className="px-4 py-2 text-sm font-medium rounded-md border border-transparent text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Update Password
              </button>
            </div>
          </form>
        </div>
        
        {/* Two-Factor Authentication */}
        <div className="pt-4 border-t border-gray-200">
          <div className="flex items-center mb-4">
            <Smartphone className="h-5 w-5 text-gray-400 mr-2" />
            <h4 className="text-sm font-medium text-gray-900">Two-Factor Authentication</h4>
          </div>
          
          <p className="text-sm text-gray-600 mb-4">
            Add an extra layer of security to your account by requiring both your password and a 
            verification code from your mobile device.
          </p>
          
          <div className="flex items-center mb-6">
            <span className="mr-4">
              {twoFactorEnabled ? (
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                  Enabled
                </span>
              ) : (
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                  Disabled
                </span>
              )}
            </span>
            
            <button
              type="button"
              className="px-3 py-1.5 text-xs font-medium rounded-md border border-gray-300 text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              onClick={() => setTwoFactorEnabled(!twoFactorEnabled)}
            >
              {twoFactorEnabled ? 'Disable' : 'Enable'}
            </button>
          </div>
        </div>
        
        {/* Additional Security Settings */}
        <div className="pt-4 border-t border-gray-200">
          <div className="flex items-center mb-4">
            <Shield className="h-5 w-5 text-gray-400 mr-2" />
            <h4 className="text-sm font-medium text-gray-900">Additional Security</h4>
          </div>
          
          <div className="space-y-4">
            <div>
              <label htmlFor="sessionTimeout" className="block text-sm font-medium text-gray-700">
                Session Timeout (minutes)
              </label>
              <div className="mt-1">
                <input
                  type="number"
                  name="sessionTimeout"
                  id="sessionTimeout"
                  min="5"
                  max="120"
                  value={sessionTimeout}
                  onChange={(e) => setSessionTimeout(parseInt(e.target.value, 10))}
                  className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                />
              </div>
              <p className="mt-1 text-xs text-gray-500">
                Your account will be automatically logged out after this period of inactivity.
              </p>
            </div>
            
            <Toggle
              label="Login Notifications"
              description="Receive email alerts when your account is accessed from a new device or location"
              enabled={loginNotifications}
              onChange={() => setLoginNotifications(!loginNotifications)}
            />
          </div>
        </div>
        
        <div className="flex justify-end pt-4 border-t border-gray-200">
          <button
            type="button"
            className="px-4 py-2 text-sm font-medium rounded-md border border-gray-300 text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 mr-3"
          >
            Cancel
          </button>
          <button
            type="button"
            className="px-4 py-2 text-sm font-medium rounded-md border border-transparent text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default SecuritySettings;