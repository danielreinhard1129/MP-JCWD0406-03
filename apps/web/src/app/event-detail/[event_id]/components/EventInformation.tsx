import { baseUrl } from '@/utils/config';
import axios from 'axios';
import { event } from 'cypress/types/jquery';
import { useParams, useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { IoIosWarning } from 'react-icons/io';
import { IoPeopleSharp } from 'react-icons/io5';
import { IoTimer } from 'react-icons/io5';

const EventInformation = ({data}:any)=> {
  const params = useParams();
  console.log({ params });
  const [event, setEvent] = useState({
    id: '',
    tittle: '',
    price: '',
    dateTime: '',
    location: '',
    description: '',
    availableSeat: '',
    createdAt: '',
    updatedAt: '',
    category: '',
    banner: '',
  });
  console.log('data event', event);

  const router = useRouter();
  const getEvent = async () => {
    try {
      const response = await axios.get(`${baseUrl}/events/${params.event_id}`);

      setEvent(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    console.log({ event });
  }, [event]);

  useEffect(() => {
    getEvent();
  }, []);
  
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
            <p className="text-gray-600">{event.description}</p>
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
