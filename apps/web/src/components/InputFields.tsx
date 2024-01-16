// InputFields.jsx
import React from 'react';

const InputFields = ({ label, name, formik, ...props }: any) => {
  return (
    <div className="mb-4">
      <label
        htmlFor={props.id || props.name}
        className="block mb-2 text-sm font-medium text-start  text-gray-900 dark:text-white"
      >
        {label}
      </label>
      <input
        {...props}
        value={formik.values[name]}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${
          formik.touched[name] && formik.errors[name] ? 'border-red-500' : ''
        }`}
      />
      {formik.touched[name] && formik.errors[name] && (
        <p className="text-red-500 text-xs mt-1">{formik.errors[name]}</p>
      )}
    </div>
  );
};

export default InputFields;
