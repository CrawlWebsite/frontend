import { AxiosRequestConfig } from "axios"
import { BaseService } from "../base/base.service"

export class VehicleService extends BaseService {
  private static instance: VehicleService

  public static getInstance(): VehicleService {
    if (!VehicleService.instance) {
      VehicleService.instance = new VehicleService()
    }

    return VehicleService.instance
  }

  public getCars(options: AxiosRequestConfig<any>) {
    return this.serverCommunicate.get("/vehicle/car", options)
  }
}
