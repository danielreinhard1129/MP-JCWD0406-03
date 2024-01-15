import React from 'react';
import { IoIosWarning } from 'react-icons/io';
import { IoPeopleSharp } from 'react-icons/io5';
import { IoTimer } from 'react-icons/io5';

const EventInformation = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <div>
        <h1>Event Information</h1>
        <div className="grid grid-cols-3 gap-4">
          <div className="flex box text-left">
            <div className="">
              <IoTimer size={20} />
            </div>
            <text className=" flex">Duration</text>
          </div>
          <div className="flex box text-left">
            <div className="">
              <IoPeopleSharp size={20} />
            </div>
            <text className=" flex">Audience</text>
          </div>
          <div className="flex box text-left">
            <div className="">
              <IoIosWarning size={20} />
            </div>
            <text className=" flex">Attention</text>
          </div>
        </div>
        <div className="mb-6">
          <h3 className="text-xl font-bold mb-2">Description</h3>
          <p className="text-gray-600">
            Drive-In Senja offers a modern take on the classic drive-in
            experience. With the use of radio transmission kits, integrating
            film audio into your cars radio, and a high-resolution projector, it
            provides the best visual experience. This event is a safe way to
            spend time with family, partners, or communities.
          </p>
        </div>
        <div className="mb-6">
          <h3 className="text-xl font-bold mb-2">Terms & Conditions</h3>
          <ul className="list-disc list-inside text-gray-600">
            <li>
              Face mask and social distancing are mandatory outside the car.
            </li>
            <li>Suitable for audience aged 12 and above.</li>
            <li>Official F&B Partner.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default EventInformation;
