import React from 'react';
import { MainLayout } from './layouts/MainLayout';
import { HomePage } from './pages/HomePage';
import { TrendingPage } from './pages/TrendingPage';
import { ProfilePage } from './pages/ProfilePage';
import { SettingsPage } from './pages/SettingsPage';
import { useLocation } from './hooks/useLocation';

function App() {
  const { pathname } = useLocation();

  return (
    <MainLayout>
      {pathname === '/' && <HomePage />}
      {pathname === '/trending' && <TrendingPage />}
      {pathname === '/profile' && <ProfilePage />}
      {pathname === '/settings' && <SettingsPage />}
    </MainLayout>
  );
}

export default App;