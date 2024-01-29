import React from 'react'

const StepRegister = ({next}:any) => {
  return (
    <div className="flex md:opacity-100 opacity-0 items-center m-4">
          <div className="flex flex-col items-center text-center">
            <div
              className={`border-2  ${
                next === 2
                  ? 'bg-green-500 text-white '
                  : 'text-black border-gray-500'
              } w-12 text-center h-12 rounded-full flex flex-col justify-center  font-bold mt-5 mb-2`}
            >
              <h2>1</h2>
            </div>
            <p>Set Image</p>
          </div>
          <span className="border-b-4 rounded mt-[1.7px] pr-20 border-gray-500 ml-4"></span>
          <span className="mr-4 text-gray-500 text-[20px]">{'>'}</span>
          <div className="flex flex-col items-center text-center">
            <div
              className={`border-2 ${
                next === 3
                  ? 'bg-green-500 text-white '
                  : 'text-black border-gray-500'
              } w-12 text-center h-12 rounded-full flex flex-col justify-center font-bold mt-5 mb-2`}
            >
              <h2>2</h2>
            </div>
            <p>Code Referal</p>
          </div>
          <span className="border-b-4 rounded mt-[1.7px] pr-20 border-gray-500 ml-4"></span>
          <span className="mr-4 text-gray-500 text-[20px]">{'>'}</span>
          <div className="flex flex-col items-center text-center">
            <div
              className={`border-2 ${
                next === 4
                  ? 'bg-green-500 text-white '
                  : 'text-black border-gray-500'
              } w-12 text-center h-12 rounded-full flex flex-col justify-center  font-bold mb-2`}
            >
              <h2>3</h2>
            </div>
            <p>Finish</p>
          </div>
        </div>
  )
}

export default StepRegister