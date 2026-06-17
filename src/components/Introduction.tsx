import React, { useEffect, useState } from 'react';
import './Introduction.css';
import heroImage from '../assets/hero_ginga-1.png';
import { useLanguage } from '../i18n/LanguageContext';

const Introduction: React.FC = () => {
  const [loaded, setLoaded] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section className="intro-section" id="intro">
      <div className={`intro-container ${loaded ? 'visible' : ''}`}>
        <div className="intro-text-wrapper">
          <p className="intro-kicker">{t.intro.kicker}</p>
          <h1 className="intro-title">
            {t.intro.titleLead}<br />
            <span className="highlight">{t.intro.titleHighlight}</span>{t.intro.titleTail}
          </h1>
        </div>

        <div className="intro-details">
          <p className="intro-subtitle">
            {t.intro.subtitle}
          </p>
          <div className="intro-actions">
            <a href="#profile" className="btn primary-btn">{t.intro.cta}</a>
          </div>
        </div>
      </div>
      
      <div className={`intro-image-container ${loaded ? 'visible' : ''}`}>
        <img src={heroImage} className="editorial-image" alt="Profile of 林新興" />
      </div>
    </section>
  );
};

export default Introduction;
