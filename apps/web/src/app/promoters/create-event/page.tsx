import { IoArrowBack } from 'react-icons/io5';
import React from 'react';
import EventForm from './components/EventForm';

const CreateEvent = () => {
  return (
    <>
      <section className="bg-primary-50 bg-dotted-pattern bg-cover bg-center py-5 md:py-10">
        <EventForm />
      </section>
    </>
  );
};

export default CreateEvent;
