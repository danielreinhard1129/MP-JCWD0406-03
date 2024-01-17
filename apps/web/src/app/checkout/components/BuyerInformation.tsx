import React from 'react';

const BuyerInformation = () => {
  return (
    <div className="border p-4 rounded-md">
      <h2 className="text-lg font-bold mb-4">Buyer Contact Information</h2>
      <form>
        <div className="mb-3">
          <label
            htmlFor="firstName"
            className="block text-sm font-medium text-gray-700"
          >
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            className="mt-1 block w-full rounded-md border-gray-300"
            placeholder="Agnya"
          />
        </div>
        <div className="mb-3">
          <label
            htmlFor="lastName"
            className="block text-sm font-medium text-gray-700"
          >
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            className="mt-1 block w-full rounded-md border-gray-300"
            placeholder="Salsabila"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              className="mt-1 block w-full rounded-md border-gray-300"
              placeholder="geasalsabila21@gmail.com"
            />
          </div>
          <div>
            <label
              htmlFor="confirmEmail"
              className="block text-sm font-medium text-gray-700"
            >
              Confirm Email Address
            </label>
            <input
              type="email"
              id="confirmEmail"
              className="mt-1 block w-full rounded-md border-gray-300"
              placeholder="geasalsabila21@gmail.com"
            />
          </div>
        </div>
        <div className="mb-6">
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-gray-700"
          >
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            className="mt-1 block w-full rounded-md border-gray-300"
            placeholder="0811111222"
          />
        </div>
        <div className="flex justify-end">
          <button
            type="submit"
            className="px-6 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700"
          >
            Continue to Payment
          </button>
        </div>
      </form>
    </div>
  );
};

export default BuyerInformation;
