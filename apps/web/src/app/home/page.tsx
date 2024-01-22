import React from 'react';
import HeaderBanner from './components/HeaderBanner';
import UpcomingEvents from './components/UpcomingEvents';
import CategoryItem from './components/CategoryItem';
import SearchBar from './components/SearchBar';
import HotOffers from './components/HotOffers';

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

export default HomePage;
