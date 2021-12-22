import { ObjectSchema } from 'joi'

import { BadRequest } from '../errors'

interface User {
  username: string
  password: string
  email: string
}

export const validate = async (
  schema: ObjectSchema,
  payload: User
): Promise<void> => {
  try {
    await schema.validateAsync(payload, { abortEarly: false })
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    // eslint-disable-next-line @typescript-eslint/no-throw-literal
    throw new BadRequest(error.message)
  }
}
