import React from "react"

import { classnames, typography } from "@frontend/tailwindcss-classnames"
import { VehicleController } from "@frontend/handlers/vehicle"
import { useReduxDispatch, useReduxSelector } from "@frontend/redux/hooks"

const HomePage = () => {
  const vehicleController = VehicleController.getInstance()
  const { vehicle } = useReduxSelector(["vehicle"])
  const dispatch = useReduxDispatch()

  React.useEffect(() => {
    dispatch(vehicleController.getCars())
  }, [])

  React.useEffect(() => {
    console.log("vehicle", vehicle)
  }, [vehicle])

  return <div className={classnames(typography("font-bold"))}>Home</div>
}

export default HomePage
