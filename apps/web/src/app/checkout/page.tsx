import React from 'react';
import BuyerInformation from './components/BuyerInformation';
import BuyerDetails from './components/BuyerDetails';

const ChekoutPage = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <BuyerInformation />
        <BuyerDetails />
      </div>
    </div>
  );
};

export default ChekoutPage;
