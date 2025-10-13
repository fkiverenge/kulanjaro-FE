// src/components/Header.js
import React from 'react';
import { Link, NavLink } from 'react-router-dom'; // Make sure Link and NavLink are imported
import './Header.css';

function Header() {
  return (
    <header className="header">
      {/* Use Link for the logo to go to the homepage */}
      <Link to="/" className="logo">Kulanjaro</Link>
      <nav>
        <ul>
          {/* Use NavLink for navigation items */}
          <li><NavLink to="/services">Services</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;