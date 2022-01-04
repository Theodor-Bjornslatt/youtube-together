import { Schema, model } from 'mongoose'

const messageSchema = new Schema({
  username: {
    type: String,
    required: [true, 'Must provide a username'],
    trim: true
  },
  message: {
    type: String,
    trim: true
  },
  color: { type: String },
  timestamp: { type: Number },
  room: { type: String }
})

export const Message = model('message', messageSchema)
