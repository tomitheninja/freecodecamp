// imports
const express = require('express')

// instances
const router = express.Router()

router.use(async (req, res) => {
  res.sendStatus(404)
})

// exports
module.exports = router