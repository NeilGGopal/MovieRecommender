const express = require('express')
const app = express()
const cors = require('cors')
require('dotenv').config({ path: './config.env' })
const port = process.env.PORT || 6000
app.use(cors())
app.use(express.json({ extended: false }))
const Movie = require('./db/movie')
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

app.listen(port, () => {
  // perform a database connection when server starts
  dbo.connectToServer(function (err) {
    if (err) console.error(err)
  })
  console.log(`Server is running on port: ${port}`)
})
