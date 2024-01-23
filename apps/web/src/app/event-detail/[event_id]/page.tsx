'use client';

import React, { useEffect, useState } from 'react';
import Banner from '@/app/event-detail/[event_id]/components/Banner';
import axios from 'axios';
import { baseUrl } from '@/utils/config';
import { useParams, useRouter } from 'next/navigation';
import { GrLocation } from 'react-icons/gr';
import { SlCalender } from 'react-icons/sl';
import { IoPeopleSharp, IoTimer } from 'react-icons/io5';
import { IoIosWarning } from 'react-icons/io';
import EventInformation from './components/EventInformation';
import Location from './components/Location';

const EventPage = () => {
  const params = useParams();
  console.log({ params }); //ini biar nanti keluar di console.lognya param:{}
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
    <div>
      <Banner data={event} />
      <Location data={event} />
      <EventInformation data={event} />
    </div>
  );
};

export default EventPage;
