'use client';

import { useDebounce } from '@/hooks/useDebounce';
import { ChangeEvent, useEffect, useState } from 'react';

const SearchBar: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');

  const debouncedSearchTerm = useDebounce(searchTerm, 800);

  useEffect(() => {
    console.log('Searching for:', debouncedSearchTerm);
  }, [debouncedSearchTerm]);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="mt-[-40px] mx-auto">
      <div className="px-4 sm:px-6 lg:px-16">
        <input
          type="text"
          className="w-full p-4 text-xl rounded-md border-2 border-gray-200"
          placeholder="Search for events, artists, or locations"
          onChange={handleInputChange}
        />
      </div>
    </div>
  );
};

export default SearchBar;
