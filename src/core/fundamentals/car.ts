export default interface Car {
  readonly maximumSpeed: number
  currentSpeed: number
  speedUp(): void
  brake(): void
}
