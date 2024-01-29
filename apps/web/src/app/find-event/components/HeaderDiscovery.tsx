import { Button } from 'flowbite-react';
import Link from 'next/link';
import React from 'react';

const HeaderDiscovery = () => {
  const backgroundImage = '/bg1.jpg';

  return (
    <div
      className="bg-white text-white"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="flex items-center justify-center h-screen  px-4 sm:px-6 lg:px-8 ">
        <div className="text-center">
          <h1 className="text-5xl font-extrabold sm:text-6xl">
            Exclusive events, priceless moments
          </h1>
          <p className="mt-6 text-xl">
            Explore the best events and live experiences
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeaderDiscovery;
