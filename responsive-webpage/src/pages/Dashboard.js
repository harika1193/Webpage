import React from 'react';
import StatCard from '../components/StatCard';
import '../App.css';

const Dashboard = () => {
  const data = [
    { title: 'Available Positions', value: 24 },
    { title: 'Job Open', value: 10 },
    { title: 'New Employees', value: 24 },
    { title: 'Total Employees', value: 216 },
    { title: 'Talent Request', value: 16 },
  ];

  return (
    <div className="app-container">
      <div className="main-content">
        <div className="dashboard-cards">
          {data.map((item, index) => (
            <StatCard key={index} title={item.title} count={item.value} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
