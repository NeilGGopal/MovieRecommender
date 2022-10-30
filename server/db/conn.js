// const { MongoClient } = require('mongodb')
const mongoose = require('mongoose')
const Db = process.env.ATLAS_URI

let _db

module.exports = {
  connectToServer: async () => {
    await mongoose.connect(Db, {
      useUnifiedTopology: true,
      useNewUrlParser: true
    })
    console.log('Database connected')
  },

  getDb: function () {
    return _db
  }
}
