'use client';
import React, { useEffect, useState } from 'react';
import PaymentDetail from './PaymentDetail';
import PaymentInstruction from './PaymentInstruction';
import { axiosInstance } from '@/helper/axios';
import { ITransaction } from '@/typeweb/transaction.type';
import { useParams } from 'next/navigation';
import { baseUrl } from '@/utils/config';

const WaitingPayment = () => {
  const params = useParams();
  console.log({ params });
  const [transaction, setTransaction] = useState<ITransaction>();

  const getTransaction = async () => {
    try {
      const response = await axiosInstance.get(
        `${baseUrl}/transaction/${params.payment_id}`,
      );
      console.log(response.data);

      setTransaction(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getTransaction();
  }, []);
  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
        <div className="flex-1">
          <PaymentInstruction transaction={transaction} />
        </div>
        <div className="flex-1 mt-4 md:mt-0 md:ml-4">
          <PaymentDetail transaction={transaction} />
        </div>
      </div>
      <div className="mt-4 text-center p-3 bg-red-100 text-red-800 rounded">
        <p>Please complete the payment before 10:00 WIB</p>
      </div>
    </div>
  );
};

export default WaitingPayment;
