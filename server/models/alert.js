const mongoose = require('mongoose')

const alertSchema = new mongoose.Schema({

  type: String,

  title: String,

  description: String,

  level: String,

  time: String,

  createdBy: String

})

module.exports = mongoose.model('Alert', alertSchema)