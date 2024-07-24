import axios from 'axios'

const axiosInstance = axios.create()

axiosInstance.interceptors.request.use(
  config => {
    // console.log('config : ', config)
    config.withCredentials = true

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
