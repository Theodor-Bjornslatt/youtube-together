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
export class Unauthorized extends Error {
  constructor(public message: string, public status = 403) {
    super(message)

    this.status = status
  }
}
