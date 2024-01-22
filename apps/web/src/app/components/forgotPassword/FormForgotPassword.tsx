import {
  ModalForgotPasswordAction,
  ModalLoginAction,
} from '@/lib/features/userSlice';
import InputFields from '../../../components/InputFields';
import useFormikForgotPassword from '@/hooks/formiks/useFormikForgotPassword';

const FormForgotPassword = ({ dispatch, role ,setLogin, setForgotPassword }: any) => {
  const formik = useFormikForgotPassword();
  const handleClick = () => {
      dispatch(ModalForgotPasswordAction(false));
      dispatch(ModalLoginAction(true));
  };
  return (
    <section>
      {' '}
      <div className="bg-[#4f4cee] flex justify-between px-6 mb-4">
        <button
          className="text-white text-2xl mr-4"
          onClick={() => handleClick()}
        >
          {'<'}
        </button>

        <h1 className=" text-4xl py-3 text-white font-bold font-mono">
          Forgot Password
        </h1>
        {role === 'customer' && (
          <button
            className="text-white text-2xl"
            onClick={() => dispatch(ModalForgotPasswordAction(false))}
          >
            x{' '}
          </button>
        )}
      </div>
      <form onSubmit={formik.handleSubmit} className="text-center p-12">
        <InputFields
          label="Enter Your Email"
          name="email"
          id="email"
          type="email"
          formik={formik}
        />
        <button
          className="text-white text-center bg-[#4f4cee] hover:bg-blue-800 focus:ring-4 focus:outline-none  focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          type="submit"
        >
          Send
        </button>
      </form>
    </section>
  );
};

export default FormForgotPassword;
