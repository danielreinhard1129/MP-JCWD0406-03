import { eventList } from '@/app/home/api/api';
import { baseUrl } from '@/utils/config';
import axios from 'axios';
import { Badge } from 'flowbite-react';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { FaMoneyBillWave } from 'react-icons/fa6';
import { IoLocation } from 'react-icons/io5';
import { useRouter } from 'next/navigation';

interface Event {
  id: string;
  category: string;
  image: string;
  title: string;
  dateTime: string;
  location: string;
  price: number;
  description: string;
}

const CardEvent = () => {
  const router = useRouter();
  const [events, setEvents] = useState<Event[]>([]);

  const getEvents = async () => {
    try {
      const response = await eventList({ category: '' });
      setEvents(response);
    } catch (error) {
      console.log(error);
    }
  };
  const handleCardClick = (eventId: string) => {
    router.push(`/event-detail/${eventId}`);
  };
  useEffect(() => {
    getEvents();
  }, []);

  return (
    <>
      <div className="grid grid-flow-row grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4  gap-4">
        {events.map((event) => (
          <div
            key={event.id}
            className="bg-white rounded shadow p-4 transition-transform duration-300 transform hover:scale-105 cursor-pointer"
            onClick={() => handleCardClick(event.id)}
          >
            <Image
              src="/bg1.jpg"
              width={500}
              height={500}
              alt={`Event ${event.id}`}
              className="w-full h-40 object-cover mb-4"
            />
            <div className="flex items-center gap-2">
              <Badge color="success" size="sm" className="w-fit">
                {event.category}
              </Badge>
              <Badge color="grey" size="sm" className="w-fit">
                {event.dateTime.slice(0, 10)}
              </Badge>
            </div>
            <h5 className=" line-clamp-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {event.title}
            </h5>
            <p className="flex line-clamp-3 font-normal text-gray-700 dark:text-gray-400">
              <span className="mr-2">
                <IoLocation />
              </span>
              {event.location}
            </p>
            <p className="flex line-clamp-3 font-normal text-gray-700 dark:text-gray-400">
              <span className="mr-2">
                <FaMoneyBillWave />
              </span>

              {event.price}
            </p>
            <p className=" line-clamp-3 font-normal text-gray-700 dark:text-gray-400">
              {event.description}
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default CardEvent;
