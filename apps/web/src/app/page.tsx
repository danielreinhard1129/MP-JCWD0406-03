'use client';
import { useAppSelector } from '@/lib/hooks';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import HomePage from './home/page';

function Home() {
  const role = useAppSelector((state) => state.user.dataUser.role)
  const router = useRouter()
  console.log(role);
  
  useEffect(() => {
    if(role?.name === "promoter"){
      router.push("/promoters")
    }
  },[role]);
  return <main>
    <HomePage />
  </main>;
}

export default Home;
