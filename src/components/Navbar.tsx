import React from 'react';
import { useTranslation } from 'react-i18next';
import './Navbar.css';
import ThemeToggle from './ThemeToggle';
import LanguageSwitcher from './LanguageSwitcher';

const Navbar: React.FC = () => {
  const { t } = useTranslation();

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="#" className="navbar-logo">IN</a>
        <div className="navbar-right">
          <ul className="navbar-links">
            <li><a href="#experience">{t('navbar.experience')}</a></li>
            <li><a href="#projects">{t('navbar.projects')}</a></li>
            <li><a href="#education">{t('navbar.education')}</a></li>
            <li><a href="#skills">{t('navbar.skills')}</a></li>
          </ul>
          <LanguageSwitcher />
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
