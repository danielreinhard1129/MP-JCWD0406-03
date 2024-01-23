'use client';

import { PromoterGuard } from '@/helper/HOC/AdminGuard';
import { baseUrl } from '@/utils/config';
import axios, { AxiosError } from 'axios';
import { TextInput } from 'flowbite-react';
import { useFormik } from 'formik';

const EventForm = () => {
  const formik = useFormik({
    initialValues: {
      tittle: '',
      category: '',
      description: '',
      location: '',
      banner: '',
      price: '',
      dateTime: '',
      availableSeat: '',
    },
    onSubmit: async (values) => {
      try {
        const {
          tittle,
          category,
          description,
          location,
          price,
          dateTime,
          availableSeat,
          banner,
        } = values;
        await axios.post(`${baseUrl}/events/`, {
          tittle: values.tittle,
          category: values.category,
          location: values.location,
          description: values.description,
          price: values.price,
          dateTime: new Date(),
          availableSeat: values.availableSeat,
          banner: values.banner,
        });
        alert('create event succes');
      } catch (error) {
        if (error instanceof AxiosError) {
          const errorMsg = error.response?.data || error.message;
          alert(errorMsg);
        }
      }
    },
  });
  const handleClick = () => {};
  return (
    <div>
      <div className="max-w-4xl mx-auto w-screen flex flex-col items-center justify-center">
        <header className="my-6">
          <h1 className="text-center font-extrabold text-sky-700 tracking-tight text-6xl">
            Create Event
          </h1>
        </header>

        <form
          onSubmit={formik.handleSubmit}
          className="w-full grid gap-4 sm:gap-6 md:gap-8 px-4 sm:px-6 lg:px-8"
        >
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <label
              htmlFor="name"
              className="text-left font-bold text-gray-700 mb-2 sm:w-32 sm:text-right sm:pr-4"
            >
              Event Name
            </label>
            <div className="flex-1">
              <TextInput
                placeholder="Event Name"
                name="tittle"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.tittle}
              />
            </div>
          </div>
          <div className="flex justify-between items-center">
            <label
              htmlFor="category"
              className="w-32 text-right pr-4 font-bold text-gray-700"
            >
              Category
            </label>
            <div className="flex-1">
              <TextInput
                placeholder="Event Name"
                name="category"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.category}
              />
            </div>
          </div>
          <div className="flex justify-between items-center">
            <label
              htmlFor="category"
              className="w-32 text-right pr-4 font-bold text-gray-700"
            >
              location
            </label>
            <div className="flex-1">
              <TextInput
                placeholder="Event Name"
                name="location"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.location}
              />
            </div>
          </div>
          <div className="flex justify-between items-center">
            <label
              htmlFor="description"
              className="self-start w-32 text-right mt-2 pr-4 font-bold text-gray-700"
            >
              Description
            </label>
            <div className="flex-1">
              <TextInput
                placeholder="Description"
                name="description"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.description}
              />
            </div>
          </div>

          <div className="flex justify-between items-center">
            <label
              htmlFor="price"
              className="w-32 text-right pr-4 font-bold text-gray-700"
            >
              Price
            </label>
            <div className="flex-1">
              <TextInput
                placeholder="Price"
                name="price"
                type="number"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.price}
              />
            </div>
          </div>
          <div className="flex justify-between items-center">
            <label
              htmlFor="Date"
              className="w-32 text-right pr-4 font-bold text-gray-700"
            >
              Date
            </label>
            <div className="flex-1">
              <TextInput
                placeholder="Event Name"
                name="dateTime"
                type="date"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.dateTime}
              />
            </div>
          </div>
          <div className="flex justify-between items-center">
            <label
              htmlFor="availableSeats"
              className="w-32 text-right pr-4 font-bold text-gray-700"
            >
              Available Seat
            </label>
            <div className="flex-1">
              <TextInput
                placeholder="Available Seat"
                name="availableSeat"
                type="number"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.availableSeat}
              />
            </div>
          </div>
          <div className="flex justify-between items-center">
            <label
              htmlFor="availableSeats"
              className="w-32 text-right pr-4 font-bold text-gray-700"
            >
              Banner
            </label>
            <div className="flex-1">
              <TextInput
                placeholder="Banner"
                name="banner"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.banner}
              />
            </div>
          </div>
          <div className="flex justify-end">
            <button
              className="ml-3 inline-flex justify-center py-2 px-4 sm:px-6 border border-transparent shadow-sm font-bold rounded-md text-white bg-sky-600 hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-600"
              type="submit"
            >
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PromoterGuard(EventForm);
