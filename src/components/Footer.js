import React from 'react';
import '../styles/Footer.css'; // Custom CSS for Footer

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Pages Section */}
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/about">About Us</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/sessions">Yoga Sessions</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        {/* Contact Details */}
        <div className="footer-section">
          <h4>Contact Us</h4>
          <p>Email: support@yogasite.com</p>
          <p>Phone: +91 9876543210</p>
          <p>Address: Yoga Studio, Pune, India</p>
        </div>

        {/* Social Media */}
        <div className="footer-section">
          <h4>Follow Us</h4>
          <div className="social-links">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="footer-bottom">
        <p>© 2024 YogaSite. All Rights Reserved. Developed by Gaurav Kaple.</p>
      </div>
    </footer>
  );
};

export default Footer;
