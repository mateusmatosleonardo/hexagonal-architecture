import TerminalUtil from "@/utils/terminal-util"
import race from "@/core/fundamentals/race"
import Fusca from "@/core/fundamentals/fusca"
import Ferrari from "@/core/fundamentals/ferrari"

export default async function dip() {
  TerminalUtil.title("DIP")

  const [type] = await TerminalUtil.select("Tipo de carro?", [
    "Fusca",
    "Ferrari"
  ])

  let car
  switch (type) {
    case 0:
      car = new Fusca()
      break
    default:
      car = new Ferrari()
      break
  }

  race(car)

  await TerminalUtil.waitEnter()
}
