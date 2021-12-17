import { Document, Schema, model } from 'mongoose'

import { compare } from '../../util'

export interface UserDocument extends Document {
  _id: string
  email: string
  name: string
  password: string
  admin: boolean
}

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: [true, 'Must provide a username'],
      trim: true,
      unique: true
    },
    email: {
      type: String,
      required: [true, 'Must provide a email'],
      trim: true,
      unique: true
    },
    password: { type: String, required: [true, 'Must provide a password'] },
    admin: { type: Boolean, default: false }
  },
  { timestamps: true }
)

userSchema.methods.matchesPassword = function match(password: string) {
  return compare(password, this.password)
}

export const User = model('user', userSchema)
