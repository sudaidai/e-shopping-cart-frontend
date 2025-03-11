import {axiosInstance} from '@/axios/index'

const baseUrl = `${process.env.NEXT_PUBLIC_API_URL}/api/`

export const apiMember = (data: IMember) =>
  axiosInstance.post(`${baseUrl}member`, data)

export const apiLogIn = (data: IMember) =>
  axiosInstance.post(`${baseUrl}auth`, data)

export const apiLogOut = () => axiosInstance.delete(`${baseUrl}auth`)

export const apiHome = () => axiosInstance.get(`${baseUrl}home`)

export const apiProduct = () => axiosInstance.get(`${baseUrl}product`)
