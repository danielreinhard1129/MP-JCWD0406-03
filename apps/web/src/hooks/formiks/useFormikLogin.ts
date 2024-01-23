import { AuthAction, ModalLoginAction } from '@/lib/features/userSlice';
import axios from 'axios';
import { useFormik } from 'formik';
import { redirect } from 'next/navigation';
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';

import * as Yup from 'yup';
const useFormikLogin = () => {
  const dispatch = useDispatch();
  const validationSchema = Yup.object().shape({
    phoneNumberOrEmail: Yup.string().required(
      'Phone Number / Email cannot be empty',
    ),
    password: Yup.string().required('Password cannot be empty'),
  });
  const formik = useFormik({
    initialValues: {
      phoneNumberOrEmail: '',
      password: '',
    },
    validationSchema,

    onSubmit: async (values, { resetForm }) => {
      try {
        const { data } = await axios.post(
          'http://localhost:8000/api/users/login',
          {
            phoneNumberOrEmail: values.phoneNumberOrEmail,
            password: values.password,
          },
        );
        dispatch(AuthAction(data.data));
        localStorage.setItem('token', JSON.stringify(data.token));

        toast.success('Success Login');
        if (data.data.role.name === 'promoter') {
          redirect('/promoters');
        }

        dispatch(ModalLoginAction(false));
        resetForm();
      } catch (error: any) {
        toast.error(error.response.data.message);
      }
    },
  });

  return formik;
};

export default useFormikLogin;
