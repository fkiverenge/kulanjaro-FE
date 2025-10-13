// src/components/Services.js
import React from 'react';
import './Services.css';
import { FaServer, FaBrain, FaChartLine } from 'react-icons/fa'; // Import icons

function Services() {
  return (
    <section id="services" className="services">
      <h2>Our Solutions</h2>
      <div className="services-container">
        <div className="service-card">
          <FaServer className="service-icon" />
          <h3>Crop & Soil Monitoring</h3>
          <p>Real-time data on soil moisture, nutrients, and temperature to make informed decisions about irrigation and fertilization.</p>
        </div>
        <div className="service-card">
          <FaBrain className="service-icon" />
          <h3>Predictive Analytics</h3>
          <p>Leverage machine learning to forecast crop yields, predict pest outbreaks, and optimize your planting schedules.</p>
        </div>
        <div className="service-card">
          <FaChartLine className="service-icon" />
          <h3>Data-Driven Insights</h3>
          <p>Access your farm's data anytime, anywhere through our user-friendly dashboard, providing actionable insights at your fingertips.</p>
        </div>
      </div>
    </section>
  );
}

export default Services;