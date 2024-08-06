import {axiosInstance} from '@/axios/index'

const baseUrl = `${process.env.NEXT_PUBLIC_API_URL}/api/`

export const apiMember = (data: IMemberQuery) =>
  axiosInstance.post(`${baseUrl}member`, data)

export const apiAuth = (data: IMemberQuery) =>
  axiosInstance.post(`${baseUrl}auth`, data)
