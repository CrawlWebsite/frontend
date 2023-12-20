import { User } from "@frontend/repositories/user"

export type UserState = {
  users?: User[]
  page?: number
  perPage?: number
  totalUsers?: number
  error?: any
}
