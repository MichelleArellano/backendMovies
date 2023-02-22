import mongoose from 'mongoose'
mongoose.set('strictQuery', false)

// export async function connect () {
//   try {
//     await mongoose.connect('mongodb://localhost:27017/movies', {
//       useNewUrlParser: true
//     })

//     console.log('Database connected!!')
//   } catch (error) {
//     return console.log(error)
//   }
// }

const uri = 'mongodb+srv://admin:1234@cluster0.jgp25ci.mongodb.net/movies'

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then((db) => console.log('DB connected!!'))
  .catch(err => console.log(err))
