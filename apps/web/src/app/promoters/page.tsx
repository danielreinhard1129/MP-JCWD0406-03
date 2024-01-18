'use client';

import { useAppSelector } from '@/lib/hooks';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const Promoters = () => {
  const selector = useAppSelector((state) => state.user.dataUser);
  const router = useRouter();
  const role = selector?.data.role?.name;
  useEffect(() => {
    authen();
  }, []);
  const authen = () => {
    if (role === 'customer') return router.push('/');
    if (!selector?.data) return router.push('/promoters/join');
  };
  return <section>{role === 'customer' && <div>Admin</div>}</section>;
};

export default Promoters;
