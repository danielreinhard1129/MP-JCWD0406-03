import Image from 'next/image';
import React from 'react';
//yg di depan error karna u ga masukin properti disini
const Banner = ({data}:any) => {
  console.log({data})
  return (
    <section className="max-w-4xl mt-10 my-10 mx-auto bg-[#dadafb] p-6 rounded-md shadow-md">
      <div>
        <Image
          src={"/bg1.jpg"}// ?? ini kaya klo semisal data.banner ga ada maka dia ke yg selanjutnya klo ada yg di pake data.banner
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
