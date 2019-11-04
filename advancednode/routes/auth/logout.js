// imports
const express = require('express')

// instances
const router = express.Router()

// handler
router.all('/', (req, res) => {
  req.logout()
  res.redirect('/')
})

module.exports = router