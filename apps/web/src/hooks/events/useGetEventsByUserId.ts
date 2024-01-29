import { axiosInstance } from '@/helper/axios';
import { IEvent } from '@/typeweb/event.type';
import { baseUrl } from '@/utils/config';
import { data } from 'cypress/types/jquery';
import React, { useEffect, useState } from 'react';

const useGetEventsByUserId = (userId:number) => {
  const [data, setData] = useState<IEvent[]>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<any>();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const {data} = await axiosInstance.get(`${baseUrl}/events/promoter/${userId}`);
       setData(data.data)
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData()
  },[]);
  return {data, error, loading}
};

export default useGetEventsByUserId;
