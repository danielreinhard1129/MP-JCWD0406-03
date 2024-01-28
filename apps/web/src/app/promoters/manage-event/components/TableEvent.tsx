'use client';
import React, { useEffect, useState } from 'react';
import { Spinner, Table } from 'flowbite-react';
import { axiosInstance } from '@/helper/axios';
import { baseUrl } from '@/utils/config';
import { IEvent } from '@/typeweb/event.type';
import useGetAllEvents from '@/hooks/events/useGetAllEvents';

const TableEvent = () => {
  const { data, error, loading } = useGetAllEvents();
  if (loading) {
    return (
      <div className="flex justify-center w-full">
        <Spinner
          
          aria-label="Extra large spinner example"
          size="xl"
        />
      </div>
    );
  }
  return (
    <div className="overflow-x-auto">
      <Table>
        <Table.Head>
          <Table.HeadCell>tittle</Table.HeadCell>
          <Table.HeadCell>Date</Table.HeadCell>
          <Table.HeadCell>Category</Table.HeadCell>
          <Table.HeadCell>Price</Table.HeadCell>
          <Table.HeadCell>
            <span className="sr-only">Edit</span>
          </Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {data?.map((value) => {
            return (
              <Table.Row
                className="bg-white dark:border-gray-700 dark:bg-gray-800"
                key={value.id}
              >
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  {value?.title}
                </Table.Cell>
                <Table.Cell>{value?.dateTime.slice(0,10)}</Table.Cell>
                <Table.Cell>{value?.category}</Table.Cell>
                <Table.Cell>{value?.price}</Table.Cell>
                <Table.Cell>
                  <a
                    href="#"
                    className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                  >
                    Edit
                  </a>
                </Table.Cell>
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table>
    </div>
  );
};

export default TableEvent;
