'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { eventList } from '../api/api';
import React from 'react';
import { useRouter } from 'next/navigation';
import { Badge } from 'flowbite-react';
import { IoLocation } from 'react-icons/io5';
import { FaMoneyBillWave } from 'react-icons/fa6';

interface Event {
  id: string;
  category: string;
  image: string;
  tittle: string;
  dateTime: string;
  location: string;
  price: number;
  description: string;
}

const UpcomingEvents: React.FC = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const router = useRouter();

  const getEvents = async () => {
    try {
      const response = await eventList({ category: '' });
      setEvents(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getEvents();
  }, []);

  const handleCardClick = (eventId: string) => {
    router.push(`/event-detail/${eventId}`);
  };

  const handleSeeMoreClick = () => {
    // Navigasi ke halaman lain saat tombol "See more" diklik
    router.push('/find-event');
  };

  // Menampilkan hanya dua event pertama
  const displayedEvents = events.slice(0, 2);

  return (
    <section>
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold mb-6">Upcoming Events</h2>
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
                  {event.dateTime}
                </Badge>
              </div>
              <h5 className=" line-clamp-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {event.tittle}
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
        <div className="text-center mt-8">
          <Link href="/find-event">
            <button className="text-black px-6 py-2 border-solid border-2 border-[#e4e7eb] transition duration-300 mx-auto">
              See more
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default UpcomingEvents;
