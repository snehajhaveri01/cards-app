import React from 'react';
import MemeGenerator from './components/MemeGenerator';

const NotFoundPage = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
      <p style={{fontSize: '24px'}}>404 | Not Found</p>
      <br/>
      <MemeGenerator/>
    </div>
  );
};

export default NotFoundPage;