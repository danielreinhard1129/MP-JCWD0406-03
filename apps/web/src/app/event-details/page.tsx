import React from 'react';
import Banner from './components/Banner';
import Location from './components/Location';
import EventInformation from './components/EventInformation';

const EventPage = () => {
  return (
    <div>
      <Banner />
      <Location />
      <EventInformation />
    </div>
  );
};

export default EventPage;
