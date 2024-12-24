import React from 'react';
import { Slider } from '../ui/Slider';

export const SearchFilters = () => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-lg">
      <h3 className="text-lg font-semibold mb-4 dark:text-white">Filters</h3>
      
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium mb-2 dark:text-gray-300">
            Price Range
          </label>
          <Slider min={0} max={5000} step={100} defaultValue={[0, 3000]} />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2 dark:text-gray-300">
            Duration (Days)
          </label>
          <div className="flex gap-2">
            {[3, 5, 7, 10, 14].map((days) => (
              <button
                key={days}
                className="px-3 py-1 rounded-full border border-gray-200 dark:border-gray-700
                         hover:border-blue-500 dark:hover:border-blue-400
                         dark:text-gray-300 transition-colors"
              >
                {days}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2 dark:text-gray-300">
            Trip Type
          </label>
          <div className="grid grid-cols-2 gap-2">
            {['Adventure', 'Relaxation', 'Cultural', 'Nature'].map((type) => (
              <button
                key={type}
                className="px-3 py-1 rounded-lg border border-gray-200 dark:border-gray-700
                         hover:border-blue-500 dark:hover:border-blue-400
                         dark:text-gray-300 transition-colors"
              >
                {type}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};