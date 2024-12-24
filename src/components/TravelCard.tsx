import React from 'react';
import { Star, Clock } from 'lucide-react';
import type { TravelPackage } from '../types';

interface TravelCardProps {
  package: TravelPackage;
}

export const TravelCard = ({ package: pkg }: TravelCardProps) => {
  return (
    <div className="relative group">
      <div className="w-72 rounded-2xl overflow-hidden bg-white shadow-lg hover:shadow-xl 
                    transform hover:-translate-y-1 transition-all duration-300">
        <div className="relative h-48">
          <img
            src={pkg.image}
            alt={pkg.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-4 left-4 right-4">
            <h3 className="text-white font-bold text-xl">{pkg.title}</h3>
            <p className="text-white/90 text-sm">{pkg.location}</p>
          </div>
        </div>
        <div className="p-4">
          <div className="flex justify-between items-center mb-2">
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 text-yellow-400 fill-current" />
              <span className="text-sm font-medium">{pkg.rating}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4 text-gray-500" />
              <span className="text-sm text-gray-600">{pkg.duration}</span>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <p className="text-blue-600 font-bold">${pkg.price}</p>
            <button className="px-4 py-2 rounded-lg bg-blue-600 text-white text-sm font-medium
                           hover:bg-blue-700 transition-colors duration-300">
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};