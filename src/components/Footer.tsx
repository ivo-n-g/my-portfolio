import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

const Footer: React.FC = () => {
  const { t } = useTranslation();
  const [visits, setVisits] = useState<number | null>(null);

  useEffect(() => {
    // Using a public counter API to track visits
    // Note: In a real production app, you might want to use a more robust backend
    fetch('https://api.counterapi.dev/v1/ivo-nkaka-portfolio/visits/up')
      .then(res => res.json())
      .then(data => setVisits(data.count))
      .catch(err => console.error('Error fetching visit count:', err));
  }, []);

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <p>&copy; {new Date().getFullYear()} Ivo Ganza Nkaka. {t('footer.rights')}</p>
          <p>{t('footer.builtWith')}</p>
          {visits !== null && (
            <p className="visit-counter">
              {t('footer.visits')}: <span className="counter">{visits}</span>
            </p>
          )}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
