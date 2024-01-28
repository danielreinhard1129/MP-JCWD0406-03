'use client';

import {
  AuthAction,
  ModalLoginAction,
  ModalRegisterAction,
} from '@/lib/features/userSlice';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import DropdownProfile from './DropdownProfile';
import ModalSignin from '../app/components/login/ModalSignin';
import ModalSignup from '../app/components/register/ModalSignup';
import Link from 'next/link';
import ModalForgotPassword from '@/app/components/forgotPassword/ModalForgotPassword';
import { useEffect, useState } from 'react';
import { useKeepLogin } from '@/hooks/auth/useKeepLogin';
import { Navbar, Spinner } from 'flowbite-react';

const NavbarHome = () => {
  const dispatch = useAppDispatch();
  const selector = useAppSelector((state) => state.user.dataUser);
  const [loading,setLoading] = useState(false)
  
  useEffect(() => {
    const token = JSON.parse(localStorage.getItem('token') as string);
    if(token){
      handleSesion();
    }
  }, []);
  const handleSesion = async () => {
    try {
      setLoading(true)
      const { data } = await useKeepLogin();
      dispatch(AuthAction(data));
    } catch (error) {
      console.log(error);
    }finally{
      setLoading(false)
    }
  };
  if(loading){
    return(
      <div className="flex justify-center items-center h-screen w-full">
        <Spinner
          
          aria-label="Extra large spinner example"
          size="xl"
        />
      </div> 
    )
  }
  return (
    <section className="sticky top-0 z-40">
      {selector.role.name !== 'promoter' && (
        <div className="flex justify-between w-full p-5 shadow-lg  bg-white ">
          <Navbar className="flex justify-between w-full">
            <Navbar.Brand href={'/'}>
              <h1 className="font-bold text-2xl font-sans text-blue-500">
                Karcis.Com
              </h1>
            </Navbar.Brand>
            {!selector.id ? (
              <>
                <Navbar.Toggle />
                <Navbar.Collapse className="text-end">
                  <Navbar.Link>
                    <button
                      className="md:mr-8 bg-white text-black border-2 font-medium border-gray-400 hover:bg-blue-600 hover:text-white px-4 py-1 rounded-lg"
                      onClick={() => dispatch(ModalLoginAction(true))}
                    >
                      Sign In
                    </button>
                  </Navbar.Link>
                  <Navbar.Link>
                    <button
                      className="border-2 font-medium bg-blue-600 text-white px-4 py-1 rounded-lg"
                      onClick={() => dispatch(ModalRegisterAction(true))}
                    >
                      Sign Up
                    </button>
                  </Navbar.Link>
                </Navbar.Collapse>
              </>
            ) : (
              <DropdownProfile />
            )}
          </Navbar>
          <ModalSignin />
          <ModalSignup />
          <ModalForgotPassword />
        </div>
      )}
    </section>
  );
};

export default NavbarHome;
