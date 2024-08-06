import {getJwtTokenHandler} from '@/lib/auth'
import axios from 'axios'

const axiosInstance = axios.create()

axiosInstance.interceptors.request.use(
  config => {
    // console.log('config : ', config)
    // set credentials
    config.withCredentials = true
    // set header with Authorization
    const token = getJwtTokenHandler()
    if (token) config.headers.Authorization = getJwtTokenHandler()

    if (config.method === 'post') {
      const data = config.data
    }
    return config
  },
  error => Promise.reject(error)
)

axiosInstance.interceptors.response.use(
  resp => {
    return resp
  },
  error => {
    if (axios.isAxiosError(error) && error.response?.data) {
      return Promise.reject(error.response.data)
    }
    // // console.log('error : ', error.message)
    return Promise.reject(error)
  }
)

export {axiosInstance}
