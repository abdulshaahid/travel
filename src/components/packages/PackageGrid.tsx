import React from 'react';
import { TravelCard } from './TravelCard';
import { packages } from '../../data/packages';

export const PackageGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {packages.map((pkg) => (
        <TravelCard key={pkg.id} package={pkg} />
      ))}
    </div>
  );
};