'use client';

import { CustomerGuard } from '@/helper/HOC/CustomerGuard';
import { axiosInstance } from '@/helper/axios';
import { useAppSelector } from '@/lib/hooks';
import { IEvent } from '@/typeweb/event.type';
import { IPointsReferral } from '@/typeweb/reward.type';
import { baseUrl } from '@/utils/config';
import axios from 'axios';
import { useParams, useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const BuyerDetail = () => {
  const [swi, setSiw] = useState(false);
  const params = useParams();
  const router = useRouter();
  const [event, setEvent] = useState<IEvent>();
  const [points, setPoints] = useState<IPointsReferral>();
  const [usePoint, setUsePoint] = useState(0);
  const selector = useAppSelector((state) => state.user.dataUser);

  const getEvent = async () => {
    try {
      const response = await axios.get(
        `${baseUrl}/events/${params.checkout_id}`,
      );
      setEvent(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPointsReferral();
    handleUsePoints();
    getEvent();
  }, [swi]);
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
          total: calculateTotal() - usePoint,
          pointsUsed: usePoint,
        });
        if (usePoint > 0 && points) {
          let data: IPointsReferral = points;
          data.pointEarned = 0;
          await axiosInstance.patch(baseUrl + `/reward/${selector.id}`, {
            id: data.id,
            userId: data.userId,
            pointEarned: data.pointEarned,
            dateEarned: data.dateEarned,
            expiresOn: data.expiresOn,
          });
        }
        console.log(data.data);
        router.push(`/transaction/payment/${data.data.id}`);
        return;
      }
      alert('tiket tidak boleh kosong');
    } catch (error) {
      console.log(error);
    }
  };

  const getPointsReferral = async () => {
    try {
      const { data } = await axiosInstance.get(
        baseUrl + `/reward/${selector.id}`,
      );
      console.log(data.data);

      setPoints(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleUsePoints = () => {
    if (swi && calculateTotal() > (points?.pointEarned || 0)) {
      setUsePoint(points?.pointEarned || 0);
    } else {
      setUsePoint(0);
    }
  };

  return (
    <div className="border p-4 rounded-md ">
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
        <div className="flex justify-between my-2 font-bold">
          <span>Discount</span>
          <span>- Rp {usePoint}</span>
        </div>
        <div className="flex justify-between my-2 font-bold">
          <span>Total</span>
          <span>Rp {calculateTotal() - usePoint}</span>
        </div>
        <div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              className="sr-only peer"
              onChange={(e) => setSiw(e.target.checked)}
            />
            <div className="w-11 h-6 bg-gray-500 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
              Use point ({points?.pointEarned || 0})
            </span>
          </label>
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

export default CustomerGuard(BuyerDetail);
