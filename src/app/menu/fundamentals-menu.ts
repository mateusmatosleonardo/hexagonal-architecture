import TerminalUtil from "@/utils/terminal-util";
import { terminal } from "terminal-kit";

export default async function fundamentalsMenu() {
  TerminalUtil.title("Fundamentos");

  const reponse = await terminal.singleColumnMenu(["1. Polimorfismo", "Voltar"])
    .promise;

  switch (reponse.selectedIndex) {
    case 1:
      return;
  }

  await fundamentalsMenu();
}
