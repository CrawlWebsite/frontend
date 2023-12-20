export class User {
  public email: string
  public name: string

  constructor(email: string, name: string) {
    this.email = email
    this.name = name
  }

  public static buildUser(user: any): User {
    return new User(user?.email, user?.name)
  }
}
