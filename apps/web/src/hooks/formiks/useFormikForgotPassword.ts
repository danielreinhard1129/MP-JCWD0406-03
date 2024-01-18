import { ModalForgotPasswordAction } from '@/lib/features/userSlice';
import { useAppDispatch } from '@/lib/hooks';
import axios from 'axios';
import { useFormik } from 'formik';
import toast from 'react-hot-toast';
import * as Yup from 'yup';
const useFormikForgotPassword = () => {
    const dispatch = useAppDispatch()
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email('Please enter a valid email')
      .required("Email can't Empty"),
  });
  const formik = useFormik({
    initialValues: {
      email: '',
    },
    validationSchema,

    onSubmit: async (values) => {
      try {
        await axios.post('http://localhost:8000/api/users/forgot-password', {
          email: values.email,
        });
        dispatch(ModalForgotPasswordAction(false))
        toast.success("Success Send Email")
      } catch (error:any) {
        toast.error(error.response.data.message);
      }
    },
  });

  return formik;
};

export default useFormikForgotPassword;
