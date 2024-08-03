import TerminalUtil from "@/utils/terminal-util"
import polimorfismo from "../fundamentals/polimorfismo"
import dip from "../fundamentals/dip"

export default async function fundamentalsMenu() {
  TerminalUtil.title("Fundamentos")

  const [index] = await TerminalUtil.menu([
    "1. Polimorfismo",
    "2. DIP",
    "Voltar"
  ])

  switch (index) {
    case 0:
      await polimorfismo()
      break
    case 1:
      await dip()
      break
    default:
      return
  }

  await fundamentalsMenu()
}
