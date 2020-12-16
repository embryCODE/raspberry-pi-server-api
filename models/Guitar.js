const mongoose = require('mongoose')

const guitarSchema = new mongoose.Schema({
  make: { type: String, required: true },
  model: { type: String, required: true },
  year: { type: String, required: true },
  finish: { type: String, required: true },
  imageUrl: { type: String, required: true },
})

const Guitar = mongoose.model('Guitar', guitarSchema)

module.exports = Guitar
