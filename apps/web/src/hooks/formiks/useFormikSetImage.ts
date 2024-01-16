import axios from 'axios';
import { useFormik } from 'formik';
import * as Yup from 'yup';
const useFormikSetImage = (setNext:CallableFunction) => {
  const validationSchema = Yup.object().shape({
    image: Yup.mixed()
 })
  const formik = useFormik({
    initialValues: {
      image: ''
    },
    validationSchema,
    
    onSubmit: (values, { resetForm }) => {
      try {
        axios.post('',{})
        
        setNext('input3')
        
      } catch (error) {}
    },
  });

  return formik;
};

export default useFormikSetImage;
