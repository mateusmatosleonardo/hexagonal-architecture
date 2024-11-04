import UseCase from "@/core/shared/use-case"
import Id from "@/core/shared/id"
import User from "@/core/user/model/user"
import errors from "@/core/shared/errors"
import UserRepositoryInMemory from "../service/UserRepositoryInMemory"

export default class SaveUser implements UseCase<User, void> {
  async execute(user: User): Promise<void> {
    const criptPass = user.password.split("").reverse().join("")
    const repo = new UserRepositoryInMemory()

    const existingUser = await repo.getByEmail(user.email)
    if (existingUser) throw new Error(errors.USER_ALREADY_EXISTS)

    const newUser: User = {
      id: Id.generateHash(),
      name: user.name,
      email: user.email,
      password: criptPass
    }

    await repo.insert(newUser)

    console.log(`\n\n${JSON.stringify(newUser)}`)
  }
}
