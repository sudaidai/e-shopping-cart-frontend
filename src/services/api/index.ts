import {axiosInstance} from '@/axios/index'
import {IMemberQuery} from './types'

const baseUrl = `${process.env.NEXT_PUBLIC_API_URL}/api/`

export const apiMember = (data: IMemberQuery) =>
  axiosInstance.post(`${baseUrl}member`, data)

export const apiReportData = data =>
  axiosInstance.post(`${baseUrl}search`, data)
