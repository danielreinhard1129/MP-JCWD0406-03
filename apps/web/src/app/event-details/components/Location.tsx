import React from 'react';
import { GrLocation } from 'react-icons/gr';
import { SlCalender } from 'react-icons/sl';

const Location = () => {
  const ticketPrice = '212.000';

  return (
    <div className="max-w-4xl mx-auto flex flex-col lg:flex-row lg:justify-between mb-6 items-center">
      <div className="lg:w-1/2">
        <h1 className="text-2xl font-bold mb-4">
          Drive-In Senja: Back to The Future
        </h1>
        <div className="text-gray-600 mb-4">
          <div>
            <GrLocation />
          </div>
          <br />
          <div>
            <SlCalender />
          </div>
          <br />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam,
            natus? Reprehenderit repellendus repellat aperiam quidem omnis
            officiis voluptas error molestiae eos quia, id delectus harum,
            optio, quam nam magnam maiores.
          </p>
        </div>
      </div>
      <div className="max-w-sm rounded overflow-hidden shadow-lg p-5 bg-white border border-gray-300">
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2 text-center">
            Tickets starting at
          </div>
          <p className="text-gray-700 text-base text-center">
            Rp. {ticketPrice}
          </p>
        </div>
        <div className="px-6 pb-2 text-center">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Buy Tickets
          </button>
        </div>
      </div>
    </div>
  );
};

export default Location;
