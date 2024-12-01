import React from 'react';
import '../styles/Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <header className="dashboard-header">Dashboard</header>
      <div className="dashboard-cards">
        <div className="dashboard-card">
          <h3 className="card-title">Card 1</h3>
          <p className="card-content">Details about Card 1.</p>
        </div>
        <div className="dashboard-card">
          <h3 className="card-title">Card 2</h3>
          <p className="card-content">Details about Card 2.</p>
        </div>
        <div className="dashboard-card">
          <h3 className="card-title">Card 3</h3>
          <p className="card-content">Details about Card 3.</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
