'use client';
import React, { useState } from 'react';
import Input1 from './Input1';
import Input2 from './Input2';
import { ModalAction } from '@/lib/features/userSlice';
import Input3 from './Input3';
import Input4 from './Input4';

const FormRegister = ({ dispatch }: any) => {
  const [next, setNext] = useState('input1');
  return (
    <section>
      <div className="bg-[#4f4cee] flex justify-between px-6 mb-4">
        <h1 className=" text-4xl py-3 text-white font-bold font-mono">
          Register
        </h1>
        {next === 'input1' ? (
          <button
            className="text-white text-2xl"
            onClick={() => dispatch(ModalAction(false))}
          >
            x{' '}
          </button>
        ) : (
          <button
            className="text-white text-2xl"
            onClick={() =>
              setNext('input1')
            }
          >
            Back
          </button>
        )}
      </div>
      <form className="">
        {next === 'input1' && <Input1 setNext={setNext} />}

        {next !== 'input1' && (
          <div className="flex  items-center m-4">
            <div className="flex flex-col items-center text-center">
              <div
                className={`border-2  ${
                  next === 'input2' ? 'bg-green-500 text-white ' : 'text-black border-gray-500'
                } w-12 text-center h-12 rounded-full flex flex-col justify-center  font-bold mt-5 mb-2`}
              >
                <h2>1</h2>
              </div>
              <p>Verifikasi Email</p>
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
              <p>Create Password</p>
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

        {next === 'input2' && <Input2 setNext={setNext} />}
        {next === 'input3' && <Input3 setNext={setNext}/>}
        {next === 'input4' && <Input4 />}
      </form>
    </section>
  );
};

export default FormRegister;
