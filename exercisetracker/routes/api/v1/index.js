// imports
const express = require('express')

const exerciseRouter = require('./exercise')

// instances
const router = express.Router()

// handlers
router.use('/exercise', exerciseRouter)


router.use(async (err, req, res, next) => {
    res.send({error: err.message})
})

// export
module.exports = router