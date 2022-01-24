import { LoginObject, PostRoomData, SignUpObject } from "../types"

export function validateSignUp(values: SignUpObject)
{
  const validRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
  const errors: Partial<SignUpObject> = {}

  if (!values.username) {
    errors.username = 'Username is required'
  } else if (values.username.length < 5 || values.username.length > 15) {
    errors.username = 'Username must be between 5 and 15 characters'
  }

  if (!values.color) {
    errors.color = 'Pick a color'
  } else if (values.color.length < 5 || values.color.length > 15) {
    errors.color = 'Alex has set a strange rule here..'
  }

  if (!values.email) {
    errors.email = 'Email address is required'
  } else if (!validRegex.test(values.email)) {
    errors.email = 'Email address is invalid'
  }

  if (!values.password) {
    errors.password = 'Password is required'
  } else if (values.password.length < 8 || values.password.length > 15) {
    errors.password = 'Password must be between 8 and 15 characters'
  }
  if (!values.repeat) {
    errors.repeat = 'This field is required'
  } else if (values.password !== values.repeat) {
    errors.repeat = 'Password must match'
  }

  return errors
}

export const validateSignIn = (values: LoginObject) => {
  const validRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
  const errors: Partial<LoginObject> = {}

  if (!values.email) {
    errors.email = 'Email address is required'
  } else if (!validRegex.test(values.email)) {
    errors.email = 'Email address is invalid'
  }

  if (!values.password) {
    errors.password = 'Password is required'
  } else if (values.password.length < 8 || values.password.length > 15) {
    errors.password = 'Password must be between 8 and 15 characters'
  }

  return errors
}

export const validateCreateRoom = (values: Omit<PostRoomData, "playlist">) => {
  const nameRegex = /[A-Za-z0-9]+/
  const errors: Partial<Omit<PostRoomData, "playlist">> = {}

  // Add validation of nickname

  if (!values.name) {
    errors.name = 'Name is required'
  } else if (values.name.length < 4 || values.name.length > 15) {
    errors.name = 'Name must be between 4 and 15 characters'
  } else if (!nameRegex.test(values.name)) {
    errors.name = 'Name is invalid'
  }

  return errors
}

export const validateUrl = (url: string) => {
  const urlRegex = /^(https?:\/\/)?((www\.)?youtube\.com|youtu\.be)\/.+$/

  if (!url || !urlRegex.test(url)) {
    return false
  }

  return true
}
