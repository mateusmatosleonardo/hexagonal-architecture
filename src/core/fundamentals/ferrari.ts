import Car from "./car"

export default class Ferrari implements Car {
  constructor(
    readonly maximumSpeed: number = 324,
    private _currentSpeed: number = 0
  ) {}

  speedUp(): void {
    this._currentSpeed = Math.min(
      this._currentSpeed + 20,
      this.maximumSpeed
    )
  }

  brake(): void {
    this._currentSpeed = Math.max(this._currentSpeed - 20, 0)
  }

  get currentSpeed() {
    return this._currentSpeed
  }
}
