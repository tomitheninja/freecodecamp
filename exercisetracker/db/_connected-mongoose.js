const mongodb = require('mongodb')
const mongoose = require('mongoose')

mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true } )

module.exports = mongoose