import React from 'react';
import './Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer id="contact" className="footer">
      <p>Contact us: info@kulanjaro.com</p>
      <p>&copy; {currentYear} Kulanjaro. All rights reserved.</p>
    </footer>
  );
}

export default Footer;