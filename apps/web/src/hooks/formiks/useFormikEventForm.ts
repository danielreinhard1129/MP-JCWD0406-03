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
    ticketType: Yup.string().required('Ticket Type cannot be empty'),
  });

  const formik = useFormik({
    initialValues: {
      tittle: '',
      category: '',
      description: '',
      banner: '',
      price: '',
      dateTime: '',
      availableSeat: '',
      ticketType: '',
    },
    validationSchema,
    onSubmit: async (values, { resetForm }) => {
      console.log(values);
    },
  });

  // onSubmit: async (values) => {
  //   try {
  //     console.log(values.tittle);

  //     const { tittle, category,description, price, dateTime, availableSeat, ticketType} = values
  //     const {data} = await axios.post(`${baseUrl}/events/create`,{
  //         tittle,
  //         category,
  //         description,
  //         price,
  //         dateTime,
  //         availableSeat,
  //         ticketType,
  //       });

  //     console.log(data);
  //   } catch (error) {
  //     console.error('Error creating event:', error);
  //   }
  // },

  return formik;
};

export default useFormikEventForm;
