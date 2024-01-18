import React from 'react';
import InputFields from './InputFields';

const InputLogin = ({ formik }: any) => {
  return (
    <div>
      <InputFields
        label="No.Handphone / Email"
        name="phoneNumberOrEmail"
        id="phoneNumberOrEmail"
        type="text"
        formik={formik}
      />
      <InputFields
        label="Password"
        name="assword"
        id="password"
        type="password"
        formik={formik}
      />
    </div>
  );
};

export default InputLogin;
