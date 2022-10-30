const express = require('express')
// const mongoose = require('mongoose')
const Movie = require('../db/movie')
const route = express.Router()

route.post('/', async (req, res) => {
  const { name, length, year } = req.body
  const movie = {}
  movie.name = name
  movie.length = length
  movie.year = year
  const movieModel = new Movie(movie)
  await movieModel.save()
  res.json(movieModel)
})

module.exports = route
