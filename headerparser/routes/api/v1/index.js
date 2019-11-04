// imports
const express = require('express')

const whoamiRouter = require('./whoami')

// instances
const router = express.Router()

// handlers
router.use('/whoami', whoamiRouter)

// export
module.exports = router