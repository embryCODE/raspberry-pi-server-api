const express = require('express')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
const mongoose = require('mongoose')
const apiRouter = require('./routes/api')

// Constants
// TODO: Lock this down to localhost and home.dev.embrycode.com
const ALLOWED_ORIGIN = '*'
const DATABASE_URL = process.env.DB_URL
const DATABASE_USER = process.env.DB_USER
const DATABASE_PASS = process.env.DB_PASS

const app = express()

// Database
mongoose.connect(`${DATABASE_URL}/thePeterssonCollection`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  user: DATABASE_USER,
  pass: DATABASE_PASS,
})
const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', function () {
  console.log('Connected to database')
})

// Middleware
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', ALLOWED_ORIGIN)
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, x-ijt'
  )

  next()
})
app.use('/', apiRouter)

module.exports = app
