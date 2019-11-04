// imports
const express = require('express')
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
app.use(express.static('public'))
app.use(rootRouter)

// Start the server
const server = app.listen(process.env.PORT || 3000, () => {
  console.log('Your app is listening on port ' + server.address().port)
})
