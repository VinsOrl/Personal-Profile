import React, { useEffect, useState } from 'react';
import './Introduction.css';

const Introduction: React.FC = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section className="intro-section" id="intro">
      <div className={`intro-container ${loaded ? 'visible' : ''}`}>
        <div className="intro-text-wrapper">
          <p className="intro-kicker">Portfolio 2026</p>
          <h1 className="intro-title">
            The Intersection of <br />
            <span className="highlight">Intelligence</span> & Design.
          </h1>
        </div>
        
        <div className="intro-details">
          <p className="intro-subtitle">
            I'm 林新興, an aspiring Computer Science student building the future through code, AI, and creative digital experiences.
          </p>
          <div className="intro-actions">
            <a href="#profile" className="btn primary-btn">Discover More</a>
          </div>
        </div>
      </div>
      
      <div className={`intro-image-container ${loaded ? 'visible' : ''}`}>
        {/* Placeholder for an artistic editorial image or abstract architectural shape */}
        <div className="editorial-block"></div>
      </div>
    </section>
  );
};

export default Introduction;
