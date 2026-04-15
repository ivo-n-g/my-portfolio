import React from 'react';
import { useTranslation } from 'react-i18next';

const Header: React.FC = () => {
  const { t } = useTranslation();

  return (
    <header className="header">
      <div className="header-content">
        <h1>Ivo Ganza Nkaka</h1>
        <p className="summary">
          {t('header.summary')}
        </p>
        <div className="contact-links">
          <a href="mailto:ivo@example.com">Email</a>
          <a href="https://rw.linkedin.com/in/ivo-nkaka" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://github.com/ivo-n-g" target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
        <div className="location">{t('header.location')} | +250784090439</div>
      </div>
    </header>
  );
};

export default Header;
