import {
  ModalForgotPasswordAction,
  ModalLoginAction,
  ModalRegisterAction,
} from '@/lib/features/userSlice';
import React from 'react';
import InputLogin from './InputLogin';
import useFormikLogin from '@/hooks/formiks/useFormikLogin';
import { FcGoogle } from 'react-icons/fc';

const FormLogin = ({ dispatch, role, setLogin, setForgotPassword }: any) => {
  const formik = useFormikLogin();
  const handleChangeAccount = () => {
    if (role === 'customer') {
      dispatch(ModalLoginAction(false));
      dispatch(ModalRegisterAction(true));
    }
    if (role === 'promoter') {
      setLogin(false);
    }
  };

  const handleChangeForgotPassword = () => {
    if (role === 'customer') {
      dispatch(ModalLoginAction(false));
      dispatch(ModalForgotPasswordAction(true));
    }
    if (role === 'promoter') {
      setForgotPassword(true);
    }
  };
  return (
    <section>
      <div className="bg-[#4f4cee] flex justify-between px-6 mb-4  w-full">
        <h1 className="md:text-4xl py-3 text-white font-bold font-mono">
          Login To Karcis
        </h1>
        {role === 'customer' && (
          <button
            className="text-white text-2xl"
            onClick={() => dispatch(ModalLoginAction(false))}
          >
            x{' '}
          </button>
        )}
      </div>
      <form onSubmit={formik.handleSubmit} className="text-center p-12 ">
        <InputLogin formik={formik} />
        <p
          className="text-right hover:underline cursor-pointer mb-4"
          onClick={handleChangeForgotPassword}
        >
          forgot password?
        </p>
        <button
          className="text-white text-center bg-[#4f4cee] hover:bg-blue-800 focus:ring-4 focus:outline-none  focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          type="submit"
        >
          Login
        </button>
        <p className="text-center  my-4" onClick={handleChangeAccount}>
          {"Don't have an account?"}
          <button type="button" className="hover:underline text-blue-500 ml-2">
            Sign up
          </button>
        </p>
        <div className="w-full ">
          <div className="flex items-center">
            <div className="border-b-2 w-full border-gray-500 p-1"></div>
            <div className="border-2 border-gray-500 rounded px-2">OR</div>
            <div className="border-b-2 w-full border-gray-500 p-1"></div>
          </div>
          <p className="text-4xl flex justify-center mt-2 border-2 border-gray-400 rounded cursor-pointer">
            <FcGoogle />
          </p>
        </div>
      </form>
    </section>
  );
};

export default FormLogin;
