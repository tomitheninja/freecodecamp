// imports
const cors = require('cors')
const express = require('express')
const rootRouter = require('./routes')

// instances
const app = express()

// middleware
app.use(cors({optionSuccessStatus: 200}))

// handlers
app.use(express.static('public'));
app.use(rootRouter)

// start server
const server = app.listen(process.env.PORT || 3000, async () => {
  console.log('Your app is listening on port ' + server.address().port);
});