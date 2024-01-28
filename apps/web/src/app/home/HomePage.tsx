'use client';
import React, { useEffect, useState } from 'react';
import HeaderBanner from './components/HeaderBanner';
import UpcomingEvents from './components/UpcomingEvents';
import CategoryItem from './components/CategoryItem';
import SearchBar from './components/SearchBar';
import HotOffers from './components/HotOffers';
import { CustomerGuard } from '@/helper/HOC/CustomerGuard';
import { PromoterGuard } from '@/helper/HOC/AdminGuard';
import { event } from 'cypress/types/jquery';
import { eventList } from './api/api';

const HomePage = () => {
  const [events, setEvents] = useState<Event[]>([]);

  const getEvents = async () => {
    try {
      const response = await eventList({ category: '' });
      setEvents(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getEvents();
  }, []);
  return (
    <div>
      <HeaderBanner />
      {/* <SearchBar event={events} /> */}
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
