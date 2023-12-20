export class User {
  public email?: string
  public name?: string

  public static buildUser(user: any): User {
    return {
      email: user.email,
      name: user.name,
    }
  }
}
