import React from 'react';
import { Search, MapPin } from 'lucide-react';

export const SearchBar = () => {
  return (
    <div className="relative max-w-2xl mx-auto">
      <div className="flex items-center gap-2 p-2 backdrop-blur-md 
                    bg-white/70 dark:bg-gray-800/70 rounded-xl shadow-lg
                    border border-gray-200 dark:border-gray-700
                    transition-all duration-300 hover:shadow-xl">
        <div className="flex-1 relative">
          <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Where do you want to go?"
            className="w-full pl-10 pr-4 py-2 rounded-lg 
                     bg-transparent
                     border-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400
                     dark:text-white transition-all duration-300"
          />
        </div>
        <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg
                         transition-all duration-300 flex items-center gap-2
                         hover:scale-105 active:scale-95">
          <Search className="w-4 h-4" />
          <span>Search</span>
        </button>
      </div>
    </div>
  );
};