import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="ticks"></div>
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} Ivo Ganza Nkaka. All rights reserved.</p>
        <p>Built with React & TypeScript</p>
      </div>
    </footer>
  );
};

export default Footer;
