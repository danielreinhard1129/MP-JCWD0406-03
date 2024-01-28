'use client';

import { baseUrl } from '@/utils/config';
import axios from 'axios';
import { Badge, Button, Kbd } from 'flowbite-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { FaMoneyBillWave } from 'react-icons/fa6';
import { IoLocation } from 'react-icons/io5';
import { eventList } from '../home/api/api';
import HeaderDiscovery from './components/HeaderDiscovery';
import SearchDiscovery from './components/SearchDiscovery';
import CardEvent from './components/CardEvent';

const EventDistPage = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(4);
  const [totalPages, setTotalPages] = useState(0);
  const router = useRouter();

  const getEvents = async () => {
    try {
      const response = await eventList({ category: '' });
      setEvents(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getEvents();
  }, []);

  const handleCardClick = (eventId: string) => {
    router.push(`/event-detail/${eventId}`);
  };
  const handlePageChange = (newPage: number) => {
    setPage(newPage);
  };

  const handlePreviousClick = () => {
    setPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handleNextClick = () => {
    if (page < totalPages) {
      setPage((prevPage) => prevPage + 1);
    }
  };
  const getAllEvents = async () => {
    try {
      const response = await axios.get(
        `${baseUrl}/events/all-events?page=${page}&pageSize=${pageSize}`,
      );
      setEvents(response.data.data);
      setTotalPages(response.data.totalPages);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllEvents();
  }, [page, pageSize]);

  return (
    <section>
      <div className="max-w-7xl mx-auto">
        <div>
          <HeaderDiscovery />
        </div>
        <div>
          <SearchDiscovery event={events} />
        </div>

        <div>
          <CardEvent />
        </div>

        <div className="flex justify-center">
          <div className="pagination-controls flex gap-1  mt-6">
            <Button
              className="bg-[#d7d7d7] text-black font-bold"
              onClick={handlePreviousClick}
              disabled={page === 1}
            >
              Prev
            </Button>
            <Kbd className="current-page text-lg px-2 items-center">{page}</Kbd>
            <Button
              className="bg-[#d7d7d7] text-black font-bold"
              onClick={handleNextClick}
              disabled={page === totalPages}
            >
              Next
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventDistPage;
