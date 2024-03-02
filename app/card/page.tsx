import React from 'react';
import Card from '../components/Card';

function BackgroundCard() {
  return (
    <div className="flex items-center justify-center h-screen">
      <Card backgroundImage="/card/coffee1.jpg" showLink={false} />
    </div>
  );
}

export default BackgroundCard;
