import axios, { type AxiosInstance } from 'axios'

export const axiosAPI: AxiosInstance = axios.create({
  baseURL: '',
  responseType: 'json'
})

axiosAPI.interceptors.request.use()
axiosAPI.interceptors.response.use(
  (response) => {
    return response.data
  }
)
