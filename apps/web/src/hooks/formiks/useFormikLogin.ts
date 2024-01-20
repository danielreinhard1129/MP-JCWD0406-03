import { AuthAction, ModalLoginAction } from '@/lib/features/userSlice';
import axios from 'axios';
import { useFormik } from 'formik';
<<<<<<< HEAD
=======
import { useRouter } from 'next/navigation';
>>>>>>> 4ea1091d4d5ae3582affc73549e522ebbe582b92
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';

import * as Yup from 'yup';
const useFormikLogin = (role:string) => {
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

<<<<<<< HEAD
    onSubmit: async (values) => {
=======
    onSubmit: async (values, {resetForm}) => {
>>>>>>> 4ea1091d4d5ae3582affc73549e522ebbe582b92
      try {
        const { data } = await axios.post(
          'http://localhost:8000/api/users/login',
          {
            phoneNumberOrEmail: values.phoneNumberOrEmail,
            password: values.password,
          },
        );
<<<<<<< HEAD
        console.log(data);
        if(data.data.role.name !== role) throw new Error(toast.error(`Account has used as ${data.data.role.name}`))
        

        dispatch(AuthAction({ data: data.data, token: data.token }));
        localStorage.setItem(
          'user',
          JSON.stringify({ data: data.data, token: data.token }),
        );

=======
        if(data.data.role.name !== role) throw new Error(toast.error(`Account has used as ${data.data.role.name}`))    

        dispatch(AuthAction(data.token));
        localStorage.setItem(
          'token',
          JSON.stringify(data.token),
        );
>>>>>>> 4ea1091d4d5ae3582affc73549e522ebbe582b92
        toast.success('Success Login');
        dispatch(ModalLoginAction(false));
      } catch (error: any) {
        toast.error(error.response.data.message);
      }
    },
  });

  return formik;
};

export default useFormikLogin;
