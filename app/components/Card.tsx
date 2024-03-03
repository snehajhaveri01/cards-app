import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MotionDiv } from "./MotionDiv";

interface CardProps {
  backgroundImage?: string;
  showLink?: boolean;
}

const Card: React.FC<CardProps> = ({ backgroundImage, showLink = true }) => {
  return (
    <div className="flex items-center justify-center h-screen">
      <MotionDiv 
      initial={{ y: -1000, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ x: 0, opacity: 0 }}
      transition={{ type: 'spring', duration: 1, delay: 0.5 }}
      >
        <div
          className="w-96 bg-rose-200 bg-opacity-40 backdrop-blur-md rounded-lg shadow-lg p-4 mb-40"
          style={{
            backgroundImage: backgroundImage ? `url(${backgroundImage})` : "",
            backgroundSize: "cover",
            backgroundPosition: "center",
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
            <p className="text-xl font-semibold">Coffee Feels</p>
            <p className="text-sm">
              Sipping coffee feels like a warm hug, kickstarting your day with
              delightful joy and aromatic bliss. Coffee, the elixir of joy,
              turns ordinary moments into cozy adventures, sparking creativity
              and fostering connection. From the first sip to the last drop,
              it is a mini-celebration, reminding us to cherish lifes small
              pleasures. Embrace the joy in your mug, and let the cuteness of
              coffee color your day!
            </p>
            {showLink && (
              <div className="flex justify-end mt-2">
                <Link
                  href="/card"
                  className="rounded-md bg-amber-800 px-5 py-2.5 text-sm font-medium text-white shadow"
                >
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
