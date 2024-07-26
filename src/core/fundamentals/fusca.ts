import Car from "./car"

export default class Fusca implements Car {
  constructor(
    readonly maximumSpeed: number = 140,
    private _currentSpeed: number = 0
  ) {}

  speedUp(): void {
    this._currentSpeed = Math.min(
      this._currentSpeed + 5,
      this.maximumSpeed
    )
  }

  brake(): void {
    this._currentSpeed = Math.max(this._currentSpeed - 5, 0)
  }

  get currentSpeed() {
    return this._currentSpeed
  }
}
