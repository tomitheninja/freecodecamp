// imports
const express = require('express')

const authRouter = require('./auth')
const profileRouter = require('./profile')
const homeRouter = require('./home')
const notFoundRouter = require('./404')

// instances
const router = express.Router()

// bind routers
router.use('/auth', authRouter)
router.use('//', homeRouter)
router.use('/profile', profileRouter)
router.use(notFoundRouter) // THE LAST

// exports
module.exports = router