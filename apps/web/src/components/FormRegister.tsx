'use client';
import React, { useState } from 'react';

import useFormikRegister from '@/hooks/formiks/useFormikRegister';
import InputRegister from './InputRegister';
import useFormikSetImage from '@/hooks/formiks/useFormikSetImage';
import SetImage from '../app/components/register/SetImage';
import useFormikReferralCode from '@/hooks/formiks/useFormikReferralCode';
import { ModalRegisterAction } from '@/lib/features/userSlice';
import InputReferralCode from './InputReferralCode';
import CardSuccessRegister from '@/app/components/register/CardSuccessRegister';
import StepRegister from '@/app/components/register/StepRegister';
import { axiosInstance } from '@/helper/axios';
import { useAppSelector } from '@/lib/hooks';
import toast from 'react-hot-toast';
import { Spinner } from 'flowbite-react';

const FormRegister = ({ dispatch, role, setLogin }: any) => {
  const [next, setNext] = useState(1);
  const [loading, setLoading] = useState(false);
  const [isUseReferralCode, setIsUseReferralCode] = useState(false);
  const formikSetImage = useFormikSetImage(setNext);
  const formikReferralCode = useFormikReferralCode(setIsUseReferralCode);
  const userId = useAppSelector((state) => state.user.dataUser?.id);
  const [navigateRole, setNavigateRole] = useState('customer');
  const formikRegister = useFormikRegister(setNext, navigateRole, setLoading);


  const handleCodeReferralSubmit = async () => {
    try {
      if (isUseReferralCode) {
        await axiosInstance.post(
          'http://localhost:8000/api/reward/use-referral-code',
          {
            referralCode: formikReferralCode.values.referralCode,
            userId,
          },
        );
        toast.success('Congratulations you earned 10% coupon discont');
      }
      setNext(4);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <section>
      {next === 1 && (
        <div >
          <div className="bg-[#4f4cee] flex justify-between px-6 mb-4">
            <h1 className="md:text-4xl py-3 text-white font-bold font-mono">
              Join To Karcis
            </h1>
            <div>
              <button
                className="text-white text-2xl"
                onClick={() => dispatch(ModalRegisterAction(false))}
              >
                x
              </button>
            </div>
          </div>
          <div className="flex w-full">
            <p
              className={`border-b-4 w-[50%] text-center ${
                navigateRole === 'customer'
                  ? 'text-blue-500 border-blue-600'
                  : 'text-gray-400 '
              } font-bold   cursor-pointer`}
              onClick={() => setNavigateRole('customer')}
            >
              Customer
            </p>
            <p
              className={`border-b-4 w-[50%] text-center  ${
                navigateRole === 'promoter'
                  ? 'text-blue-500 border-blue-600'
                  : 'text-gray-400'
              } font-bold  cursor-pointer`}
              onClick={() => setNavigateRole('promoter')}
            >
              Promoter
            </p>
          </div>
        </div>
      )}
      {next !== 1 && <StepRegister next={next} />}
      {next === 1 && (
        <form onSubmit={formikRegister.handleSubmit}>
          <InputRegister
            dispatch={dispatch}
            formik={formikRegister}
            role={navigateRole}
            setLogin={setLogin}
          />
        </form>
      )}

      {next === 2 && (
        <form onSubmit={formikSetImage.handleSubmit}>
          <SetImage formik={formikSetImage} />
        </form>
      )}
      {next === 3 && (
        <div className="mx-10">
          <form onSubmit={formikReferralCode.handleSubmit} className="p-10">
            <InputReferralCode
              formik={formikReferralCode}
              isUseReferralCode={isUseReferralCode}
            />
          </form>
          <button
            className="flex flex-row items-center justify-center text-center w-full border rounded-xl outline-none py-5  bg-blue-700 border-none text-white text-sm shadow-sm"
            onClick={() => handleCodeReferralSubmit()}
          >
            Continue
          </button>
        </div>
      )}
      {next === 4 && <CardSuccessRegister dispatch={dispatch} role={role} />}
    </section>
  );
};

export default FormRegister;
