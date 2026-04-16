import React from 'react';
import { useTranslation } from 'react-i18next';

const Skills: React.FC = () => {
  const { t } = useTranslation();
  const programmingSkills = ["Python", "HTML", "CSS", "SQL", "C", "JavaScript"];
  const qualities = t('skills.qualitiesList', { returnObjects: true }) as string[];

  return (
    <section id="skills" className="skills">
      <div className="section-container">
        <h2>{t('skills.technical')}</h2>
        <div className="experience-list">
          <div className="experience-item">
            <span className="exp-period">TECH_STACK</span>
            <div className="edu-content">
              <h3>{t('skills.technical').toUpperCase()}</h3>
              <div className="skill-tags" style={{ marginTop: '20px' }}>
                {programmingSkills.map(skill => (
                  <span key={skill} className="tag">{skill}</span>
                ))}
              </div>
            </div>
          </div>
          <div className="experience-item">
            <span className="exp-period">ATTRIBUTES</span>
            <div className="edu-content">
              <h3>{t('skills.qualities').toUpperCase()}</h3>
              <div className="skill-tags" style={{ marginTop: '20px' }}>
                {qualities.map(quality => (
                  <span key={quality} className="tag">{quality}</span>
                ))}
              </div>
            </div>
          </div>
          <div className="experience-item">
            <span className="exp-period">LEADERSHIP</span>
            <div className="edu-content">
              <h3>{t('skills.award.title').toUpperCase()}</h3>
              <div style={{ marginTop: '20px' }}>
                <p><strong>{t('skills.award.org').toUpperCase()}</strong></p>
                <p>{t('skills.award.description')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
