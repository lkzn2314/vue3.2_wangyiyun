import axios from 'axios'
import type { AxiosRequestConfig, AxiosResponse, AxiosInstance } from 'axios'
import { BASE_URL, TIMEOUT } from './config'

export default function request(option: AxiosRequestConfig) {
  return new Promise((resolve, reject) => {
    const instance: AxiosInstance = axios.create({
      baseURL: BASE_URL,
      timeout: TIMEOUT,
    })

    instance.interceptors.request.use(
      (config: AxiosRequestConfig) => {
        return config
      },
      (err) => {
        return err
      }
    )

    instance.interceptors.response.use(
      (res: AxiosResponse) => {
        return res.data
      },
      (err) => {
        console.log('来到了response拦截failure中')
        return err
      }
    )

    instance(option).then(
      (res) => {
        resolve(res)
      },
      (err) => {
        reject(err)
      }
    )
  })
}
