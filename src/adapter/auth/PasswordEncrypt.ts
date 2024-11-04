import bcrypt from "bcrypt"
import CryptoProvider from "@/core/user/service/CryptoProvider"

export default class PasswordEncrypt implements CryptoProvider {
  encrypt(text: string): string {
    const salt = bcrypt.genSaltSync(10)
    return bcrypt.hashSync(text, salt)
  }
}
