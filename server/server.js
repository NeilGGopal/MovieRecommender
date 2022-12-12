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
const Genre = require('./db/genre')
// get driver connection
const dbo = require('./db/conn')

// Prepared Statements
const horrorQuery = { genre: 'Horror' }
Movie.find(horrorQuery, (err, items) => {
  if (err) throw err
  horrorQuery.results = items
})
app.get('/get-horror', (req, res) => {
  return res.status(200).send(horrorQuery.results)
})

const fantasyQuery = { genre: 'Fantasy' }
Movie.find(fantasyQuery, (err, items) => {
  if (err) throw err
  fantasyQuery.results = items
})
app.get('/get-fantasy', (req, res) => {
  return res.status(200).send(fantasyQuery.results)
})

const romanceQuery = { genre: 'Romance' }
Movie.find(romanceQuery, (err, items) => {
  if (err) throw err
  romanceQuery.results = items
})
app.get('/get-romance', (req, res) => {
  return res.status(200).send(romanceQuery.results)
})

const dramaQuery = { genre: 'Drama' }
Movie.find(dramaQuery, (err, items) => {
  if (err) throw err
  dramaQuery.results = items
})
app.get('/get-drama', (req, res) => {
  return res.status(200).send(dramaQuery.results)
})

const actionQuery = { genre: 'Action' }
Movie.find(actionQuery, (err, items) => {
  if (err) throw err
  actionQuery.results = items
})
app.get('/get-action', (req, res) => {
  return res.status(200).send(actionQuery.results)
})

const comedyQuery = { genre: 'Comedy' }
Movie.find(comedyQuery, (err, items) => {
  if (err) throw err
  comedyQuery.results = items
})
app.get('/get-comedy', (req, res) => {
  return res.status(200).send(comedyQuery.results)
})

const adventureQuery = { genre: 'Adventure' }
Movie.find(adventureQuery, (err, items) => {
  if (err) throw err
  adventureQuery.results = items
})
app.get('/get-adventure', (req, res) => {
  return res.status(200).send(adventureQuery.results)
})

const documentaryQuery = { genre: 'Documentary' }
Movie.find(documentaryQuery, (err, items) => {
  if (err) throw err
  documentaryQuery.results = items
})
app.get('/get-documentary', (req, res) => {
  return res.status(200).send(documentaryQuery.results)
})

const internationalQuery = { genre: 'International' }
Movie.find(internationalQuery, (err, items) => {
  if (err) throw err
  internationalQuery.results = items
})
app.get('/get-international', (req, res) => {
  return res.status(200).send(internationalQuery.results)
})

const familyQuery = { genre: 'Family' }
Movie.find(familyQuery, (err, items) => {
  if (err) throw err
  familyQuery.results = items
})
app.get('/get-family', (req, res) => {
  return res.status(200).send(familyQuery.results)
})

const animationQuery = { genre: 'Animation' }
Movie.find(animationQuery, (err, items) => {
  if (err) throw err
  animationQuery.results = items
})
app.get('/get-animation', (req, res) => {
  return res.status(200).send(animationQuery.results)
})

const unitedStatesQuery = { region: 'United States' }
Movie.find(unitedStatesQuery, (err, items) => {
  if (err) throw err
  unitedStatesQuery.results = items
})
app.get('/get-united-states', (req, res) => {
  return res.status(200).send(unitedStatesQuery.results)
})

const unitedKingdomQuery = { region: 'United Kingdom' }
Movie.find(unitedKingdomQuery, (err, items) => {
  if (err) throw err
  unitedKingdomQuery.results = items
})
app.get('/get-united-kingdom', (req, res) => {
  return res.status(200).send(unitedKingdomQuery.results)
})

const australiaQuery = { region: 'Australia' }
Movie.find(australiaQuery, (err, items) => {
  if (err) throw err
  australiaQuery.results = items
})
app.get('/get-australia', (req, res) => {
  return res.status(200).send(australiaQuery.results)
})

const indiaQuery = { region: 'India' }
Movie.find(indiaQuery, (err, items) => {
  if (err) throw err
  indiaQuery.results = items
})
app.get('/get-india', (req, res) => {
  return res.status(200).send(indiaQuery.results)
})

// Stored Procedures | Endpoints
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
  const itemGenre = req.body.genre
  const itemRegion = req.body.region
  const itemActor = req.body.actor

  Movie.findOne({ name: itemName, length: itemLength, year: itemYear, genre: itemGenre, region: itemRegion, actor: itemActor }, (err, item) => {
    if (err) {
      return res.status(500).send(err)
    }
    if (!item) {
      return res.status(404).send(`Item with name '${itemName}', length '${itemLength}', and year '${itemYear}' was not found.`)
    }
    return res.status(200).send(item)
  })
})

app.post('/get-movies-from-actor', async (req, res) => {
  const itemActor = req.body.actor
  Movie.find({ actor: itemActor }, (err, items) => {
    if (err) {
      return res.status(500).send(err)
    }
    if (!items) {
      return res.status(404).send(`Item with actor '${itemActor}' was not found.`)
    }
    return res.status(200).send(items)
  })
})

app.post('/get-movies-from-name', async (req, res) => {
  const itemName = req.body.name
  Movie.find({ name: itemName }, (err, items) => {
    if (err) {
      return res.status(500).send(err)
    }
    if (!items) {
      return res.status(404).send(`Item with name '${itemName}' was not found.`)
    }
    return res.status(200).send(items)
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
  // movie to movie database
  const movie = {}
  movie.name = req.body.name
  movie.length = req.body.length
  movie.year = req.body.year
  movie.genre = req.body.genre
  movie.region = req.body.region
  movie.actor = req.body.actor
  const movieModel = new Movie(movie)

  // actor to actor database
  const actor = {}
  actor.name = req.body.actor
  const actorModel = new Actor(actor)

  // region to region database
  const region = {}
  region.name = req.body.region
  const regionModel = new Region(region)

  // region to genre database
  const genre = {}
  genre.name = req.body.genre
  const genreModel = new Genre(genre)

  await regionModel.save()
  await actorModel.save()
  await movieModel.save()
  await genreModel.save()
  res.header('Access-Control-Allow-Origin')
  res.json(actorModel)
  res.json(movieModel)
  res.json(regionModel)
  res.json(genreModel)
})

app.post('/delete-movie', (req, res) => {
  const itemName = req.body.name
  const itemLength = req.body.length
  const itemYear = req.body.year
  const itemGenre = req.body.genre
  const itemRegion = req.body.region
  const itemActor = req.body.actor

  Movie.findOneAndDelete({ name: itemName, length: itemLength, year: itemYear, genre: itemGenre, region: itemRegion, actor: itemActor }, (err, item) => {
    if (err) {
      return res.status(500).send(err)
    }
    return res.status(200).send(`Item with name '${itemName}', length '${itemLength}', year value2 '${itemYear}' was deleted.`)
  })

  Actor.findOneAndDelete({ name: itemActor }, (err, item) => {
    if (err) {
      return res.status(500).send(err)
    }
    return res.status(200).send(`Actor with name '${itemName}' was deleted.`)
  })

  Region.findOneAndDelete({ name: itemRegion }, (err, item) => {
    if (err) {
      return res.status(500).send(err)
    }
    return res.status(200).send(`Region with name '${itemRegion}' was deleted.`)
  })

  Genre.findOneAndDelete({ name: itemGenre }, (err, item) => {
    if (err) {
      return res.status(500).send(err)
    }
    return res.status(200).send(`Genre with name '${itemGenre}' was deleted.`)
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
