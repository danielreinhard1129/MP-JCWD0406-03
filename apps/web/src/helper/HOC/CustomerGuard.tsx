import { useAppSelector } from '@/lib/hooks';
import { Spinner } from 'flowbite-react';
import { redirect } from 'next/navigation';
import React from 'react';

export const CustomerGuard = (Component: any) => {
  return function IsCustomer(props: any) {
    const role = useAppSelector((state) => state.user.dataUser.role.name);
    if (role === 'promoter') {
      redirect('/promoters');
    } else {
      return <Component {...props} />;
    }
  };
};
