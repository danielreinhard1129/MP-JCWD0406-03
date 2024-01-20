import { axiosInstance } from '@/helper/axios';
import { useAppSelector } from '@/lib/hooks';
import { useFormik } from 'formik';
import toast from 'react-hot-toast';
import * as Yup from 'yup';
const useFormikReferralCode = (setIsUseReferralCode:CallableFunction) => {
  const userId = useAppSelector((state) => state.user.dataUser.id)
  const validationSchema = Yup.object().shape({
    referralCode: Yup.string()
 })
  const formik = useFormik({
    initialValues: {
      referralCode: ''
    },
    validationSchema,
    
    onSubmit: async(values) => {
      try {
        const data = await axiosInstance.post("http://localhost:8000/api/reward/check-referral-code",{
          referralCode: values.referralCode,
          userId
        })
        console.log(data);
        setIsUseReferralCode(true)
        toast.success("Valid referral code")
      } catch (error:any) {
        toast.error(error.response.data.message || "cannot empty")
      }
    },
  });

  return formik;
};

export default useFormikReferralCode;
