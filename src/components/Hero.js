import React from 'react';
import './Hero.css';

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>The Future of Farming is Here.</h1>
        <p>Kulanjaro provides smart IoT solutions to help farmers increase yield, reduce waste, and build a sustainable future.</p>
        <button className="cta-button">Learn More</button>
      </div>
    </section>
  );
}

export default Hero;