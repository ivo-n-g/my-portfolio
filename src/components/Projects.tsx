import React from 'react';
import { useTranslation } from 'react-i18next';

const Projects: React.FC = () => {
  const { t } = useTranslation();

  const projects = [
    {
      name: t('projects.globalInsight.name'),
      description: t('projects.globalInsight.description'),
      link: "https://github.com/ivo-n-g/global-insight-repo"
    },
    {
      name: t('projects.countryAggregate.name'),
      description: t('projects.countryAggregate.description'),
      link: "https://github.com/ivo-n-g/country-aggregate"
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="section-container">
        <h2>{t('projects.title')}</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="mono" style={{ fontSize: '0.8rem', opacity: 0.5, marginBottom: '10px' }}>
                PRJ_ID: #{(index + 1).toString().padStart(4, '0')}
              </div>
              <h3>{project.name}</h3>
              <div className="project-content">
                <p>{project.description}</p>
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  {t('projects.viewGithub').toUpperCase()}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
