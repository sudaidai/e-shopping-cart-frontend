import {axiosInstance} from '@/axios/index'

const baseUrl = '/api/'

export const apiReferralLinkGetInformation = () =>
  axiosInstance.get(`${baseUrl}getInformation`)

export const apiReportData = data =>
  axiosInstance.post(`${baseUrl}/search`, data)
