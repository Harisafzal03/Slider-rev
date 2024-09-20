import React from 'react';

const LandingPage = () => {
  return (
    <div style={{ width: '100%', height: '100vh' }}>
      <iframe
        src="/landing.html"
        style={{ width: '100%', height: '100%', border: 'none' }}
        title="Landing Page"
      />
    </div>
  );
};

export default LandingPage;
