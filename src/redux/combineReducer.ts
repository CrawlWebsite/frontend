import { vehicleReducer as vehicle } from "@frontend/handlers/vehicle/vehicle.reducer"
import { AnyAction, CombinedState, EmptyObject, combineReducers } from "redux"

const reducers = combineReducers({
  vehicle,
})

export const rootReducer = (
  state: CombinedState<{ vehicle: EmptyObject }> | undefined,
  action: AnyAction
) => {
  if (action.type === "RESET") {
    state = undefined
  }

  return reducers(state, action)
}
