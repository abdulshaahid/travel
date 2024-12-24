import React from 'react';
import { Home, User, Settings, TrendingUp } from 'lucide-react';
import { ThemeToggle } from '../ThemeToggle';

const navItems = [
  { icon: Home, label: 'Home', path: '/' },
  { icon: TrendingUp, label: 'Trending', path: '/trending' },
  { icon: User, label: 'Profile', path: '/profile' },
  { icon: Settings, label: 'Settings', path: '/settings' },
];

export const TopNavigation = () => {
  const navigate = (path: string) => {
    history.pushState({}, '', path);
    window.dispatchEvent(new PopStateEvent('popstate'));
  };

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/70 dark:bg-gray-800/70 border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <Home className="w-6 h-6 text-black dark:text-white" />
            <span className="text-lg font-bold">TravelApp</span>
          </div>
          
          <div className="hidden md:flex items-center gap-6">
            {navItems.map(({ icon: Icon, label, path }) => (
              <button
                key={label}
                onClick={() => navigate(path)}
                className="flex items-center gap-2 px-3 py-2 rounded-lg
                         text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white
                         hover:bg-gray-100 dark:hover:bg-gray-700/50
                         transition-all duration-300"
              >
                <Icon className="w-5 h-5" />
                <span>{label}</span>
              </button>
            ))}
          </div>

          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
};