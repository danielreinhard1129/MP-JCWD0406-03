import * as Yup from 'yup';
import axios from 'axios';
import { baseUrl } from '@/utils/config';
import { useFormik } from 'formik';

const useFormikEventForm = () => {
  const validationSchema = Yup.object().shape({
    title: Yup.string().required('Title cannot be empty'),
    category: Yup.string().required('Category cannot be empty'),
    description: Yup.string().required('Description cannot be empty'),
    price: Yup.number().required('Price cannot be empty'),
    dateTime: Yup.date().required('Date and Time cannot be empty'),
    availableSeat: Yup.number().required('Available Seats cannot be empty'),
  });

  const formik = useFormik({
    initialValues: {
      title: '',
      category: '',
      description: '',
      banner: '',
      price: '',
      dateTime: '',
      availableSeat: '',
    },
    validationSchema,
    onSubmit: async (values, { resetForm }) => {
      try {
        const { title, category, description, price, dateTime, availableSeat } =
          values;
        const { data } = await axios.post(`${baseUrl}/events`, {
          title,
          category,
          description,
          price,
          dateTime,
          availableSeat,
        });

        console.log(data);
      } catch (error) {
        console.error('Error creating event:', error);
      }
    },
  });

  return formik;
};

export default useFormikEventForm;
