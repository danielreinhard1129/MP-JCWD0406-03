<<<<<<< HEAD
'use client';

import { useAppSelector } from '@/lib/hooks';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

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
=======
function Home() {
>>>>>>> 4ea1091d4d5ae3582affc73549e522ebbe582b92
  return <main></main>;
}

export default Home;
