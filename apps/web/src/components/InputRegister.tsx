import React from 'react';
import InputFields from './InputFields';
import {
  ModalLoginAction,
  ModalRegisterAction,
} from '@/lib/features/userSlice';

const InputRegister = ({ dispatch, formik, role }: any) => {
  const handleChange = () => {
    dispatch(ModalLoginAction(true));
    dispatch(ModalRegisterAction(false));
  };
  return (
    <section className="m-10 ">
      <div className="mb-5 flex">
        <div className="mr-6">
          <InputFields
            label="First Name"
            name="firstName"
            type="text"
            placeholder="text..."
            id="firstName"
            formik={formik}
          />
        </div>
        <div>
          <InputFields
            label="Last Name"
            name="lastName"
            type="text"
            id="lastName"
            formik={formik}
          />
        </div>
      </div>
      {role === 'promoter' && (
        <div>
          <InputFields
            label="Name Organization"
            name="nameOrganization"
            id="nameOrganization"
            type="text"
            formik={formik}
          />
        </div>
      )}
      <div className="mb-5">
        <InputFields
          label="Phone Number"
          name="phoneNumber"
          type="text"
          id="phoneNumber"
          formik={formik}
        />
      </div>
      <div className="mb-5">
        <InputFields
          label="Email"
          name="email"
          type="email"
          id="email"
          formik={formik}
        />
      </div>
      <div className="flex mb-5">
        <div className="mr-5">
          <InputFields
            label="Password"
            name="password"
            type="password"
            id="password"
            formik={formik}
          />
        </div>
        <div>
          <InputFields
            label="Confirm Password"
            name="confirmPassword"
            type="password"
            id="confirmPassword"
            formik={formik}
          />
        </div>
      </div>

      <div className="text-center">
        <div className="text-start ">
          <p
            className="hover:text-blue-500 hover:underline cursor-pointer"
            onClick={handleChange}
          >
            Have Account?
          </p>
        </div>
        <button
          className="text-white text-center bg-[#4f4cee] hover:bg-blue-800 focus:ring-4 focus:outline-none  focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          type="submit"
        >
          Continue
        </button>
      </div>
    </section>
  );
};

export default InputRegister;
