import { useState, useEffect, useCallback } from 'react';
import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

interface UseRequestConfig {
  baseURL: string;
  timeout?: number;
}

interface RequestMethods {
  get: <T = any>(url: string, config?: AxiosRequestConfig) => Promise<T>;
  post: <T = any>(url: string, data?: any, config?: AxiosRequestConfig) => Promise<T>;
  put: <T = any>(url: string, data?: any, config?: AxiosRequestConfig) => Promise<T>;
  delete: <T = any>(url: string, config?: AxiosRequestConfig) => Promise<T>;
}

export const useRequest = ({ baseURL, timeout = 10000 }: UseRequestConfig): RequestMethods => {
  const [axiosInstance, setAxiosInstance] = useState<AxiosInstance | null>(null);

  useEffect(() => {
    const instance = axios.create({
      baseURL,
      timeout,
      headers: {
        'Content-Type': 'application/json',
      },
    });

    // Request interceptor
    instance.interceptors.request.use(
      (config) => {
        // You can modify the request config here
        // For example, add an auth token
        const token = localStorage.getItem('token');
        if (token) {
          config.headers['Authorization'] = `Bearer ${token}`;
        }
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );

    // Response interceptor
    instance.interceptors.response.use(
      (response) => {
        // You can modify the response data here
        return response;
      },
      (error) => {
        // Handle global errors here
        if (error.response) {
          switch (error.response.status) {
            case 401:
              // Handle unauthorized error
              console.error('Unauthorized access');
              // You might want to redirect to login page or refresh token
              break;
            case 404:
              console.error('Resource not found');
              break;
            case 500:
              console.error('Internal server error');
              break;
            default:
              console.error('An error occurred:', error.message);
          }
        } else if (error.request) {
          console.error('No response received:', error.request);
        } else {
          console.error('Error setting up request:', error.message);
        }
        return Promise.reject(error);
      }
    );

    setAxiosInstance(instance);
  }, [baseURL, timeout]);

  const get = useCallback(<T = any>(url: string, config?: AxiosRequestConfig): Promise<T> => {
    if (!axiosInstance) throw new Error('Axios instance not initialized');
    return axiosInstance.get(url, config).then((response: AxiosResponse<T>) => response.data);
  }, [axiosInstance]);

  const post = useCallback(<T = any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> => {
    if (!axiosInstance) throw new Error('Axios instance not initialized');
    return axiosInstance.post(url, data, config).then((response: AxiosResponse<T>) => response.data);
  }, [axiosInstance]);

  const put = useCallback(<T = any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> => {
    if (!axiosInstance) throw new Error('Axios instance not initialized');
    return axiosInstance.put(url, data, config).then((response: AxiosResponse<T>) => response.data);
  }, [axiosInstance]);

  const del = useCallback(<T = any>(url: string, config?: AxiosRequestConfig): Promise<T> => {
    if (!axiosInstance) throw new Error('Axios instance not initialized');
    return axiosInstance.delete(url, config).then((response: AxiosResponse<T>) => response.data);
  }, [axiosInstance]);

  return {
    get,
    post,
    put,
    delete: del,
  };


}