// imports
const express = require('express')
const bodyParser = require('body-parser')
const passport = require('passport')

const User = require('../../models/user.js')
const { hash } = require('../../utils/hash')

// instances
const router = express.Router()

// middleware
router.use(bodyParser.json())
router.use(bodyParser.urlencoded({ extended: false }))

// handler
router.post('/', [
  async (req, res, next) => {
    const { username, password } = req.body
    try {
      if (await User.findOne({ username }).countDocuments({}) === 0) {
        // create user
        const passwordHash = await hash(password)
        await User.create({ username, passwordHash })  
      }
      // login
      next()
    } catch (err) {
      next(err)
    }
  },
  passport.authenticate('local', {
    failureRedirect: '/',
    successRedirect: '/profile'
  })
])

module.exports = router