import { useState, useEffect } from "react";
import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

interface UseRequestHook {
  get: (url: string, config?: AxiosRequestConfig) => Promise<AxiosResponse>;
  post: (
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ) => Promise<AxiosResponse>;
  put: (
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ) => Promise<AxiosResponse>;
  delete: (url: string, config?: AxiosRequestConfig) => Promise<AxiosResponse>;
  isLoading: boolean;
  error: any;
}

const BASE_URL = "http://localhost:3000";

const useRequest = (baseURL = BASE_URL): UseRequestHook => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<any>(null);

  const axiosInstance: AxiosInstance = axios.create({
    baseURL,
  });

  useEffect(() => {
    // Request interceptor
    const requestInterceptor = axiosInstance.interceptors.request.use(
      (config: any) => {
        setIsLoading(true);
        setError(null);
        // Add any custom headers or authentication tokens here
        config.headers["Authorization"] = `Bearer ${localStorage.getItem(
          "token"
        )}`;
        return config;
      },
      (error: any) => {
        setIsLoading(false);
        setError(error);
        return Promise.reject(error);
      }
    );

    // Response interceptor
    const responseInterceptor = axiosInstance.interceptors.response.use(
      (response: any) => {
        setIsLoading(false);
        // You can process the response data here if needed
        return response;
      },
      (error: any) => {
        setIsLoading(false);
        setError(error);
        // Handle specific error cases (e.g., unauthorized, not found)
        if (error.response) {
          switch (error.response.status) {
            case 401:
              // Handle unauthorized error
              console.log("Unauthorized access");
              break;
            case 404:
              // Handle not found error
              console.log("Resource not found");
              break;
            default:
              console.log("An error occurred");
          }
        }
        return Promise.reject(error);
      }
    );

    // Clean up interceptors when the component unmounts
    return () => {
      axiosInstance.interceptors.request.eject(requestInterceptor);
      axiosInstance.interceptors.response.eject(responseInterceptor);
    };
  }, []);

  const get = (url: string, config?: AxiosRequestConfig) =>
    axiosInstance.get(url, config);
  const post = (url: string, data?: any, config?: AxiosRequestConfig) =>
    axiosInstance.post(url, data, config);
  const put = (url: string, data?: any, config?: AxiosRequestConfig) =>
    axiosInstance.put(url, data, config);
  const del = (url: string, config?: AxiosRequestConfig) =>
    axiosInstance.delete(url, config);

  return { get, post, put, delete: del, isLoading, error };
};

export default useRequest;
