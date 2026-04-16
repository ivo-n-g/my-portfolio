import React from 'react';
import { useTranslation } from 'react-i18next';

const Education: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="education" className="education">
      <div className="section-container">
        <h2>{t('education.title')}</h2>
        <div className="experience-list">
          <div className="experience-item">
            <span className="exp-period">2024 &ndash; PRESENT</span>
            <div className="edu-content">
              <h3>{t('education.university.name')}</h3>
              <p>{t('education.university.degree')}</p>
              <p className="location" style={{ marginTop: '10px' }}>{t('header.location').toUpperCase()}</p>
            </div>
          </div>
          <div className="experience-item">
            <span className="exp-period">2019 &ndash; 2023</span>
            <div className="edu-content">
              <h3>{t('education.highschool.name')}</h3>
              <p>{t('education.highschool.degree')}</p>
              <p className="location" style={{ marginTop: '10px' }}>{t('header.location').toUpperCase()}</p>
            </div>
          </div>
          <div className="experience-item">
            <span className="exp-period">2025</span>
            <div className="edu-content">
              <h3>{t('education.certifications').toUpperCase()}</h3>
              <div style={{ marginTop: '20px' }}>
                <p><strong>{t('education.cisco.name')}</strong></p>
                <p>{t('education.cisco.org')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
