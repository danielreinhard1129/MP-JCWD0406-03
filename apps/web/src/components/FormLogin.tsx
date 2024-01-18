import {
  ModalForgotPasswordAction,
  ModalLoginAction,
  ModalRegisterAction,
} from '@/lib/features/userSlice';
import React from 'react';
import InputLogin from './InputLogin';
import useFormikLogin from '@/hooks/formiks/useFormikLogin';

const FormLogin = ({ dispatch, role, setLogin,setForgotPassword }: any) => {
  const formik = useFormikLogin(role);
  const handleChangeAccount = () => {
    if (role === 'customer') {
      dispatch(ModalLoginAction(false));
      dispatch(ModalRegisterAction(true));
    }
    if(role === 'promoter'){
      setLogin(false);
    }
  };

  const handleChangeForgotPassword = () => {
    if(role === "customer") {
      dispatch(ModalLoginAction(false))
      dispatch(ModalForgotPasswordAction(true));
    };
    if(role === "promoter"){
      setForgotPassword(true)
    }
  };
  return (
    <section >
      <div className="bg-[#4f4cee] flex justify-between px-6 mb-4  w-full">
        <h1 className=" text-4xl py-3 text-white font-bold font-mono">Login</h1>
        {role === 'customer' && (
          <button
            className="text-white text-2xl"
            onClick={() => dispatch(ModalLoginAction(false))}
          >
            x{' '}
          </button>
        )}
      </div>
      <form onSubmit={formik.handleSubmit} className="text-center p-12 m-20">
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
        <p
          className="text-center hover:underline cursor-pointer my-4"
          onClick={handleChangeAccount}
        >
          Don't have an account?
        </p>
      </form>
    </section>
  );
};

export default FormLogin;
