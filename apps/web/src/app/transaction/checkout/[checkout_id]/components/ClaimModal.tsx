'use client';

// components/ClaimModal.tsx
import { useState, FC } from 'react';

interface ClaimModalProps {
  onClose: () => void;
}

const ClaimModal: FC<ClaimModalProps> = ({ onClose }) => {
  const [voucherCode, setVoucherCode] = useState('');

  const handleClaim = () => {
    // Implement your logic for claiming the voucher
    // You can use the voucherCode state here
    // For simplicity, just close the modal in this example
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center">
      <div className="bg-black bg-opacity-40 absolute inset-0" onClick={onClose}></div>
      <div className="bg-white p-4 rounded-md z-10">
        <h2 className="text-lg font-bold mb-4">Claim Your Voucher</h2>
        <p className="mb-2">Enter your voucher code:</p>
        <input
          type="text"
          value={voucherCode}
          onChange={(e) => setVoucherCode(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md mb-4"
        />
        <button
          onClick={handleClaim}
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Claim Voucher
        </button>
      </div>
    </div>
  );
};

export default ClaimModal;
