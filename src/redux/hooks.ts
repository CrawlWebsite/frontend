import { AppDispatch, RootState } from "@frontend/redux-store"
import { shallowEqual, useDispatch, useSelector } from "react-redux"

export const useReduxDispatch = (): AppDispatch => useDispatch()

export const useReduxSelector = (keys: (keyof RootState)[]) =>
  useSelector((state: RootState) => {
    const result: any = {}

    keys.forEach((key) => (result[key] = state[key]))

    return result
  }, shallowEqual)
