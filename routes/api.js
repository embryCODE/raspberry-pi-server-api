var express = require('express')
var router = express.Router()

router.get('/health-check', function (req, res) {
  res.json('It worked')
})

module.exports = router
