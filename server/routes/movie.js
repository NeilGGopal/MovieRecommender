const express = require('express')

// movieRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /record.
const movieRoutes = express.Router()

// This will help us connect to the database
const dbo = require('../db/conn')
// This help convert the id from string to ObjectId for the _id.
const ObjectId = require('mongodb').ObjectId

movieRoutes.route('/').get(function (req, res) {
  const dbConnect = dbo.getDb('Shufflix')
  dbConnect
    .collection('Movies')
    .find({})
    .toArray(function (err, result) {
      if (err) throw err
      res.json(result)
    })
})
