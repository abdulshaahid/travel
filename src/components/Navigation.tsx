import React from 'react';
import { Home, Search, User, Bell } from 'lucide-react';

const navItems = [
  { icon: Home, label: 'Home' },
  { icon: Search, label: 'Explore' },
  { icon: Bell, label: 'Notifications' },
  { icon: User, label: 'Profile' },
];

export const Navigation = () => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="flex justify-around items-center py-3">
          {navItems.map(({ icon: Icon, label }) => (
            <button
              key={label}
              className="flex flex-col items-center gap-1 text-gray-600 dark:text-gray-400 
                       hover:text-blue-600 dark:hover:text-blue-400
                       transition-all duration-300 group"
            >
              <Icon className="w-6 h-6 group-hover:scale-110 transition-transform" />
              <span className="text-xs font-medium">{label}</span>
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};