import TerminalUtil from "@/utils/terminal-util"
import fundamentalsMenu from "./fundamentals-menu"
import userMenu from "./user-menu"

export default async function mainMenu() {
  TerminalUtil.title("Menu principal")

  const [index] = await TerminalUtil.menu([
    "1. Fundamentos",
    "2. Usuário",
    "Sair"
  ])

  switch (index) {
    case 0:
      await fundamentalsMenu()
      break
    case 1:
      await userMenu()
      break
    default:
      process.exit(0)
  }

  await mainMenu()
}
