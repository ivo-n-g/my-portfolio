import React from 'react';
import { useTranslation } from 'react-i18next';
import profilePic from '../assets/profile.jpg';

const Header: React.FC = () => {
  const { t } = useTranslation();
  const timestamp = new Date().toISOString().split('T')[0];

  return (
    <header className="header">
      <div className="header-container">
        <div className="header-text">
          <div className="mono" style={{ marginBottom: '20px', opacity: 0.5 }}>
            USR_ID: 1V0-NKAKA-0001 / VER: 2.0.26 / UPDATED: {timestamp}
          </div>
          <h1>Ivo Ganza Nkaka</h1>
          <p className="summary">
            {t('header.summary')}
          </p>
          <div className="contact-links">
            <a href="mailto:ivo@example.com">EMAIL</a>
            <a href="https://rw.linkedin.com/in/ivo-nkaka" target="_blank" rel="noopener noreferrer">LINKEDIN</a>
            <a href="https://github.com/ivo-n-g" target="_blank" rel="noopener noreferrer">GITHUB</a>
            <a href="https://www.instagram.com/ivo.n.k/" target="_blank" rel="noopener noreferrer">{t('header.instagram').toUpperCase()}</a>
          </div>
          <div className="location">{t('header.location').toUpperCase()} | +250 784 090 439</div>
        </div>
        <img src={profilePic} alt="Ivo Ganza Nkaka" className="profile-photo" />
      </div>
    </header>
  );
};

export default Header;
