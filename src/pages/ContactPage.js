// src/pages/ContactPage.js
import React from 'react';
import './PageStyles.css';
import './ContactPage.css';

function ContactPage() {
  // Added the 'contact-page' class to the container
  return (
    <div className="page-container contact-page">
      <div className="page-header">
        <h1>Contact Us</h1>
      </div>
      <div className="page-content">
        <h2>Get In Touch</h2>
        <p>We'd love to hear from you. Whether you have a question about our services, pricing, or anything else, our team is ready to answer all your questions.</p>

        <div className="contact-layout">
          <form className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="6" required></textarea>
            </div>
            <button type="submit" className="submit-button">Send Message</button>
          </form>
          <div className="contact-details">
            <h3>Our Office</h3>
            <p>123 Agri-Tech Avenue<br/>Nairobi, Kenya</p>
            
            <h3>Email</h3>
            <p>info@kulanjaro.com</p>

            <h3>Phone</h3>
            <p>+254 700 123 456</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;