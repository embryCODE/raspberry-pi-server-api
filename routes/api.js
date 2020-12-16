const express = require('express')
const Guitar = require('../models/Guitar')

var router = express.Router()

router.get('/health-check', function (req, res) {
  res.json('API is healthy')
})

router.get('/guitars', async function (req, res, next) {
  try {
    const guitars = await Guitar.find({})

    res.json(guitars)
    return
  } catch (err) {
    next(err)
  }
})

router.post('/guitars', async function (req, res, next) {
  const guitar = req.body
  const theGuitar = new Guitar(guitar)

  try {
    await theGuitar.save()

    res.json(theGuitar)
    return
  } catch (err) {
    next(err)
  }
})

module.exports = router
