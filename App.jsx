
import React from 'react';
import BitcoinPrice from './components/BitcoinPrice';
import PriceChart from './components/PriceChart';
import DashboardStats from './components/DashboardStats';
import Alerts from './components/Alerts';
import AlertHistory from './components/AlertHistory';
import AlertSettings from './components/AlertSettings';
import AlertsManager from './components/AlertsManager';
import ToastNotification from './components/ToastNotification';
import FavoritesList from './components/FavoritesList';
import SidebarTabs from './components/SidebarTabs';
import TopToolbar from './components/TopToolbar';
import { auth } from './firebase/config';
import { useAuthState } from 'react-firebase-hooks/auth';
import Auth from './components/Auth';

function App() {
  const [user] = useAuthState(auth);

  return (
    <div className="flex flex-col h-screen">
      <TopToolbar />
      <div className="flex flex-1">
        <SidebarTabs />
        <div className="flex-1 overflow-y-auto p-4 space-y-6">
          {!user ? <Auth /> : (
            <>
              <BitcoinPrice user={user} />
              <DashboardStats />
              <PriceChart />
              <AlertsManager />
              <AlertSettings />
              <Alerts />
              <AlertHistory />
              <FavoritesList />
              <ToastNotification />
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
