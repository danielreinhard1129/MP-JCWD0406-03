'use client';
import FormForgotPassword from '@/app/components/forgotPassword/FormForgotPassword';
import FormLogin from '@/components/FormLogin';
import FormRegister from '@/components/FormRegister';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
<<<<<<< HEAD
import React, { useState } from 'react';
=======
import React, { useEffect, useState } from 'react';
>>>>>>> 4ea1091d4d5ae3582affc73549e522ebbe582b92

const Register = () => {
  const selector = useAppSelector((state) => state.user.dataUser);
  const [login, setLogin] = useState(false);
  const [forgotPassword, setForgotPassword] = useState(false);
  const dispatch = useAppDispatch();
<<<<<<< HEAD
  const role = selector?.data.role?.name;
  const router = useRouter();
  if (selector && role === 'customer') router.push('/');
  if (selector && role === 'promoter') router.push('/promoters');
  return (
    <section className="flex justify-center items-center h-screen">
      {!selector && (
=======
  const router = useRouter();
  
  
  useEffect(() => {

    if (selector.id && selector.role?.name === 'customer') router.push('/');
    if (selector.id && selector.role?.name === 'promoter') router.push('/promoters');
  }, [selector]);
  return (
    <section className="flex justify-center items-center h-screen">
      {!selector.id && (
>>>>>>> 4ea1091d4d5ae3582affc73549e522ebbe582b92
        <div className="border-2 flex">
          <div className="border-2 ">
            {!login ? (
              <FormRegister
                title={'Join to Sell Events'}
                role={'promoter'}
                setLogin={setLogin}
              />
            ) : (
              <div>
                {!forgotPassword ? (
                  <FormLogin
                    role={'promoter'}
                    setLogin={setLogin}
                    setForgotPassword={setForgotPassword}
                    dispatch={dispatch}
                  />
                ) : (
                  <FormForgotPassword
                    role="promoter"
                    setLogin={setLogin}
                    setForgotPassword={setForgotPassword}
                  />
                )}
              </div>
            )}
          </div>
          <div>
            <Image
              src={'/adminRegister.webp'}
              width={500}
              height={500}
              alt="register image"
            />
          </div>
        </div>
      )}
      {/* <ModalForgotPassword role={'promoter'} dispatch={dispatch}/> */}
    </section>
  );
};

export default Register;
