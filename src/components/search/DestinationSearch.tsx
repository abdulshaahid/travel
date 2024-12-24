import React, { useState } from 'react';
import { Search, MapPin } from 'lucide-react';

export const DestinationSearch = () => {
  const [destination, setDestination] = useState('');

  return (
    <div className="relative">
      <div className="flex items-center gap-2 p-2 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
        <div className="flex-1 relative">
          <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Where do you want to go?"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            className="w-full pl-10 pr-4 py-2 rounded-lg bg-gray-50 dark:bg-gray-700
                     border border-gray-200 dark:border-gray-600
                     focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400
                     dark:text-white transition-all duration-300"
          />
        </div>
        <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg
                         transition-colors duration-300 flex items-center gap-2">
          <Search className="w-4 h-4" />
          <span>Search</span>
        </button>
      </div>
    </div>
  );
};