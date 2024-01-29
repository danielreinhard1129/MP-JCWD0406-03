import { ModalLoginAction } from '@/lib/features/userSlice';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { baseUrl } from '@/utils/config';
import axios from 'axios';
import { event } from 'cypress/types/jquery';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { GrLocation } from 'react-icons/gr';
import { IoIosWarning } from 'react-icons/io';
import { IoPeopleSharp } from 'react-icons/io5';
import { SlCalender } from 'react-icons/sl';

const EventInformation = ({ data }: any) => {
  const selector = useAppSelector((state) => state.user.dataUser);
  const dispatch = useAppDispatch();
  const params = useParams();
  console.log({ params });
  const [event, setEvent] = useState({
    id: '',
    title: '',
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

  const handlePayment = () => {
    if (!selector.id) {
      return dispatch(ModalLoginAction(true));
    }
    return router.push(`/transaction/checkout/${params.event_id}`);
  };

  useEffect(() => {
    console.log({ event });
  }, [event]);

  useEffect(() => {
    getEvent();
  }, []);

  return (
    <div className="max-w-4xl mx-auto flex flex-col lg:flex-row lg:justify-between mb-6 items-center">
      <div className="lg:w-1/2">
        <h1 className="text-2xl font-bold mb-4">{event.title}</h1>
        <div className="text-gray-600 mb-4">
          <div className="flex">
            <GrLocation /> {event.location}
          </div>
          <br />
          <div className="flex">
            <SlCalender /> {event.dateTime.slice(0, 10)}
          </div>
        </div>
      </div>
      <div className="max-w-sm rounded overflow-hidden shadow-lg p-5 bg-white border border-gray-300">
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2 text-center">
            Tickets starting at
          </div>
          <p className="text-gray-700 text-base text-center">
            Rp. {event.price}
          </p>
        </div>
        <div className="px-6 pb-2 text-center">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => handlePayment()}
          >
            Buy Tickets
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventInformation;
