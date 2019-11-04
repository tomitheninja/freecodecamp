// imports
const express = require('express')

const loginRouter = require('./login')
const logoutRouter = require('./logout')
const registerRouter = require('./register')

// instances
const router = express.Router()

// handlers
router.use('/login', loginRouter)
router.use('/logout', logoutRouter)
router.use('/register', registerRouter)

// export
module.exports = router