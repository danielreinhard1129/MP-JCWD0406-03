import axios from 'axios';
import { useFormik } from 'formik';
import * as Yup from 'yup';
const useFormikCodeReferal = (setNext:CallableFunction) => {
  const validationSchema = Yup.object().shape({
    codeReferal: Yup.string()
 })
  const formik = useFormik({
    initialValues: {
      codeReferal: ''
    },
    validationSchema,
    
    onSubmit: (values, { resetForm }) => {
      try {
        console.log(values);
        
      } catch (error) {}
    },
  });

  return formik;
};

export default useFormikCodeReferal;
