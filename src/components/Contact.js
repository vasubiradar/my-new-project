import React from 'react';
import '../styles/Contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <h1 className="contact-header">Contact Us</h1>
      <form className="contact-form">
        <input type="text" className="contact-input" placeholder="Your Name" />
        <input type="email" className="contact-input" placeholder="Your Email" />
        <textarea className="contact-textarea" placeholder="Your Message"></textarea>
        <button type="submit" className="contact-btn">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
