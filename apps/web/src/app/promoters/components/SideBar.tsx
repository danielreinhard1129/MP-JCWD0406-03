'use client';
import React from 'react';
import { RxDashboard } from 'react-icons/rx';
import DropdownProfile from '@/components/DropdownProfile';
import { RiFileList3Line } from 'react-icons/ri';
import Link from 'next/link';
import { FaCartShopping } from 'react-icons/fa6';

const SideBar = ({ navigateNav, setNavigateNav }: any) => {
  const content = <p>Dashboard</p>;
  return (
    <nav className="bg-white  border-2 max-lg:flex justify-between sticky top-0 md:h-screen md:pb-32 z-50">
      <h1 className="text-4xl px-4 font-extrabold text-blue-500 mt-6 mb-4">
        K
      </h1>
      <div className="flex md:flex-col  justify-between md:h-full ">
        <ul className="md:h-[30%]  md:flex md:flex-col justify-evenly">
          <Link href={'/promoters'}>
            <li
              className={`text-4xl hover:bg-blue-500 hover:text-white px-4 py-2 cursor-pointer ${
                navigateNav === 1 && 'bg-blue-500 text-white'
              }`}
            >
              <RxDashboard />
            </li>
          </Link>
          <Link href={'/promoters/manage-event'}>
            <li
              className={`text-4xl hover:bg-blue-500 hover:text-white px-4 py-2 cursor-pointer ${
                navigateNav === 2 && 'bg-blue-500 text-white'
              }`}
            >
              <RiFileList3Line />
            </li>
          </Link>
          <Link href={'/promoters/transactions'}>
            <li
              className={`text-4xl hover:bg-blue-500 hover:text-white px-4 py-2 cursor-pointer ${
                navigateNav === 2 && 'bg-blue-500 text-white'
              }`}
            >
              <FaCartShopping />
            </li>
          </Link>
        </ul>
        <div className="px-4">
          <DropdownProfile />
        </div>
      </div>
    </nav>
  );
};

export default SideBar;
