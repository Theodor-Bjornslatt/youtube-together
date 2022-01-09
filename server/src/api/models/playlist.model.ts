import { model, Schema } from 'mongoose'

const playListSchema = new Schema(
  {
    id: Number,
    name: { type: String, required: [true, 'Name your playlist'] },
    url: [
      { id: Number, url: { type: String, required: [true, 'Must enter URL'] } }
    ]
  },
  { timestamps: true }
)
export const Playlist = model('playlist', playListSchema)
