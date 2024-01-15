// components/CategoryItem.tsx
import React from 'react';
import { FaMusic, FaTheaterMasks, FaBriefcase } from 'react-icons/fa';
import { RiMovieLine } from 'react-icons/ri';
import { GiVideoConference } from 'react-icons/gi';

type CategoryType = {
  id: number;
  name: string;
  icon: React.ReactNode;
};

const categories: CategoryType[] = [
  { id: 1, name: 'Concert', icon: <FaMusic /> },
  {
    id: 2,
    name: 'Arts',
    icon: <FaTheaterMasks />,
  },
  { id: 3, name: 'Movie', icon: <RiMovieLine /> },
  {
    id: 4,
    name: 'Conference',
    icon: <GiVideoConference />,
  },
  {
    id: 5,
    name: 'International',
    icon: <FaBriefcase />,
  },
];

const CategoryItem = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="flex overflow-x-auto py-2">
        {categories.map((category) => (
          <div
            key={category.id}
            className="flex flex-col items-center justify-center text-center p-4 mx-2"
          >
            <div className="rounded-full p-7 bg-blue-100 inline-flex items-center justify-center">
              {category.icon}
            </div>
            <p className="mt-2 text-sm font-semibold">{category.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryItem;
