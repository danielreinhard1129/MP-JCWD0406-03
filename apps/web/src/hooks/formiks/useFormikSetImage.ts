import { useAppSelector } from '@/lib/hooks';
import axios from 'axios';
import { useFormik } from 'formik';
import toast from 'react-hot-toast';
import * as Yup from 'yup';
const useFormikSetImage = (setNext: CallableFunction) => {
  const user = useAppSelector((state) => state.user.dataUser);
  const validationSchema = Yup.object().shape({
    image: Yup.mixed(),
  });
  const formik = useFormik({
    initialValues: {
      image: '',
    },
    validationSchema,

    onSubmit: async (values, { resetForm }) => {
      try {
        if (values.image) {
          const formData = new FormData();
          formData.append('image', values.image);
          formData.append('userId', user.data?.id);
          const { data } = await axios.post(
            'http://localhost:8000/api/users/upload-image',
            formData,
            {
              headers: {
                'Content-Type': 'multipart/form-data',
              },
            },
          );

          const storage = JSON.parse(localStorage.getItem('user') as string);
          storage.data = data.data;
          localStorage.setItem('user', JSON.stringify(storage));
          toast.success('Success Add Image');
        }
        setNext('input3');
      } catch (error) {
        console.log(error);
      }
    },
  });

  return formik;
};

export default useFormikSetImage;
