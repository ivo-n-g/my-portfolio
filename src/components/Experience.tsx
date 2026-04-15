import React from 'react';
import { useTranslation } from 'react-i18next';

const Experience: React.FC = () => {
  const { t } = useTranslation();

  const experiences = [
    {
      role: t('experience.brewbox.role'),
      company: t('experience.brewbox.company'),
      period: t('experience.brewbox.period'),
      description: t('experience.brewbox.points', { returnObjects: true }) as string[]
    },
    {
      role: t('experience.zigama.role'),
      company: t('experience.zigama.company'),
      period: t('experience.zigama.period'),
      description: t('experience.zigama.points', { returnObjects: true }) as string[]
    }
  ];

  return (
    <section id="experience" className="experience">
      <h2>{t('experience.title')}</h2>
      <div className="experience-list">
        {experiences.map((exp, index) => (
          <div key={index} className="experience-item">
            <div className="exp-header">
              <h3>{exp.role}, {exp.company}</h3>
              <span className="exp-period">{exp.period}</span>
            </div>
            <ul>
              {exp.description.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
