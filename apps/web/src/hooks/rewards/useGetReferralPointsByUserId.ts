'use client';
import { axiosInstance } from '@/helper/axios';
import { useAppSelector } from '@/lib/hooks';
import { IPointsReferral } from '@/typeweb/reward.type';
import { baseUrl } from '@/utils/config';
import { useEffect, useState } from 'react';

const useGetReferralPointsByUserId = (): IPointsReferral => {
  const userId = useAppSelector((state) => state.user.dataUser.id);
  const [data, setData] = useState<IPointsReferral>();

  useEffect(() => {
    getpointsReferral();
  }, []);
  const getpointsReferral = async () => {
    try {
      const { data } = await axiosInstance.get(baseUrl + `/reward/${userId}`);
      setData(data.data);
    } catch (error) {
      console.log(error);
    }
  };
  return data as IPointsReferral;
};

export default useGetReferralPointsByUserId;
