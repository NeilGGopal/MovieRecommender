const mongoose = require('mongoose')
let region = new mongoose.Schema({
  name: {
    type: String
  },
  language: {
    type: String
  }
})

module.exports = region = mongoose.model('regions', region)
