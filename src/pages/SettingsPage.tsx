import React from 'react';
import { Bell, Globe, Shield, CreditCard } from 'lucide-react';

export const SettingsPage = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-4 py-6">
      <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-md rounded-xl p-6 shadow-lg">
        <h1 className="text-2xl font-bold mb-6 dark:text-white">Settings</h1>
        
        <div className="space-y-6">
          <div className="space-y-4">
            <h2 className="text-lg font-semibold dark:text-white">Notifications</h2>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Bell className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                <span className="text-gray-600 dark:text-gray-400">Email Notifications</span>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 
                            peer-focus:ring-black/25 dark:peer-focus:ring-white/25 rounded-full peer 
                            dark:bg-gray-700 peer-checked:after:translate-x-full 
                            peer-checked:bg-black dark:peer-checked:bg-white
                            after:content-[''] after:absolute after:top-[2px] after:left-[2px] 
                            after:bg-white dark:after:bg-gray-800 after:rounded-full after:h-5 
                            after:w-5 after:transition-all"></div>
              </label>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-lg font-semibold dark:text-white">Language & Region</h2>
            <div className="flex items-center gap-3">
              <Globe className="w-5 h-5 text-gray-600 dark:text-gray-400" />
              <select className="flex-1 bg-transparent border border-gray-200 dark:border-gray-700 
                              rounded-lg px-3 py-2 text-gray-600 dark:text-gray-400">
                <option value="en">English (US)</option>
                <option value="es">Español</option>
                <option value="fr">Français</option>
              </select>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-lg font-semibold dark:text-white">Privacy</h2>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Shield className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                <span className="text-gray-600 dark:text-gray-400">Make Profile Private</span>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 
                            peer-focus:ring-black/25 dark:peer-focus:ring-white/25 rounded-full peer 
                            dark:bg-gray-700 peer-checked:after:translate-x-full 
                            peer-checked:bg-black dark:peer-checked:bg-white
                            after:content-[''] after:absolute after:top-[2px] after:left-[2px] 
                            after:bg-white dark:after:bg-gray-800 after:rounded-full after:h-5 
                            after:w-5 after:transition-all"></div>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};