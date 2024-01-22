import { Poppins } from 'next/font/google';
import { useAppSelector } from '@/lib/hooks';
import React from 'react';
import Statisticts from './Statisticts';

const roboto = Poppins({
  weight: '400',
  subsets: ['latin'],
});

const Dasboard = () => {
  const selector = useAppSelector((state) => state.user.dataUser);
  return (
    <div className={`${roboto.className} w-full`}>
      <h1 className="text-4xl font-bold m-4 mb-10">
        Hello, {selector.firstName}
      </h1>
      <p className='text-center text-4xl font-bold'>My Dassboard</p>
      <ul className="flex m-4 justify-center">
        <li className="bg-blue-500 w-56 text-center mr-4 h-32 rounded-lg">
          <h1 className="text-white mt-4 text-xl font-bold border-b-2">
            Event
          </h1>
          <p className="font-bold text-2xl text-white mt-2">220</p>
        </li>
        <li className="bg-green-500 w-56 text-center mr-4 h-32 rounded-lg">
          <h1 className="text-white mt-4 text-xl font-bold border-b-2">Sold</h1>
          <p className="font-bold text-2xl text-white mt-2">50</p>
        </li>
        <li className="bg-yellow-200 w-56 text-center h-32 rounded-lg">
          <h1 className="mt-4 text-xl font-bold border-b-2 border-black">
            Income
          </h1>
          <p className="font-bold text-2xl  mt-2">$500</p>
        </li>
      </ul>
      <div className='border-y-2 border-black'>
        <Statisticts />
      </div>
    </div>
  );
};

export default Dasboard;
