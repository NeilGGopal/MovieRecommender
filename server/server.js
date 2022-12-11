const express = require('express')
const app = express()
const cors = require('cors')
require('dotenv').config({ path: './config.env' })
const port = process.env.PORT || 5500
app.use(cors())
app.use(express.json({ extended: false }))
const Movie = require('./db/movie')
const Actor = require('./db/actor')
const Rating = require('./db/rating')
const Region = require('./db/region')
// get driver connection
const dbo = require('./db/conn')

// Prepared Statements
const horrorQuery = { genre: 'Horror' }
Movie.find(horrorQuery, (err, items) => {
  if (err) throw err
  horrorQuery.results = items
})

const fantasyQuery = { genre: 'Fantasy' }
Movie.find(fantasyQuery, (err, items) => {
  if (err) throw err
  fantasyQuery.results = items
})

const romanceQuery = { genre: 'Romance' }
Movie.find(romanceQuery, (err, items) => {
  if (err) throw err
  romanceQuery.results = items
})

const dramaQuery = { genre: 'Drama' }
Movie.find(dramaQuery, (err, items) => {
  if (err) throw err
  dramaQuery.results = items
})

const actionQuery = { genre: 'Action' }
Movie.find(actionQuery, (err, items) => {
  if (err) throw err
  actionQuery.results = items
})

const comedyQuery = { genre: 'Comedy' }
Movie.find(comedyQuery, (err, items) => {
  if (err) throw err
  comedyQuery.results = items
})

const adventureQuery = { genre: 'Adventure' }
Movie.find(adventureQuery, (err, items) => {
  if (err) throw err
  adventureQuery.results = items
})

const documentaryQuery = { genre: 'Documentary' }
Movie.find(documentaryQuery, (err, items) => {
  if (err) throw err
  documentaryQuery.results = items
})

const internationalQuery = { genre: 'International' }
Movie.find(internationalQuery, (err, items) => {
  if (err) throw err
  internationalQuery.results = items
})

const familyQuery = { genre: 'Family' }
Movie.find(familyQuery, (err, items) => {
  if (err) throw err
  familyQuery.results = items
})

const animationQuery = { genre: 'Animation' }
Movie.find(animationQuery, (err, items) => {
  if (err) throw err
  animationQuery.results = items
})

app.get('/get-actor', (req, res) => {
  const itemName = req.body.name
  const itemMovie = req.body.movie
  const itemRegion = req.body.region

  Actor.findOne({ name: itemName, movie: itemMovie, region: itemRegion }, (err, item) => {
    if (err) {
      return res.status(500).send(err)
    }
    if (!item) {
      return res.status(404).send(`Item with name '${itemName}', movie '${itemMovie}', and region '${itemRegion}' was not found.`)
    }
    return res.status(200).send(item)
  })
})

app.get('/get-movie', (req, res) => {
  const itemName = req.body.name
  const itemLength = req.body.length
  const itemYear = req.body.year

  Movie.findOne({ name: itemName, length: itemLength, year: itemYear }, (err, item) => {
    if (err) {
      return res.status(500).send(err)
    }
    if (!item) {
      return res.status(404).send(`Item with name '${itemName}', length '${itemLength}', and year '${itemYear}' was not found.`)
    }
    return res.status(200).send(item)
  })
})

app.get('/find-all-movies', (req, res) => {
  Movie.find((err, item) => {
    if (err) {
      return res.status(500).send(err)
    }
    if (!item) {
      return res.status(404).send('There are no items in the database / the database does not exist')
    }
    return res.status(200).send(item)
  })
})

app.post('/create', async (req, res) => {
  const movie = {}
  movie.name = req.body.name
  movie.length = req.body.length
  movie.year = req.body.year
  movie.genre = req.body.genre
  movie.region = req.body.region
  const movieModel = new Movie(movie)
  await movieModel.save()
  res.header('Access-Control-Allow-Origin')
  res.json(movieModel)
})

app.post('/delete-movie', (req, res) => {
  const itemName = req.body.name
  const itemLength = req.body.length
  const itemYear = req.body.year

  Movie.findOneAndDelete({ name: itemName, length: itemLength, year: itemYear }, (err, item) => {
    if (err) {
      return res.status(500).send(err)
    }
    return res.status(200).send(`Item with name '${itemName}', length '${itemLength}', year value2 '${itemYear}' was deleted.`)
  })
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
