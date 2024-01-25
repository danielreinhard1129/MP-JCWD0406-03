import { baseUrl } from '@/utils/config';
import axios, { AxiosInstance } from 'axios';

const baseURL = process.env.BASE_URl!;

export const axiosInstance: AxiosInstance = axios.create({
  baseURL,
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = JSON.parse(localStorage.getItem('token') as string);
    
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;
    if (error.response.status === 401 || error.response.status === 403 && !originalRequest._retry) {
      originalRequest._retry = true;
      const refreshToken = JSON.parse(localStorage.getItem('refreshToken') as string);

      try {
        const {data} = await axios.post(baseUrl +'/users/refreshToken', {
          refreshToken
        });
        localStorage.setItem("token",JSON.stringify(data.token))
        originalRequest.headers.Authorization = `Bearer ${data.token}`;
        return axios(originalRequest);
      } catch (refreshError) {
        console.log(refreshError);
        localStorage.clear()
        throw refreshError;
      }
    }
    return Promise.reject(error);
  }
)