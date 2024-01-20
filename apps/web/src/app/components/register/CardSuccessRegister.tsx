import { ModalRegisterAction } from '@/lib/features/userSlice';
import Image from 'next/image'
import { useRouter } from 'next/navigation';
import React from 'react'

const CardSuccessRegister = ({dispatch,role}:any) => {
    const router = useRouter();
    const handleNext = () => {
        if (role === 'customer') dispatch(ModalRegisterAction(false));
        if (role === 'promoter') router.push('/promoters');
      };
  return (
    <div className="text-center">
          <div className="bg-green-500 w-full h-full p-20 flex justify-center items-center ">
            <div className="w-28 h-28 flex flex-col justify-center items-center">
              <Image
                src={'/Green-Check.png'}
                width={200}
                height={200}
                alt="Succses login"
                className="rounded-full border-2"
              />
              <p className="text-white mt-4 text-xl font-semibold">Success</p>
            </div>
          </div>
          <p className="text-center mt-5 text-2xl mx-4 font-semibold text-gray-400">
            Congratulations, Your account is complete.
          </p>
          <button
            className="border-2 py-2 px-8 text-white bg-green-400 rounded-lg mt-4 "
            type="submit"
            onClick={() => handleNext()}
          >
            Complete
          </button>
        </div>
  )
}

export default CardSuccessRegister