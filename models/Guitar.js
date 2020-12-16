const mongoose = require('mongoose')

const guitarSchema = new mongoose.Schema({
  make: String,
  model: String,
  year: String,
  finish: String,
  imageUrl: String,
})

const Guitar = mongoose.model('Guitar', guitarSchema)

module.exports = Guitar
