// imports
const express = require('express')

// instances
const router = express.Router()

router.get('/', async (req, res) => {
  res.render('../views/home', { title: 'Hello', message: 'Please login', showLogin: true, showRegistration: true })
})

// exports
module.exports = router