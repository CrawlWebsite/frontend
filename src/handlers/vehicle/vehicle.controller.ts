import { createAsyncThunk } from "@reduxjs/toolkit"
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

  public getCars = createAsyncThunk(
    "getCarsAPI",
    async (_, { rejectWithValue }) => {
      const fetchFn = this.vehicleService.getCars({})

      try {
        const response = await fetchFn()
        return response.data.message
      } catch (err: any) {
        return rejectWithValue(err.message)
      }
    }
  )
}
