import React from 'react';
import HeaderBanner from './components/HeaderBanner';
import UpcomingEvents from './components/UpcomingEvents';
import CategoryItem from './components/CategoryItem';
import HotOffers from './components/HotOffers';
import TopSelling from './components/TopSelling';
import BrowseArts from './components/BrowseArts';
import BrowseConcerts from './components/BrowseConcerts';
import SearchBar from './components/SearchBar';

const HomePage = () => {
  return (
    <div>
      <HeaderBanner />
      <SearchBar />
      <CategoryItem />
      <UpcomingEvents />
      <HotOffers />
      <TopSelling />
      <BrowseArts />
      <BrowseConcerts />
    </div>
  );
};

export default HomePage;
