import React from 'react';
import { TravelCard } from '../components/packages/TravelCard';
import { packages } from '../data/packages';

export const TrendingPage = () => {
  const trendingPackages = packages.filter(pkg => pkg.rating >= 4.8);

  return (
    <div className="max-w-screen-xl mx-auto px-4 py-6">
      <h1 className="text-2xl font-bold mb-6 dark:text-white">Trending Destinations</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {trendingPackages.map(pkg => (
          <TravelCard key={pkg.id} package={pkg} />
        ))}
      </div>
    </div>
  );
};