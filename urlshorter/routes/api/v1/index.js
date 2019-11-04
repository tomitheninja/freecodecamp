// imports
const express = require('express')

const shorturlRouter = require('./shorturl')

// instances
const router = express.Router()

// handlers
router.use('/shorturl', shorturlRouter)

// export
module.exports = router