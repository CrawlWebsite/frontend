import { User } from "@frontend/repositories/user"

export class UserState {
  private users: User[] = []
  private error: any

  constructor() {}

  setUsers(users: any[]) {
    this.users = users.map((user) => User.buildUser(user))
  }

  getUsers(): User[] {
    return this.users
  }

  setError(error: any) {
    this.error = error
  }

  getError(): any {
    return this.error
  }

  addUser(user: any) {
    this.users.push(User.buildUser(user))
  }
}
