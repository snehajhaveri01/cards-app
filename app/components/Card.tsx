
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { MotionDiv } from './MotionDiv';

interface CardProps {
    backgroundImage?: string;
    showLink?: boolean;
  }

const Card: React.FC<CardProps> = ({ backgroundImage, showLink = true }) => {
  return (
    <div className="flex items-center justify-center h-screen">
    <MotionDiv animate={{ y: 80 }} transition={{ duration: 1 }}>
    <div className="w-96 bg-rose-200 bg-opacity-40 backdrop-blur-md rounded-lg shadow-lg p-4 mb-40"
         style={{
            backgroundImage: backgroundImage ? `url(${backgroundImage})` : '',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
    >
      <div className="relative w-full h-74 overflow-hidden rounded-t-lg">
        {backgroundImage ? (
          <div
            className="absolute inset-0 bg-cover "
            style={{ backgroundImage: `url(${backgroundImage})` }}
          />
        ) : (
          <Image
            src="/card/coffee.jpg"
            width={500}
            height={500}
            alt="coffee!"
          />
        )}
      </div>
      <div className="p-4">
        <p className="text-lg font-semibold text-gray-800">
          Coffee, because adulting is hard
        </p>
        <p className="text-sm text-gray-600">
          A delightful beverage to get through the challenges of adulthood.
        </p>
        {showLink && (
        <div className="flex justify-end mt-2">
          <Link href="/card" className="rounded-md bg-amber-800 px-5 py-2.5 text-sm font-medium text-white shadow">
            Learn more!
          </Link>
        </div>
        )}
      </div>
    </div>
    </MotionDiv>
    </div>
  );
};

export default Card;
