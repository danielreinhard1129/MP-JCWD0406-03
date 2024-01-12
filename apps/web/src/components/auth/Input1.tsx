import React from 'react';

const Input1 = ({setNext}:any) => {
  return (
    <section className='m-10 text-center'>
      <div className="mb-5 flex ">
        <div className="mr-6">
          <label
            htmlFor="fristname"
            className="block mb-2 text-start text-sm font-medium text-gray-900 dark:text-white"
          >
            FirstName
          </label>
          <input
            type="text"
            id="fristname"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="text..."
            required
          />
        </div>
        <div>
          <label
            htmlFor="lastname"
            className="block mb-2 text-sm font-medium text-start  text-gray-900 dark:text-white"
          >
            LastName
          </label>
          <input
            type="text"
            id="lastname"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="text..."
            required
          />
        </div>
      </div>
      <div className="mb-5">
        <label
          htmlFor="phonenumber"
          className="block mb-2 text-left text-sm font-medium text-gray-900 dark:text-white"
        >
          phone number
        </label>
        <input
          type="number"
          id="phonenumber"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
          required
          placeholder="+62xxx"
        />
      </div>
      <div className="mb-5">
        <label
          htmlFor="email"
          className="block mb-2 text-start text-sm font-medium text-gray-900 dark:text-white"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          placeholder="name@email.com"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          required
        />
      </div>
      <div className="text-start ">
        <p className="hover:text-blue-500 hover:underline cursor-pointer">
          Have Account?
        </p>
      </div>
      <button
        className="text-white bg-[#4f4cee] hover:bg-blue-800 focus:ring-4 focus:outline-none  focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        onClick={() => setNext('input2')}
      >
        Continue
      </button>
    </section>
  );
};

export default Input1;
