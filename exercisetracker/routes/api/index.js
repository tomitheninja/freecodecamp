// imports
const express = require('express')

const v1Router = require('./v1')

// instances
const router = express.Router()

// handlers

router.use('/v1', v1Router)
router.use('/', v1Router)

router.use(async (req, res) => {
  res.status(404)
  res.json({ err: 'Not Found' })
})

// export
module.exports = router
