// imports
const express = require('express')
const bodyParser = require('body-parser')
const passport = require('passport')

// instances
const router = express.Router()

// middleware
router.use(bodyParser.json())
router.use(bodyParser.urlencoded({ extended: false }))

// handler
router.post('/', passport.authenticate('local', { failureRedirect: '/', successRedirect: '/profile' }))

module.exports = router