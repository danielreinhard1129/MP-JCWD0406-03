'use client';

import { useParams } from 'next/navigation';
import { eventList } from '@/app/home/api/api';
import { useEffect, useState } from 'react';
import Image from 'next/image';
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

export default function EventPage() {
  const router = useRouter();
  const params = useParams();
  const [category, setCategory] = useState<Event[]>([]);
  const getEvents = async () => {
    try {
      const response = await eventList({ category: params.category });
      setCategory(response);
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
  return (
    <section>
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold mb-6"> {params.category}</h2>
        <div className="grid grid-flow-row grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4  gap-4">
          {category.map((data) => (
            <div
              key={data.id}
              className="bg-white rounded shadow p-4 transition-transform duration-300 transform hover:scale-105 cursor-pointer"
              onClick={() => handleCardClick(data.id)}
            >
              <Image
                src="/bg1.jpg"
                width={500}
                height={500}
                alt={`Event ${data.id}`}
                className="w-full h-40 object-cover mb-4"
              />
              <div className="flex items-center gap-2">
                <Badge color="success" size="sm" className="w-fit">
                  {data.category}
                </Badge>
                <Badge color="grey" size="sm" className="w-fit">
                  {data.dateTime}
                </Badge>
              </div>
              <h5 className=" line-clamp-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {data.tittle}
              </h5>
              <p className="flex line-clamp-3 font-normal text-gray-700 dark:text-gray-400">
                <span className="mr-2">
                  <IoLocation />
                </span>
                {data.location}
              </p>
              <p className="flex line-clamp-3 font-normal text-gray-700 dark:text-gray-400">
                <span className="mr-2">
                  <FaMoneyBillWave />
                </span>

                {data.price}
              </p>
              <p className=" line-clamp-3 font-normal text-gray-700 dark:text-gray-400">
                {data.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
