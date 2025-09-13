// src/components/Header.jsx
import React from 'react';

const Header = () => {
  const headerStyle = {
    backgroundColor: 'navy',
    color: 'white',
    textAlign: 'center',
    padding: '20px 0',
    borderBottom: '4px solid #001f3f'
  };

  const titleStyle = {
    margin: 0,
    fontSize: '1.8rem',
    letterSpacing: '1px'
  };

  return (
    <header style={headerStyle}>
      <h1 style={titleStyle}>My Favorite Cities</h1>
    </header>
  );
};

export default Header;
