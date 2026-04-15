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
      <div className="footer-container mono">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '40px', opacity: 0.6, fontSize: '12px' }}>
          <div>
            <p>COPYRIGHT &copy; {new Date().getFullYear()} IVO GANZA NKAKA</p>
            <p>{t('footer.rights').toUpperCase()}</p>
          </div>
          <div>
            <p>ENGINE: REACT + VITE + TS</p>
            <p>DEPLOYED: VERCEL / NETLIFY</p>
          </div>
          {visits !== null && (
            <div>
              <p>TRAFFIC_LOG: {visits.toString().padStart(6, '0')}</p>
              <p>STATUS: ONLINE / LIVE</p>
            </div>
          )}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
