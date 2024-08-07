import UseCase from "@/core/shared/use-case"
import User from "@/core/user/model/user"

export default class SaveUser implements UseCase<User, void> {
  async execute(user: User): Promise<void> {}
}
