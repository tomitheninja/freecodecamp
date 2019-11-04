// imports
const express = require('express')

const addRouter = require('./add')
const getRouter = require('./get')

// instances
const router = express.Router()

// middleware
router.use('/new', addRouter)
router.use('/', getRouter)

// export
module.exports = router