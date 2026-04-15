import React from 'react';
import { useTranslation } from 'react-i18next';

const Education: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="education" className="education">
      <div className="section-grid">
        <div className="education-column">
          <h2>{t('education.title')}</h2>
          <div className="edu-item">
            <h3>{t('education.university.name')}</h3>
            <p>{t('education.university.degree')}</p>
            <p className="edu-location">{t('header.location')}</p>
          </div>
          <div className="edu-item">
            <h3>{t('education.highschool.name')}</h3>
            <p>{t('education.highschool.degree')}</p>
            <p className="edu-location">{t('header.location')}</p>
          </div>
        </div>
        <div className="cert-column">
          <h2>{t('education.certifications')}</h2>
          <div className="edu-item">
            <h3>{t('education.cisco.name')}</h3>
            <p>{t('education.cisco.org')}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
