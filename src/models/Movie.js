import { Schema, model } from 'mongoose'

const movieSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  likes: {
    type: Number
  },
  image: {
    type: String
  },
  date: {
    type: String
  }
})

export default model('Movie', movieSchema)
