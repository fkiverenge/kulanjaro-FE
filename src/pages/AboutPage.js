// src/pages/AboutPage.js
import React from 'react';
import './PageStyles.css';

// Make sure you have these images in your src/assets folder
import farmerImage from '../assets/farmer-in-field.jpg';
import teamImage from '../assets/team-collaborating.jpg';

function AboutPage() {
  // Added the 'about-page' class to the container
  return (
    <div className="page-container about-page">
      <div className="page-header">
        <h1>About Kulanjaro</h1>
      </div>
      <div className="page-content about-page-content">
        <h2>Pioneering the Future of Agriculture</h2>
        <p>Kulanjaro was founded on a simple principle: to empower farmers with the technology they need to thrive in a changing world. We believe that by bridging the gap between traditional farming wisdom and modern data science, we can create a more sustainable and prosperous future for agriculture.</p>
        
        <div className="content-section">
          <div className="content-image">
            <img src={farmerImage} alt="Farmer in a field" />
          </div>
          <div className="content-text">
            <h3>Our Mission</h3>
            <p>Our mission is to make precision agriculture accessible and affordable for farms of all sizes. We are committed to developing intuitive, reliable, and impactful IoT solutions that help farmers increase their yields, conserve resources like water and fertilizer, and reduce their environmental footprint.</p>
          </div>
        </div>

        <div className="content-section reverse">
           <div className="content-text">
            <h3>Our Story</h3>
            <p>Born from a team of agronomists, engineers, and data scientists, Kulanjaro started as a small project to solve real-world challenges faced by local farmers. We saw firsthand the difficulties of managing crops with unpredictable weather and soil conditions. Today, we are a growing team dedicated to scaling our solutions to help farming communities around the globe.</p>
          </div>
          <div className="content-image">
            <img src={teamImage} alt="Team collaborating" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;