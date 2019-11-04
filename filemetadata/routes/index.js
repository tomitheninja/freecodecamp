// imports
const express = require('express')

const apiRouter = require('./api')
const homeRouter = require('./home')
const notFoundRouter = require('./404')

// instances
const router = express.Router()

// handlers
router.use('/api', apiRouter)
// last two
router.use('//', homeRouter)
router.use('*', notFoundRouter)

// export
module.exports = router
