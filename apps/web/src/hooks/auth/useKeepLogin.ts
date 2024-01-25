import { axiosInstance } from '@/helper/axios';

export const useKeepLogin = async () => {
  try {
    const { data } = await axiosInstance.get(
      'http://localhost:8000/api/users/keep-login'
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};
