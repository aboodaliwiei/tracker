
import React from 'react';
import { FaHome, FaStar } from 'react-icons/fa';

function SidebarTabs({ tabs, activeTab, onTabChange }) {
  const icons = {
    'الرئيسية': <FaHome className="inline-block mr-2" />,
    'المفضلة': <FaStar className="inline-block mr-2" />
  };

  return (
    <div className="w-full md:w-48 bg-gray-800 text-white p-4 md:min-h-screen flex md:flex-col justify-around md:justify-start md:space-y-2">
      {tabs.map((tab, index) => (
        <div
          key={index}
          onClick={() => onTabChange(tab)}
          className={`cursor-pointer p-2 rounded text-center transition-colors duration-200 ${tab === activeTab ? 'bg-gray-600' : 'hover:bg-gray-700'}`}
        >
          {icons[tab]} {tab}
        </div>
      ))}
    </div>
  );
}

export default SidebarTabs;
