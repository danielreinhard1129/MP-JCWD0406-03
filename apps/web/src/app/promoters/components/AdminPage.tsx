'use client';
import React, { useState } from 'react';
import NavbarAdmin from './NavbarAdmin';
import Dasboard from './Dasboard';
import ManageEvent from './ManageEvent';
import { PromoterGuard } from '@/helper/HOC/AdminGuard';



const AdminPage = () => {
  const [navigateNav, setNavigateNav] = useState(1)
  return (
    <section>
        <div className='flex'>
          <NavbarAdmin navigateNav={navigateNav} setNavigateNav={setNavigateNav}/>
          { navigateNav === 1 &&
          <Dasboard />
          }{
            navigateNav === 2 &&
          <ManageEvent />
          }
        </div>
    </section>
  );
};

export default PromoterGuard(AdminPage);
