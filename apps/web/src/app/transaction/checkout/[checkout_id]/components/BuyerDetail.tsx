'use client';

import { AuthGuard } from '@/helper/HOC/AuthGuard';
import { CustomerGuard } from '@/helper/HOC/CustomerGuard';
import { axiosInstance } from '@/helper/axios';
import { useAppSelector } from '@/lib/hooks';
import { IEvent } from '@/typeweb/event.type';
import { baseUrl } from '@/utils/config';
import axios from 'axios';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import ClaimModal from './ClaimModal';

const BuyerDetail = () => {
  const params = useParams();
  const router = useRouter();
  console.log({ params });
  const [event, setEvent] = useState<IEvent>();
  const selector = useAppSelector((state) => state.user.dataUser);
  console.log('data event', event);

  const getEvent = async () => {
    try {
      const response = await axios.get(
        `${baseUrl}/events/${params.checkout_id}`,
      );
      console.log(response.data);

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
  const [ticketQuantities, setTicketQuantities] = useState(0);

  const handleIncrement = () => {
    setTicketQuantities((prev) => prev + 1);

    if (event?.availableSeat !== undefined && event.availableSeat > 0) {
      setEvent((prevEvent) => {
        if (prevEvent) {
          return {
            ...prevEvent,
            availableSeat: prevEvent.availableSeat - 1,
          };
        }
        return prevEvent;
      });
    }
  };

  const handleDecrement = () => {
    if (ticketQuantities > 0) {
      setTicketQuantities((prev) => prev - 1);
      setEvent((prevEvent) => {
        if (prevEvent) {
          return {
            ...prevEvent,
            availableSeat: prevEvent.availableSeat + 1,
          };
        }
        return prevEvent;
      });
    }
  };

  const calculateTotal = () => {
    if (event?.price) {
      return event.price * ticketQuantities;
    }
    return 0;
  };

  const HandlePayment = async () => {
    try {
      if (ticketQuantities > 0) {
        const { data } = await axiosInstance.post(baseUrl + '/transaction', {
          userId: selector.id,
          eventId: parseInt(params.checkout_id as string, 0),
          qty: ticketQuantities,
          total: calculateTotal(),
          pointsUsed: 0,
        });

        console.log(data.data);
        router.push(`/transaction/payment/${data.data.id}`);
        return;
      }
      alert('tiket tidak boleh kosong');
    } catch (error) {
      console.log(error);
    }
  };

  const [isClaimModalOpen, setIsClaimModalOpen] = useState(false);

  const handleOpenClaimModal = () => {
    setIsClaimModalOpen(true);
  };

  const handleCloseClaimModal = () => {
    setIsClaimModalOpen(false);
  };

  return (
    <div className="border p-4 rounded-md">
      <h2 className="text-lg font-bold mb-4">Event Details</h2>
      <p className="text-sm mb-2">{event?.title}</p>
      <p className="text-sm mb-2">{event?.location}</p>
      <p className="text-sm mb-4"></p>
      <div className="mb-6">
        <h3 className="font-bold">Order Summary</h3>
        <div className="flex justify-between my-2">
          <span>Tempat Duduk Tersedia</span>
          <span>{event?.availableSeat}</span>
        </div>
        <div className="flex justify-between my-2">
          <div className="flex items-center">
            <span>
              {ticketQuantities} x {} Ticket
            </span>
            <button
              onClick={handleDecrement}
              className="text-sm font-bold px-2 bg-gray-200"
            >
              -
            </button>
            <span className="mx-2">{ticketQuantities}</span>
            <button
              onClick={handleIncrement}
              className="text-sm font-bold px-2 bg-gray-200"
            >
              +
            </button>
          </div>
          <span>Rp {event?.price}</span>
        </div>
        <div>
          <button onClick={handleOpenClaimModal}>Voucher</button>
          {isClaimModalOpen && <ClaimModal onClose={handleCloseClaimModal} />}
        </div>
        <div className="flex justify-between my-2 font-bold">
          <span>Total</span>
          <span>Rp {calculateTotal().toLocaleString()}</span>
        </div>

        <div className="flex justify-center">
          <button
            className="px-6 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-[#1b64f1] hover:[#1b64f1]"
            onClick={() => HandlePayment()}
          >
            Continue to Payment
          </button>
        </div>
      </div>
    </div>
  );
};

export default AuthGuard(BuyerDetail);
