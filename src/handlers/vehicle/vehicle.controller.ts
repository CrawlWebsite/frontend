import { VehicleService } from "@frontend/api/vehicle"

export class VehicleController {
  private static instance: VehicleController
  private vehicleService: VehicleService = VehicleService.getInstance()

  public static getInstance(): VehicleController {
    if (!VehicleController.instance) {
      VehicleController.instance = new VehicleController()
    }

    return VehicleController.instance
  }

  public getCars() {
    const fetchFn = this.vehicleService.getCars({})

    fetchFn()
      .then(() => {
        console.log("Vehicle")
      })
      .catch((err: any) => {
        console.log("err", err)
      })
  }
}
