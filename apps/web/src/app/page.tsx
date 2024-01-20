
'use client';

import { useAppSelector } from '@/lib/hooks';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import HomePage from './home/page';

function Home() {
  const selector = useAppSelector((state) => state.user.dataUser);
  const router = useRouter();
  const role = selector?.data.role?.name;
  useEffect(() => {
    authen();
  }, []);
  const authen = () => {
    if (role === 'promoter') router.push('/promoters');
  };
  return (
    <main>
      <HomePage />
    </main>
  );
}

export default Home;
