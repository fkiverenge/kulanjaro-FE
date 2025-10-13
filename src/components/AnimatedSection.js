// src/components/AnimatedSection.js
import React from 'react';
import { useInView } from 'react-intersection-observer';
import './AnimatedSection.css';

const AnimatedSection = ({ children }) => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Only trigger the animation once
    threshold: 0.1,    // Trigger when 10% of the element is visible
  });

  return (
    <div ref={ref} className={`animated-section ${inView ? 'is-visible' : ''}`}>
      {children}
    </div>
  );
};

export default AnimatedSection;