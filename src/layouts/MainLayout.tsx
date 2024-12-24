import React from 'react';
import { TopNavigation } from '../components/navigation/TopNavigation';
import { BottomNavigation } from '../components/navigation/BottomNavigation';

interface MainLayoutProps {
  children: React.ReactNode;
}

export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 
                    dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
      <TopNavigation />
      <main className="pb-20">
        {children}
      </main>
      <BottomNavigation />
    </div>
  );
};