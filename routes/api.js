var express = require('express')
const Guitar = require('../models/Guitar')
var router = express.Router()

router.get('/health-check', function (req, res) {
  res.json('API is healthy')
})

// - A client sends an http request with the POST method to the /guitars endpoint
router.post('/guitars', function (req, res) {
  // - Take that request and looks at the body for the data
  // - Use that data to create a guitar object
  const guitar = req.body

  // - Use that object to create a database record
  const theGuitar = new Guitar(guitar)

  // - Save that record to the database
  theGuitar.save(function (err, guitar) {
    if (err) {
      // - Respond with an error code if not successful
      // TODO: Handle error better
      res.status(500).send('There was an error saving to the database')
      return
    }

    // - Respond with 200 and the record if successful
    res.json(theGuitar)
  })
})

module.exports = router
