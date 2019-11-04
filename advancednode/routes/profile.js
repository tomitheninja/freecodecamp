// imports
const express = require('express')

const ensureAuthenticated = require('../utils/ensureAuthenticated')

// instances
const router = express.Router()

router.use(ensureAuthenticated.html)

router.get('/', async (req, res) => {
  const { username } = req.user
  res.render('../views/profile', { username })
})

// exports
module.exports = router