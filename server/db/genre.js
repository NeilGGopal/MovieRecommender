const mongoose = require('mongoose')
let genre = new mongoose.Schema({
  name: {
    type: String
  },
  movie: {
    type: String
  }
})

module.exports = genre = mongoose.model('genres', genre)
