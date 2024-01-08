/* eslint-disable react-hooks/rules-of-hooks */
import { PAGE_LINKS } from '@frontend/react-routes/permissionLink';
import { IServerCommunicate } from './serverCommunicate.interface';
import axios, { AxiosRequestConfig } from 'axios';

export class ServerCommunicate implements IServerCommunicate {
  private static instance: ServerCommunicate;
  private baseUrl: string = `${import.meta.env.VITE_SERVER_HOST}/api`;

  public static getInstance(): ServerCommunicate {
    if (!ServerCommunicate.instance) {
      ServerCommunicate.instance = new ServerCommunicate();
    }

    return ServerCommunicate.instance;
  }

  private mutate(url: string, options: AxiosRequestConfig<any>) {
    const fetchFn = async () => {
      return axios({
        url: `${this.baseUrl}${url}`,
        headers: {
          ...options?.headers,
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Headers': '*',
          'Access-Control-Allow-Credentials': true,
          'Content-Type': 'application/json',
        },
        withCredentials: true,
        ...options,
      })
        .then(res => {
          return Promise.resolve(res?.data?.message);
        })
        .catch((error: any) => {
          console.log('error', error);
          if (error?.response?.status === 401) {
            window.location.href = PAGE_LINKS.LOGIN.path;
          }
          return Promise.reject(error);
        });
    };

    return fetchFn;
  }

  public get(url: string, options: AxiosRequestConfig<any>) {
    return this.mutate(url, {
      ...options,
      method: 'GET',
    });
  }

  public post(url: string, options: AxiosRequestConfig<any>) {
    return this.mutate(url, {
      ...options,
      method: 'POST',
    });
  }

  public patch(url: string, options: AxiosRequestConfig<any>) {
    return this.mutate(url, {
      ...options,
      method: 'PATCH',
    });
  }

  public put(url: string, options: AxiosRequestConfig<any>) {
    return this.mutate(url, {
      ...options,
      method: 'PUT',
    });
  }

  public delete(url: string, options: AxiosRequestConfig<any>) {
    return this.mutate(url, {
      ...options,
      method: 'DELETE',
    });
  }
}
