'use client';
import { axiosInstance } from '@/helper/axios';
import { IEvent } from '@/typeweb/event.type';
import { ITransaction } from '@/typeweb/transaction.type';
import { baseUrl } from '@/utils/config';
import { useEffect, useState } from 'react';

const useGetEventById = (id: number): IEvent => {
  const [data, setData] = useState<IEvent>();

  useEffect(() => {
    getEvent();
  }, []);
  const getEvent = async () => {
    try {
      const { data } = await axiosInstance.get(baseUrl + `/events/${id}`);
      setData(data.data);
    } catch (error) {
      console.log(error);
    }
  };
  return data as IEvent;
};

export default useGetEventById;
