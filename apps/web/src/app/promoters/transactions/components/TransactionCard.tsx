'use client';
import { FaSearch } from 'react-icons/fa';
import { Button, Table } from 'flowbite-react';
import { useState } from 'react';
import { ITransaction } from '@/typeweb/transaction.type';
import ModalProofOfPayment from './ModalProofOfPayment';
import ModalDecline from './ModalDecline';
import ModalAccept from './ModalAccept';
import useGetTransactionByUserId from '@/hooks/transactions/useGetTransactionByUserId';
import { useAppSelector } from '@/lib/hooks';

const TransactionsCard = () => {
  const selector = useAppSelector((state) => state.user.dataUser);
  let { data, refreshData } = useGetTransactionByUserId(selector.id || 0);
  const [modalDecline, setModalDecline] = useState(false);
  const [modalAccept, setModalAccept] = useState(false);
  const [modalProof, setModalProof] = useState(false);
  const [selectedTransactionId, setSelectedTransactionId] = useState(null);
  console.log(data);
  

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
              {data.map((transaction: ITransaction, index: number) => (
                <Table.Row
                  key={index}
                  className="bg-white dark:border-gray-700 dark:bg-gray-800"
                >
                  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    {index + 1}
                  </Table.Cell>
                  <Table.Cell>{transaction.user?.firstName}</Table.Cell>
                  <Table.Cell>{transaction.event?.title}</Table.Cell>
                  <Table.Cell>{transaction?.qty}</Table.Cell>
                  <Table.Cell>{transaction?.total}</Table.Cell>
                  <Table.Cell>{transaction?.status?.title}</Table.Cell>
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
