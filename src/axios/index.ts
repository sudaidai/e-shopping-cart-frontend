import axios from 'axios'

const axiosInstance = axios.create()

axiosInstance.interceptors.request.use(
  config => {
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
    return Promise.reject(error)
  }
)

export {axiosInstance}
