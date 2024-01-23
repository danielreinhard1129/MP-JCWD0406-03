import React from 'react';
import { RxDashboard } from "react-icons/rx";
import DropdownProfile from '@/components/DropdownProfile';
import { RiFileList3Line } from "react-icons/ri";

const NavbarAdmin = ({navigateNav,setNavigateNav}:any) => {
  return (
    <nav className="bg-white  border-2  sticky top-0 h-screen pb-32">
      <h1 className="text-4xl px-4 font-extrabold text-blue-500 mt-6 mb-4">K</h1>
      <div className=' flex flex-col justify-between h-full'>
        <ul className="h-[30%] flex flex-col justify-evenly">
          <li className={`text-4xl hover:bg-blue-500 hover:text-white px-4 py-2 cursor-pointer ${navigateNav === 1 && "bg-blue-500 text-white"}`} onClick={() => setNavigateNav(1)}>
            <RxDashboard />
          </li>
          <li className={`text-4xl hover:bg-blue-500 hover:text-white px-4 py-2 cursor-pointer ${navigateNav === 2 && "bg-blue-500 text-white"}`} onClick={() => setNavigateNav(2)}>
            <RiFileList3Line />
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
