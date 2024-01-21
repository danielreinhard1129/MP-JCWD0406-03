import React from 'react';
import { MdDashboard } from "react-icons/md";
import { BsBarChartLine } from 'react-icons/bs';
import DropdownProfile from '@/components/DropdownProfile';
import { RiFileList3Line } from "react-icons/ri";

const NavbarAdmin = () => {
  return (
    <nav className="bg-white  border-2  sticky top-0 h-screen pb-32">
      <h1 className="text-4xl px-4 font-extrabold text-blue-500 mt-6 mb-4">K</h1>
      <div className=' flex flex-col justify-between h-full'>
        <ul className="h-[30%] flex flex-col justify-evenly">
          <li className="text-4xl hover:bg-blue-100 px-4 py-2 cursor-pointer">
            <MdDashboard />
          </li>
          <li className="text-4xl hover:bg-blue-100 px-4 py-2 cursor-pointer">
            <RiFileList3Line />
          </li>
          <li className="text-4xl hover:bg-blue-100 px-4 py-2 cursor-pointer">
            <BsBarChartLine />
          </li>
        </ul>
        <div className='px-4'>
        <DropdownProfile />
        </div>
      </div>
    </nav>
  );
};

export default NavbarAdmin;
