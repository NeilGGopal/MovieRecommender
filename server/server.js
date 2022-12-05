const express = require('express')
const app = express()
const cors = require('cors')
require('dotenv').config({ path: './config.env' })
const port = process.env.PORT || 6000
app.use(cors())
app.use(express.json({ extended: false }))
// app.use('/api/movieModel', require('./api/movie'))
const Movie = require('./db/movie')
const Actor = require('./db/actor')
const Rating = require('./db/rating')
const Region = require('./db/region')
// get driver connection
const dbo = require('./db/conn')

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/create', async (req, res) => {
  const movie = {}
  movie.name = req.body.name
  movie.length = req.body.length
  movie.year = req.body.year
  const movieModel = new Movie(movie)
  await movieModel.save()
  res.json(movieModel)
})

app.post('/create-actor', async (req, res) => {
  const actor = {}
  actor.name = req.body.name
  const actorModel = new Actor(actor)
  await actorModel.save()
  res.json(actorModel)
})

app.post('/create-rating', async (req, res) => {
  const rating = {}
  rating.imdb_rating = req.body.imdb_rating
  rating.personal_rating = req.body.personal_rating
  const ratingModel = new Rating(rating)
  await ratingModel.save()
  res.json(ratingModel)
})

app.post('/create-region', async (req, res) => {
  const region = {}
  region.name = req.body.name
  region.language = req.body.language
  const regionModel = new Region(region)
  await regionModel.save()
  res.json(regionModel)
})

app.listen(port, () => {
  // perform a database connection when server starts
  dbo.connectToServer(function (err) {
    if (err) console.error(err)
  })
  console.log(`Server is running on port: ${port}`)
})
