'use client';

import { baseUrl } from '@/utils/config';
import axios from 'axios';
import { useParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import Select from 'react-select';

const SearchBar = ({ event }: any) => {
  const router = useRouter();
  const params = useParams();
  const [events, setEvents] = useState([]);
  const getEvent = async () => {
    try {
      const reponse = await axios.get(`${baseUrl}/events/debounce`);
      setEvents(reponse.data.data);
      console.log('dataaa', reponse.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getEvent();
  }, []);

  const options = event.map((event: any) => {
    return { value: event.id, label: event.title };
  });

  const handleChange = (selectedOption: any) => {
    if (selectedOption && selectedOption.value) {
      router.push(`/event-detail/${selectedOption.value}`);
    }
  };

  return (
    <div className="mt-[-40px] mx-auto">
      <div className="px-4 sm:px-6 lg:px-16">
        <Select
          options={options}
          isClearable={true}
          isSearchable={true}
          placeholder="Search for events"
          onChange={handleChange}
          styles={{
            control: (provided) => ({
              ...provided,
              border: '2px solid #CBD5E0',
              borderRadius: '0.375rem',
            }),
            input: (provided) => ({
              ...provided,
              fontSize: '1.25rem',
            }),
            placeholder: (provided) => ({
              ...provided,
              fontSize: '1.25rem',
            }),
          }}
        />
      </div>
    </div>
  );
};

export default SearchBar;
