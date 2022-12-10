const mongoose = require('mongoose')
let movie = new mongoose.Schema({
  name: {
    type: String
  },
  length: {
    type: Number
  },
  year: {
    type: Number
  },
  genre: {
    type: String
  }
})

module.exports = movie = mongoose.model('movies', movie)
