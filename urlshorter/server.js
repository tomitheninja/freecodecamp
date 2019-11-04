// imports
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const dotEnv = require('dotenv')

if (process.env.NODE_ENV !== 'production') {
  dotEnv.config()
}

const rootRouter = require('./routes')

// instances
const app = express()

// middleware
app.use(cors())
app.use('/public', express.static('public'))
app.use(rootRouter)

// start the server
const server = app.listen(process.env.PORT || 3000, function () {
  console.log('Node.js listening on', server.address().port)
})