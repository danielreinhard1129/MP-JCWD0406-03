'use client';

import { ModalAction } from "@/lib/features/userSlice";
import { useAppDispatch } from "@/lib/hooks";


const Navbar = () => {
    const dispatch = useAppDispatch()

  return (
    <section>
      <nav className="flex justify-between w-full p-5 shadow-md">
        <h1 className="font-bold text-2xl font-sans text-blue-500">
          Karcis.Com
        </h1>
        <ul className="flex justify-evenly p-2">
          <li>
            <button className="mr-8 bg-white text-black border-2 font-medium border-gray-400 hover:bg-blue-600 hover:text-white px-4 py-1 rounded-lg">
              Log In
            </button>
          </li>
          <li>
            <button className="border-2 font-medium bg-blue-600 text-white px-4 py-1 rounded-lg" onClick={() => dispatch(ModalAction(true))}>
              Sign Up
            </button>
          </li>
        </ul>
      </nav>
    </section>
  );
};

export default Navbar;
