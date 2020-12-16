var express = require('express')
var cookieParser = require('cookie-parser')
var logger = require('morgan')
const mongoose = require('mongoose')

var apiRouter = require('./routes/api')

var app = express()

// TODO: Lock this down to localhost and dev.embrycode.com
const ALLOWED_ORIGIN = '*'

mongoose.connect('mongodb://localhost/thePeterssonCollection', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', function () {
  console.log('Connected to database')
})

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', ALLOWED_ORIGIN)
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  )

  next()
})

app.use('/', apiRouter)

module.exports = app
