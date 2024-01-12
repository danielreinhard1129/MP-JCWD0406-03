import React from 'react';

const Input4 = () => {
  return (
    <div className="flex flex-col items-center">
      <h3 className="font-semibold text-3xl">Image Profile</h3>
      <div className=" bg-white px-2">
        <div className="rounded-lg overflow-hidden ">
          <div className="md:flex">
            <div className=" p-3">
              <div className="relative border-dotted h-20 w-20 rounded-full border-2 border-blue-700 bg-gray-100 flex justify-center items-center">
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
      <div className="flex flex-col space-y-5 w-full px-4 mt-8">
        <div>
          <button
            className="flex flex-row items-center justify-center text-center w-full border rounded-xl outline-none py-5  bg-blue-700 border-none text-white text-sm shadow-sm"
            type="submit"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Input4;
