'use client';
import React, { useState } from 'react';

import { useAppSelector } from '@/lib/hooks';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import NavbarAdmin from './NavbarAdmin';
import Dasboard from './Dasboard';
import ManageEvent from './ManageEvent';



const AdminPage = () => {
  const [navigateNav, setNavigateNav] = useState(1)
  const selector = useAppSelector((state) => state.user.dataUser);
  const router = useRouter();
  useEffect(() => {
    authen();
  }, [selector]);
  const authen = () => {
    if (selector.role?.name === 'customer') return router.push('/');
    if (!selector.role?.name) return router.push('/');
  };
  return (
    <section>
      {selector.id ? (
        <div className='flex'>
          <NavbarAdmin navigateNav={navigateNav} setNavigateNav={setNavigateNav}/>
          { navigateNav === 1 &&
          <Dasboard />
          }{
            navigateNav === 2 &&
          <ManageEvent />
          }
        </div>
      ) : (
        <div></div>
      )}
    </section>
  );
};

export default AdminPage;
