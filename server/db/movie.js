const mongoose = require('mongoose')
let movie = new mongoose.Schema({
  name: {
    type: String
  },
  length: {
    type: String
  },
  year: {
    type: String
  }
})

module.exports = movie = mongoose.model('movie', movie)
