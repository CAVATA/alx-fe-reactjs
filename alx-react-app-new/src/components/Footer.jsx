// src/components/Footer.jsx
import React from 'react';

const Footer = () => {
  const footerStyle = {
    textAlign: 'center',
    padding: '14px 0',
    backgroundColor: '#f1f5f9',
    color: '#333',
    marginTop: '26px',
    borderTop: '1px solid #e2e8f0'
  };

  return (
    <footer style={footerStyle}>
      <p style={{ margin: 0, fontSize: '0.95rem' }}>
        © {new Date().getFullYear()} My Favorite Cities — Built with React
      </p>
    </footer>
  );
};

export default Footer;
