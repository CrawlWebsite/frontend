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
        const { records, metadata } = action.payload
        const { currentPage, pageSize, totalCount } = metadata

        return {
          ...state,
          users: records.map((user: any): User => User.buildUser(user)),
          currentPage,
          pageSize,
          totalUsers: totalCount,
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
