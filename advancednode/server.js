// imports
const express = require('express')
const mongoose = require('mongoose')

const mountMiddleware = require('./middleware')
const routes = require('./routes')

// instances
const app = express()


// settings
app.set('view engine', 'pug')

mongoose.connect(process.env.MONGO_URL, {
  useCreateIndex: true,
  useNewUrlParser: true,
})

// middleware && handlers

app.use('/public', express.static(process.cwd() + '/public'))

mountMiddleware(app)
app.use(routes)

// start the server
const server = app.listen(process.env.PORT || 3000, async () => {
  console.log('Listening on port ' + server.address().port)
})
