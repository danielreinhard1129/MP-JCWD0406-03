import Image from 'next/image';
import React from 'react';

const Input4 = () => {
  return (
    <div>
      <div className="flex flex-col items-center">
        <h3 className="font-semibold text-3xl">Image Profile</h3>
        <div className=" bg-white px-2">
          <div className="rounded-lg overflow-hidden ">
            <div className="md:flex">
              <div className=" p-3">
                <div className="relative border-dotted bg-[url(/pohon.jpg)] bg-repeat h-20 w-20 rounded-full border-2 border-blue-700 bg-gray-100 flex justify-center items-center">
                  <div className="absolute">
                    <div className="flex flex-col items-center">
                      <i className="fa fa-folder-open fa-4x text-blue-700"></i>
                      <span className="block text-gray-400 font-normal">+</span>
                    </div>
                  </div>
                  <input
                    type="file"
                    className="h-full w-full opacity-0"
                    name=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="m-6">
        <label
          htmlFor="codeReferal"
          className="block mb-2 text-start text-sm font-medium text-gray-900 dark:text-white"
        >
          Masukan Kode Referal
        </label>
        <input
          type="text"
          id="codereferal"
          className="bg-gray-50 border-2 border-gray-500 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="text..."
        />
      </div>
      <div className="flex flex-col space-y-5 w-full px-4 mt-8">
        <div>
          <button
            className="flex flex-row items-center justify-center text-center w-full border rounded-xl outline-none py-5  bg-blue-700 border-none text-white text-sm shadow-sm"
            type="submit"
          >
            Submit
          </button>{' '}
        </div>
      </div>

    </div>
  );
};

export default Input4;
