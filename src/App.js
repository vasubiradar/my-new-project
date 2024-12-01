import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Importing react-router-dom for routing

// Importing components
import Home from './components/Home';  // Home Page Component
import Dashboard from './components/Dashboard'; // Dashboard Page Component
import FAQ from './components/FAQ'; // FAQ Page Component
import Footer from './components/Footer'; // Footer Component
import NavBar from './components/NavBar'; 
import Login from './components/Login'; // Login Page Component
import Register from './components/Register'; // Register Page Component

function App() {
  return (
    <Router>
      <div className="App">
        {/* The Navbar is outside the Routes so it appears on every page */}
        <NavBar />

        {/* Define Routes for the pages */}
        <Routes>
          {/* Home Page Route */}
          <Route path="/home" element={<Home />} />  {/* Home Page route */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          {/* Dashboard Page Route */}
          <Route path="/dashboard" element={<Dashboard />} />  {/* Dashboard Page route */}

          {/* FAQ Page Route */}
          <Route path="/" element={<FAQ />} /> {/* Home Page route */}
        </Routes>

        {/* The Footer is outside the Routes so it will appear on every page */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
