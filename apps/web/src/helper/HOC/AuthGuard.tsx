import { useAppSelector } from '@/lib/hooks';
import { redirect } from 'next/navigation';
import React, { useEffect } from 'react';

export const AuthGuard = (Component: any) => {
  return function IsCustomer(props: any) {
    const user = useAppSelector((state) => state.user.dataUser);
    useEffect(() => {
      if (!user.id) {
        return redirect('/');
      }
    }, [user]);
    return <Component {...props} />;
  };
};
