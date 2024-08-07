import TerminalUtil from "@/utils/terminal-util"
import fundamentalsMenu from "./fundamentals-menu"

export default async function mainMenu() {
  TerminalUtil.title("Menu principal")

  const [index] = await TerminalUtil.menu(["1. Fundamentos", "Sair"])

  switch (index) {
    case 0:
      await fundamentalsMenu()
      break
    case 1:
      process.exit(0)
  }

  await mainMenu()
}
