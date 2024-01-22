'use client';

import { AuthAction, ModalRegisterAction } from '@/lib/features/userSlice';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import DropdownProfile from './DropdownProfile';
import ModalSignin from '../app/components/login/ModalSignin';
import ModalSignup from '../app/components/register/ModalSignup';
import Link from 'next/link';
import ModalForgotPassword from '@/app/components/forgotPassword/ModalForgotPassword';
import { useEffect } from 'react';
import { useKeepLogin } from '@/hooks/auth/useKeepLogin';

const Navbar = () => {
  const dispatch = useAppDispatch();
  const selector = useAppSelector((state) => state.user.dataUser);

  useEffect(() => {
    handleSesion();
  }, []);
  const handleSesion = async () => {
    try {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const { data } = await useKeepLogin();
      dispatch(AuthAction(data));
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <section>
      {selector.role.name !== 'promoter' ? (
        <nav className="flex justify-between w-full p-5 shadow-md sticky top-0 bg-white ">
          <Link href={'/'}>
            <h1 className="font-bold text-2xl font-sans text-blue-500">
              Karcis.Com
            </h1>
          </Link>
          {!selector.id ? (
            <ul className="flex justify-evenly p-2">
              <li>
                <Link href={'/promoters/join'}>
                  <button className="mr-8 bg-white text-black border-2 font-medium border-gray-400 hover:bg-blue-600 hover:text-white px-4 py-1 rounded-lg">
                    promoter
                  </button>
                </Link>
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
      ) : (
        <div></div>
      )}
    </section>
  );
};

export default Navbar;
