'use client';
import React from 'react';

import { useAppSelector } from '@/lib/hooks';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import NavbarAdmin from './NavbarAdmin';
import Dasboard from './Dasboard';



const AdminPage = () => {
  const selector = useAppSelector((state) => state.user.dataUser);
  const router = useRouter();
  useEffect(() => {
    authen();
  }, [selector]);
  const authen = () => {
    if (selector.role?.name === 'customer') return router.push('/');
    if (!selector.role?.name) return router.push('/promoters/join');
  };
  return (
    <section>
      {selector.id ? (
        <div className='flex'>
          <NavbarAdmin />

          <Dasboard />
        </div>
      ) : (
        <div></div>
      )}
    </section>
  );
};

export default AdminPage;
