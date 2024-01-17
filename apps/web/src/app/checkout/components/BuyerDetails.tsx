import React from 'react';

const BuyerDetails = () => {
  const event = {
    title: 'Drive-in Senja: Back to the Future',
    location: 'Parkir Timur Senayan',
    date: '9 September 2024',
    time: '20:00 - 23:00',
    tickets: [{ type: 'VIP', quantity: 2, price: 170000 }],
    adminFee: 26000,
  };

  const calculateTotal = () => {
    return event.tickets.reduce(
      (total, ticket) => total + ticket.quantity * ticket.price,
      event.adminFee,
    );
  };

  return (
    <div className="border p-4 rounded-md">
      <h2 className="text-lg font-bold mb-4">Event Details</h2>
      <p className="text-sm mb-2">{event.title}</p>
      <p className="text-sm mb-2">{event.location}</p>
      <p className="text-sm mb-4">
        {event.date} | {event.time}
      </p>
      <div className="mb-6">
        <h3 className="font-bold">Order Summary</h3>
        {event.tickets.map((ticket, index) => (
          <div key={index} className="flex justify-between my-2">
            <span>
              {ticket.quantity} x {ticket.type} Ticket
            </span>
            <span>Rp {ticket.price.toLocaleString()}</span>
          </div>
        ))}
        <div className="flex justify-between my-2">
          <span>Service & Handling</span>
          <span>-</span>
        </div>
        <div className="flex justify-between my-2">
          <span>Admin Fee</span>
          <span>Rp {event.adminFee.toLocaleString()}</span>
        </div>
        <div className="flex justify-between my-2 font-bold">
          <span>Total</span>
          <span>Rp {calculateTotal().toLocaleString()}</span>
        </div>
      </div>
      <div className="flex justify-center">
        <button className="px-6 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-purple-600 hover:bg-purple-700">
          Continue to Payment
        </button>
      </div>
    </div>
  );
};

export default BuyerDetails;
