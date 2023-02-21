import mongoose from 'mongoose'
mongoose.set('strictQuery', false)

export async function connect () {
  try {
    await mongoose.connect('mongodb+srv://admin:1234@cluster0.jgp25ci.mongodb.net/test', {
      useNewUrlParser: true
    })

    console.log('Database connected!!')
  } catch (error) {
    return console.log(error)
  }
}
