import React from "react"
import { classnames, typography } from "@frontend/tailwindcss-classnames"
import { VehicleController } from "@frontend/handlers/vehicle"
import { useSelector, shallowEqual } from "react-redux"

const HomePage = () => {
  const vehicleController = VehicleController.getInstance()
  const { vehicle } = useSelector(({ vehicle }) => {
    return { vehicle }
  }, shallowEqual)

  React.useEffect(() => {
    vehicleController.getCars()
  }, [])

  React.useEffect(() => {
    console.log("vehicle")
  }, [vehicle])

  return <div className={classnames(typography("font-bold"))}>Home</div>
}

export default HomePage
