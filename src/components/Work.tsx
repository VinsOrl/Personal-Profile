import React from 'react';
import './Work.css';
import { useLanguage } from '../i18n/LanguageContext';

const Work: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="work-section" id="work">
      <div className="work-container">

        <div className="work-intro fade-in">
          <h2 className="section-title">{t.work.titleLead}<span className="highlight">{t.work.titleHighlight}</span></h2>
          <p className="work-lead">{t.work.intro}</p>
        </div>

        <div className="work-list">
          {t.work.projects.map((project, i) => (
            <a
              key={project.title}
              className="project-card fade-in"
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{ animationDelay: `${0.2 * (i + 1)}s` }}
            >
              <div className="project-number">{project.number}</div>
              <div className="project-body">
                <p className="project-category">{project.category}</p>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <span className="project-cta">
                  {project.cta}
                  <span className="project-arrow" aria-hidden="true">↗</span>
                </span>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Work;
