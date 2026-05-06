import React from 'react';
import './Introduction.css';

const Introduction: React.FC = () => {
  return (
    <section className="intro-section" id="intro">
      <div className="intro-content">
        <h1 className="intro-title">
          Welcome to My <br/><span className="highlight">Creative Space</span>
        </h1>
        <p className="intro-subtitle">
          I'm 林新興, an aspiring Computer Science student building the future through code, AI, and creative digital experiences.
        </p>
        <div className="intro-actions">
          <a href="#profile" className="btn primary-btn">Discover More</a>
          <a href="#minigame" className="btn secondary-btn">Play a Game</a>
        </div>
      </div>
      <div className="intro-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
      </div>
    </section>
  );
};

export default Introduction;
