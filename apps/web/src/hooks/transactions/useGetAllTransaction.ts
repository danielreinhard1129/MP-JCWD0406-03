'use client';
import { axiosInstance } from '@/helper/axios';
import { ITransaction } from '@/typeweb/transaction.type';
import { baseUrl } from '@/utils/config';
import { useEffect, useState } from 'react';

const useGetAllTransaction = ():any=> {
  const [data, setData] = useState<ITransaction[]>();
  
  useEffect(() => {
    getTransaction()
  }, []);
  const getTransaction = async() => {
    try {
        const {data} = await axiosInstance.get(baseUrl + '/transaction')
        setData(data.data )
    } catch (error) {
        console.log(error);
    }
  }
  const refreshData = () => {
    getTransaction();
  };
  return {data, refreshData }
};

export default useGetAllTransaction;
