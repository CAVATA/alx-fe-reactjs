// src/components/UserProfile.jsx
import React from 'react';

const UserProfile = ({ name = 'Jane Kavata', age = 24, bio = 'A passionate learner and maker.' }) => {
  const container = {
    border: '1px solid #e0e0e0',
    padding: '16px',
    margin: '16px auto',
    borderRadius: '10px',
    maxWidth: '360px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.06)',
    backgroundColor: '#fff'
  };

  const nameStyle = {
    color: '#2b6cb0',
    fontSize: '1.25rem',
    margin: '0 0 8px 0'
  };

  const ageStyle = { fontWeight: 700 };

  const bioStyle = { color: '#4a5568', marginTop: '8px', lineHeight: 1.4 };

  return (
    <div style={container}>
      <h2 style={nameStyle}>{name}</h2>
      <p style={{ margin: 0 }}>Age: <span style={ageStyle}>{age}</span></p>
      <p style={bioStyle}>{bio}</p>
    </div>
  );
};

export default UserProfile;
