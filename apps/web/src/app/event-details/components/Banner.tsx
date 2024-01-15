import Image from 'next/image';
import React from 'react';

const Banner = () => {
  return (
    <section className="max-w-4xl mt-10 my-10 mx-auto bg-[#dadafb] p-6 rounded-md shadow-md">
      <div>
        <Image
          src="/bg1.jpg"
          width={500}
          height={500}
          alt="Concert Poster"
          className="w-full h-64 rounded-lg"
        />
      </div>
    </section>
  );
};

export default Banner;
