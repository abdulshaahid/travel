import React from 'react';
import { Search } from 'lucide-react';

export const SearchBar = () => {
  return (
    <div className="relative w-full max-w-md mx-auto">
      <input
        type="text"
        placeholder="Search destinations..."
        className="w-full px-4 py-3 pl-12 rounded-xl bg-white/80 backdrop-blur-sm border border-gray-200 
                 shadow-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent
                 transition-all duration-300 outline-none"
      />
      <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
    </div>
  );
};