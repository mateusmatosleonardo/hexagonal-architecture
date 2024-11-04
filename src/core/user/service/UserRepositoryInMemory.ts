import User from "../model/user"

export default class UserRepositoryInMemory {
  private static readonly items: User[] = []

  async insert(user: User) {
    const items = UserRepositoryInMemory.items
    const existingUser = await this.getByEmail(user.email)
    if (existingUser) return
    items.push(user)
  }

  async getByEmail(email: string): Promise<User | null> {
    const items = UserRepositoryInMemory.items
    return items.find((u) => u.email === email) ?? null
  }
}
