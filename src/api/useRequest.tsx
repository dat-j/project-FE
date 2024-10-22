import { useState, useCallback } from 'react'
import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios'

// Define the structure for our request state
interface RequestState<T> {
  data: T | null
  isLoading: boolean
  error: Error | null
}

// Define the structure for our hook's return value
interface UseRequestReturn<T> {
  data: T | null
  isLoading: boolean
  error: Error | null
  get: (url: string, config?: AxiosRequestConfig) => Promise<AxiosResponse<T>>
  post: <D = any>(url: string, data?: D, config?: AxiosRequestConfig) => Promise<AxiosResponse<T>>
  put: <D = any>(url: string, data?: D, config?: AxiosRequestConfig) => Promise<AxiosResponse<T>>
  del: (url: string, config?: AxiosRequestConfig) => Promise<AxiosResponse<T>>
}

// Create an axios instance
const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL || '/api',
})

// Add a request interceptor
api.interceptors.request.use(
  (config) => {
    // You can modify the request config here
    // For example, you could add an auth token
    const token = localStorage.getItem('token')
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

// Add a response interceptor
api.interceptors.response.use(
  (response) => {
    // You can modify the response data here
    return response
  },
  (error: AxiosError) => {
    // Handle errors here
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.error('Response error:', error.response.data)
    } else if (error.request) {
      // The request was made but no response was received
      console.error('Request error:', error.request)
    } else {
      // Something happened in setting up the request that triggered an Error
      console.error('Error:', error.message)
    }
    return Promise.reject(error)
  }
)

export function useRequest<T=any>(): UseRequestReturn<T> {
  const [state, setState] = useState<RequestState<T>>({
    data: null,
    isLoading: false,
    error: null,
  })

  const request = useCallback(async <D = any>(
    method: string,
    url: string,
    data?: D,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<T>> => {
    setState(prevState => ({ ...prevState, isLoading: true }))

    try {
      const response = await api.request<T, AxiosResponse<T>, D>({
        method,
        url,
        data,
        ...config,
      })
      setState({ data: response.data, isLoading: false, error: null })
      return response
    } catch (error) {
      setState({ data: null, isLoading: false, error: error as Error })
      throw error
    }
  }, [])

  const get = useCallback((url: string, config?: AxiosRequestConfig) => 
    request<undefined>('get', url, undefined, config), [request])

  const post = useCallback(<D = any>(url: string, data?: D, config?: AxiosRequestConfig) => 
    request<D>('post', url, data, config), [request])

  const put = useCallback(<D = any>(url: string, data?: D, config?: AxiosRequestConfig) => 
    request<D>('put', url, data, config), [request])

  const del = useCallback((url: string, config?: AxiosRequestConfig) => 
    request<undefined>('delete', url, undefined, config), [request])

  return { ...state, get, post, put, del }
}

export default useRequest