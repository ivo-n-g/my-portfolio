import React from 'react';
import { useTranslation } from 'react-i18next';
import profilePic from '../assets/profile.jpg';

const Header: React.FC = () => {
  const { t } = useTranslation();

  return (
    <header className="header">
      <div className="header-container">
        <div className="header-text">
          <h1>Ivo Ganza Nkaka</h1>
          <p className="summary">
            {t('header.summary')}
          </p>
          <div className="contact-links">
            <a href="mailto:ivo@example.com">Email</a>
            <a href="https://rw.linkedin.com/in/ivo-nkaka" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://github.com/ivo-n-g" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://www.instagram.com/ivo.n.k/" target="_blank" rel="noopener noreferrer">{t('header.instagram')}</a>
          </div>
          <div className="location">{t('header.location')} | +250784090439</div>
        </div>
        <div className="header-image">
          <img src={profilePic} alt="Ivo Ganza Nkaka" className="profile-photo" />
        </div>
      </div>
    </header>
  );
};

export default Header;
