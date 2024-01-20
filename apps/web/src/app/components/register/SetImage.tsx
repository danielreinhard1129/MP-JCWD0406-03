import React from 'react';

const SetImage = ({ formik }: any) => {
  const handleImageChange = (e: any) => {
    formik.setFieldValue('image', e.currentTarget.files[0]);
    
  };
  return (
    <div>
      <div className="flex flex-col items-center">
        <h3 className="font-semibold text-3xl">Image Profile</h3>
        <div className=" bg-white px-2">
          <div className="rounded-lg overflow-hidden ">
            <div className="md:flex">
              <div className=" p-3">
                <div
                  className="relative border-dotted  bg-no-repeat bg-center h-20 w-20 rounded-full border-2 border-blue-700 bg-gray-100 flex justify-center items-center"
                  style={{
                    backgroundImage: formik.values.image
                      ? `url(${URL.createObjectURL(formik.values.image)})`
                      : 'none',
                  }}
                >
                  <div className="absolute">
                    <div className="flex flex-col items-center">
                      <i className="fa fa-folder-open fa-4x text-blue-700"></i>
                      <span className="block text-gray-400 font-normal">+</span>
                    </div>
                  </div>
                  <input
                    type="file"
                    className="h-full w-full opacity-0"
                    name="image"
                    onChange={handleImageChange}
                    onBlur={formik?.handleBlur}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <p>
          Masukan your Image <span className="opacity-50">(optional)</span>
        </p>
      </div>

      <div className="flex flex-col space-y-5 w-full px-4 mt-8">
        <div>
          <button
            className="flex flex-row items-center justify-center text-center w-full border rounded-xl outline-none py-5  bg-blue-700 border-none text-white text-sm shadow-sm"
            type="submit"
          >
            continue
          </button>{' '}
        </div>
      </div>
    </div>
  );
};

export default SetImage;
