import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const BrowseConcerts = () => {
  const events = [
    {
      id: 1,
      title: 'Event 1',
      description: 'Description for Event 1.',
      image: '/bg1.jpg',
    },
    {
      id: 2,
      title: 'Event 2',
      description: 'Description for Event 2.',
      image: '/bg1.jpg',
    },
    {
      id: 3,
      title: 'Event 2',
      description: 'Description for Event 2.',
      image: '/bg1.jpg',
    },
    {
      id: 4,
      title: 'Event 2',
      description: 'Description for Event 2.',
      image: '/bg1.jpg',
    },
  ];
  return (
    <section>
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold mb-6">Browse Concerts</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {events.map((event) => (
            <Link key={event.id} href="/event-details">
              <div className="bg-white rounded shadow p-4 transition-transform duration-300 transform hover:scale-105">
                <Image
                  src={event.image}
                  width={500}
                  height={500}
                  alt={`Event ${event.id}`}
                  className="w-full h-40 object-cover mb-4"
                />
                <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                <p>{event.description}</p>
              </div>
            </Link>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link href="/">
            <button className=" text-black px-6 py-2 border-solid border-2 border-[#e4e7eb]  transition duration-300 mb-5 ">
              See more
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BrowseConcerts;
