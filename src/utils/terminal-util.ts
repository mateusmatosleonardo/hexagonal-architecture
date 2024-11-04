import { terminal } from "terminal-kit"

export default class TerminalUtil {
  static title(text: string) {
    terminal.clear()
    terminal.magenta(`${text}\n`)
    terminal.magenta(`-`.repeat(text.length) + `\n`)
  }

  static async clean() {
    terminal.clear()
  }

  static showKeyValue(key: string, value: any) {
    terminal.yellow(key).green(value).white("\n")
  }

  static async requiredField(
    label: string,
    defaultValue: string = ""
  ): Promise<string> {
    terminal.yellow(`\n${label}`)
    const value = await terminal.inputField({
      default: defaultValue
    }).promise

    if (value) return value
    return TerminalUtil.requiredField(label)
  }

  static async menu(options: string[]): Promise<[number, string]> {
    const response = await terminal.singleColumnMenu(options).promise
    return [response.selectedIndex, response.selectedText]
  }

  static async select(
    text: string,
    options: string[]
  ): Promise<[number, string]> {
    terminal.yellow(`\n${text}`)
    const response = await terminal.singleLineMenu(options).promise
    return [response.selectedIndex, response.selectedText]
  }

  static async confirmation(text: string): Promise<boolean> {
    terminal.yellow(`\n${text}`)
    const response = await terminal.singleLineMenu(["Sim", "Não"]).promise
    return response.selectedIndex === 0
  }

  static async waitEnter(): Promise<void> {
    terminal.white("\nPressione ENTER para continuar...")
    await terminal.inputField({ echo: false }).promise
  }

  static async success(text: string, newLine: boolean = true) {
    terminal.green((newLine ? "\n" : "") + text)
  }

  static async error(text: string, newLine: boolean = true) {
    terminal.red((newLine ? "\n" : "") + text)
  }
}
