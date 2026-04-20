import React, { useState } from 'react';
import { Sun, Moon, Monitor } from 'lucide-react';

const AppearanceSettings = () => {
  const [theme, setTheme] = useState<'light' | 'dark' | 'system'>('light');
  const [fontSize, setFontSize] = useState<'small' | 'medium' | 'large'>('medium');
  const [density, setDensity] = useState<'compact' | 'comfortable' | 'spacious'>('comfortable');
  const [accentColor, setAccentColor] = useState<string>('#3B82F6');
  const [animations, setAnimations] = useState<boolean>(true);
  
  const handleThemeChange = (newTheme: 'light' | 'dark' | 'system') => {
    setTheme(newTheme);
  };
  
  const handleFontSizeChange = (newSize: 'small' | 'medium' | 'large') => {
    setFontSize(newSize);
  };
  
  const handleDensityChange = (newDensity: 'compact' | 'comfortable' | 'spacious') => {
    setDensity(newDensity);
  };
  
  const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAccentColor(e.target.value);
  };
  
  const handleAnimationsToggle = () => {
    setAnimations(!animations);
  };

  return (
    <div className="bg-white shadow rounded-lg">
      <div className="px-6 py-5 border-b border-gray-200">
        <h3 className="text-lg font-medium leading-6 text-gray-900">Appearance Settings</h3>
        <p className="mt-1 text-sm text-gray-500">
          Customize how the Learning Management System looks and feels for you.
        </p>
      </div>
      
      <div className="px-6 py-5 space-y-6">
        {/* Theme */}
        <div>
          <h4 className="text-sm font-medium text-gray-900 mb-4">Theme</h4>
          <div className="grid grid-cols-3 gap-3">
            <button
              type="button"
              className={`flex flex-col items-center px-4 py-3 rounded-md border ${
                theme === 'light' 
                  ? 'border-blue-500 bg-blue-50 ring-2 ring-blue-500 ring-offset-2' 
                  : 'border-gray-200 hover:bg-gray-50'
              }`}
              onClick={() => handleThemeChange('light')}
            >
              <Sun className={`h-6 w-6 ${theme === 'light' ? 'text-blue-600' : 'text-gray-400'}`} />
              <span className={`mt-2 text-sm font-medium ${theme === 'light' ? 'text-blue-600' : 'text-gray-900'}`}>
                Light
              </span>
            </button>
            
            <button
              type="button"
              className={`flex flex-col items-center px-4 py-3 rounded-md border ${
                theme === 'dark' 
                  ? 'border-blue-500 bg-blue-50 ring-2 ring-blue-500 ring-offset-2' 
                  : 'border-gray-200 hover:bg-gray-50'
              }`}
              onClick={() => handleThemeChange('dark')}
            >
              <Moon className={`h-6 w-6 ${theme === 'dark' ? 'text-blue-600' : 'text-gray-400'}`} />
              <span className={`mt-2 text-sm font-medium ${theme === 'dark' ? 'text-blue-600' : 'text-gray-900'}`}>
                Dark
              </span>
            </button>
            
            <button
              type="button"
              className={`flex flex-col items-center px-4 py-3 rounded-md border ${
                theme === 'system' 
                  ? 'border-blue-500 bg-blue-50 ring-2 ring-blue-500 ring-offset-2' 
                  : 'border-gray-200 hover:bg-gray-50'
              }`}
              onClick={() => handleThemeChange('system')}
            >
              <Monitor className={`h-6 w-6 ${theme === 'system' ? 'text-blue-600' : 'text-gray-400'}`} />
              <span className={`mt-2 text-sm font-medium ${theme === 'system' ? 'text-blue-600' : 'text-gray-900'}`}>
                System
              </span>
            </button>
          </div>
        </div>
        
        {/* Font Size */}
        <div>
          <h4 className="text-sm font-medium text-gray-900 mb-4">Font Size</h4>
          <div className="flex items-center space-x-2">
            <button
              type="button"
              className={`px-3 py-1.5 text-sm rounded-md ${
                fontSize === 'small'
                  ? 'bg-blue-100 text-blue-800 font-medium'
                  : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
              }`}
              onClick={() => handleFontSizeChange('small')}
            >
              Small
            </button>
            <button
              type="button"
              className={`px-3 py-1.5 text-sm rounded-md ${
                fontSize === 'medium'
                  ? 'bg-blue-100 text-blue-800 font-medium'
                  : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
              }`}
              onClick={() => handleFontSizeChange('medium')}
            >
              Medium
            </button>
            <button
              type="button"
              className={`px-3 py-1.5 text-sm rounded-md ${
                fontSize === 'large'
                  ? 'bg-blue-100 text-blue-800 font-medium'
                  : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
              }`}
              onClick={() => handleFontSizeChange('large')}
            >
              Large
            </button>
          </div>
        </div>
        
        {/* Display Density */}
        <div>
          <h4 className="text-sm font-medium text-gray-900 mb-4">Display Density</h4>
          <div className="flex items-center space-x-2">
            <button
              type="button"
              className={`px-3 py-1.5 text-sm rounded-md ${
                density === 'compact'
                  ? 'bg-blue-100 text-blue-800 font-medium'
                  : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
              }`}
              onClick={() => handleDensityChange('compact')}
            >
              Compact
            </button>
            <button
              type="button"
              className={`px-3 py-1.5 text-sm rounded-md ${
                density === 'comfortable'
                  ? 'bg-blue-100 text-blue-800 font-medium'
                  : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
              }`}
              onClick={() => handleDensityChange('comfortable')}
            >
              Comfortable
            </button>
            <button
              type="button"
              className={`px-3 py-1.5 text-sm rounded-md ${
                density === 'spacious'
                  ? 'bg-blue-100 text-blue-800 font-medium'
                  : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
              }`}
              onClick={() => handleDensityChange('spacious')}
            >
              Spacious
            </button>
          </div>
        </div>
        
        {/* Accent Color */}
        <div>
          <h4 className="text-sm font-medium text-gray-900 mb-4">Accent Color</h4>
          <div className="flex items-center space-x-4">
            <div 
              className="h-10 w-10 rounded-full border border-gray-300 shadow-sm overflow-hidden"
              style={{ backgroundColor: accentColor }}
            ></div>
            <input
              type="color"
              value={accentColor}
              onChange={handleColorChange}
              className="h-10 w-20"
            />
            <div className="text-sm text-gray-600">{accentColor}</div>
          </div>
        </div>
        
        {/* Animations */}
        <div>
          <h4 className="text-sm font-medium text-gray-900 mb-4">Interface Effects</h4>
          <div className="flex items-center space-x-3">
            <button
              type="button"
              onClick={handleAnimationsToggle}
              className={`relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${
                animations ? 'bg-blue-600' : 'bg-gray-200'
              }`}
              role="switch"
              aria-checked={animations}
            >
              <span className="sr-only">Use animations</span>
              <span
                aria-hidden="true"
                className={`pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200 ${
                  animations ? 'translate-x-5' : 'translate-x-0'
                }`}
              ></span>
            </button>
            <span className="text-sm text-gray-700">Enable animations and transitions</span>
          </div>
          <p className="mt-2 text-xs text-gray-500">
            Turning off animations may improve performance on older devices.
          </p>
        </div>
        
        <div className="flex justify-end pt-4 border-t border-gray-200">
          <button
            type="button"
            className="px-4 py-2 text-sm font-medium rounded-md border border-gray-300 text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 mr-3"
          >
            Reset to Defaults
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

export default AppearanceSettings;