'use client'

import { useState } from 'react';
import Image from 'next/image'
interface Meme {
  image: string;
}

const memeImages: string[] = ['/memes/meme1.webp', '/memes/meme2.webp', '/memes/meme3.jpg', '/memes/meme4.webp', '/memes/meme5.png'];

const getRandomElement = <T extends unknown>(array: T[]): T => {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
};

const generateRandomMeme = (): Meme => {
  return {
    image: getRandomElement(memeImages),
  };
};

const MemeGenerator = () => {
  const [currentMeme, setCurrentMeme] = useState<Meme>(generateRandomMeme);

  const handleReroll = () => {
    setCurrentMeme(generateRandomMeme());
  };

  return (
    <div>
      <Image 
        src={currentMeme.image} 
        alt="Meme Image" 
        width={500}  
        height={500} 
        />
    <br/>
      <button onClick={handleReroll}>Reroll Meme</button>
    </div>
  );
};

export default MemeGenerator;
