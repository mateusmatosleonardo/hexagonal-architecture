import TerminalUtil from "@/utils/terminal-util"
import Car from "@/core/fundamentals/car"
import Ferrari from "@/core/fundamentals/ferrari"
import Fusca from "@/core/fundamentals/fusca"

export default async function polimorfismo() {
  TerminalUtil.title("Polimorfismo")

  const [carType] = await TerminalUtil.select("Tipo de Carro?", [
    "Ferrari",
    "Fusca"
  ])

  const car: Car = carType === 0 ? new Ferrari() : new Fusca()

  while (true) {
    TerminalUtil.clean()
    TerminalUtil.showKeyValue(
      "Velocidade máxima: ",
      `${car.maximumSpeed} km/h`
    )
    TerminalUtil.showKeyValue(
      "Velocidade atual: ",
      `${car.currentSpeed} km/h`
    )

    const [option] = await TerminalUtil.select("Qual opção?", [
      "Acelerar",
      "Frear"
    ])

    option === 0 ? car.speedUp() : car.brake()

    const proceed = await TerminalUtil.confirmation("Deseja continuar?")
    if (!proceed) return
  }
}
