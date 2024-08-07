import TerminalUtil from "@/utils/terminal-util"

export default async function saveUser() {
  TerminalUtil.title("Registrar usuário")

  await TerminalUtil.waitEnter()
}
