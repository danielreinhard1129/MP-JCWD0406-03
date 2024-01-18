import { ModalForgotPasswordAction } from '@/lib/features/userSlice';
import { useAppDispatch } from '@/lib/hooks';
import axios from 'axios';
import { useFormik } from 'formik';
import toast from 'react-hot-toast';
import * as Yup from 'yup';
import YupPassword from 'yup-password';
YupPassword(Yup);
const useFormikResetPassword = (resetToken: string, email: string) => {
  const validationSchema = Yup.object().shape({
    password: Yup.string()
      .required('Password cannot be empty')
      .min(6)
      .minLowercase(1)
      .minUppercase(1),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password') ?? ''], 'Password must match')
      .required('Password cannot be empty'),
  });

  const formik = useFormik({
    initialValues: {
      password: '',
      confirmPassword: '',
    },
    validationSchema,

    onSubmit: async (values) => {
      try {
        await axios.post(
          'http://localhost:8000/api/users/reset-password',
          {
            email,
            password: values.password,
          },
          {
            headers: {
              Authorization: 'Bearer ' + resetToken,
            },
          },
        );
        toast.success('Success Reset Password');
      } catch (error: any) {
        toast.error(error.response.data.message);
      }
    },
  });

  return formik;
};

export default useFormikResetPassword;
