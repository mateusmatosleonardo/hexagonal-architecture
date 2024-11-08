import UseCase from "@/core/shared/use-case"
import Id from "@/core/shared/id"
import User from "@/core/user/model/user"
import errors from "@/core/shared/errors"
import UserRepositoryInMemory from "../service/UserRepositoryInMemory"
import CryptoProvider from "../service/CryptoProvider"

export default class SaveUserUseCase implements UseCase<User, void> {
  constructor(private cryptoProvider: CryptoProvider) {}

  async execute(user: User): Promise<void> {
    const repo = new UserRepositoryInMemory()

    const criptPass = this.cryptoProvider.encrypt(user.password)

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
