
import React from 'react';
import ToastNotification from './ToastNotification';

function AlertsManager({ alerts }) {
  return (
    <div className="fixed top-4 right-4 space-y-2 z-50">
      {alerts.map((alert, index) => (
        <ToastNotification key={index} message={alert.message} type={alert.type} />
      ))}
    </div>
  );
}

export default AlertsManager;
