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

const FormRegister = ({ dispatch, title, role, setLogin }: any) => {
  const [next, setNext] = useState('input1');
  const formikRegister = useFormikRegister(setNext, role);
  const [isUseReferralCode, setIsUseReferralCode] = useState(false);
  const formikSetImage = useFormikSetImage(setNext);
  const formikReferralCode = useFormikReferralCode(setIsUseReferralCode);
  const userId = useAppSelector((state) => state.user.dataUser?.id);

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
      }
      toast.success("Congratulations you earned 10% coupon discont")
      setNext('input4');
    } catch (error) {}
  };
  return (
    <section>
      <button onClick={() => setNext('input3')}>referral</button>
      <div className="bg-[#4f4cee] flex justify-between px-6 mb-4">
        <h1 className=" text-4xl py-3 text-white font-bold font-mono">
          {title}
        </h1>
        {next === 'input1' && role === 'customer' && (
          <button
            className="text-white text-2xl"
            onClick={() => dispatch(ModalRegisterAction(false))}
          >
            x
          </button>
        )}
      </div>
      {next !== 'input1' && <StepRegister next={next} />}
      {next === 'input1' && (
        <form onSubmit={formikRegister.handleSubmit}>
          <InputRegister
            dispatch={dispatch}
            formik={formikRegister}
            role={role}
            setLogin={setLogin}
          />
        </form>
      )}

      {next === 'input2' && (
        <form onSubmit={formikSetImage.handleSubmit}>
          <SetImage formik={formikSetImage} />
        </form>
      )}
      {next === 'input3' && (
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
      {next === 'input4' && (
        <CardSuccessRegister dispatch={dispatch} role={role} />
      )}
    </section>
  );
};

export default FormRegister;
