import { AnyAction, EmptyObject } from "redux"

export const vehicleReducer = (
  state: EmptyObject | undefined = {},
  action: AnyAction
) => {
  switch (action.type) {
    default:
      return state
  }
}
