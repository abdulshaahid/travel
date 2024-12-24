import React from 'react';
import { SearchBar } from '../components/search/SearchBar';
import { PackageGrid } from '../components/packages/PackageGrid';
import { SearchFilters } from '../components/search/SearchFilters';

export const HomePage = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-4 py-6 space-y-8">
      <SearchBar />
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-1">
          <SearchFilters />
        </div>
        <div className="lg:col-span-3">
          <PackageGrid />
        </div>
      </div>
    </div>
  );
};