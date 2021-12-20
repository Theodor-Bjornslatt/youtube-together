// eslint-disable-next-line max-classes-per-file
export class BadRequest extends Error {
  constructor(public message: string, public status = 400) {
    super(message)

    this.status = status
  }
}
export class AllReadyLogedIn extends Error {
  constructor(public message: string, public status = 200) {
    super(message)

    this.status = status
  }
}

export class CustomError {
  message!: string

  status!: number

  additionalInfo!: unknown

  constructor(message: string, status = 500, additionalInfo = {}) {
    this.message = message
    this.status = status
    this.additionalInfo = additionalInfo
  }
}
