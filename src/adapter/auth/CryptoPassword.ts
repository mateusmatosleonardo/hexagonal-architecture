import CryptoProvider from "@/core/user/service/CryptoProvider"

export default class CryptoPassword implements CryptoProvider {
  encrypt(password: string): string {
    return password.split("").reverse().join("")
  }
}
