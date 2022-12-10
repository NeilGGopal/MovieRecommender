const mongoose = require('mongoose')
let actor = new mongoose.Schema({
  name: {
    type: String
  },
  movie: {
    type: String
  },
  region: {
    type: String
  }
})

module.exports = actor = mongoose.model('actors', actor)
