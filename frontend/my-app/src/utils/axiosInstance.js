import axios from "axios";
import { BASE_URL } from "./apiPaths";

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 30000,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

//Request Interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

//Response Interceptor
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    //Handle Common errors Globally
    if(error.response){
        if (error.response.status === 401) {
            localStorage.removeItem("token");
        }
        if(error.response.status === 500){
            console.error("Server error, Please try again later")
        }
    }else if (error.code === 'ECONNABORTED') {
        console.error('Request timeout, please try again')
    }

    return Promise.reject(error);
  }
);


export default axiosInstance;
