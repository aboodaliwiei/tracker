
import React from 'react';

const DashboardStats = ({ stats }) => {
  const getColor = (value) => {
    if (value > 0) return 'green';
    if (value < 0) return 'red';
    return 'gray';
  };

  return (
    <div className="dashboard-stats">
      <div>اليوم:
        <span style={{ color: getColor(stats.day) }}>{stats.day}%</span>
      </div>
      <div>الأسبوع:
        <span style={{ color: getColor(stats.week) }}>{stats.week}%</span>
      </div>
      <div>الشهر:
        <span style={{ color: getColor(stats.month) }}>{stats.month}%</span>
      </div>
    </div>
  );
};

export default DashboardStats;
