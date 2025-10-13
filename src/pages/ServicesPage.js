// src/pages/ServicesPage.js
import React from 'react';
import './PageStyles.css';

// Make sure you have these images in your src/assets folder
import soilSensorImage from '../assets/soil-sensor.jpg';
import analyticsDashboardImage from '../assets/analytics-dashboard.jpg';
import dataInsightsImage from '../assets/data-insights.jpg';

function ServicesPage() {
  // Added the 'services-page' class to the container
  return (
    <div className="page-container services-page"> 
      <div className="page-header">
        <h1>End-to-End Smart Farming Solutions</h1>
      </div>
      
      <div className="page-content services-page-content">
        <p className="intro-paragraph">
          At Kulanjaro, we provide a comprehensive suite of tools designed to bring your farm into the digital age. Our solutions are tailored to maximize efficiency and yield.
        </p>
        
        {/* SECTION 1: Soil Monitoring - THIS IS THE MISSING CONTENT */}
        <div className="content-section">
          <div className="content-image">
            <img src={soilSensorImage} alt="Soil Monitoring Sensor in a field" />
          </div>
          <div className="content-text">
            <h3>Advanced Soil & Crop Monitoring</h3>
            <p>Our custom-built IoT sensors are deployed directly in your fields, providing 24/7 monitoring of critical metrics like soil moisture, NPK nutrient levels, pH, and temperature. This constant stream of data ensures you're never guessing about your crop's health.</p>
          </div>
        </div>

        {/* SECTION 2: Predictive Analytics - THIS IS THE MISSING CONTENT */}
        <div className="content-section">
          <div className="content-image">
            <img src={analyticsDashboardImage} alt="Data Analytics Dashboard on a tablet" />
          </div>
          <div className="content-text">
            <h3>Predictive Analytics Engine</h3>
            <p>Don't just react to problems—prevent them. Our powerful AI models analyze historical and real-time data to forecast yield, predict pest and disease outbreaks, and recommend optimal times for planting and harvesting. Stay one step ahead, always.</p>
          </div>
        </div>

        {/* SECTION 3: Data-Driven Insights - THIS IS THE MISSING CONTENT */}
        <div className="content-section">
           <div className="content-image">
            <img src={dataInsightsImage} alt="Farmer reviewing data insights" />
          </div>
          <div className="content-text">
            <h3>Actionable Data Insights</h3>
            <p>Access all your farm's data through a single, user-friendly dashboard. Our platform translates complex data into simple charts and alerts, empowering you to make smarter, data-driven decisions from anywhere in the world.</p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default ServicesPage;