import Movie from '../../models/Movie.js'

const Mutation = {

  async createMovie (_, { title, description, likes, image, date }) {
    const newMovie = { title, description, likes, image, date }
    const movie = await Movie.create(newMovie)
    return movie
  },
  async updateMovie (_, { _id, title, description, likes, image, date }) {
    const movie = { title, description, likes, image, date }
    return await Movie.findByIdAndUpdate(_id, movie, { new: true })
  },

  async removeMovie (_, { _id }) {
    await Movie.findByIdAndDelete(_id)
    return await Movie.find()
  }

}

export default Mutation
