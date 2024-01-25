'use client';

import { CustomerGuard } from '@/helper/HOC/CustomerGuard';
import { axiosInstance } from '@/helper/axios';
import { IEvent } from '@/typeweb/event.type';
import { ITransaction } from '@/typeweb/transaction.type';
import { baseUrl } from '@/utils/config';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const PaymentDetail = ({transaction}:any) => {
 

  // const [ticketQuantities, setTicketQuantities] = useState(0);

  // const calculateTotal = () => {
  //   if (event?.price) {
  //     return event.price * ticketQuantities;
  //   }
  //   return 0;
  // };

  return (
    <div className="border p-4 rounded-md">
      <h2 className="text-lg font-bold mb-4">Event Details</h2>
      <p className="text-sm mb-2">{}</p>
      <p className="text-sm mb-2">{}</p>
      <p className="text-sm mb-4"></p>
      <div className="mb-6">
        <h3 className="font-bold">Order Summary</h3>
        <div className="flex justify-between my-2">
          <span>Tempat Duduk Tersedia</span>
          <span>{}</span>
        </div>
        <div className="flex justify-between my-2 font-bold">
          <span>Total</span>
          <span>Rp {transaction?.total}</span>
        </div>
        <div className="flex justify-center">
            <button className="px-6 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-[#1b64f1] hover:[#1b64f1]">
              Continue to Payment
            </button>
        </div>
      </div>
    </div>
  );
};

export default CustomerGuard(PaymentDetail);
