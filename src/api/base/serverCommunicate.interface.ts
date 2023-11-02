import { AxiosResponse, AxiosRequestConfig } from "axios"

export interface IServerCommunicate {
  get: (
    url: string,
    options: AxiosRequestConfig<any>
  ) => () => Promise<AxiosResponse<any, any>>
  post: (
    url: string,
    options: AxiosRequestConfig<any>
  ) => () => Promise<AxiosResponse<any, any>>
  put: (
    url: string,
    options: AxiosRequestConfig<any>
  ) => () => Promise<AxiosResponse<any, any>>
  patch: (
    url: string,
    options: AxiosRequestConfig<any>
  ) => () => Promise<AxiosResponse<any, any>>
  delete: (
    url: string,
    options: AxiosRequestConfig<any>
  ) => () => Promise<AxiosResponse<any, any>>
}
