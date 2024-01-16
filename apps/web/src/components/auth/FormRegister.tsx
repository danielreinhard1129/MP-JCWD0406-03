'use client';
import React, { FormEvent, useState } from 'react';
import { ModalAction } from '@/lib/features/userSlice';

import useFormikRegister from '@/hooks/formiks/useFormikRegister';
import InputRegister from './InputRegister';
import InputFields from '../InputFields';
import useFormikSetImage from '@/hooks/formiks/useFormikSetImage';
import SetImage from './SetImage';
import useFormikCodeReferal from '@/hooks/formiks/useFormikCodeReferal';
import Image from 'next/image';
import { Toaster } from 'react-hot-toast';

const FormRegister = ({ dispatch }: any) => {
  const [next, setNext] = useState('input1');
  const formikRegister = useFormikRegister(setNext);
  const formikSetImage = useFormikSetImage(setNext);
  const formikCodeReferal = useFormikCodeReferal(setNext);

  const handleComplete = () => {
    localStorage.setItem('login', JSON.stringify({}));
    dispatch(ModalAction(false));
    window.location.reload()
  };

  return (
    <section>
      <Toaster />
      <div className="bg-[#4f4cee] flex justify-between px-6 mb-4">
        <h1 className=" text-4xl py-3 text-white font-bold font-mono">
          Register
        </h1>
        {next === 'input1' && (
          <button
            className="text-white text-2xl"
            onClick={() => dispatch(ModalAction(false))}
          >
            x{' '}
          </button>
        )}
      </div>
      {next !== 'input1' && (
        <div className="flex  items-center m-4">
          <div className="flex flex-col items-center text-center">
            <div
              className={`border-2  ${
                next === 'input2'
                  ? 'bg-green-500 text-white '
                  : 'text-black border-gray-500'
              } w-12 text-center h-12 rounded-full flex flex-col justify-center  font-bold mt-5 mb-2`}
            >
              <h2>1</h2>
            </div>
            <p>Set Image</p>
          </div>
          <span className="border-b-4 rounded mt-[1.7px] pr-20 border-gray-500 ml-4"></span>
          <span className="mr-4 text-gray-500 text-[20px]">{'>'}</span>
          <div className="flex flex-col items-center text-center">
            <div
              className={`border-2 ${
                next === 'input3'
                  ? 'bg-green-500 text-white '
                  : 'text-black border-gray-500'
              } w-12 text-center h-12 rounded-full flex flex-col justify-center font-bold mt-5 mb-2`}
            >
              <h2>2</h2>
            </div>
            <p>Code Referal</p>
          </div>
          <span className="border-b-4 rounded mt-[1.7px] pr-20 border-gray-500 ml-4"></span>
          <span className="mr-4 text-gray-500 text-[20px]">{'>'}</span>
          <div className="flex flex-col items-center text-center">
            <div
              className={`border-2 ${
                next === 'input4'
                  ? 'bg-green-500 text-white '
                  : 'text-black border-gray-500'
              } w-12 text-center h-12 rounded-full flex flex-col justify-center  font-bold mb-2`}
            >
              <h2>3</h2>
            </div>
            <p>Finish</p>
          </div>
        </div>
      )}
      {next === 'input1' && (
        <form onSubmit={formikRegister.handleSubmit}>
          <InputRegister setNext={setNext} formik={formikRegister} />
        </form>
      )}

      {next === 'input2' && (
        <form onSubmit={formikSetImage.handleSubmit}>
          <SetImage setNext={setNext} formik={formikSetImage} />
        </form>
      )}
      {next === 'input3' && (
        <div className="mx-10">
          <form onSubmit={formikCodeReferal.handleSubmit} className="p-10">
            <div className="flex items-center ">
              <InputFields
                label="Masukan Kode Referal (optional)"
                name="codeReferal"
                type="text"
                id="codeReferal"
                formik={formikCodeReferal}
              />
              <button
                className="border-2 h-max ml-4 p-2 mt-4 rounded-xl"
                type="submit"
              >
                Check
              </button>
            </div>
          </form>
          <button
            className="flex flex-row items-center justify-center text-center w-full border rounded-xl outline-none py-5  bg-blue-700 border-none text-white text-sm shadow-sm"
            onClick={() => setNext('input4')}
          >
            Continue
          </button>
        </div>
      )}
      {next === 'input4' && (
        <div className="text-center">
          <div className="bg-green-500 w-full h-full p-20 flex justify-center items-center ">
            <div className="w-28 h-28 flex flex-col justify-center items-center">
              <Image
                src={'/Green-Check.png'}
                width={200}
                height={200}
                alt="Succses login"
                className="rounded-full border-2"
              />
              <p className="text-white mt-4 text-xl font-semibold">Success</p>
            </div>
          </div>
          <p className="text-center mt-5 text-2xl mx-4 font-semibold text-gray-400">
            Congratulations, Your account is complete.
          </p>
          <button
            className="border-2 py-2 px-8 text-white bg-green-400 rounded-lg mt-4 "
            type="submit"
            onClick={handleComplete}
          >
            Complete
          </button>
        </div>
      )}
    </section>
  );
};

export default FormRegister;
