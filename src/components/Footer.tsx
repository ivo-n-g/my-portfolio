import React from 'react';
import { useTranslation } from 'react-i18next';

const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <div className="ticks"></div>
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} Ivo Ganza Nkaka. {t('footer.rights')}</p>
        <p>{t('footer.builtWith')}</p>
      </div>
    </footer>
  );
};

export default Footer;
