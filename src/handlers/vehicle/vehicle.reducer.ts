import { createSlice } from "@reduxjs/toolkit"
import { VehicleController } from "."

const vehicleController = VehicleController.getInstance()

type VehicleState = {
  vehicles: any
  errors: any
}

const initialState: VehicleState = {
  vehicles: [],
  errors: null,
}

export const vehicleSlice = createSlice({
  name: "vehicle",
  initialState,
  reducers: {
    getCarsAPISuccess: (state, action) => {
      state.vehicles = action.payload
    },
    getCarsAPIError: (state, action) => {
      state.errors = action.payload
    },
  },
  extraReducers: (builder) => {
    builder.addCase(vehicleController.getCars.fulfilled, (state, action) => {
      state.vehicles = action.payload
    })
    builder.addCase(vehicleController.getCars.rejected, (state, action) => {
      state.errors = action.payload
    })
  },
})

export const { getCarsAPISuccess, getCarsAPIError } = vehicleSlice.actions
export const { reducer: vehicleReducer } = vehicleSlice
