import TerminalUtil from "@/utils/terminal-util"
import saveUser from "../user/save-user"

export default async function userMenu() {
  TerminalUtil.title("Fundamentos")

  const [index] = await TerminalUtil.menu([
    "1. Registrar usuário",
    "Voltar"
  ])

  switch (index) {
    case 0:
      await saveUser()
      break
    default:
      return
  }

  await userMenu()
}
