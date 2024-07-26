import TerminalUtil from "@/utils/terminal-util";
import { terminal } from "terminal-kit";
import fundamentalsMenu from "./fundamentals-menu";

export default async function mainMenu() {
  TerminalUtil.title("Menu principal");

  const reponse = await terminal.singleColumnMenu(["1. Fundamentos", "Sair"])
    .promise;

  switch (reponse.selectedIndex) {
    case 0:
      await fundamentalsMenu();
      break;
    case 1:
      process.exit(0);
  }

  await mainMenu();
}
