'use client';
import React from 'react';
import HeaderBanner from './components/HeaderBanner';
import UpcomingEvents from './components/UpcomingEvents';
import CategoryItem from './components/CategoryItem';
import SearchBar from './components/SearchBar';
import HotOffers from './components/HotOffers';
import { CustomerGuard } from '@/helper/HOC/CustomerGuard';
import { PromoterGuard } from '@/helper/HOC/AdminGuard';

const HomePage = () => {
  return (
    <div>
      <HeaderBanner />
      <SearchBar />
      <CategoryItem />
      <UpcomingEvents />
      {/* <CategoryMusicEvents/> */}
      <HotOffers />
      {/* <TopSelling /> */}
      {/* <BrowseArts /> */}
      {/* <BrowseConcerts /> */}
    </div>
  );
};

export default CustomerGuard(HomePage);
