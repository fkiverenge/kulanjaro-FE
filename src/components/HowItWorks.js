// src/components/HowItWorks.js
import React from 'react';
import './HowItWorks.css';
import { FaSatelliteDish, FaRegChartBar, FaLeaf } from 'react-icons/fa';

function HowItWorks() {
  return (
    <section className="how-it-works">
      <h2>How It Works</h2>
      <div className="steps-container">
        <div className="step">
          <div className="step-icon-wrapper"><FaSatelliteDish /></div>
          <h3>1. Deploy Sensors</h3>
          <p>We install our state-of-the-art IoT sensors in your fields to collect crucial soil and crop data.</p>
        </div>
        <div className="step">
          <div className="step-icon-wrapper"><FaRegChartBar /></div>
          <h3>2. Analyze Data</h3>
          <p>Our platform analyzes the data in real-time, providing you with actionable insights through a simple dashboard.</p>
        </div>
        <div className="step">
          <div className="step-icon-wrapper"><FaLeaf /></div>
          <h3>3. Optimize Growth</h3>
          <p>Use the insights to optimize irrigation, fertilization, and pest control, leading to higher yields and lower costs.</p>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;