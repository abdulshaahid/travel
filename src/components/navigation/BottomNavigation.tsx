import React from 'react';
import { Home, TrendingUp, User, Settings } from 'lucide-react';

const navItems = [
  { icon: Home, label: 'Home', path: '/' },
  { icon: TrendingUp, label: 'Trending', path: '/trending' },
  { icon: User, label: 'Profile', path: '/profile' },
  { icon: Settings, label: 'Settings', path: '/settings' },
];

export const BottomNavigation = () => {
  const navigate = (path: string) => {
    history.pushState({}, '', path);
    window.dispatchEvent(new PopStateEvent('popstate'));
  };

  return (
    <nav className="fixed bottom-0 left-0 right-0 md:hidden backdrop-blur-md 
                    bg-white/70 dark:bg-gray-800/70 border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="flex justify-around items-center py-3">
          {navItems.map(({ icon: Icon, label, path }) => (
            <button
              key={label}
              onClick={() => navigate(path)}
              className="flex flex-col items-center gap-1 text-gray-600 dark:text-gray-400 
                       hover:text-black dark:hover:text-white
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