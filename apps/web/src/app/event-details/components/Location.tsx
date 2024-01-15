import React from 'react';
import { GrLocation } from 'react-icons/gr';
import { SlCalender } from 'react-icons/sl';

const Location = () => {
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

      <div className="lg:w-1/2 lg:text-center">
        <h1>Ticket starting at</h1>
        <h1>Rp 212.000</h1>
        <button className="bg-[#5553ee] hover:[#5553ee] text-white font-bold py-2 px-4 rounded">
          Buy Tickets
        </button>
      </div>
    </div>
  );
};

export default Location;
