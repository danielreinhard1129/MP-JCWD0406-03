'use client';

import { useAppSelector } from '@/lib/hooks';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const Promoters = () => {
  const selector = useAppSelector((state) => state.user.dataUser);
  const router = useRouter();
  useEffect(() => {
    authen();
  }, []);
  const authen = () => {
    if (selector?.role.name === 'customer') return router.push('/');
    if (!selector?.role.name) return router.push('/promoters/join');
  };
  return <section>{selector.role.name !== 'customer' && <div>Admin</div>}</section>;
};

export default Promoters;
