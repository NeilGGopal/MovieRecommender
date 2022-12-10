const mongoose = require('mongoose')
let rating = new mongoose.Schema({
  imdb_rating: {
    type: String
  },
  personal_rating: {
    type: String
  },
  movie: {
    type: String
  }
})

module.exports = rating = mongoose.model('ratings', rating)
