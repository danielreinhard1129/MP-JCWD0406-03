'use client';

import { useState, useEffect } from 'react';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      searchTerm;
    }, 800);

    return () => clearTimeout(delayDebounce);
  }, [searchTerm]);

  return (
    <div className="mt-[-40px] mx-auto">
      <div className="px-4 sm:px-6 lg:px-16">
        <input
          type="text"
          className="w-full p-4 text-xl rounded-md border-2 border-gray-200"
          placeholder="Search for events, artists, or locations"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
    </div>
  );
};

export default SearchBar;
