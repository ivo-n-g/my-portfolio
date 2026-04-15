import React from 'react';
import { useTranslation } from 'react-i18next';
import './LanguageSwitcher.css';

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (event: React.ChangeEvent<HTMLSelectElement>) => {
    i18n.changeLanguage(event.target.value);
  };

  return (
    <div className="language-switcher">
      <select 
        onChange={changeLanguage} 
        value={i18n.language.split('-')[0]}
        aria-label="Select Language"
      >
        <option value="en">EN</option>
        <option value="fr">FR</option>
        <option value="es">ES</option>
        <option value="zh">ZH</option>
        <option value="ko">KO</option>
        <option value="rw">RW</option>
      </select>
    </div>
  );
};

export default LanguageSwitcher;
