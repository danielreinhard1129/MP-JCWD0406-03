import React from 'react';
import SideBar from '../components/SideBar';
import TransactionsCard from './components/TransactionCard';

const TransactionPage = () => {
  return (
    <section className='flex'>
      <SideBar />
      <TransactionsCard />
    </section>
  );
};

export default TransactionPage;
