import TerminalUtil from "@/utils/terminal-util"
import User from "@/core/user/model/user"
import SaveUser from "@/core/user/use-cases/save-user"

export default async function saveUser() {
  TerminalUtil.title("Registrar usuário")

  // const id = await TerminalUtil.requiredField("Id: ")
  const name = await TerminalUtil.requiredField("Nome: ")
  const email = await TerminalUtil.requiredField("E-mail: ")
  const password = await TerminalUtil.requiredField("Senha: ")

  const user: User = { name, email, password }

  await new SaveUser().execute(user)

  TerminalUtil.success("Usuário registrado com sucesso")

  await TerminalUtil.waitEnter()

  try {
    await new SaveUser().execute(user)
  } catch (e: any) {
    TerminalUtil.error(e.message)
  } finally {
    await TerminalUtil.waitEnter()
  }
}
