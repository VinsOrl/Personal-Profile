import React from 'react';
import './Profile.css';
import { useLanguage } from '../i18n/LanguageContext';

const Profile: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="profile-section" id="profile">
      <div className="profile-container">

        <div className="profile-intro fade-in">
          <h2 className="section-title">{t.profile.titleLead}<span className="highlight">{t.profile.titleHighlight}</span></h2>
          <p className="bio-large">
            {t.profile.bioLarge}
          </p>
          <div className="bio-details">
            <p>
              {t.profile.bioDetail}
            </p>
            <p className="university-tag">{t.profile.universityTag}</p>
          </div>
        </div>

        <div className="profile-grid">
          {t.profile.cards.map((card, i) => (
            <div
              key={card.number}
              className="editorial-card fade-in"
              style={{ animationDelay: `${0.2 * (i + 1)}s` }}
            >
              <div className="card-number">{card.number}</div>
              <h3>{card.title}</h3>
              {card.list ? (
                <ul className="editorial-list">
                  {card.list.map(item => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              ) : (
                <p>{card.body}</p>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Profile;
