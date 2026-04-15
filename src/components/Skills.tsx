import React from 'react';
import { useTranslation } from 'react-i18next';

const Skills: React.FC = () => {
  const { t } = useTranslation();
  const programmingSkills = ["Python", "HTML", "CSS", "SQL", "C", "JavaScript"];
  const qualities = ["Punctual", "Ambitious", "Hardworking"];

  return (
    <section id="skills" className="skills">
      <div className="section-grid">
        <div className="skills-column">
          <h2>{t('skills.technical')}</h2>
          <div className="skill-tags">
            {programmingSkills.map(skill => (
              <span key={skill} className="tag">{skill}</span>
            ))}
          </div>
          <div className="other-skills">
            <p><strong>{t('skills.other')}</strong></p>
          </div>
          
          <h2>{t('skills.qualities')}</h2>
          <div className="skill-tags">
            {qualities.map(quality => (
              <span key={quality} className="tag quality-tag">{quality}</span>
            ))}
          </div>
        </div>

        <div className="leadership-column">
          <h2>{t('skills.leadership')}</h2>
          <div className="award-item">
            <h3>{t('skills.award.title')}</h3>
            <p>{t('skills.award.org')}</p>
            <p className="award-description">{t('skills.award.description')}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
