import mongoose from 'mongoose'

const userSchema = new mongoose.Schema(
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

export default mongoose.model('user', userSchema)
