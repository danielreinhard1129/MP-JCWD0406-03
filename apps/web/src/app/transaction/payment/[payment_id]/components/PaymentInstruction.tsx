import React, { useState } from 'react';

const PaymentInstruction = ({ transaction }: any) => {
  const [image, setImage] = useState('');
  const instructions = [
    'Go to your OVO application.',
    'Select the Pay Bills option.',
    "Choose the 'Other' section.",
    'Enter the payment code provided and check the details.',
    'Follow the instructions to complete the payment.',
  ];
  const handleSendImage = (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault()
      const formData = new FormData();
      formData.append("image",image)
      console.log(image);
      
      
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="border p-4 rounded-md">
      <h2 className="text-lg font-bold mb-4">Payment Method: OVO</h2>
      <ol className="list-decimal pl-5">
        {instructions.map((instruction, index) => (
          <li key={index} className="mb-1">
            {instruction}
          </li>
        ))}
      </ol>
      <form className="relative" onSubmit={handleSendImage}>
        <input type="file" onChange={(value) => setImage(value.target.value)} />
        <button className="mt-4 px-6 py-2 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded">
          Send Bukti Pembayaran
        </button>
      </form>
    </div>
  );
};

export default PaymentInstruction;
