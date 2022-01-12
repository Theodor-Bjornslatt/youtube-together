import { model, Schema } from 'mongoose'

const roomSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, 'Must provide a name for the room'],
      unique: true
    },
    playlist: [
      {
        url: { type: String, required: [true, 'Must enter URL'] },
        title: { type: String, default: 'No title' }
      }
    ],
    nickname: { type: String, default: 'members' }
  },
  { timestamps: true }
)
export const Room = model('playlist', roomSchema)
