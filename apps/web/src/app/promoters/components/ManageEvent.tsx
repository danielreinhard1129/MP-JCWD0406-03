import { Poppins } from 'next/font/google';
import { CiSearch } from 'react-icons/ci';
import React from 'react';

const poppins = Poppins({
  weight: '400',
  subsets: ['latin'],
});
const ManageEvent = () => {
  return (
    <section className={`${poppins.className} w-full p-10`}>
      <h1 className="text-4xl font-extrabold mt-20">Manage Event</h1>
      <div className="flex justify-between w-full  border-b-2 border-gray-300 pt-10 pb-2">
        <form className='flex items-center'>
          <input type="text" placeholder="Search Event" className="py-3 rounded-lg" />
          <button
            type="submit"
            className="bg-green-500 py-3 px-10 text-white text-2xl rounded ml-2"
          >
            <CiSearch />
          </button>
        </form>
          <button className="bg-blue-500 text-white px-2 rounded">Create Event</button>
      </div>
    </section>
  );
};

export default ManageEvent;
