'use client';
import React from 'react';
import SideBar from '../components/SideBar';
import TransactionsCard from './components/TransactionCard';
import { PromoterGuard } from '@/helper/HOC/AdminGuard';

const TransactionPage = () => {
  return (
    <section className="flex">
      <SideBar />
      <TransactionsCard />
    </section>
  );
};

export default PromoterGuard(TransactionPage);
