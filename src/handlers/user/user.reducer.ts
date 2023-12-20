import { createSlice } from "@reduxjs/toolkit"
import { UserController } from "./user.controller"
import { UserState } from "./types"
import { User } from "@frontend/repositories"

const userController = UserController.getInstance()

const initialState: UserState = {}

export const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      userController.getUsers.fulfilled,
      (state, action): UserState => {
        const { items, page, perPage, total } = action.payload

        return {
          ...state,
          users: items.map((user: any): User => User.buildUser(user)),
          page,
          perPage,
          totalUsers: total,
        }
      }
    )
    builder.addCase(
      userController.getUsers.rejected,
      (state, action): UserState => {
        return {
          ...state,
          error: action.payload,
        }
      }
    )
  },
})

// eslint-disable-next-line no-empty-pattern
export const {} = userSlice.actions
export const { reducer: userReducer } = userSlice
