import React from 'react';
import { User, Mail, Phone, MapPin } from 'lucide-react';

export const ProfilePage = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-4 py-6">
      <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-md rounded-xl p-6 shadow-lg">
        <div className="flex flex-col items-center mb-6">
          <div className="w-24 h-24 rounded-full bg-gray-200 dark:bg-gray-700 mb-4">
            <img
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=96&h=96"
              alt="Profile"
              className="w-full h-full rounded-full object-cover"
            />
          </div>
          <h1 className="text-2xl font-bold dark:text-white">John Doe</h1>
          <p className="text-gray-600 dark:text-gray-400">Travel Enthusiast</p>
        </div>

        <div className="space-y-4">
          <div className="flex items-center gap-3 text-gray-600 dark:text-gray-400">
            <Mail className="w-5 h-5" />
            <span>john.doe@example.com</span>
          </div>
          <div className="flex items-center gap-3 text-gray-600 dark:text-gray-400">
            <Phone className="w-5 h-5" />
            <span>+1 234 567 890</span>
          </div>
          <div className="flex items-center gap-3 text-gray-600 dark:text-gray-400">
            <MapPin className="w-5 h-5" />
            <span>New York, USA</span>
          </div>
        </div>
      </div>
    </div>
  );
};