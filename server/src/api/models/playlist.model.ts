import { model, Schema } from 'mongoose'

const playListSchema = new Schema(
  {
    name: { type: String, required: [true, 'Name your playlist'] },
    url: { type: Array, required: [true, 'Must enter URL'] },
    author: String,
    image: String
  },
  { timestamps: true }
)
export const PlayList = model('playlist', playListSchema)
