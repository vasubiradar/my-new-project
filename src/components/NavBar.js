import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/NavBar.css'; // Custom CSS file for styling

const Navigation = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/home">Flexify</Link>
      </div>
      <ul className="navbar-links">
        <li><Link to="/home">Home</Link></li>
     
        <li><Link to="/sessions">Sessions</Link></li>
      
        <li><Link to="/Login">Login</Link></li>
      </ul>
    </nav>
  );
};

export default Navigation;
