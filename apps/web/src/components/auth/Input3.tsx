import React from 'react';

const Input3 = ({ setNext }: any) => {
  return (
    <section>
      <div className="relative flex flex-col justify-center overflow-hidden bg-gray-50 my-12 ">
        <div className="relative bg-white px-6 pt-10 pb-9 shadow-xl mx-auto w-full max-w-lg rounded-2xl">
          <div className="mx-auto flex w-full max-w-md flex-col space-y-16">
            <div className=" text-center space-y-2">
              <div className="font-semibold text-3xl">
                <p>Create Password</p>
              </div>
            </div>
            <div>
              <div className="flex flex-col space-y-16">
                <div className="">
                  <div className="mb-6">
                    <label
                      htmlFor="password"
                      className="block mb-2 text-start text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Password
                    </label>
                    <input
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      type="password"
                      name="password"
                      id="password"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="confirmpassword"
                      className="block mb-2 text-start text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Confirm Psassword
                    </label>
                    <input
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      type="password"
                      name="confirmpassword"
                      id="confirmpassword"
                    />
                  </div>
                </div>

                <div className="flex flex-col space-y-5">
                  <div>
                    <button
                      className="flex flex-row items-center justify-center text-center w-full border rounded-xl outline-none py-5 bg-blue-700 border-none text-white text-sm shadow-sm"
                      onClick={() => setNext('input4')}
                      type="submit"
                    >
                      Create Password
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Input3;
