import TerminalUtil from "@/utils/terminal-util"
import User from "@/core/user/model/user"
import SaveUserUseCase from "@/core/user/use-cases/save-user"
import PasswordEncrypt from "@/adapter/auth/PasswordEncrypt"

export default async function saveUser() {
  TerminalUtil.title("Registrar usuário")

  const name = await TerminalUtil.requiredField("Nome: ")
  const email = await TerminalUtil.requiredField("E-mail: ")
  const password = await TerminalUtil.requiredField("Senha: ")

  const user: User = { name, email, password }

  const cryptoProvider = new PasswordEncrypt()
  const useCase = new SaveUserUseCase(cryptoProvider)

  await useCase.execute(user)

  TerminalUtil.success("Usuário registrado com sucesso")

  await TerminalUtil.waitEnter()

  try {
    await useCase.execute(user)
  } catch (e: any) {
    TerminalUtil.error(e.message)
  } finally {
    await TerminalUtil.waitEnter()
  }
}
