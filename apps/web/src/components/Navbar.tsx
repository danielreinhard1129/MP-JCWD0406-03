'use client';

import {
<<<<<<< HEAD
=======
  AuthAction,
>>>>>>> 4ea1091d4d5ae3582affc73549e522ebbe582b92
  ModalLoginAction,
  ModalRegisterAction,
} from '@/lib/features/userSlice';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import DropdownProfile from './DropdownProfile';
import ModalSignin from '../app/components/login/ModalSignin';
import ModalSignup from '../app/components/register/ModalSignup';
import Link from 'next/link';
import ModalForgotPassword from '@/app/components/forgotPassword/ModalForgotPassword';
<<<<<<< HEAD
=======
import { useEffect } from 'react';
import { useKeepLogin } from '@/hooks/auth/useKeepLogin';
>>>>>>> 4ea1091d4d5ae3582affc73549e522ebbe582b92

const Navbar = () => {
  const dispatch = useAppDispatch();
  const login = useAppSelector((state) => state.user.dataUser);
<<<<<<< HEAD

=======
  const token = typeof window !== "undefined" ? JSON.parse(localStorage.getItem('token') as string) : null;

  useEffect(() => {
    if (token) {
      handleSesion(token);
    }
  }, [token]);

  const handleSesion = async (token: string) => {
    try {
      const { data } = await useKeepLogin(token);
      dispatch(AuthAction(data));
    } catch (error) {
      console.log(error);
    }
  };
>>>>>>> 4ea1091d4d5ae3582affc73549e522ebbe582b92
  return (
    <section>
      <nav className="flex justify-between w-full p-5 shadow-md">
        <Link href={'/'}>
          <h1 className="font-bold text-2xl font-sans text-blue-500">
            Karcis.Com
          </h1>
        </Link>
<<<<<<< HEAD
        {!login?.data ? (
=======
        {!login.id ? (
>>>>>>> 4ea1091d4d5ae3582affc73549e522ebbe582b92
          <ul className="flex justify-evenly p-2">
            <li>
              <button
                className="mr-8 bg-white text-black border-2 font-medium border-gray-400 hover:bg-blue-600 hover:text-white px-4 py-1 rounded-lg"
                onClick={() => dispatch(ModalLoginAction(true))}
              >
                Log In
              </button>
            </li>
            <li>
              <button
                className="border-2 font-medium bg-blue-600 text-white px-4 py-1 rounded-lg"
                onClick={() => dispatch(ModalRegisterAction(true))}
              >
                Sign Up
              </button>
            </li>
          </ul>
        ) : (
          <DropdownProfile />
        )}
        <ModalSignin />
        <ModalSignup />
        <ModalForgotPassword />
      </nav>
    </section>
  );
};

export default Navbar;
