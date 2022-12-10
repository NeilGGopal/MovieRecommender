const express = require('express')
const app = express()
const cors = require('cors')
require('dotenv').config({ path: './config.env' })
const port = process.env.PORT || 5500
app.use(cors())
app.use(express.json({ extended: false }))
const Movie = require('./db/movie')
// get driver connection
const dbo = require('./db/conn')

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

app.post('/create', async (req, res) => {
  const movie = {}
  movie.name = req.body.name
  movie.length = req.body.length
  movie.year = req.body.year
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

app.listen(port, () => {
  // perform a database connection when server starts
  dbo.connectToServer(function (err) {
    if (err) console.error(err)
  })
  console.log(`Server is running on port: ${port}`)
})
