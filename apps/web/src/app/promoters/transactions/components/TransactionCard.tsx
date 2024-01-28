'use client';
import { FaSearch } from 'react-icons/fa';
import { Button, Modal, Table } from 'flowbite-react';
import { useState } from 'react';
import { HiOutlineExclamationCircle } from 'react-icons/hi';
import useGetAllTransaction from '@/hooks/transactions/useGetAllTransaction';
import { ITransaction } from '@/typeweb/transaction.type';
import useGetEventById from '@/hooks/events/useGetEventById';
import ModalProofOfPayment from './ModalProofOfPayment';
import { baseUrl } from '@/utils/config';
import { axiosInstance } from '@/helper/axios';
import ModalDecline from './ModalDecline';
import ModalAccept from './ModalAccept';

const TransactionsCard = () => {
  //   {
  //     id: 52,
  //     customer: 'Anggi',
  //     event: 'Taylor Swift Concert',
  //     quantity: 1,
  //     total: '$422',
  //     status: 'Transaction Success',
  //   },
  //   {
  //     id: 53,
  //     customer: 'Budi',
  //     event: 'Ed Sheeran Concert',
  //     quantity: 2,
  //     total: '$800',
  //     status: 'Waiting Admin Confirmation',
  //   },
  //   {
  //     id: 54,
  //     customer: 'Citra',
  //     event: 'Coldplay Concert',
  //     quantity: 1,
  //     total: '$399',
  //     status: 'Waiting Payment',
  //   },
  //   {
  //     id: 55,
  //     customer: 'Dewi',
  //     event: 'The Weeknd Concert',
  //     quantity: 1,
  //     total: '$499',
  //     status: 'Cancelled Transaction',
  //   },
  //   {
  //     id: 56,
  //     customer: 'Eko',
  //     event: 'K-Pop Festival',
  //     quantity: 3,
  //     total: '$1200',
  //     status: 'Expired Transaction',
  //   },
  //   {
  //     id: 57,
  //     customer: 'Fina',
  //     event: 'Rock in Rio',
  //     quantity: 2,
  //     total: '$850',
  //     status: 'Rejected Transaction',
  //   },
  // ]);

  let { data, refreshData } = useGetAllTransaction();
  const [modalDecline, setModalDecline] = useState(false);
  const [modalAccept, setModalAccept] = useState(false);
  const [modalProof, setModalProof] = useState(false);
  const [selectedTransactionId, setSelectedTransactionId] = useState(null);

  const handleAccept = (transactionId: any) => {
    setSelectedTransactionId(transactionId);
    setModalAccept(true);
  };
  const handleDecline = (transactionId: any) => {
    setSelectedTransactionId(transactionId);
    setModalDecline(true);
  };

  const shouldShowActions = (statusId: number) => {
    return [1, 2].includes(statusId);
  };

  return (
    <div className="flex w-full ">
      <div className="bg-white p-20 w-full">
        <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-6 leading-tight">
          Transactions
        </h1>
        <div className="mt-4 flex mb-10">
          <div className="flex-1">
            <label htmlFor="search-transactions" className="sr-only">
              Search transactions
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaSearch
                  className="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </div>
              <input
                type="text"
                name="search-transactions"
                id="search-transactions"
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="Search for transactions"
              />
            </div>
          </div>
        </div>

        <div className="overflow-x-auto">
          <Table hoverable>
            <Table.Head>
              <Table.HeadCell>ID</Table.HeadCell>
              <Table.HeadCell>Customer</Table.HeadCell>
              <Table.HeadCell>Event</Table.HeadCell>
              <Table.HeadCell>Quantity</Table.HeadCell>
              <Table.HeadCell>Total</Table.HeadCell>
              <Table.HeadCell>Status</Table.HeadCell>
              <Table.HeadCell>
                <span className="sr-only">Action</span>
              </Table.HeadCell>
            </Table.Head>
            <Table.Body className="divide-y">
              {data?.map((transaction: ITransaction, index: number) => (
                <Table.Row
                  key={index}
                  className="bg-white dark:border-gray-700 dark:bg-gray-800"
                >
                  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    {index + 1}
                  </Table.Cell>
                  <Table.Cell>{transaction.user.firstName}</Table.Cell>
                  <Table.Cell>{transaction.event.title}</Table.Cell>
                  <Table.Cell>{transaction.qty}</Table.Cell>
                  <Table.Cell>{transaction.total}</Table.Cell>
                  <Table.Cell>{transaction.status.title}</Table.Cell>
                  <Table.Cell className="flex justify-between">
                    <Button
                      className="font-medium hover:underline "
                      onClick={() => setModalProof(true)}
                    >
                      View
                    </Button>
                    {shouldShowActions(transaction?.statusId as number) && (
                      <>
                        <Button
                          className="font-medium hover:underline "
                          onClick={() => handleAccept(transaction.id)}
                        >
                          Accept
                        </Button>

                        <Button
                          className="font-medium hover:underline "
                          onClick={() => handleDecline(transaction.id)}
                        >
                          Decline
                        </Button>
                      </>
                    )}
                  </Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table>
        </div>
      </div>
      <ModalProofOfPayment
        openModal={modalProof}
        setOpenModal={setModalProof}
      />
      <ModalAccept
        openModal={modalAccept}
        setOpenModal={setModalAccept}
        selectedTransactionId={selectedTransactionId}
        refreshData={refreshData}
      />
      <ModalDecline
        openModal={modalDecline}
        setOpenModal={setModalDecline}
        selectedTransactionId={selectedTransactionId}
        refreshData={refreshData}
      />
    </div>
  );
};

export default TransactionsCard;
