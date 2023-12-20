import { createSlice } from "@reduxjs/toolkit"
import { UserController } from "./user.controller"
import { UserState } from "./user.state"

const userController = UserController.getInstance()

const initialState = new UserState()

export const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(userController.getUsers.fulfilled, (state, action) => {
      state.setUsers(action.payload)
    })
    builder.addCase(userController.getUsers.rejected, (state, action) => {
      state.setError(action.payload)
    })
  },
})

// eslint-disable-next-line no-empty-pattern
export const {} = userSlice.actions
export const { reducer: userReducer } = userSlice
