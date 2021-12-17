// eslint-disable-next-line max-classes-per-file

export class BadRequest extends Error {
  constructor(public message: string, public status: number) {
    super(message)

    this.status = status
  }
}
