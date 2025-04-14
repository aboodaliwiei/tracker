
import React from 'react';

function TopToolbar({ user, onSignOut, onSignIn }) {
  return (
    <div className="flex justify-between items-center bg-gray-100 dark:bg-gray-900 p-4 shadow text-gray-800 dark:text-white">
      <h1 className="text-xl font-bold">Chart 100</h1>
      {user ? (
        <div className="flex items-center space-x-4">
          <span>{user.displayName}</span>
          <button onClick={onSignOut} className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded transition">تسجيل الخروج</button>
        </div>
      ) : (
        <button onClick={onSignIn} className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded transition">تسجيل الدخول</button>
      )}
    </div>
  );
}

export default TopToolbar;
