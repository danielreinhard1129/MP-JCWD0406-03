import { AuthAction, ModalLoginAction } from '@/lib/features/userSlice';
import axios from 'axios';
import { useFormik } from 'formik';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';

import * as Yup from 'yup';
const useFormikLogin = (role:string) => {
  const dispatch = useDispatch();
  const router = useRouter()
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

    onSubmit: async (values, {resetForm}) => {
      try {
        const { data } = await axios.post(
          'http://localhost:8000/api/users/login',
          {
            phoneNumberOrEmail: values.phoneNumberOrEmail,
            password: values.password,
          },
        );
        if(data.data.role.name !== role) throw new Error(toast.error(`Account has used as ${data.data.role.name}`))    

        dispatch(AuthAction(data.token));
        localStorage.setItem(
          'token',
          JSON.stringify(data.token),
        );
        toast.success('Success Login');
        if(role === "promoter"){
         return router.push("/promoters")
        }

        dispatch(ModalLoginAction(false));
      } catch (error: any) {
        toast.error(error.response.data.message);
      }
    },
  });

  return formik;
};

export default useFormikLogin;
