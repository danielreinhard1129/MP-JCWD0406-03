import React from 'react'
import InputFields from './InputFields'
import { IoMdCheckmark } from 'react-icons/io'

const InputReferralCode = ({formik , isUseReferralCode}:any) => {
  return (
    <div className="flex items-center ">
              <InputFields
                label="Masukan Kode Referal (optional)"
                name="referralCode"
                disabled={isUseReferralCode}
                type="text"
                id="referralCode"
                formik={formik}
              />
              <button
                className={`border-2 ${isUseReferralCode && "border-green-400"} ${formik.errors.referralCode && "border-red-600"} h-max ml-4 p-2 mt-4 rounded-xl`}
                type="submit"
                disabled={isUseReferralCode}
              >
                {!isUseReferralCode ? "Check": <div className='text-green-500 text-2xl '><IoMdCheckmark /></div>}
              </button>
            </div>
  )
}

export default InputReferralCode