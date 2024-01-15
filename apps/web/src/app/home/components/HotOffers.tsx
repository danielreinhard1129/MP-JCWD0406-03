import Image from 'next/image';
import React from 'react';

const HotOffers = () => {
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
  ];
  return (
    <section className="my-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold mb-6">Hot Offers</h2>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
          {events.map((event) => (
            <div key={event.id} className="bg-white rounded shadow p-4">
              <Image
                src={event.image}
                width={500}
                height={500}
                alt={`Event ${event.id}`}
                className="w-full h-40 object-cover"
              />
              <h3 className="text-xl font-bold mb-2">{event.title}</h3>
              <p>{event.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HotOffers;
