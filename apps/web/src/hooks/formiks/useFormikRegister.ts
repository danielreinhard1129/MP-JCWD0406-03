import { AuthAction, ModalRegisterAction } from '@/lib/features/userSlice';
import { useAppDispatch } from '@/lib/hooks';
import axios from 'axios';
import { useFormik } from 'formik';
import toast from 'react-hot-toast';
import * as Yup from 'yup';
import YupPassword from 'yup-password';

YupPassword(Yup);

const useFormikRegister = (
  setNext: CallableFunction,
  role: string,
  setLoading: CallableFunction,
) => {
  const dispatch = useAppDispatch();
  const nameOrganization =
    role === 'promoter'
      ? Yup.string().required('This Field is Required')
      : Yup.string();
  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required('This Field is Required'),
    lastName: Yup.string().required('This Field is Required'),
    nameOrganization,
    email: Yup.string()
      .email('Please enter a valid email')
      .required('This Field is Required'),
    phoneNumber: Yup.string()
      .required('This Field is Required')
      .min(12)
      .max(12)
      .matches(/^[0-9]+$/, 'plese enter from 0 to 9'),
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
      firstName: '',
      lastName: '',
      nameOrganization: '',
      email: '',
      phoneNumber: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema,
    onSubmit: async (values) => {
      try {
        setLoading(true);
        const { data } = await axios.post(
          'http://localhost:8000/api/users/register',
          {
            firstName: values.firstName,
            lastName: values.lastName,
            nameOrganization: values.nameOrganization,
            phoneNumber: values.phoneNumber,
            email: values.email,
            password: values.password,
            role,
          },
        );
        dispatch(AuthAction(data.data));
        localStorage.setItem('token', JSON.stringify(data.token));
        localStorage.setItem('refreshToken', JSON.stringify(data.refreshToken));

        setLoading(false);
        if (data.data.role.name === 'customer') {
          return setNext(2);
        }
        dispatch(ModalRegisterAction(false));
      } catch (error: any) {
        toast.error(error.response.data.message);
      }
    },
  });

  return formik;
};

export default useFormikRegister;
