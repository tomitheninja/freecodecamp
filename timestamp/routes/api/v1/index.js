// imports
const express = require('express')

const timestampRouter = require('./timestamp')

// instances
const router = express.Router()

// handlers
router.use('/timestamp', timestampRouter)

// export
module.exports = router