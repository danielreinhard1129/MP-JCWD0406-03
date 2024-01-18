'use client';
import InputFields from '@/components/InputFields';
import useFormikResetPassword from '@/hooks/formiks/useFormikResetPassword';
import { ModalLoginAction } from '@/lib/features/userSlice';
import { useAppDispatch } from '@/lib/hooks';
import axios from 'axios';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

const resetPassword = () => {
  const [show, setShow] = useState(false);
  const searchParams = useSearchParams();
  const formik = useFormikResetPassword(searchParams.get('resetToken') as string,searchParams.get('email') as string);
  const router = useRouter();
  const dispatch = useAppDispatch();

  useEffect(() => {
    checkToken();
  }, []);

  const checkToken = async () => {
    try {
      await axios.get(
        'http://localhost:8000/api/users/verify',
        {
          headers: {
            Authorization: 'Bearer ' + searchParams.get('resetToken'),
          },
        },
      );
      setShow(true);
    } catch (error) {
      router.push('/');
    }
  };

  const handleRouter = () => {
    dispatch(ModalLoginAction(true));
    router.push('/');
  };

  return (
    <section>
      {show && (
        <section className="border-2 my-20 mx-44 rounded-md shadow-lg p-10">
          <Link href={'/'} className="font-bold text-4xl">
            {'<'}
          </Link>
          <h1 className="text-center text-4xl font-semibold">Reset Password</h1>
          <form onSubmit={formik.handleSubmit} className="text-center p-12">
            <InputFields
              label="New Password"
              id="password"
              name="password"
              formik={formik}
            />
            <InputFields
              label="Confirm Password"
              id="confirmPassword"
              name="confirmPassword"
              formik={formik}
            />
            <button
              onClick={handleRouter}
              className="bg-blue-500 px-20 py-2 text-white rounded-lg"
              type="submit"
            >
              Submit
            </button>
          </form>
        </section>
      )}
    </section>
  );
};

export default resetPassword;
