import React from 'react';
import { TravelCard } from './TravelCard';
import type { TravelPackage } from '../types';

const featuredPackages: TravelPackage[] = [
  {
    id: '1',
    title: 'Santorini Escape',
    location: 'Greece',
    price: 1299,
    duration: '7 Days',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&q=80',
    description: 'Experience the magic of Santorini with its stunning sunsets and white-washed buildings.'
  },
  {
    id: '2',
    title: 'Bali Adventure',
    location: 'Indonesia',
    price: 899,
    duration: '5 Days',
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&q=80',
    description: 'Explore tropical beaches, ancient temples, and lush rice terraces.'
  },
  {
    id: '3',
    title: 'Swiss Alps',
    location: 'Switzerland',
    price: 1599,
    duration: '6 Days',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1531372267538-45f19c3ef11c?auto=format&fit=crop&q=80',
    description: 'Discover breathtaking mountain views and charming alpine villages.'
  }
];

export const FeaturedPackages = () => {
  return (
    <section className="py-6">
      <div className="px-4">
        <h2 className="text-2xl font-bold mb-4">Featured Packages</h2>
        <div className="flex gap-4 overflow-x-auto pb-4 snap-x">
          {featuredPackages.map((pkg) => (
            <div key={pkg.id} className="snap-start">
              <TravelCard package={pkg} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};