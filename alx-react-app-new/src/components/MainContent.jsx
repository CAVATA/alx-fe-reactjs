// src/components/MainContent.jsx
import React from 'react';

const MainContent = ({ children }) => {
  const mainStyle = {
    padding: '24px',
    maxWidth: '900px',
    margin: '20px auto',
    fontFamily: 'Arial, sans-serif',
    color: '#222'
  };

  const sectionStyle = {
    backgroundColor: '#fbfcfe',
    padding: '18px',
    borderRadius: '8px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.04)'
  };

  return (
    <main style={mainStyle}>
      <section style={sectionStyle}>
        <h2 style={{ marginTop: 0 }}>Overview</h2>
        <p>This area shows the main content and any child components (like the user profile).</p>
        {children}
      </section>
    </main>
  );
};

export default MainContent;
