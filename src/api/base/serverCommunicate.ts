/* eslint-disable react-hooks/rules-of-hooks */
import { IServerCommunicate } from "./serverCommunicate.interface"
import axios, { AxiosRequestConfig } from "axios"

export class ServerCommunicate implements IServerCommunicate {
  private static instance: ServerCommunicate
  private baseUrl: string = `${import.meta.env.VITE_SERVER_HOST}/api`

  public static getInstance(): ServerCommunicate {
    if (!ServerCommunicate.instance) {
      ServerCommunicate.instance = new ServerCommunicate()
    }

    return ServerCommunicate.instance
  }

  private mutate(url: string, options: AxiosRequestConfig<any>) {
    const fetchFn = () =>
      axios({
        url: `${this.baseUrl}${url}`,
        ...options,
      })

    return fetchFn
  }

  public get(url: string, options: AxiosRequestConfig<any>) {
    return this.mutate(url, {
      ...options,
      method: "GET",
    })
  }

  public post(url: string, options: AxiosRequestConfig<any>) {
    return this.mutate(url, {
      ...options,
      method: "POST",
    })
  }

  public patch(url: string, options: AxiosRequestConfig<any>) {
    return this.mutate(url, {
      ...options,
      method: "PATCH",
    })
  }

  public put(url: string, options: AxiosRequestConfig<any>) {
    return this.mutate(url, {
      ...options,
      method: "PUT",
    })
  }

  public delete(url: string, options: AxiosRequestConfig<any>) {
    return this.mutate(url, {
      ...options,
      method: "DELETE",
    })
  }
}
